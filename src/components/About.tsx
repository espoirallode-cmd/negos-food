import { useRef, useEffect, useState } from "react";
import chefImg from "@/assets/chef-portrait-new.jpg";

const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = target;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

const About = () => {
  const stats = [
    { target: 5, suffix: "+", label: "Ans d'expérience", description: "Savoir-faire artisanal" },
    { target: 200, suffix: "+", label: "Clients", description: "Témoignages de satisfaction" },
    { target: 100, suffix: "%", label: "Passionné", description: "Dévoué à l'excellence" },
  ];

  return (
    <section id="propos" className="py-24 md:py-32 bg-white dark:bg-background overflow-hidden px-4 md:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-stretch justify-center gap-12 lg:gap-24 xl:gap-40">
          
          {/* Left Side: Content */}
          <div className="reveal order-1 lg:order-1 text-left flex flex-col items-start lg:max-w-xl lg:justify-between lg:self-stretch">
            <div className="flex flex-col items-start">
              <span className="inline-flex items-center gap-2 text-[#0c69e2] font-semibold tracking-wider uppercase text-xs mb-4">
                <i className="fas fa-circle-check text-base" />
                Chef DHOSSOU Abed Négo
              </span>
              
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-slate-900 dark:text-foreground leading-[1.1] mb-4">
                Passion <span className="italic font-title text-[#0c69e2]">Culinaire</span> <br />
                <span className="whitespace-nowrap">Que Vous Méritez.</span>
              </h2>
              
              <p className="text-slate-600 dark:text-muted-foreground text-base md:text-lg mb-0 leading-relaxed max-w-lg">
                Depuis plus de 5 ans, je transforme chaque ingrédient en une œuvre d'art. Mon engagement est de vous offrir l'excellence à travers des créations uniques, alliant finesse et authenticité.
              </p>
            </div>
            
            <div className="mt-10 lg:mt-0 lg:pb-1">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 bg-[#0c69e2] text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-[#0c69e2]/20 hover:bg-[#0c69e2]/90 transition-all hover:translate-x-2 group active:scale-95"
              >
                Réserver une création
                <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Photo Column */}
          <div className="reveal order-2 lg:order-2 flex justify-center lg:justify-start mt-12 lg:mt-0">
            <div className="relative max-w-[360px] w-full pb-6">
              {/* The Main Portrait Container */}
              <div className="relative z-10 rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl w-full">
                <img 
                  src={chefImg} 
                  alt="Portrait du Chef DHOSSOU Abed Négo" 
                  className="w-full aspect-[4/5] object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                />
              </div>

              {/* Stats Overlay centered on photo */}
              <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center gap-2 px-3">
                {stats.map((stat, i) => (
                  <div 
                    key={i} 
                    className="bg-white dark:bg-card p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl flex-1 text-center border border-slate-100 dark:border-white/5"
                  >
                    <div className="text-lg sm:text-xl font-bold text-[#0c69e2] mb-0.5">
                      <Counter target={stat.target} suffix={stat.suffix} />
                    </div>
                    <div className="text-[8px] sm:text-[9px] font-bold text-slate-900 dark:text-white uppercase tracking-tighter leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
