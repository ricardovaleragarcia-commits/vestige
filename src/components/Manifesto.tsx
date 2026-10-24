"use client";

import { useEffect, useRef, useState } from "react";

const PARAGRAPHS = [
  "VSTG is a digital archive of the traces left by futures that never happened. It is built on a simple proposition: the paths a society did not take are as much a part of its history as the ones it did, and they keep acting in ways that are often overlooked.",

  "A failed future is a possibility that was real enough to be expected, planned, funded, promised or hoped for, and that did not come to pass. It is not a fantasy, and it is not simply a mistake. It had a moment in which it was meant to arrive, people who organised part of their lives around it, and a moment in which it stopped being possible. That moment can be a decision, a loss, a refusal, an accident or a slow expiry. A failed future can belong to a state, an institution or a discipline; it can belong to a family or to a single person. Scale does not decide whether it counts. What decides it is that the future was real for someone, and that its failure is itself a fact.",

  "A future that did not happen is not nothing. Someone expected it, it shaped decisions, and it received time, money and language. When it failed, it left a remainder: an object, a document, a place, an image, a phrase, an idea, a dream. Anything that keeps the possible alongside the actual can be a VSTG. These remainders are often more candid than the official record, because they hold what was lost together with what was kept.",

  "A failed future does not end at its failure. Its absence takes effect later, sometimes at once and sometimes generations afterwards. What was not built leaves a gap that something else comes to fill. What was not achieved changes what the people involved did next. What was promised and withdrawn changes what others learn to expect. In this way a future that failed becomes one of the conditions of another present, for a person, a community or a whole society, and that present may in turn produce futures of its own, some of which also fail. The effect can be transformed beyond recognition, can be harmful as easily as beneficial, and can have long since run its course. It remains part of the record.",

  "Recovering these futures changes how the present is understood. A society is defined as much by the paths it closed as by the ones it followed. When a failed future is brought back into view, it becomes possible to see which assumptions were held, which values were taken for granted, and which alternatives were lost along the way. The present stops appearing inevitable, and becomes legible as one path among several.",

  "To identify a VSTG, the archive applies a framework of four questions. First, was the future possible: did it have real plans, resources or expectations behind it? Second, did it fail: was it interrupted, abandoned, postponed until it expired, or closed by a decision? Third, does a trace remain: is there an object, a document, an image or an idea that holds it? Fourth, did it have an effect: can the consequences of its failure be followed in what came after, for a person, a place or a society? A piece enters the archive only when all four questions are answered yes. The image shows the trace. The description says what it is and where it comes from. The failed future explains what it was meant to become and how it stopped. The effect says what that failure set in motion.",

  "Verified information comes first. The effect of a failed future must rest on something that can be checked: a documented fact, or a comment attributed to a named person who said it. When it is a reading, it is labelled as one. The archive does not claim that a single event caused what followed; it presents the trace and leaves the connections open. A trace that cannot show an effect is left out and replaced by one that can. The full research, with every source, is in the printed version of the project.",

  "We invite anyone to take part in the search. Look for VSTGs in your own surroundings and in the historical record. When you find one, recognise it, name it, and document where it comes from. Naming is an act of attention. It turns a remainder that was easy to overlook into something that can be seen, discussed and checked.",

  "VSTGs are not only historical. Every person keeps traces of futures that did not happen to them. Recognising these traces is a form of introspection. It asks how a closed possibility still shapes present behaviour, silence or memory, and what it reveals about the values we inherited without choosing them. The archive offers this as a method for self-understanding, not as confession.",

  "The same method applies to communities. A city, an institution or a generation carries the futures it abandoned, and those futures continue to influence what it considers normal, possible or worth defending. Recognising them helps a society understand what it has been defined by, and which of its choices it might still revisit. The purpose is neither nostalgia nor regret. It is orientation: to see the present as one path among several, and to recognise what the paths we closed still ask of us.",

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
  rows.forEach((row) => {
    const line = document.createElement("span");
    line.className = "manifesto-line";
    line.dataset.reveal = "line";
    line.append(...row);
    p.appendChild(line);
  });
}

export default function Manifesto({ onClose }: { onClose: () => void }) {
  const [closing, setClosing] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
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
        if (el.dataset.reveal === "line") {
          // A line rises from below and fades in over a short band near the bottom of the screen,
          // then dims as it leaves through the top, so only a few lines are bright at once.
          const rise = Math.min(1, Math.max(0, (vh * 0.88 - top) / (vh * 0.24)));
          const leave = Math.min(1, Math.max(0, (top - vh * 0.1) / (vh * 0.3)));
          const eased = 1 - Math.pow(1 - rise, 3);
          el.style.opacity = String(eased * (0.12 + 0.88 * leave));
          el.style.transform = `translateY(${(1 - eased) * 36}px)`;
        } else {
          // The signature stays faintly visible until it is reached.
          const progress = Math.min(1, Math.max(0, (vh * 0.85 - top) / (vh * 0.4)));
          el.style.opacity = String(0.1 + 0.9 * progress);
        }
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
    // While the text rises into place on opening, keep the line reveal in step with it.
    let rising = 0;
    const riseStart = performance.now();
    const followRise = () => {
      update();
      if (performance.now() - riseStart < 3200) rising = requestAnimationFrame(followRise);
    };
    rising = requestAnimationFrame(followRise);
    screen.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleLayout);
    return () => {
      screen.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleLayout);
      cancelAnimationFrame(frame);
      cancelAnimationFrame(rising);
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
        <div className="manifesto-legal">
          <button
            type="button"
            className="manifesto-legal__toggle"
            aria-expanded={legalOpen}
            onClick={() => setLegalOpen((v) => !v)}
          >
            Legal
          </button>
          {legalOpen && (
            <p className="manifesto-legal__text">
              VSTG is a non-profit, academic project. Images are sought first from public-domain or freely licensed
              sources, and the author and licence of each one are recorded on its entry. A few may still be protected,
              and are shown here only for study. If you are the author or rights holder of an image, or it is not free
              to use, please get in touch and it will be credited or removed promptly. Send your inquiry to{" "}
              <a href="mailto:ricardo.valera.garcia@gmail.com">ricardo.valera.garcia@gmail.com</a>.
            </p>
          )}
        </div>
      </article>
    </section>
  );
}
