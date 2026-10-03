import Container from "./Container";
import BeehiivEmbed from "./BeehiivEmbed";

export default function CtaSection() {
  return (
    <section id="join" className="pt-5 pb-20 mobile:pb-14">
      <Container>
        <div className="rounded-3xl bg-[linear-gradient(135deg,#c2410c,#9a3412)] px-10 py-14 text-center text-white mobile:px-[22px] mobile:py-10">
          <h2>Get the next issue free.</h2>
          <p className="mx-auto mt-3.5 mb-6.5 max-w-[34em] text-[1.1rem] text-[#ffe7d6]">
            Join the list and the brief arrives weekly. Reply to any issue and a
            human reads it.
          </p>
          <BeehiivEmbed
            id="cta-form"
            variant="cta"
            fine="Free. One email a week. Unsubscribe anytime."
          />
        </div>
      </Container>
    </section>
  );
}
