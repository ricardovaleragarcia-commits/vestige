"use client";

import { useEffect, useRef, useState } from "react";
import { Application, BlurFilter, Container, Graphics, Text } from "pixi.js";
import {
  initArchive,
  BLOCK_HEIGHT,
  BLOCK_WIDTH,
  COLUMN_WIDTH,
  piecesForBlock,
  type Piece,
} from "@/lib/demo-collection";

const BLUR = 14;
const DRAG_TOLERANCE = 6; // pixels moved before a press counts as dragging, not clicking
const TOP_SPACE = 200; // keeps the first pieces below the masthead
const CODE_GAP = 44; // space between the image and its code when a piece is open
const FOCUS_HEIGHT_RATIO = 0.5; // an open piece fills up to half the screen height
const MIN_ZOOM = 0.3;
const MAX_ZOOM = 1.25;
const INITIAL_ZOOM = 0.72; // the page opens zoomed out, so more pieces are visible at once

// Used by both the canvas and the text panel, so they always agree.
export function focusScale(h: number): number {
  return Math.min(1.5, (window.innerHeight * FOCUS_HEIGHT_RATIO) / h);
}

// Splits a code so that its digits can be set smaller, to match small capitals.
function codeParts(text: string): Node[] {
  return text
    .split(/(\d+)/)
    .filter((part) => part !== "")
    .map((part) => {
      if (/^\d+$/.test(part)) {
        const span = document.createElement("span");
        span.className = "piece-label__digits";
        span.textContent = part;
        return span;
      }
      return document.createTextNode(part);
    });
}

type PieceNode = {
  node: Container; // position, scale and fade
  body: Container; // the piece itself; its blur is trimmed to its frame
  label: HTMLDivElement; // the code, under the piece, as normal HTML text
  blur: BlurFilter;
  piece: Piece;
};
type BlockView = { container: Container; ids: string[] };

export default function Collection({
  onFocusChange,
}: {
  onFocusChange: (piece: Piece | null) => void;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState<Piece | null>(null);
  const notifyRef = useRef(onFocusChange);
  notifyRef.current = onFocusChange;

  const detailRef = useRef<HTMLElement>(null);
  const [detailH, setDetailH] = useState(0);
  const detailHRef = useRef(0);

  // Set by the canvas effect so the zoom buttons can reach the plane.
  const zoomRef = useRef<((factor: number) => void) | null>(null);

  useEffect(() => {
    const h = detailRef.current?.offsetHeight ?? 0;
    detailHRef.current = h;
    setDetailH(h);
  }, [focused]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let destroyed = false;
    let app: Application | null = null;
    let removeListeners: (() => void) | null = null;

    // A text layer above the canvas, for the codes under each piece.
    const labelLayer = document.createElement("div");
    labelLayer.className = "piece-labels";
    host.appendChild(labelLayer);

    (async () => {
      // A new order for every visit.
      initArchive(Math.floor(Math.random() * 0xffffffff));
      // Phones start further out, so the neighbouring pieces are visible.
      const startZoom = window.innerWidth < 768 ? 0.4 : INITIAL_ZOOM;
      await document.fonts.load('18px "STIX Two Text"');

      const instance = new Application();
      await instance.init({
        resizeTo: host,
        background: 0xffffff,
        antialias: true,
        autoDensity: true,
        resolution: window.devicePixelRatio || 1,
      });

      if (destroyed) {
        instance.destroy(true, { children: true });
        return;
      }
      app = instance;
      host.appendChild(instance.canvas);

      const stage = instance.stage;
      stage.eventMode = "static";

      // Full-screen white backdrop catches empty-space clicks and drags.
      const backdrop = new Graphics();
      backdrop.eventMode = "static";
      backdrop.cursor = "grab";
      stage.addChildAt(backdrop, 0);
      let backdropW = 0;
      let backdropH = 0;
      function drawBackdrop() {
        const w = instance.screen.width;
        const h = instance.screen.height;
        if (w === backdropW && h === backdropH) return;
        backdropW = w;
        backdropH = h;
        backdrop.clear().rect(0, 0, w, h).fill(0xffffff);
      }
      drawBackdrop();

      // Start with column 0 centred horizontally.
      const world = new Container();
      stage.addChild(world);
      world.position.set(instance.screen.width / 2 - (COLUMN_WIDTH / 2) * startZoom, TOP_SPACE);

      let focusedId: string | null = null;
      let hoveredId: string | null = null;
      let dragging = false;
      let dragDistance = 0;
      let last = { x: 0, y: 0 };
      // Where the plane should rest. Wheel, trackpad and drag move these; the plane eases to them.
      let targetX = world.x;
      let targetY = world.y;
      let scale = startZoom;
      let targetScale = startZoom;
      let lastRangeKey = "";
      const nodes = new Map<string, PieceNode>();
      const blocks = new Map<string, BlockView>();

      let savedView: { x: number; y: number; s: number } | null = null;

      function setFocus(piece: Piece | null) {
        focusedId = piece ? piece.id : null;
        if (piece && !savedView) {
          savedView = { x: targetX, y: targetY, s: targetScale };
        }
        if (!piece) {
          if (savedView) {
            targetX = savedView.x;
            targetY = savedView.y;
            targetScale = savedView.s;
            savedView = null;
          } else {
            targetX = world.x;
            targetY = world.y;
          }
        }
        for (const entry of nodes.values()) {
          entry.body.eventMode = focusedId ? "none" : "static";
        }
        setFocused(piece);
        notifyRef.current(piece);
      }

      // Zoom around a point on screen, so the spot under the cursor stays where it is.
      function zoomAt(factor: number, sx: number, sy: number) {
        if (focusedId) return;
        const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, targetScale * factor));
        const wx = (sx - targetX) / targetScale;
        const wy = (sy - targetY) / targetScale;
        targetScale = next;
        targetX = sx - wx * next;
        targetY = sy - wy * next;
      }
      zoomRef.current = (factor: number) => {
        zoomAt(factor, instance.screen.width / 2, instance.screen.height / 2);
      };

      function createNode(piece: Piece): PieceNode {
        const root = new Container();
        root.pivot.set(piece.w / 2, piece.h / 2);
        root.position.set(piece.x + piece.w / 2, piece.y + piece.h / 2);

        // The piece is its own frame. The mask keeps the blur inside the original size and shape.
        const frame = new Graphics().rect(0, 0, piece.w, piece.h).fill(0xffffff);
        const body = new Container();
        // The mask must be part of the scene, otherwise it is positioned at the screen corner.
        body.addChild(frame);
        body.mask = frame;
        body.cursor = "pointer";
        body.eventMode = focusedId ? "none" : "static";

        // The blur applies to the content only; the mask then trims it to the frame.
        const inner = new Container();
        inner.addChild(new Graphics().rect(0, 0, piece.w, piece.h).fill(piece.color));

        if (piece.kind === "text" && piece.text) {
          const copy = new Text({
            text: piece.text,
            style: {
              fontFamily: "STIX Two Text",
              fontSize: 11.2,
              lineHeight: 17,
              fill: 0x1c1b19,
              wordWrap: true,
              wordWrapWidth: piece.w - 40,
            },
          });
          copy.position.set(20, 20);
          inner.addChild(copy);
        }

        const blur = new BlurFilter({ strength: BLUR });
        inner.filters = [blur];
        body.addChild(inner);

        body.on("pointerover", () => {
          hoveredId = piece.id;
        });
        body.on("pointerout", () => {
          if (hoveredId === piece.id) hoveredId = null;
        });
        body.on("pointertap", () => {
          if (dragDistance > DRAG_TOLERANCE) return;
          setFocus(piece);
        });

        root.addChild(body);

        const label = document.createElement("div");
        label.className = "piece-label";
        label.replaceChildren(...codeParts(`[${piece.code}]`));
        labelLayer.appendChild(label);

        return { node: root, body, label, blur, piece };
      }

      function addBlock(c: number, b: number) {
        const container = new Container();
        const ids: string[] = [];
        for (const piece of piecesForBlock(c, b)) {
          const entry = createNode(piece);
          nodes.set(piece.id, entry);
          container.addChild(entry.node);
          ids.push(piece.id);
        }
        world.addChild(container);
        blocks.set(`${c},${b}`, { container, ids });
      }

      function removeBlock(key: string) {
        const block = blocks.get(key);
        if (!block) return;
        for (const id of block.ids) {
          nodes.get(id)?.label.remove();
          nodes.delete(id);
        }
        world.removeChild(block.container);
        block.container.destroy({ children: true });
        blocks.delete(key);
      }

      // Press and hold, then move, to pan. A short press without movement is a click.
      stage.on("pointerdown", (e) => {
        dragging = true;
        dragDistance = 0;
        last = { x: e.global.x, y: e.global.y };
      });
      const endDrag = () => {
        dragging = false;
      };
      stage.on("pointerup", endDrag);
      stage.on("pointerupoutside", endDrag);
      stage.on("globalpointermove", (e) => {
        if (!dragging) return;
        const dx = e.global.x - last.x;
        const dy = e.global.y - last.y;
        last = { x: e.global.x, y: e.global.y };
        dragDistance += Math.abs(dx) + Math.abs(dy);
        if (focusedId) return;
        targetX += dx;
        targetY += dy;
      });
      stage.on("pointertap", (e) => {
        if (e.target === backdrop && focusedId && dragDistance <= DRAG_TOLERANCE) {
          setFocus(null);
        }
      });

      // Wheel and trackpad move the plane in x and y. Ctrl + wheel (or a trackpad pinch) zooms.
      const onWheel = (e: WheelEvent) => {
        e.preventDefault();
        if (focusedId) return;
        if (e.ctrlKey) {
          const rect = host.getBoundingClientRect();
          zoomAt(Math.exp(-e.deltaY * 0.01), e.clientX - rect.left, e.clientY - rect.top);
          return;
        }
        const unit = e.deltaMode === 1 ? 16 : 1;
        targetX -= e.deltaX * unit;
        targetY -= e.deltaY * unit;
      };
      host.addEventListener("wheel", onWheel, { passive: false });

      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setFocus(null);
        if (!focusedId && (e.key === "+" || e.key === "=")) zoomRef.current?.(1.15);
        if (!focusedId && (e.key === "-" || e.key === "_")) zoomRef.current?.(1 / 1.15);
      };
      const onCloseRequest = () => setFocus(null);
      window.addEventListener("keydown", onKey);
      window.addEventListener("vestige:close", onCloseRequest);
      removeListeners = () => {
        window.removeEventListener("keydown", onKey);
        window.removeEventListener("vestige:close", onCloseRequest);
        host.removeEventListener("wheel", onWheel);
      };

      instance.ticker.add((ticker) => {
        const dt = ticker.deltaTime;
        const sw = instance.screen.width;
        const sh = instance.screen.height;
        drawBackdrop();

        // An open piece is centred at normal size, with its code and text below it.
        if (focusedId) {
          const entry = nodes.get(focusedId);
          if (entry) {
            const p = entry.piece;
            const imgH = p.h * focusScale(p.h);
            const groupH = imgH + CODE_GAP + detailHRef.current;
            const groupTop = sh / 2 - groupH / 2;
            targetScale = 1;
            targetX = sw / 2 - (p.x + p.w / 2);
            targetY = groupTop + imgH / 2 - (p.y + p.h / 2);
            // The close button sits halfway between the top of the screen and the top of the open piece.
            document.documentElement.style.setProperty("--close-y", `${groupTop / 2}px`);
          }
        }

        // The plane eases toward its targets and rests there.
        const ease = Math.min(1, 0.18 * dt);
        scale += (targetScale - scale) * ease;
        world.scale.set(scale);
        world.x += (targetX - world.x) * ease;
        world.y += (targetY - world.y) * ease;

        for (const [id, entry] of nodes) {
          const isFocus = id === focusedId;
          const k = Math.min(1, 0.12 * dt);

          // While a piece is open, everything else disappears.
          const targetAlpha = focusedId && !isFocus ? 0 : 1;
          entry.node.alpha += (targetAlpha - entry.node.alpha) * k;

          // Public pieces reveal on hover or focus. Private pieces stay blurred.
          const isPublic = entry.piece.visibility === "public";
          const revealed = isPublic && (isFocus || (!focusedId && hoveredId === id));
          entry.blur.strength += ((revealed ? 0 : BLUR) - entry.blur.strength) * Math.min(1, 0.15 * dt);

          const targetNodeScale = isFocus ? focusScale(entry.piece.h) : 1;
          entry.node.scale.set(entry.node.scale.x + (targetNodeScale - entry.node.scale.x) * k);

          // The code follows the piece and stays just below its visible edge.
          const s = entry.node.scale.x;
          const cx = entry.piece.x + entry.piece.w / 2;
          const cy = entry.piece.y + entry.piece.h / 2;
          // Positioned on screen, directly below the visible edge of the piece.
          const screenX = world.x + cx * scale;
          const screenY = world.y + (cy + (entry.piece.h * s) / 2) * scale + 10;
          entry.label.style.transform = `translate(${screenX}px, ${screenY}px) translateX(-50%)`;
          entry.label.style.opacity = String(entry.node.alpha);

          // Only what is on screen is drawn, so the total number of pieces does not slow the plane.
          const pl = world.x + (cx - (entry.piece.w * s) / 2) * scale;
          const pt = world.y + (cy - (entry.piece.h * s) / 2) * scale;
          const pr = pl + entry.piece.w * s * scale;
          const pb = pt + entry.piece.h * s * scale + 60;
          const onScreen = pr > -120 && pl < sw + 120 && pb > -120 && pt < sh + 120;
          entry.node.visible = onScreen;
          entry.label.style.display = onScreen ? "" : "none";
        }

        // Stream only the columns and blocks that are on screen, at the current zoom.
        const left = -world.x / scale;
        const top = -world.y / scale;
        const viewW = sw / scale;
        const viewH = sh / scale;
        const minC = Math.floor(left / BLOCK_WIDTH) - 1;
        const maxC = Math.floor((left + viewW) / BLOCK_WIDTH) + 1;
        const minB = Math.floor(top / BLOCK_HEIGHT) - 1;
        const maxB = Math.floor((top + viewH) / BLOCK_HEIGHT) + 1;
        const rangeKey = `${minC},${maxC},${minB},${maxB}`;

        if (rangeKey !== lastRangeKey) {
          lastRangeKey = rangeKey;
          for (const key of [...blocks.keys()]) {
            const [c, b] = key.split(",").map(Number);
            if (c < minC || c > maxC || b < minB || b > maxB) removeBlock(key);
          }
          for (let c = minC; c <= maxC; c++) {
            for (let b = minB; b <= maxB; b++) {
              if (!blocks.has(`${c},${b}`)) addBlock(c, b);
            }
          }
        }
      });
    })();

    return () => {
      destroyed = true;
      removeListeners?.();
      labelLayer.remove();
      zoomRef.current = null;
      app?.destroy(true, { children: true });
    };
  }, []);

  let detailTop = 0;
  if (focused) {
    const imgH = focused.h * focusScale(focused.h);
    const groupH = imgH + CODE_GAP + detailH;
    detailTop = window.innerHeight / 2 - groupH / 2 + imgH + CODE_GAP;
  }

  return (
    <>
      <div ref={hostRef} className="collection-host" />


      {focused && (
        <aside ref={detailRef} className="detail" aria-live="polite" style={{ top: detailTop }}>
          <p className="detail__label">[desc.]</p>
          <p className="detail__text">{focused.description}</p>
          <p className="detail__label">[f.f. expl.]</p>
          <p className="detail__text">{focused.failedFuture}</p>
          {focused.presentEffect && (
            <>
              <p className="detail__label">
                {focused.presentEffect.kind === "documented"
                  ? "[r.c.t.]"
                  : `[r.c.t. — ${focused.presentEffect.kind}]`}
              </p>
              <p className="detail__text">{focused.presentEffect.text}</p>
            </>
          )}
        </aside>
      )}
    </>
  );
}
