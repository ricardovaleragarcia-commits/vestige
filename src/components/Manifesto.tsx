"use client";

import { useEffect, useRef, useState } from "react";

const PARAGRAPHS = [
  "Vestige is a digital archive of the traces left by futures that never happened. It is built on a simple proposition: the paths a society did not take are as much a part of its history as the ones it did, and they remain present in ways that are often overlooked.",

  "The idea of the failed future is older than any archive. Every period has imagined possibilities it did not realise: plans that were drawn and never built, projects abandoned on the way to completion, promises that expired without being kept, lives that were expected and then closed off. Historians study these as counterfactual histories. Architects and engineers record them as unrealised work. Ordinary people carry them as the life they might have had. What they share is that the future was real enough to be planned, and that its failure is itself a historical fact.",

  "A future that did not happen is not nothing. Someone expected it, it shaped decisions, and it received time, money, and language. When it failed, it left a remainder in the present: a document, an object, a structure that stands in a different form, a habit of waiting, a phrase that still circulates. These remainders are often more candid than the official record, because they keep the possible alongside the actual.",

  "Recovering these futures changes how the present is understood. A society is defined as much by the paths it closed as by the ones it followed. When a failed future is brought back into view, it becomes possible to see which assumptions were held, which values were taken for granted, and which alternatives were lost along the way. The present stops appearing inevitable, and becomes legible as one path among several.",

  "To identify a vestige, the archive applies a framework of four questions. First, was the future possible: did it have real plans, resources, or expectations behind it? Second, did it fail: was it interrupted, abandoned, postponed until it expired, or closed by a decision? Third, does a trace remain: is there an object, a document, or a practice that still exists in the present? Fourth, does the trace still act: does it continue to shape how we think, decide, or remember? A piece enters the archive only when all four questions are answered yes. The image shows the trace. The description says what it is and where it comes from. The failed future says what it was meant to become, and how that unrealised path still reaches the present.",

  "Each entry must have a traceable source and a licence that allows reuse. The archive does not claim that a single event caused what followed. It presents the trace and leaves the connections open, because history is made of many threads, and the reader should be able to follow them.",

  "We invite anyone to take part in the search. Look for vestiges in your own surroundings and in the historical record: a project that was cancelled, a plan that was shelved, a promise that a later decision quietly withdrew. When you find one, recognise it, name it, and document where it comes from. Naming is an act of attention. It turns a remainder that was easy to overlook into something that can be seen, discussed, and checked.",

  "Vestiges are not only historical. Every person keeps traces of futures that did not happen to them: a path they stopped taking, a version of themselves they did not become, a decision that closed a door without their noticing. Recognising these traces is a form of introspection. It asks how a closed possibility still shapes present behaviour, silence, or memory, and what it reveals about the values we inherited without choosing them. The archive offers this as a method for self-understanding, not as confession.",

  "The same method applies to communities. A city, an institution, or a generation carries the futures it abandoned, and those futures continue to influence what it considers normal, possible, or worth defending. Recognising them helps a society understand what it has been defined by, and which of its choices it might still revisit. The purpose is neither nostalgia nor regret. It is orientation: to see the present as one path among several, and to recognise what the paths we closed still ask of us.",

  "Explore freely. Each piece is blurred until you look at it, because a trace asks for attention before it gives up its meaning.",
];

// Splits a paragraph into the lines the browser lays out, so each line can be revealed on its own.
function buildLines(p: HTMLElement, text: string) {
  p.replaceChildren();
  const words = text.split(" ").map((word) => {
    const span = document.createElement("span");
    span.textContent = `${word} `;
    p.appendChild(span);
    return span;
  });
  const rows: HTMLElement[][] = [];
  let lastTop = Number.NaN;
  for (const word of words) {
    const top = Math.round(word.getBoundingClientRect().top);
    if (Number.isNaN(lastTop) || Math.abs(top - lastTop) > 2) {
      rows.push([]);
      lastTop = top;
    }
    rows[rows.length - 1].push(word);
  }
  p.replaceChildren();
  rows.forEach((row, i) => {
    const line = document.createElement("span");
    line.className = i === rows.length - 1 ? "manifesto-line is-last" : "manifesto-line";
    line.append(...row);
    p.appendChild(line);
  });
}

export default function Manifesto({ onClose }: { onClose: () => void }) {
  const [closing, setClosing] = useState(false);
  const screenRef = useRef<HTMLElement>(null);

  // Lines are built from the text, then each line brightens as it scrolls up into the middle of the screen.
  useEffect(() => {
    const screen = screenRef.current;
    if (!screen) return;
    let frame = 0;

    function layout() {
      frame = 0;
      screen!.querySelectorAll<HTMLElement>("[data-paragraph]").forEach((el) => {
        buildLines(el, PARAGRAPHS[Number(el.dataset.paragraph)]);
      });
      update();
    }

    function update() {
      frame = 0;
      const vh = screen!.clientHeight;
      screen!.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const progress = Math.min(1, Math.max(0, (vh * 0.85 - top) / (vh * 0.5)));
        el.style.opacity = String(0.1 + 0.9 * progress);
      });
    }

    function scheduleUpdate() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    function scheduleLayout() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(layout);
    }

    layout();
    screen.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleLayout);
    return () => {
      screen.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleLayout);
      cancelAnimationFrame(frame);
    };
  }, []);

  // The screen dissolves back to white, then the manifesto is removed.
  function close() {
    if (closing) return;
    setClosing(true);
    window.setTimeout(onClose, 900);
  }

  return (
    <section
      ref={screenRef}
      className={`manifesto-screen${closing ? " is-closing" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Manifesto"
    >
      <button type="button" className="manifesto-screen__close" onClick={close}>
        Close
      </button>
      <article className="manifesto-text">
        {/* layout() writes the text into these paragraphs, so React does not manage their contents. */}
        {PARAGRAPHS.map((_, i) => (
          <p key={i} className="manifesto-paragraph" data-paragraph={i} aria-label={PARAGRAPHS[i]} />
        ))}
        <div className="manifesto-text__sign" data-reveal>
          <p className="manifesto-text__name">— Ricardo</p>
          <img
            className="manifesto-text__brandmark"
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/brandmark.svg`}
            alt="VSTG"
          />
        </div>
      </article>
    </section>
  );
}
