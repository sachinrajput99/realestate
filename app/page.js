
import HeroSection from "./Component/Hero";
import Marquee from "./Component/Marquee";
import AboutSection from "./Component/AboutSection";
import FeaturedProperties from "./Component/FeaturedProperties";
import ServicesSection from "./Component/ServicesSection";
import FAQSection from "./Component/FAQSection";
import ContactSection from "./Component/ContactSection";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import WhatsappButton from "./Component/WhatsappButton";

export default function Home() {
  return (
    <>
       <Navbar/>
      <HeroSection />
      <Marquee />
      <AboutSection />
      <FeaturedProperties />
      <ServicesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsappButton/>
    </>
  );
}
