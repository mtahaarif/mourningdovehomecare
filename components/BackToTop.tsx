"use client";

export function BackToTop() {
  return (
    <button className="back-to-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <svg viewBox="20 20 160 160" width="100%" height="100%" aria-hidden="true">
        <g fillRule="evenodd">
          <path fillRule="nonzero" fill="#F6F6F6" d="M180 100c0 44.183-35.817 80-80 80s-80-35.817-80-80 35.817-80 80-80 80 35.817 80 80z" />
          <path fill="#281A39" d="M66.066 116L62 111.64 100.151 74 138 111.668 133.953 116l-33.825-32.3L66.066 116z" />
          <path fillRule="nonzero" fill="#8F8898" d="M100 24c-41.974 0-76 34.026-76 76s34.026 76 76 76 76-34.026 76-76-34.026-76-76-76zm0-4c44.183 0 80 35.817 80 80s-35.817 80-80 80-80-35.817-80-80 35.817-80 80-80z" />
        </g>
      </svg>
    </button>
  );
}
