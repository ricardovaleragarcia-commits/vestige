"use client";

// Text from the Figma board "[manif.]".
const PARAGRAPHS = [
  "I. A trace is merely a mark of presence. A vestige is proof of what has permanently disappeared.",
  "II. We do not archive paused plans or delayed expectations. A postponed future is merely a wait; a vestige is born at the exact moment a future becomes irrevocably impossible. The passage of time does not resolve an interrupted trajectory; any alternative that follows is a different timeline entirely.",
  "III. Everyday objects, an unsent letter, an unvalidated ticket, a solitary photograph, an unread draft, are not mere nostalgia. They are physical and textual evidence. They are the surviving anchors of realities that were stripped of their right to exist.",
  "IV. Unlived futures possess weight. They shape present behavior, silence, and memory. By applying formal, institutional dignity to individual grief, this archive removes the emotional fragment from isolation and elevates it to a collective record.",
  "V. We gather these remnants not to rewrite history, but to document its casualties. Every trace holds a future that never was, and never will be.",
];

export default function Manifesto({ onClose }: { onClose: () => void }) {
  return (
    <section className="dialog" role="dialog" aria-modal="true" aria-label="Manifesto">
      <button type="button" className="close-button" onClick={onClose}>
        Close
      </button>
      <div className="dialog__inner">
        <h2 className="dialog__title">Manifesto</h2>
        {PARAGRAPHS.map((paragraph, i) => (
          <p key={i} className="manifesto__text">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
