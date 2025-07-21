import { Navigation } from "@/components/sections/navigation";
import { Hero } from "@/components/sections/hero";
import { PainPoints } from "@/components/sections/pain-points";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Diagnosis } from "@/components/sections/diagnosis";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <PainPoints />
      <Services />
      <Process />
      <Testimonials />
      <Diagnosis />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
