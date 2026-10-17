import type { CSSProperties, ElementType } from "react";

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
    <Tag className={`words ${className}`}>
      {words.map((word, i) => (
        <span key={i}>
          <span className="w" style={{ "--i": i, "--n": words.length } as CSSProperties}>
            {/* The gradient sits on an inner span: its shimmer animation would otherwise replace the reveal animation. */}
            {accent.includes(word.replace(/[^\w']/g, "")) ? <span className="text-gradient">{word}</span> : word}
          </span>{" "}
        </span>
      ))}
    </Tag>
  );
}
