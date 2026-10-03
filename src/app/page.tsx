import Audience from "@/components/Audience";
import Container from "@/components/Container";
import CtaSection from "@/components/CtaSection";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SamplePreview from "@/components/SamplePreview";
import ValueProps from "@/components/ValueProps";

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
      </Container>
      <ValueProps />
      <SamplePreview />
      <Audience />
      <CtaSection />
      <Faq />
      <Footer />
    </>
  );
}
