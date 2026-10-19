import { Fragment, type ElementType } from "react";

type WordRevealProps = {
  text: string;
  as?: ElementType;
  className?: string;
  /** Words (exact match, punctuation stripped) to accent with the brand gradient. */
  accent?: string[];
};

/** Paragraph whose words light up one by one as it scrolls through the viewport. */
export function WordReveal({ text, as: Tag = "p", className = "", accent = [] }: WordRevealProps) {
  const words = text.split(" ");
  return (
    // --n (word count) and each word's --i place its slice of the scroll range (see .words in globals.css).
    <Tag className={`words [--n:${words.length}] ${className}`}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className={`w [--i:${i}]`}>
            {/* The gradient sits on an inner span: its shimmer animation would otherwise replace the reveal animation. */}
            {accent.includes(word.replace(/[^\w']/g, "")) ? <span className="text-gradient">{word}</span> : word}
          </span>{" "}
        </Fragment>
      ))}
    </Tag>
  );
}
