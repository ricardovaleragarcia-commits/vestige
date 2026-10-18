"use client";

import { useEffect, useState } from "react";

// The words of the phrase, placed as in the reference: left position in %, and row.
const SCATTER: { t: string; x: number; r: number }[] = [
  { t: "Explore", x: 19, r: 0 },
  { t: "and", x: 47.7, r: 0 },
  { t: "discover", x: 72.2, r: 0 },
  { t: "different", x: 26.7, r: 1 },
  { t: "moments", x: 63.5, r: 1 },
  { t: "from the", x: 36.5, r: 2 },
  { t: "history of", x: 53.7, r: 2 },
  { t: "humanity to knowledge", x: 6.1, r: 3 },
  { t: "what could had happen", x: 69.9, r: 3 },
  { t: "today", x: 47.1, r: 4 },
];

type IntroProps = {
  onReveal: () => void;
  hidden: boolean;
};

// The masthead starts in the middle of the screen and rises to the top in one smooth motion.
export default function Intro({ onReveal, hidden }: IntroProps) {
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    const lift = setTimeout(() => {
      setLifted(true);
      onReveal();
    }, 1400);
    return () => clearTimeout(lift);
  }, [onReveal]);

  const mastheadClass = ["masthead", lifted && "is-top", hidden && "is-hidden"].filter(Boolean).join(" ");

  return (
    <header className={mastheadClass}>
      <h1 className="masthead__title">
        <img className="masthead__logo" src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo.svg`} alt="Vestige" />
      </h1>
      <p className="masthead__tagline">Digital Archive of Traces from Failed Futures</p>
      <p className="masthead__scatter" aria-hidden="true">
        {SCATTER.map((w) => (
          <span key={w.t} style={{ left: `${w.x}%`, top: `${w.r * 1.2}rem` }}>
            {w.t}
          </span>
        ))}
      </p>
    </header>
  );
}
