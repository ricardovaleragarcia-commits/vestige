"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { fileToJpegBase64, importEntries, loadEntries, saveEntry, type Entry } from "@/lib/github";

const TOKEN_KEY = "vstg-admin-token";

// Admin for the archive. Only works with a GitHub token that can write to this repository.
export default function AdminPage() {
  const [token, setToken] = useState("");
  const [remember, setRemember] = useState(false);
  const [entries, setEntries] = useState<Entry[] | null>(null);
  const [draft, setDraft] = useState<Entry | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [filter, setFilter] = useState("");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem(TOKEN_KEY);
    if (saved) {
      setToken(saved);
      setRemember(true);
    }
  }, []);

  const visible = useMemo(() => {
    if (!entries) return [];
    const q = filter.trim().toLowerCase();
    return entries.filter((e) => !q || e.code.includes(q) || e.name.toLowerCase().includes(q));
  }, [entries, filter]);

  async function run<T>(task: () => Promise<T>, done: (value: T) => void, okText: string) {
    setBusy(true);
    setStatus(null);
    try {
      done(await task());
      setStatus({ ok: true, text: okText });
    } catch (err) {
      setStatus({ ok: false, text: err instanceof Error ? err.message : "Something went wrong." });
    } finally {
      setBusy(false);
    }
  }

  function toggleRemember(on: boolean) {
    setRemember(on);
    if (on) sessionStorage.setItem(TOKEN_KEY, token);
    else sessionStorage.removeItem(TOKEN_KEY);
  }

  function load() {
    run(() => loadEntries(token), setEntries, "Archive loaded.");
  }

  function open(entry: Entry) {
    setDraft({ ...entry });
    setImageBase64(null);
    setStatus(null);
  }

  function update<K extends keyof Entry>(key: K, value: Entry[K]) {
    setDraft((d) => (d ? { ...d, [key]: value } : d));
  }

  async function onImage(file: File | undefined) {
    if (!file || !draft) return;
    setBusy(true);
    try {
      setImageBase64(await fileToJpegBase64(file));
      setDraft({ ...draft, image: `/vstg/${draft.code}.jpg` });
      setStatus({ ok: true, text: "Image ready. Save to publish it." });
    } catch {
      setStatus({ ok: false, text: "That image could not be read." });
    } finally {
      setBusy(false);
    }
  }

  function save(e: FormEvent) {
    e.preventDefault();
    if (!draft) return;
    const current = draft;
    run(
      () => saveEntry(token, current, imageBase64),
      () => {
        setEntries((list) => list?.map((x) => (x.code === current.code ? current : x)) ?? null);
        setImageBase64(null);
      },
      "Saved. The site updates in a minute or two."
    );
  }

  async function importFile(file: File | undefined) {
    if (!file) return;
    setBusy(true);
    setStatus(null);
    try {
      const data = JSON.parse(await file.text());
      if (!Array.isArray(data)) throw new Error("The file must contain a JSON array of entries.");
      const changed = await importEntries(token, data);
      setEntries(await loadEntries(token));
      setStatus({ ok: true, text: `Imported ${changed} entries. The site updates in a minute or two.` });
    } catch (err) {
      setStatus({ ok: false, text: err instanceof Error ? err.message : "The file could not be imported." });
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="admin">
      <h1 className="admin__title">Archive admin</h1>

      <section className="admin__block">
        <label className="field">
          <span className="field__label">GitHub token</span>
          <input type="password" value={token} onChange={(e) => setToken(e.target.value)} autoComplete="off" />
        </label>
        <label className="admin__remember">
          <input type="checkbox" checked={remember} onChange={(e) => toggleRemember(e.target.checked)} /> Remember in this browser tab
        </label>
        <button type="button" onClick={load} disabled={busy || !token}>
          Load archive
        </button>
      </section>

      <section className="admin__block">
        <span className="field__label">Import a research file (JSON)</span>
        <input
          type="file"
          accept="application/json,.json"
          disabled={busy || !token}
          onChange={(e) => importFile(e.target.files?.[0])}
        />
        <span className="field__guide">
          Each item needs its code, for example vstg-0002. Only the fields present in the file are changed.
        </span>
      </section>

      {entries && (
        <section className="admin__block">
          <input
            className="admin__search"
            placeholder="Filter by code or name"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <ul className="admin__list">
            {visible.map((e) => (
              <li key={e.code}>
                <button type="button" className="admin__item" onClick={() => open(e)}>
                  {e.code} · {e.year ?? "NA"} · {e.name}
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {draft && (
        <form className="admin__block admin__form" onSubmit={save}>
          <h2 className="admin__subtitle">{draft.code}</h2>

          <label className="field">
            <span className="field__label">Year (blank if not confirmed)</span>
            <input
              type="number"
              value={draft.year ?? ""}
              onChange={(e) => update("year", e.target.value === "" ? null : Number(e.target.value))}
            />
          </label>

          <label className="field">
            <span className="field__label">Name</span>
            <input value={draft.name} onChange={(e) => update("name", e.target.value)} />
          </label>

          <label className="field">
            <span className="field__label">Image (uploads a JPEG, resized to 1600 px)</span>
            <input type="file" accept="image/jpeg,image/png,image/webp" onChange={(e) => onImage(e.target.files?.[0])} />
            <span className="field__guide">Current: {draft.image}</span>
          </label>

          <label className="field">
            <span className="field__label">[desc.]</span>
            <textarea rows={3} value={draft.description} onChange={(e) => update("description", e.target.value)} />
          </label>

          <label className="field">
            <span className="field__label">[f.f. expl.]</span>
            <textarea rows={5} value={draft.failedFuture} onChange={(e) => update("failedFuture", e.target.value)} />
          </label>

          <label className="field">
            <span className="field__label">Source</span>
            <textarea rows={2} value={draft.source} onChange={(e) => update("source", e.target.value)} />
          </label>

          <label className="field">
            <span className="field__label">Link</span>
            <input value={draft.link} onChange={(e) => update("link", e.target.value)} />
          </label>

          <label className="field">
            <span className="field__label">Licence</span>
            <input value={draft.license} onChange={(e) => update("license", e.target.value)} />
          </label>

          <label className="field">
            <span className="field__label">Level</span>
            <select value={draft.level} onChange={(e) => update("level", e.target.value as Entry["level"])}>
              <option value="documented">Documented (facts sourced)</option>
              <option value="hypothesis">Hypothesis (labelled reading)</option>
              <option value="pending">Pending</option>
            </select>
          </label>

          <label className="field">
            <span className="field__label">Working status (not shown on the site)</span>
            <input value={draft.status} onChange={(e) => update("status", e.target.value)} />
          </label>

          <button className="submit" type="submit" disabled={busy}>
            {busy ? "Saving…" : "Save and publish"}
          </button>
        </form>
      )}

      {status && (
        <p className={`message${status.ok ? " message--ok" : ""}`} role="status">
          {status.text}
        </p>
      )}
    </main>
  );
}
