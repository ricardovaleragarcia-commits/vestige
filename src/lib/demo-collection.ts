import { VESTIGES } from "@/data/vestiges";

// The plane is a tile of pieces, packed once with no holes. The tile repeats in every direction.
// Each repetition rotates its columns and shifts which archive entry sits where.
export const COLUMN_WIDTH = 420;
export const COLUMN_STEP = 440; // distance between column starts (20 px clear beside a 420 px column)
export const COLUMNS_PER_TILE = 7;
export const TILE_COUNT = 80;
export const BLOCK_WIDTH = COLUMNS_PER_TILE * COLUMN_STEP;
export const LONGEST_SIDES = [260, 320, 380, 420];
const FILL_SIDES = [160, 200, 240, 280];

const LABEL_SPACE = 40; // room for the [vstg–####] code under each piece
const GAP_MIN = 40;
const GAP_RANGE = 40;

export type Piece = {
  id: string;
  code: string; // vstg-0482 (shown as [vstg–0482])
  kind: "image" | "text";
  visibility: "public" | "private";
  x: number; // world position, top-left corner
  y: number;
  w: number;
  h: number;
  color: number;
  text: string | null;
  name: string;
  description: string; // [desc.]
  failedFuture: string; // [f.f. expl.]
  source: string;
  link: string;
  image: string | null;
};

const PALETTE = [0xb8a99a, 0x8f9a92, 0xd9cfc1, 0x6f7b80, 0xc7b8a6, 0x9aa3a9, 0x4f4a45, 0xe2dccf];
const RATIOS = [0.75, 0.8, 1, 1.25, 1.5];

// Small seeded random generator: the same seed always produces the same values.
function rng(seed: number) {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function pick<T>(random: () => number, items: T[]): T {
  return items[Math.floor(random() * items.length)];
}

// ratio = width / height. The longest side is set; the other side follows the ratio.
export function sizeFromLongest(ratio: number, longest: number) {
  if (ratio >= 1) return { w: longest, h: longest / ratio };
  return { w: longest * ratio, h: longest };
}

// ---- The tile layout: packed once, shared by every repetition ----

type Slot = { col: number; x: number; y: number; w: number; h: number; ratio: number };

function buildTile(): { slots: Slot[]; height: number } {
  const random = rng(0x5eed);

  const cols = Array.from({ length: COLUMNS_PER_TILE }, (_, i) => ({
    index: i,
    y: GAP_MIN + random() * GAP_RANGE,
    items: [] as Slot[],
  }));

  // Each new piece goes to the column with the most room left.
  for (let n = 0; n < TILE_COUNT; n++) {
    const col = cols.reduce((a, b) => (b.y < a.y ? b : a));
    const ratio = pick(random, RATIOS);
    const longest = pick(random, LONGEST_SIDES);
    const { w, h } = sizeFromLongest(ratio, longest);

    col.items.push({ col: col.index, x: col.index * COLUMN_STEP + (COLUMN_WIDTH - w) / 2, y: col.y, w, h, ratio });
    col.y += h + LABEL_SPACE + GAP_MIN + random() * GAP_RANGE;
  }

  // The tile is as tall as its tallest column needs.
  const height =
    Math.max(
      ...cols.map((c) => {
        const last = c.items[c.items.length - 1];
        return last.y + last.h;
      })
    ) +
    LABEL_SPACE +
    GAP_MIN;
  const bottomLine = height - GAP_MIN - LABEL_SPACE;

  // Fill each shorter column with smaller pieces until nothing else fits.
  for (const col of cols) {
    for (let guard = 0; guard < 20; guard++) {
      const last = col.items[col.items.length - 1];
      const nextTop = last.y + last.h + LABEL_SPACE + GAP_MIN;
      const avail = bottomLine - nextTop;
      const ratio = pick(random, RATIOS);
      const fitting = FILL_SIDES.filter((L) => sizeFromLongest(ratio, L).h <= avail);
      if (fitting.length === 0) break;
      const { w, h } = sizeFromLongest(ratio, Math.max(...fitting));
      col.items.push({ col: col.index, x: col.index * COLUMN_STEP + (COLUMN_WIDTH - w) / 2, y: nextTop, w, h, ratio });
    }
  }

  // Close the last few pixels: stretch each column's last piece to the bottom line.
  for (const col of cols) {
    const last = col.items[col.items.length - 1];
    if (bottomLine <= last.y + last.h) continue;

    let h = bottomLine - last.y;
    let w = h * last.ratio;
    if (w > COLUMN_WIDTH) {
      w = COLUMN_WIDTH;
      h = w / last.ratio;
    }
    last.h = h;
    last.w = w;
    last.x = last.col * COLUMN_STEP + (COLUMN_WIDTH - w) / 2;
  }

  return { slots: cols.flatMap((c) => c.items), height };
}

const TILE = buildTile();
export const BLOCK_HEIGHT = TILE.height;

// ---- The content: the archive, reused by every repetition ----

const CONTENT = VESTIGES.map((v, k) => ({
  code: v.code,
  color: PALETTE[k % PALETTE.length],
  name: v.name,
  description: v.description,
  failedFuture: v.failedFuture,
  source: v.source,
  link: v.link,
  image: v.image,
}));

// Which entry each repetition starts with. Different repetitions start at different places.
function offsetFor(cx: number, cy: number): number {
  const h = Math.imul(cx, 73856093) ^ Math.imul(cy, 19349663);
  return (h >>> 0) % Math.max(CONTENT.length, 1);
}

// Each repetition rotates its columns by a shift. The shift grows by 2 with every repetition,
// so the last column of one repetition never sits next to an identical column from the next.
function columnShift(cx: number): number {
  return ((2 * cx) % COLUMNS_PER_TILE + COLUMNS_PER_TILE) % COLUMNS_PER_TILE;
}

// The pieces of one repetition. Odd rows are flipped vertically, so the layout does not look stamped.
export function piecesForBlock(cx: number, cy: number): Piece[] {
  const shift = columnShift(cx);
  const flipY = (cy & 1) !== 0;
  const offset = offsetFor(cx, cy);
  const ox = cx * BLOCK_WIDTH;
  const oy = cy * BLOCK_HEIGHT;

  return TILE.slots.map((slot, i) => {
    const content = CONTENT[(i + offset) % CONTENT.length];
    const column = (((slot.col - shift) % COLUMNS_PER_TILE) + COLUMNS_PER_TILE) % COLUMNS_PER_TILE;
    const localX = column * COLUMN_STEP + (COLUMN_WIDTH - slot.w) / 2;
    const localY = flipY ? BLOCK_HEIGHT - (slot.y + slot.h) : slot.y;

    return {
      id: `${cx}:${cy}:${i}`,
      code: content.code,
      kind: "image",
      visibility: "public",
      x: Math.round(ox + localX),
      y: Math.round(oy + localY),
      w: Math.round(slot.w),
      h: Math.round(slot.h),
      color: content.color,
      text: null,
      name: content.name,
      description: content.description,
      failedFuture: content.failedFuture,
      source: content.source,
      link: content.link,
      image: content.image,
    };
  });
}
