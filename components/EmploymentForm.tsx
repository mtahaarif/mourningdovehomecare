"use client";

import { useActionState, useRef, useState } from "react";
import { Box, type Rect } from "./Box";
import { submitForm, type FormState } from "@/app/actions";

const POSITIONS = ["Home Care Aide", "Registered Nurse", "Care Coordinator", "Scheduler", "Office Assistant"];

type Field = { name: string; label: string; required?: boolean; type: "text" | "email" | "tel" | "date" | "select"; d: [number, number]; m: [number, number, number] };

// Positions are relative to the form: d = [x, label top]; m = [label top, input top, input height].
const FIELDS: Field[] = [
  { name: "firstName", label: "First Name", type: "text", d: [13, 36], m: [10, 34, 36] },
  { name: "lastName", label: "Last Name", type: "text", d: [243, 36], m: [80, 104, 36] },
  { name: "dateOfBirth", label: "Date of Birth", type: "date", d: [13, 123], m: [150, 174, 38] },
  { name: "email", label: "Email Address", type: "email", required: true, d: [243, 123], m: [222, 246, 38] },
  { name: "phone", label: "Phone", type: "tel", required: true, d: [13, 210], m: [294, 318, 38] },
  { name: "position", label: "Position Applying For", type: "select", d: [243, 210], m: [366, 390, 38] },
  { name: "startDate", label: "Available Start Date", type: "date", d: [13, 297], m: [438, 462, 38] },
];

function CalendarIcon() {
  return (
    <svg viewBox="0 0 16 15" aria-hidden="true">
      <path d="M16 0H0v15h16zm-1 14H1V4h14zM1 3V1h14v2z" />
      <path d="M3 6h2v2H3zm4 0h2v2H7zm4 0h2v2h-2zm0 4h2v2h-2zm-4 0h2v2H7zm-4 0h2v2H3z" />
    </svg>
  );
}

function DateInput({ id, name }: { id: string; name: string }) {
  const picker = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const open = () => picker.current?.showPicker?.();
  const shown = value ? new Date(`${value}T00:00:00`).toLocaleDateString("en-US") : "";
  return (
    <>
      <input id={id} type="text" readOnly value={shown} onClick={open} className="emp-input" />
      <input ref={picker} type="date" name={name} tabIndex={-1} aria-hidden="true" className="emp-date-native" onChange={(e) => setValue(e.target.value)} />
      <button type="button" className="emp-date-btn" aria-label="Open date picker" onClick={open}>
        <CalendarIcon />
      </button>
    </>
  );
}

export function EmploymentForm({ d, m }: { d: Rect; m: Rect }) {
  const [state, action, pending] = useActionState<FormState, FormData>(submitForm.bind(null, "employment"), { ok: false });

  return (
    <Box d={d} m={m} fromCenter as="form" action={action} className="emp-form local f-avenir-light" aria-label="Join Our Team application">
      {FIELDS.map((f) => {
        const id = `emp-${f.name}`;
        const label: Rect = [f.d[0], f.d[1], 200, 14];
        const mLabel: Rect = [10, f.m[0], 260, 16];
        const input: Rect = [f.d[0], f.d[1] + 22, 200, 40];
        const mInput: Rect = [10, f.m[1], 260, f.m[2]];
        return (
          <div key={f.name}>
            <Box d={label} m={mLabel} as="label" htmlFor={id} className="emp-label">
              {f.label}
              {f.required && " *"}
            </Box>
            <Box d={input} m={mInput} className="emp-field">
              {f.type === "select" ? (
                <>
                  <select id={id} name={f.name} defaultValue="" className="emp-input">
                    <option value="" disabled />
                    {POSITIONS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                  <svg className="emp-chevron" viewBox="0 0 9.2828 4.89817" aria-hidden="true">
                    <path d="M4.64116,4.89817a.5001.5001,0,0,1-.34277-.13574L.15727.86448A.50018.50018,0,0,1,.84282.136L4.64116,3.71165,8.44.136a.50018.50018,0,0,1,.68555.72852L4.98393,4.76243A.5001.5001,0,0,1,4.64116,4.89817Z" />
                  </svg>
                </>
              ) : f.type === "date" ? (
                <DateInput id={id} name={f.name} />
              ) : (
                <input id={id} name={f.name} type={f.type} required={f.required} className="emp-input" />
              )}
            </Box>
          </div>
        );
      })}

      <Box d={[12, 598, 430, 60]} m={[10, 510, 260, 42]} as="button" type="submit" disabled={pending} className="emp-submit">
        Submit
      </Box>
      {(state.ok || state.error) && (
        <Box d={[12, 668, 430]} m={[10, 560, 260]} as="p" role="status" className="emp-status">
          {state.ok ? "Thanks for submitting!" : state.error}
        </Box>
      )}
    </Box>
  );
}
