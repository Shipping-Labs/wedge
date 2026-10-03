import { btnSmall } from "./buttonStyles";

export default function Header() {
  return (
    <nav aria-label="Main" className="flex items-center justify-between py-5">
      <a
        className="flex items-center gap-2.5 font-serif text-[1.25rem] leading-[normal] font-bold text-ink no-underline"
        href="#top"
      >
        <span
          className="grid size-[34px] place-items-center rounded-[9px] bg-accent font-serif text-[1.05rem] leading-[normal] font-bold text-white"
          aria-hidden="true"
        >
          W
        </span>
        The Wedge
      </a>
      <div className="flex items-center gap-6">
        <a
          className="mobile:hidden text-[0.95rem] font-medium text-muted no-underline hover:text-ink"
          href="#inside"
        >
          What&apos;s inside
        </a>
        <a
          className="mobile:hidden text-[0.95rem] font-medium text-muted no-underline hover:text-ink"
          href="#faq"
        >
          FAQ
        </a>
        <a
          className={`${btnSmall} no-underline`}
          href="#join"
        >
          Subscribe
        </a>
      </div>
    </nav>
  );
}
