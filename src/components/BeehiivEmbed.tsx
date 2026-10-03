"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const LOADER_SRC = "https://subscribe-forms.beehiiv.com/v3/loader.js";
const DEFAULT_FORM_ID = "3ab2424e-bd26-4231-8500-7bfcbdd3ce5a";

/** Beehiiv form id. Override with NEXT_PUBLIC_BEEHIIV_FORM_ID (inlined at build time). */
const FORM_ID = process.env.NEXT_PUBLIC_BEEHIIV_FORM_ID?.trim() || DEFAULT_FORM_ID;

/** The slice of Beehiiv's loader registry we touch on cleanup. */
type BeehiivRegistry = Record<
  string,
  { script?: HTMLScriptElement; destroy?: () => void } | undefined
>;

type Props = {
  /** Anchor id for the wrapper, e.g. "hero-form" or "cta-form". */
  id: string;
  /** `cta` = the form sits on the orange panel (centred, light fine print). */
  variant?: "default" | "cta";
  /** Fine print rendered under the form. */
  fine: string;
};

/**
 * Beehiiv's official embedded subscribe form (loader.js v3).
 *
 * The loader finds `script[data-beehiiv-form]` elements in the document and renders
 * the form (an iframe) right after each script, so the script is injected inside our
 * own container on mount, instead of being rendered by React (React never executes
 * `<script>` tags it renders on the client).
 *
 * - Strict mode / re-mount safe: we skip injection if the container already has a
 *   script, and cleanup tears everything down so the second mount starts clean.
 * - The container reserves vertical space (min-height) so the page doesn't jump
 *   while the iframe loads.
 * - Beehiiv's inline layout needs ~265px for padding + button, so on phones the
 *   embed bleeds to the edge of its parent (page gutter in the hero, panel edge in
 *   the CTA) to leave room for the email input.
 */
export default function BeehiivEmbed({ id, variant = "default", fine }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const cta = variant === "cta";

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    // Guard against duplicate injection into the same container.
    if (host.querySelector("script[data-beehiiv-form]")) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = LOADER_SRC;
    script.setAttribute("data-beehiiv-form", FORM_ID);
    host.appendChild(script);

    return () => {
      // Let the loader drop its listeners/registry entry if it already rendered us.
      const registry = (window as unknown as { __bhv_embeds?: BeehiivRegistry })
        .__bhv_embeds;
      const embed = registry?.[FORM_ID];
      if (embed?.script === script) embed.destroy?.();

      // Move whatever is left (script, iframe wrapper) into a detached fragment
      // rather than deleting the script outright: if the loader's config request is
      // still in flight it will insert next to `script`, which must still have a parent.
      const trash = document.createDocumentFragment();
      trash.append(...Array.from(host.childNodes));
    };
  }, []);

  return (
    <>
      <div
        id={id}
        ref={hostRef}
        className={`min-h-[315px] scroll-mt-6 ${
          cta
            ? "mx-auto w-full max-w-[520px] overflow-hidden mobile:min-h-[340px] rounded-[14px] mobile:-mx-[22px] mobile:w-[calc(100%+44px)] mobile:max-w-none mobile:rounded-none"
            : "w-full max-w-[520px] tab:max-w-none mobile:-mx-6 mobile:w-[calc(100%+3rem)]"
        }`}
      />
      <p
        className={
          cta
            ? "mx-auto mt-3.5 max-w-[34em] text-[1.1rem] text-[#ffe7d6]"
            : "mt-2.5 text-[0.85rem] text-muted"
        }
      >
        {fine}
      </p>
      <p
        className={
          cta
            ? "mx-auto mt-2 mb-6.5 max-w-[34em] text-[0.9rem] text-[#ffe7d6]"
            : "mt-1 text-[0.85rem] text-muted"
        }
      >
        By subscribing you agree to the{" "}
        <Link className="underline" href="/terms">
          Terms
        </Link>{" "}
        and{" "}
        <Link className="underline" href="/privacy">
          Privacy Policy
        </Link>
        .
      </p>
    </>
  );
}
