"use client";

const PARAGRAPHS = [
  "Vestige is a digital archive of the traces left by futures that never happened.",
  "A future becomes a failed future when it was possible, expected, or planned, and then stopped being possible. Some were abandoned. Some were postponed until they expired. Some were closed by a decision that removed the path entirely. None of them was completed, and yet each one leaves something behind: a document, an object, a drawing, a habit, a place that was never built.",
  "A vestige is that remainder. Each piece in the archive is a physical or documentary trace that still exists in the present, and whose meaning points to a future that did not take place. The image shows the trace. The description says what it is and where it comes from. The failed future says what it was meant to become, and how that unrealised path still reaches the present.",
  "The archive does not rewrite history, and it does not claim that a single event caused what followed. It presents traces and their sources, and leaves the connections open for the reader. Every piece is selected by hand, and every entry is meant to be checked against its source. Nothing here is testimony, and nothing is invented to fill a gap.",
  "Explore freely. Each piece is blurred until you look at it.",
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
