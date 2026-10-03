import Container from "./Container";
import SectionHead from "./SectionHead";

const svgProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const items = [
  {
    title: "Top SaaS themes",
    body: "The three shifts shaping what to build, price and ship this month, with the evidence behind them.",
    icon: (
      <svg {...svgProps}>
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 3 3 5-6" />
      </svg>
    ),
  },
  {
    title: "Ideas worth stealing",
    body: "Four concrete micro-SaaS and startup ideas: who pays, why now, and a first step you can take this week.",
    icon: (
      <svg {...svgProps}>
        <path d="M9 18h6M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2V17h6v-.3c0-.8.4-1.5 1-2A7 7 0 0 0 12 2z" />
      </svg>
    ),
  },
  {
    title: "Launches & traction",
    body: "Real revenue and growth stories, labelled honestly as founder-reported, so you can benchmark yourself.",
    icon: (
      <svg {...svgProps}>
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V4s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <path d="M4 22V15" />
      </svg>
    ),
  },
  {
    title: "Pain points",
    body: "The problems founders keep voicing, which is where the next product, feature or post is hiding.",
    icon: (
      <svg {...svgProps}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
  },
];

export default function ValueProps() {
  return (
    <section id="inside" className="py-20 mobile:py-14">
      <Container>
        <SectionHead
          eyebrow="What's inside"
          title="Everything you'd skim ten tabs for, in one email."
        >
          Every issue is built to be read in minutes and acted on in days.
        </SectionHead>
        <div className="grid grid-cols-4 gap-[18px] tab:grid-cols-2 mobile:grid-cols-1">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-card border border-line bg-card p-[26px]"
            >
              <div className="mb-4 grid size-11 place-items-center rounded-xl bg-tint text-accent">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p className="mt-2.5 text-[0.97rem] text-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
