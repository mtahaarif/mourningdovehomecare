"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { EMAIL } from "@/lib/site";

/** Copies the office email to the clipboard, with a short confirmation. */
export function CopyEmail({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
        copied ? "bg-leaf-100 text-leaf-800" : "bg-sand text-plum-800 hover:bg-linen"
      } ${className}`}
      aria-live="polite"
    >
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      {copied ? "Copied to clipboard" : "Copy email"}
    </button>
  );
}
