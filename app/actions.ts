"use server";

import { EMAIL, PHONE } from "@/lib/site";

export type FormState = { ok: boolean; error?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/*
 * Submissions are emailed through Resend (https://resend.com/docs/api-reference/emails/send-email).
 * The sender must be on a domain verified in Resend (mourningdovehomecare.com);
 * FORM_TO_EMAIL / FORM_FROM_EMAIL override the defaults below.
 */
const TO = process.env.FORM_TO_EMAIL ?? EMAIL;
const FROM = process.env.FORM_FROM_EMAIL ?? "Mourning Dove Website <forms@mourningdovehomecare.com>";

/** The fields each form sends, in the order they appear in the email. */
const FIELDS = {
  contact: [
    ["firstName", "First name"],
    ["email", "Email"],
    ["subject", "Subject"],
    ["message", "Message"],
  ],
  employment: [
    ["firstName", "First name"],
    ["lastName", "Last name"],
    ["dateOfBirth", "Date of birth"],
    ["email", "Email"],
    ["phone", "Phone"],
    ["startDate", "Available start date"],
    ["position", "Position applying for"],
  ],
} as const;

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function buildEmail(form: keyof typeof FIELDS, fields: Record<string, string>) {
  const rows = FIELDS[form].map(([key, label]) => [label, fields[key] || "—"] as const);
  const name = [fields.firstName, fields.lastName].filter(Boolean).join(" ") || fields.email;

  const subject =
    form === "contact"
      ? `Website contact: ${fields.subject || `message from ${name}`}`
      : `Job application: ${fields.position || "position not specified"} — ${name}`;

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const html = `<table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">${rows
    .map(
      ([label, value]) =>
        `<tr><th align="left" valign="top" style="color:#574076;white-space:nowrap">${label}</th><td style="white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
    )
    .join("")}</table>`;

  return { subject, text, html };
}

/** Receives the Contact and Join Our Team form submissions and emails them to the office. */
export async function submitForm(form: "contact" | "employment", _prev: FormState, data: FormData): Promise<FormState> {
  const fields = Object.fromEntries([...data.entries()].map(([k, v]) => [k, String(v).trim()]));

  if (!EMAIL_RE.test(fields.email ?? "")) return { ok: false, error: "Please enter a valid email address." };
  if (form === "employment" && !fields.phone) return { ok: false, error: "Please enter a phone number." };

  const failed: FormState = { ok: false, error: `Sorry, we couldn't send that. Please try again, or call us at ${PHONE}.` };

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error(`[${form} form] RESEND_API_KEY is not set; submission not sent`, fields);
    return failed;
  }

  const { subject, text, html } = buildEmail(form, fields);
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      // reply_to lets the office answer the visitor directly from their inbox.
      body: JSON.stringify({ from: FROM, to: [TO], reply_to: fields.email, subject, text, html }),
    });
    if (!res.ok) {
      console.error(`[${form} form] Resend error ${res.status}`, await res.text(), fields);
      return failed;
    }
  } catch (err) {
    console.error(`[${form} form] Resend request failed`, err, fields);
    return failed;
  }

  return { ok: true };
}
