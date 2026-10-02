import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServicesOverview from "@/components/ServicesOverview";
import Industries from "@/components/Industries";
import WhyChooseUs from "@/components/WhyChooseUs";
import Brands from "@/components/Brands";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans">
      <Hero />
      <TrustStrip />
      <ServicesOverview />
      <Industries />
      <WhyChooseUs />
      <Brands />
      <ContactForm />
    </div>
  );
}
