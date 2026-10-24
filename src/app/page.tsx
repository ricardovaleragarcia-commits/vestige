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
    window.dispatchEvent(new Event("vstg:close"));
  }, []);

  const overlayOpen = focused !== null || showManifesto;

  return (
    <main>
      <Intro onReveal={reveal} hidden={overlayOpen} />

      <div className={`collection${revealed ? " is-visible" : ""}${showManifesto ? " is-hidden" : ""}`}>
        {revealed && <Collection onFocusChange={setFocused} />}
      </div>

      <div className={`edge${overlayOpen ? " is-hidden" : ""}`} aria-hidden="true" />
      <div className={`edge-top${overlayOpen ? " is-hidden" : ""}`} aria-hidden="true" />

      {!overlayOpen && (
        <div className={`foot${revealed ? " is-visible" : ""}`}>
          <button type="button" className="manifesto-link" onClick={() => setShowManifesto(true)}>
            Manifesto
          </button>
          <p className="site-note">
            VSTG is a non-commercial archive. Every image is used under the licence stated on its entry, and every
            piece cites its sources, which are open for review. The archive presents vestiges and their references for
            reflection and research, not as proof of a single cause.
          </p>
        </div>
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
