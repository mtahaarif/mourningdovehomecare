import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const control =
  "peer block w-full rounded-2xl border border-linen bg-white/80 px-4 pt-6 pb-2.5 text-[0.98rem] text-plum-950 outline-none transition " +
  "placeholder-transparent hover:border-plum-200 focus:border-dove-400 focus:bg-white focus:ring-4 focus:ring-dove-100";

const label =
  "pointer-events-none absolute top-2 left-4 text-xs font-semibold text-plum-500 transition-all duration-300 " +
  "peer-placeholder-shown:top-4 peer-placeholder-shown:text-[0.95rem] peer-placeholder-shown:font-medium " +
  "peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-dove-700";

type FieldProps = InputHTMLAttributes<HTMLInputElement> & { label: string; name: string };

/** Input with a floating label (the label rests inside the field until it has focus or a value). */
export function Field({ label: text, name, required, type = "text", className = "", ...rest }: FieldProps) {
  const id = `f-${name}`;
  const isDate = type === "date";
  return (
    <div className={`relative ${className}`}>
      <input id={id} name={name} type={type} required={required} placeholder=" " className={`${control} ${isDate ? "min-h-[3.6rem]" : ""}`} {...rest} />
      <label htmlFor={id} className={`${label} ${isDate ? "!top-2 !text-xs !font-semibold" : ""}`}>
        {text}
        {required && <span className="text-wine-500"> *</span>}
      </label>
    </div>
  );
}

type AreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; name: string };

export function TextArea({ label: text, name, required, className = "", ...rest }: AreaProps) {
  const id = `f-${name}`;
  return (
    <div className={`relative ${className}`}>
      <textarea id={id} name={name} required={required} placeholder=" " rows={5} className={`${control} resize-none`} {...rest} />
      <label htmlFor={id} className={label}>
        {text}
        {required && <span className="text-wine-500"> *</span>}
      </label>
    </div>
  );
}
