import Container from "./Container";

const check = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mt-[3px] flex-none text-glow"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const points = [
  {
    title: "Summarised, never copied",
    body: "Every item links back to the original so you can go deeper.",
  },
  {
    title: "Numbers you can trust",
    body: "Figures are attributed and labelled as founder-reported when they are.",
  },
  {
    title: "One thing to do this week",
    body: "Each issue ends with a single, concrete move.",
  },
];

const tag =
  "text-[0.72rem] font-bold tracking-[0.14em] text-accent uppercase";

function Stat({ figure, children }: { figure: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3.5 border-t border-line py-[11px] text-[0.9rem] text-body-2">
      <b className="min-w-[100px] font-serif text-[1.05rem] leading-[normal] font-bold text-accent">
        {figure}
      </b>
      <span>{children}</span>
    </div>
  );
}

export default function SamplePreview() {
  return (
    <section id="preview" className="bg-dark py-20 text-[#f4f0e8] mobile:py-14">
      <Container className="grid grid-cols-[0.9fr_1.1fr] items-start gap-12 tab:grid-cols-1">
        <div>
          <p className="my-[1em] text-[0.78rem] font-bold tracking-[0.14em] text-glow uppercase">
            Sample issue
          </p>
          <h2 className="mt-2.5">See exactly what lands in your inbox.</h2>
          <ul className="mt-5 grid list-none gap-3.5 p-0">
            {points.map((p) => (
              <li key={p.title} className="flex gap-3">
                {check}
                <div>
                  <strong className="block text-white">{p.title}</strong>
                  <span className="text-[0.95rem] text-dim">{p.body}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-3.5 mb-[1em] text-[0.82rem] text-dim">
            Excerpt from sample issue 001 (Oct 3, 2026). Full sample available
            once the kit is published.
          </p>
        </div>
        <div
          className="relative max-h-[520px] overflow-hidden rounded-card bg-white p-[30px] text-ink after:absolute after:inset-x-0 after:bottom-0 after:h-[120px] after:bg-[linear-gradient(transparent,#fff)] after:content-['']"
          aria-label="Excerpt of a sample issue"
        >
          <span className={tag}>01 · Top SaaS themes this week</span>
          <h4 className="mt-[0.3rem] mb-4 font-serif text-[1.45rem] leading-[1.2] font-bold">
            Small and specific is winning
          </h4>
          <p className="mb-[0.6rem] text-[0.95rem] text-body-2">
            October&apos;s micro-SaaS roundups land on the same pattern:
            products that own one expensive business moment (an invoice chase, a
            compliance deadline, an audit trail) beat broad feature lists.
          </p>
          <h5 className="mt-[1.2rem] mb-[0.3rem] font-serif text-[1.05rem] leading-[normal] font-bold">
            AI is forcing a pricing rebuild
          </h5>
          <p className="mb-[0.6rem] text-[0.95rem] text-body-2">
            Only 13% of surveyed teams fully pass AI inference costs through to
            customers, while 44% absorb them entirely.
          </p>
          <span className={`${tag} mt-[18px] block`}>
            03 · Launches and traction
          </span>
          <Stat figure="$1M+ MRR">
            ParakeetAI: under two years, 1.5M+ users, MVP built over a weekend.
          </Stat>
          <Stat figure="~$150K ARR">
            Bulk Mockup: moving from $8 to $15 a month took revenue from ~$4K to
            ~$8K a month.
          </Stat>
          <Stat figure="$700">PressDrop: first three weeks after launch.</Stat>
        </div>
      </Container>
    </section>
  );
}
