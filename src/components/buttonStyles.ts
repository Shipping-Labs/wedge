/** Shared look of every button/link-button on the page (was `.btn`). */
const base =
  "inline-block cursor-pointer rounded-[10px] font-sans leading-[normal] text-white transition-all duration-150 ease-[ease] hover:-translate-y-px mobile:w-full";

/** Default size + the accent colour scheme. */
export const btn = `${base} bg-accent font-semibold px-[1.4rem] py-[0.9rem] text-base hover:bg-accent-d`;
/** Smaller nav version (weight 500 like the other nav links). */
export const btnSmall = `${base} bg-accent font-medium px-4 py-[0.55rem] text-[0.9rem] hover:bg-accent-d`;
/** Dark version used inside the orange CTA panel. */
export const btnDark = `${base} bg-ink font-semibold px-[1.4rem] py-[0.9rem] text-base hover:bg-black`;
