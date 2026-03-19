import { useEffect, lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

// Lazy load des sections non critiques (sous la ligne de flottaison)
const Specialties = lazy(() => import("@/components/Specialties"));
const Gallery = lazy(() => import("@/components/Gallery"));
const Events = lazy(() => import("@/components/Events"));
const Pricing = lazy(() => import("@/components/Pricing"));
const Realizations = lazy(() => import("@/components/Realizations"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppFloat = lazy(() => import("@/components/WhatsAppFloat"));

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
      <Suspense fallback={null}>
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
      </Suspense>
    </>
  );
};

export default Index;
