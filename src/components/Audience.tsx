import Container from "./Container";
import SectionHead from "./SectionHead";

const people = [
  {
    title: "Indie developers",
    body: "You can build almost anything. The brief helps you choose what is worth building and how to price it.",
    pills: ["Side projects", "Micro-SaaS"],
  },
  {
    title: "Solo founders",
    body: "No team, limited hours. Get the market signal, benchmarks and a weekly move without the research rabbit hole.",
    pills: ["Bootstrapped", "Build in public"],
  },
  {
    title: "Startup founders",
    body: "Stay current on SaaS and AI monetization shifts, spot gaps in the market, and pressure-test your next bet.",
    pills: ["SaaS", "Early stage"],
  },
];

export default function Audience() {
  return (
    <section id="who" className="py-20 mobile:py-14">
      <Container>
        <SectionHead eyebrow="Who it's for" title="Built for people who ship." />
        <div className="grid grid-cols-3 gap-[18px] tab:grid-cols-1">
          {people.map((p) => (
            <div
              key={p.title}
              className="rounded-card border border-line bg-card p-[26px]"
            >
              <h3 className="mb-1.5">{p.title}</h3>
              <p className="mt-2.5 text-[0.97rem] text-muted">{p.body}</p>
              {p.pills.map((pill) => (
                <span
                  key={pill}
                  className="mt-3 mr-1.5 mb-0 inline-block rounded-full bg-tint px-[0.65rem] py-1 text-[0.78rem] font-semibold text-accent-d"
                >
                  {pill}
                </span>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
