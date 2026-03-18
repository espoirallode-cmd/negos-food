import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import Gallery from "@/components/Gallery";
import Events from "@/components/Events";
import Pricing from "@/components/Pricing";
import Realizations from "@/components/Realizations";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Specialties />
      <Gallery />
      <Events />
      <Pricing />
      <Realizations />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Index;
