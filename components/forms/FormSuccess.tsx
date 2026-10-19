import { Check } from "lucide-react";

/** Animated confirmation shown in place of a submitted form. */
export function FormSuccess({ title, text, onReset }: { title: string; text: string; onReset: () => void }) {
  return (
    <div role="status" className="flex animate-[rise-in_.9s_var(--ease-out-expo)_both] flex-col items-center py-10 text-center">
      <span className="relative grid size-20 place-items-center rounded-full bg-leaf-500 text-white shadow-[0_18px_40px_-12px_rgb(22_178_94/0.6)]">
        <span className="absolute inset-0 animate-[ping-soft_1.8s_ease-out_2] rounded-full bg-leaf-400" />
        <Check className="relative size-9" strokeWidth={2.5} />
      </span>
      <h3 className="mt-6 text-3xl font-medium">{title}</h3>
      <p className="mt-2 max-w-sm text-plum-600">{text}</p>
      <button type="button" onClick={onReset} className="btn btn-ghost mt-8 !h-11 text-sm">
        Send another
      </button>
    </div>
  );
}
