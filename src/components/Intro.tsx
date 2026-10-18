"use client";

import { useEffect, useState } from "react";

// The phrase, one line per row, spaced as written. White-space is kept so the words line up.
const PHRASE: string[] = ["Explore                                and                                discover", "different moments              from the history of", "humanity to knowledge                                        what could had happen", "today and beyond"];

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
      <p className="masthead__tagline">Digital Archive of Vestiges from Failed Futures</p>
      <p className="masthead__phrase" aria-hidden="true">
        {PHRASE.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </p>
    </header>
  );
}
