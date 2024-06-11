import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Connecting World Without Limits!!
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
          ensure high-speed connectivity, reliable coverage, and exceptional customer support. Committed to innovation, the company continuously enhances its offerings to meet the evolving needs of the digital age
          </p>
        </FadeIn>
      </Container>
      <Clients />
      
      <Services />
      <ContactSection />
    </main>
  );
}
