"use client";

import { ArrowRight, LoaderCircle } from "lucide-react";
import { useActionState, useState } from "react";
import { submitForm, type FormState } from "@/app/actions";
import { POSITIONS } from "@/lib/content";
import { Field } from "./Field";
import { FormSuccess } from "./FormSuccess";

export function EmploymentForm() {
  const [key, setKey] = useState(0);
  return <EmploymentFormInner key={key} onReset={() => setKey((k) => k + 1)} />;
}

function EmploymentFormInner({ onReset }: { onReset: () => void }) {
  const [state, action, pending] = useActionState<FormState, FormData>(submitForm.bind(null, "employment"), { ok: false });

  if (state.ok) {
    return <FormSuccess title="Thanks for submitting!" text="We've received your application and will reach out soon." onReset={onReset} />;
  }

  return (
    <form action={action} className="space-y-4" aria-label="Join Our Team application">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First Name" name="firstName" autoComplete="given-name" />
        <Field label="Last Name" name="lastName" autoComplete="family-name" />
        <Field label="Date of Birth" name="dateOfBirth" type="date" />
        <Field label="Email Address" name="email" type="email" required autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
        <Field label="Available Start Date" name="startDate" type="date" />
      </div>

      <fieldset className="pt-2">
        <legend className="text-sm font-semibold text-plum-700">Position Applying For</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {POSITIONS.map((p) => (
            <label key={p} className="cursor-pointer">
              <input type="radio" name="position" value={p} className="peer sr-only" />
              <span className="inline-flex items-center rounded-full border border-linen bg-white px-4 py-2 text-sm font-medium text-plum-700 transition peer-checked:border-plum-900 peer-checked:bg-plum-900 peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-dove-200 hover:border-plum-300">
                {p}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {state.error && (
        <p role="alert" className="rounded-xl bg-wine-50 px-4 py-3 text-sm text-wine-700">
          {state.error}
        </p>
      )}
      <button type="submit" disabled={pending} className="btn btn-wine mt-2 w-full disabled:opacity-70">
        {pending ? <LoaderCircle className="size-4 animate-spin" /> : null}
        {pending ? "Submitting…" : "Submit application"}
        {!pending && <ArrowRight className="btn-arrow size-4" />}
      </button>
    </form>
  );
}
