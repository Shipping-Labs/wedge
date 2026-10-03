"use client";

import { useId, useState } from "react";
import { btn, btnDark } from "./buttonStyles";

const PLACEHOLDER_URL = "https://example.com/subscribe-placeholder";

/**
 * Where the form posts. Set NEXT_PUBLIC_SUBSCRIBE_URL to your newsletter platform's
 * embed endpoint (Beehiiv / Buttondown). Unset = demo mode (no network request).
 */
const SUBSCRIBE_URL = process.env.NEXT_PUBLIC_SUBSCRIBE_URL?.trim() || PLACEHOLDER_URL;

type Props = {
  /** Used to build unique ids, e.g. "hero" or "cta". */
  id: string;
  /** Submit button label. */
  button: string;
  /** `cta` = the form lives on the orange panel (centred, dark button). */
  variant?: "default" | "cta";
  /** Fine print rendered under the status message. */
  fine: string;
};

export default function SignupForm({
  id,
  button,
  variant = "default",
  fine,
}: Props) {
  const [message, setMessage] = useState("");
  const inputId = useId();
  const cta = variant === "cta";

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const value = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    if (!/^\S+@\S+\.\S+$/.test(value)) {
      e.preventDefault();
      setMessage("Please enter a valid email address.");
      return;
    }
    if (SUBSCRIBE_URL.includes("example.com")) {
      e.preventDefault();
      setMessage(
        "Demo only: connect this form to your newsletter platform to go live.",
      );
    }
  }

  return (
    <>
      <form
        id={`form-${id}`}
        className={`flex flex-wrap gap-2.5 ${cta ? "mx-auto max-w-[520px]" : ""}`}
        action={SUBSCRIBE_URL}
        method="post"
        noValidate
        onSubmit={onSubmit}
      >
        <label
          className="absolute h-px w-px overflow-hidden [clip:rect(0_0_0_0)]"
          htmlFor={inputId}
        >
          Email address
        </label>
        <input
          id={inputId}
          className="min-w-0 flex-[1_1_240px] rounded-[10px] border-[1.5px] border-field bg-white px-4 py-[0.9rem] font-sans text-base leading-[normal] font-medium text-ink placeholder:text-[#757575]"
          type="email"
          name="email"
          placeholder="you@yourstartup.com"
          autoComplete="email"
          required
        />
        <button className={cta ? btnDark : btn} type="submit">
          {button}
        </button>
      </form>
      <p
        className={
          cta
            ? "mx-auto mt-3.5 mb-6.5 min-h-[1.2em] max-w-[34em] text-[1.1rem] font-semibold text-[#ffe7d6]"
            : "mt-2.5 mb-[1em] min-h-[1.2em] text-[0.9rem] font-semibold text-accent-d"
        }
        role="status"
        aria-live="polite"
      >
        {message}
      </p>
      <p
        className={
          cta
            ? "mx-auto mt-3.5 mb-6.5 max-w-[34em] text-[1.1rem] text-[#ffe7d6]"
            : "mt-2.5 text-[0.85rem] text-muted"
        }
      >
        {fine}
      </p>
    </>
  );
}
