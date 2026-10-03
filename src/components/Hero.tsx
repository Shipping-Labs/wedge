import BeehiivEmbed from "./BeehiivEmbed";

export default function Hero() {
  return (
    <header
      id="top"
      className="grid grid-cols-[1.1fr_0.9fr] items-center gap-14 pt-12 pb-18 tab:grid-cols-1"
    >
      <div>
        <p className="my-[1em] text-[0.78rem] font-bold tracking-[0.14em] text-accent uppercase">
          Weekly · Free · ~6 minute read
        </p>
        <h1 className="mt-3.5">
          Find the <em className="text-accent not-italic">wedge</em>. Build the
          small thing that pays.
        </h1>
        <p className="mt-5 mb-7 max-w-[34em] text-[1.2rem] text-muted">
          A weekly brief for indie developers and solo and startup founders: the
          SaaS themes that matter, ideas worth stealing, launches with real
          numbers, and the problems founders keep running into.
        </p>
        <BeehiivEmbed
          id="hero-form"
          fine="One email a week. No spam. Unsubscribe in one click."
        />
      </div>

      <div className="relative tab:max-w-[480px]" aria-hidden="true">
        <div className="rotate-[1.4deg] rounded-card border border-line bg-card p-[22px] shadow-[0_30px_60px_-30px_rgba(80,40,10,0.35),0_2px_0_rgba(0,0,0,0.02)] mobile:rotate-0">
          <div className="-mx-[22px] -mt-[22px] mb-[18px] h-1.5 rounded-t-[16px] bg-accent" />
          <small className="text-[0.75rem] text-muted">ISSUE 001 · SAMPLE</small>
          <h4 className="mt-[0.4rem] mb-[0.8rem] font-serif text-[1.1rem] leading-[normal] font-bold">
            Small, specific, and a little boring: that is where the money is.
          </h4>
          <MockRow figure="$1M+ MRR">
            A solo-built AI product, under two years
          </MockRow>
          <MockRow figure="$8 → $15">
            One price change that doubled monthly revenue
          </MockRow>
          <MockRow figure="13% / 44%">
            Share of teams passing AI costs on vs. absorbing them
          </MockRow>
        </div>
        <div className="absolute -bottom-[18px] -left-3.5 -rotate-2 rounded-xl bg-dark px-4 py-3 text-[0.85rem] text-white mobile:left-2">
          3 themes · 4 ideas · 5 traction snapshots
        </div>
      </div>
    </header>
  );
}

function MockRow({
  figure,
  children,
}: {
  figure: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3 border-t border-line py-2.5 text-[0.88rem]">
      <b className="min-w-[78px] font-serif text-[1.05rem] leading-[normal] font-bold text-accent">
        {figure}
      </b>
      <span className="text-muted">{children}</span>
    </div>
  );
}
