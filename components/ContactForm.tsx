"use client";

import { useActionState } from "react";
import { Box, type Rect } from "./Box";
import { submitForm, type FormState } from "@/app/actions";

export function ContactForm({ d, m }: { d: Rect; m: Rect }) {
  const [state, action, pending] = useActionState<FormState, FormData>(submitForm.bind(null, "contact"), { ok: false });

  return (
    <Box d={d} m={m} as="form" action={action} className="contact-form local" aria-label="Contact form">
      <Box d={[24, 24]} m={[24, 24]} as="label" htmlFor="cf-first" className="cf-label">
        First name
      </Box>
      <Box d={[24, 49, 256, 36]} m={[24, 49, 232, 36]} className="cf-field">
        <input id="cf-first" name="firstName" type="text" placeholder="Enter your first name" />
      </Box>

      <Box d={[304, 24]} m={[24, 109]} as="label" htmlFor="cf-email" className="cf-label">
        Email<span aria-hidden="true">*</span>
      </Box>
      <Box d={[304, 49, 256, 36]} m={[24, 134, 232, 36]} className="cf-field">
        <input id="cf-email" name="email" type="email" required placeholder="Enter your email" />
      </Box>

      <Box d={[24, 109]} m={[24, 194]} as="label" htmlFor="cf-subject" className="cf-label">
        Subject
      </Box>
      <Box d={[24, 134, 536, 36]} m={[24, 219, 232, 36]} className="cf-field">
        <input id="cf-subject" name="subject" type="text" placeholder="e.g., Support" />
      </Box>

      <Box d={[24, 194]} m={[24, 279]} as="label" htmlFor="cf-message" className="cf-label">
        Write a message
      </Box>
      <Box d={[24, 219, 536, 92]} m={[24, 304, 232, 92]} className="cf-field cf-textarea">
        <textarea id="cf-message" name="message" placeholder="Enter text here" />
      </Box>

      <Box d={[211, 335, 163, 41]} m={[24, 420, 232, 41]} as="button" type="submit" disabled={pending} className="cf-send f-avenir">
        Send
      </Box>
      {(state.ok || state.error) && (
        <Box d={[24, 380, 536]} m={[24, 463, 232]} as="p" role="status" className="cf-status">
          {state.ok ? "Thanks for submitting!" : state.error}
        </Box>
      )}
    </Box>
  );
}
