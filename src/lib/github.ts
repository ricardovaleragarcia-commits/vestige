// Admin helpers. They call the GitHub API from the browser with a fine-grained token that can
// only write to this repository. Every save is a commit, and GitHub Pages rebuilds the site.

export const OWNER = "ricardovaleragarcia-commits";
export const REPO = "vstg";
const BRANCH = "main";
const DATA_PATH = "src/data/vstg.ts";
const API = `https://api.github.com/repos/${OWNER}/${REPO}/contents`;

export type Level = "documented" | "hypothesis" | "pending";

export type Entry = {
  code: string;
  year: number | null;
  suffix?: string; // letter when two VSTGs share a year: vstg.1922a
  name: string;
  image: string;
  description: string;
  failedFuture: string;
  source: string;
  link: string;
  license: string;
  status: string;
  level: Level;
};

function headers(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

async function describe(res: Response): Promise<string> {
  try {
    const json = await res.json();
    return `GitHub ${res.status}: ${json.message}`;
  } catch {
    return `GitHub ${res.status}`;
  }
}

function utf8ToBase64(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary);
}

function base64ToUtf8(b64: string): string {
  const binary = atob(b64.replace(/\n/g, ""));
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

async function getFile(token: string, path: string): Promise<{ content: string; sha: string } | null> {
  const res = await fetch(`${API}/${path}?ref=${BRANCH}`, { headers: headers(token) });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(await describe(res));
  return res.json();
}

async function putFile(token: string, path: string, base64: string, message: string, sha?: string) {
  const res = await fetch(`${API}/${path}`, {
    method: "PUT",
    headers: { ...headers(token), "Content-Type": "application/json" },
    body: JSON.stringify({ message, content: base64, branch: BRANCH, ...(sha ? { sha } : {}) }),
  });
  if (!res.ok) throw new Error(await describe(res));
}

// The entries live in src/data/vstg.ts as an array literal. Everything before the array
// (the type definitions and comments) is kept as it is.
export function parseEntries(text: string): Entry[] {
  const start = text.indexOf("export const VSTG");
  const open = text.indexOf("= [", start) + 2;
  const close = text.lastIndexOf("];");
  const body = text.slice(open, close + 1).replace(/,(\s*)\]$/, "$1]");
  return JSON.parse(body) as Entry[];
}

export function serializeEntries(text: string, entries: Entry[]): string {
  const start = text.indexOf("export const VSTG");
  return `${text.slice(0, start)}export const VSTG: Vstg[] = ${JSON.stringify(entries, null, 2)};\n`;
}

export async function loadEntries(token: string): Promise<Entry[]> {
  const file = await getFile(token, DATA_PATH);
  if (!file) throw new Error("Could not find src/data/vstg.ts in the repository.");
  return parseEntries(base64ToUtf8(file.content));
}

// Saves one entry. If an image is included, it is committed first, then the data file.
export async function saveEntry(token: string, updated: Entry, imageBase64: string | null) {
  const current = await getFile(token, DATA_PATH);
  if (!current) throw new Error("Could not find src/data/vstg.ts in the repository.");

  const text = base64ToUtf8(current.content);
  const next = parseEntries(text).map((e) => (e.code === updated.code ? updated : e));

  if (imageBase64) {
    const path = `public/vstg/${updated.code}.jpg`;
    const existing = await getFile(token, path);
    await putFile(token, path, imageBase64, `Image for ${updated.code}`, existing?.sha);
  }

  await putFile(token, DATA_PATH, utf8ToBase64(serializeEntries(text, next)), `Update ${updated.code}`, current.sha);
}

// Imports several entries in one commit. Only the fields present in each item are changed.
export async function importEntries(
  token: string,
  updates: (Partial<Entry> & { code: string })[]
): Promise<number> {
  const current = await getFile(token, DATA_PATH);
  if (!current) throw new Error("Could not find src/data/vstg.ts in the repository.");

  const text = base64ToUtf8(current.content);
  const list = parseEntries(text);

  const missing = updates.filter((u) => !list.some((e) => e.code === u.code)).map((u) => u.code);
  if (missing.length > 0) throw new Error(`These codes are not in the archive: ${missing.join(", ")}`);

  let changed = 0;
  const next = list.map((e) => {
    const u = updates.find((x) => x.code === e.code);
    if (!u) return e;
    changed++;
    return { ...e, ...u };
  });

  await putFile(token, DATA_PATH, utf8ToBase64(serializeEntries(text, next)), `Import ${changed} entries`, current.sha);
  return changed;
}

// Resizes an image in the browser and returns it as JPEG, without its metadata.
export async function fileToJpegBase64(file: File, maxSide = 1600): Promise<string> {
  const url = URL.createObjectURL(file);
  try {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const el = new Image();
      el.onload = () => resolve(el);
      el.onerror = reject;
      el.src = url;
    });
    const scale = Math.min(1, maxSide / Math.max(img.width, img.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(img.width * scale);
    canvas.height = Math.round(img.height * scale);
    canvas.getContext("2d")?.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg", 0.85).split(",")[1];
  } finally {
    URL.revokeObjectURL(url);
  }
}
