// Relative sizing for the Collection.
//
// Every piece keeps roughly the same visual weight (area), and its shape comes from
// the original aspect ratio. Clamps stop extreme ratios from becoming huge slivers or
// tiny dots next to the rest of the collection.

export const BASE_AREA = 90_000; // px² at a 1:1 ratio (about 300 × 300)
export const MIN_SIDE = 140;     // shortest side allowed, in px
export const MAX_SIDE = 420;     // longest side allowed, in px

export type Size = { w: number; h: number };

export function sizeFor(width: number, height: number): Size {
  if (width <= 0 || height <= 0) {
    throw new Error("Image dimensions must be positive");
  }

  const ratio = width / height;

  // Keep area constant; the ratio decides the shape.
  let w = Math.sqrt(BASE_AREA * ratio);
  let h = BASE_AREA / w;

  // Limit the longest side.
  const longest = Math.max(w, h);
  if (longest > MAX_SIDE) {
    const k = MAX_SIDE / longest;
    w *= k;
    h *= k;
  }

  // Limit the shortest side.
  const shortest = Math.min(w, h);
  if (shortest < MIN_SIDE) {
    const k = MIN_SIDE / shortest;
    w *= k;
    h *= k;
  }

  return { w: Math.round(w), h: Math.round(h) };
}
