"use server";

export type FormState = { ok: boolean; error?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Receives the Contact and Join Our Team form submissions.
 * The original site stored these in Wix Forms; wire this up to email / a CRM
 * before going live (e.g. Resend, SendGrid, or a database insert).
 */
export async function submitForm(form: "contact" | "employment", _prev: FormState, data: FormData): Promise<FormState> {
  const fields = Object.fromEntries([...data.entries()].map(([k, v]) => [k, String(v).trim()]));

  if (!EMAIL_RE.test(fields.email ?? "")) return { ok: false, error: "Please enter a valid email address." };
  if (form === "employment" && !fields.phone) return { ok: false, error: "Please enter a phone number." };

  console.info(`[${form} form submission]`, fields);
  return { ok: true };
}
