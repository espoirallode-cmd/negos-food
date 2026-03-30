import cakeHero from "@/assets/cake-hero.png";
import ScrollVelocity from "./ScrollVelocity";

const Hero = () => {
  const scrollingTexts = [
    <div key="list" className="flex items-center gap-8 text-[#0c69e2]">
      <span>Pâtisserie générale</span> <i className="fas fa-star text-[#e69d12] text-sm" />
      <span>Pâtisserie fine</span> <i className="fas fa-star text-[#e69d12] text-sm" />
      <span>Viennoiserie</span> <i className="fas fa-star text-[#e69d12] text-sm" />
      <span>Cake design</span> <i className="fas fa-star text-[#e69d12] text-sm" />
      <span>Glacerie</span> <i className="fas fa-star text-[#e69d12] text-sm" />
      <span>Cuisine</span> <i className="fas fa-star text-[#e69d12] text-sm" />
    </div>
  ];
  return (
    <section id="accueil" className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-8 overflow-hidden bg-[#F9FBF9] dark:bg-background px-4 sm:px-6">
      <div className="w-full md:max-w-[1200px] mx-auto md:px-8 flex flex-col lg:flex-row lg:items-center justify-center lg:justify-between gap-12 lg:gap-8 xl:gap-4 flex-grow">
        <div className="relative z-10 flex flex-col items-center lg:items-start w-full lg:w-1/2">
          <h1 className="reveal text-primary text-[26px] sm:text-4xl md:text-6xl lg:text-7xl font-title tracking-tight leading-[1.3] lg:leading-[1.08] mb-6 text-center lg:text-left w-full">
            <span className="block lg:inline">L'Art de Sublimer</span> <br className="hidden lg:block" />
            <span className="block lg:inline lg:whitespace-nowrap"><span className="italic text-primary/80">Chaque Instant</span> Sucré</span>
          </h1>
          <p className="reveal text-muted-foreground text-[14px] sm:text-base md:text-lg mb-8 max-w-xl font-light leading-relaxed text-center lg:text-left">
            Des créations artisanales sur-mesure <br className="sm:hidden" />
            pour vos événements les plus prestigieux. <br className="sm:hidden" />
            L'excellence à chaque bouchée.
          </p>
          <div className="reveal flex flex-col sm:flex-row gap-3 justify-center lg:justify-start w-full sm:w-auto px-4 sm:px-0">
            <a
              href="#galerie"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-primary text-primary-foreground text-sm sm:text-base font-bold shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all hover:-translate-y-1 active:scale-95 text-center"
            >
              Commander maintenant
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full border-2 border-primary text-primary bg-white text-sm sm:text-base font-bold hover:bg-primary hover:text-white transition-all active:scale-95 text-center"
            >
              Nous contacter
            </a>
          </div>
        </div>
        
        <div className="relative reveal flex justify-center items-center mt-8 lg:mt-0 lg:w-1/2">
          <div className="relative z-10 w-[500px] flex justify-center group">
            <img 
              src={cakeHero} 
              alt="Gâteau d'exception" 
              // @ts-ignore - fetchpriority existe en HTML mais pas encore dans tous les types React 18
              fetchpriority="high"
              loading="eager"
              decoding="async"
              className="w-full h-auto object-contain transform group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl"
            />
          </div>
          {/* Decorative accents */}
          <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full blur-3xl" style={{background: 'rgba(12, 105, 226, 0.20)'}} />
          

        </div>
      </div>

      <div className="w-full mt-12 mb-4">
        <ScrollVelocity 
          texts={scrollingTexts} 
          velocity={25} 
          className="font-title tracking-widest"
        />
      </div>
    </section>
  );
};

export default Hero;
