import Container from "./Container";
import SectionHead from "./SectionHead";

const faqs = [
  {
    q: "How often does it come out, and what does it cost?",
    a: "Once a week, free. A typical issue takes about six minutes to read.",
  },
  {
    q: "Do you copy other people's posts?",
    a: "No. We summarise in our own words, credit the original, and always link back so you can read the full story.",
  },
  {
    q: "Are the ideas validated?",
    a: "No, and we say so. Ideas are starting points inspired by real market signals. Each one includes a cheap first step so you can validate before you build.",
  },
  {
    q: "Can I trust the numbers?",
    a: "We attribute every figure and label founder-reported numbers as such. If we can't verify something, we leave it out.",
  },
  {
    q: "How do I unsubscribe?",
    a: "Every issue has a one-click unsubscribe link in the footer. We'll never make it hard.",
  },
  {
    q: "Can I submit my launch or suggest a topic?",
    a: "Yes. Reply to any issue with a link and a sentence on why it matters.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-20 mobile:py-14">
      <Container>
        <SectionHead eyebrow="FAQ" title="Good questions." />
        <div className="max-w-[760px]">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-line py-[18px]">
              <summary className="flex cursor-pointer list-none justify-between gap-4 font-sans text-[1.08rem] leading-[normal] font-semibold after:text-[1.4rem] after:leading-none after:text-accent after:transition-all after:duration-200 after:ease-[ease] after:content-['+'] group-open:after:rotate-45 [&::-webkit-details-marker]:hidden">
                {f.q}
              </summary>
              <p className="mt-2.5 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
