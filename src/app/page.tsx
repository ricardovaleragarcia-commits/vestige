"use client";

import { useCallback, useState } from "react";
import Intro from "@/components/Intro";
import Collection from "@/components/Collection";
import Manifesto from "@/components/Manifesto";
import type { Piece } from "@/lib/demo-collection";

export default function HomePage() {
  const [revealed, setRevealed] = useState(false);
  const [focused, setFocused] = useState<Piece | null>(null);
  const [showManifesto, setShowManifesto] = useState(false);

  const reveal = useCallback(() => setRevealed(true), []);
  const closeFocus = useCallback(() => {
    window.dispatchEvent(new Event("vestige:close"));
  }, []);

  const overlayOpen = focused !== null || showManifesto;

  return (
    <main>
      <Intro onReveal={reveal} hidden={overlayOpen} />

      <div className={`collection${revealed ? " is-visible" : ""}${showManifesto ? " is-hidden" : ""}`}>
        {revealed && <Collection onFocusChange={setFocused} />}
      </div>

      <div className="edge" aria-hidden="true" />
      <div className="edge-top" aria-hidden="true" />

      {!overlayOpen && (
        <button
          type="button"
          className={`manifesto-link${revealed ? " is-visible" : ""}`}
          onClick={() => setShowManifesto(true)}
        >
          Manifesto
        </button>
      )}

      {!overlayOpen && (
        <p className={`site-note${revealed ? " is-visible" : ""}`}>
          Vestige is a non-commercial archive. Every image is used under the licence stated on its entry, and every
          piece cites its sources, which are open for review. The archive presents traces and their references for
          reflection and research, not as proof of a single cause. For corrections or a rights request, contact the
          archive directly.
        </p>
      )}

      {focused && (
        <button type="button" className="close-button" onClick={closeFocus}>
          Close
        </button>
      )}

      {showManifesto && <Manifesto onClose={() => setShowManifesto(false)} />}
    </main>
  );
}
