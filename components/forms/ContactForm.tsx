"use client";

import { LoaderCircle, Send } from "lucide-react";
import { useActionState, useState } from "react";
import { submitForm, type FormState } from "@/app/actions";
import { Field, TextArea } from "./Field";
import { FormSuccess } from "./FormSuccess";

export function ContactForm() {
  const [key, setKey] = useState(0);
  return <ContactFormInner key={key} onReset={() => setKey((k) => k + 1)} />;
}

function ContactFormInner({ onReset }: { onReset: () => void }) {
  const [state, action, pending] = useActionState<FormState, FormData>(submitForm.bind(null, "contact"), { ok: false });

  if (state.ok) {
    return <FormSuccess title="Thanks for submitting!" text="One of our advisors will be in touch with you shortly." onReset={onReset} />;
  }

  return (
    <form action={action} className="space-y-4" aria-label="Contact form">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First name" name="firstName" autoComplete="given-name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
      </div>
      <Field label="Subject" name="subject" />
      <TextArea label="Write a message" name="message" />
      {state.error && (
        <p role="alert" className="rounded-xl bg-wine-50 px-4 py-3 text-sm text-wine-700">
          {state.error}
        </p>
      )}
      <button type="submit" disabled={pending} className="btn btn-primary w-full disabled:opacity-70">
        {pending ? <LoaderCircle className="size-4 animate-spin" /> : <Send className="size-4" />}
        {pending ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
