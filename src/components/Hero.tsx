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
    <section id="accueil" className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-8 overflow-hidden bg-[#F9FBF9] dark:bg-background">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-5 items-center flex-grow">
        <div className="relative z-10 text-left">
          {/* Badge removed */}
          <h1 className="reveal text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-title tracking-tight leading-[1.08] mb-4">
            <span className="whitespace-nowrap">L'Art de Sublimer</span> <br/>
            <span className="whitespace-nowrap"><span className="italic text-primary/80">Chaque Instant</span> Sucré</span>
          </h1>
          <p className="reveal text-muted-foreground text-base md:text-lg mb-6 max-w-xl font-light leading-relaxed">
            Des créations artisanales sur-mesure pour vos événements les plus prestigieux. L'excellence à chaque bouchée.
          </p>
          <div className="reveal flex gap-5 justify-start flex-wrap">
            <a
              href="#galerie"
              className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all hover:-translate-y-1 active:scale-95"
            >
              Commander maintenant
            </a>
            <a
              href="#contact"
              className="px-10 py-4 rounded-full border-2 border-primary text-primary bg-white font-bold hover:bg-primary hover:text-white transition-all active:scale-95"
            >
              Nous contacter
            </a>
          </div>
        </div>
        
        <div className="relative reveal flex justify-center items-center mt-12 lg:mt-0 lg:flex">
          <div className="relative z-10 w-[500px] flex justify-center group">
            <img 
              src={cakeHero} 
              alt="Gâteau d'exception" 
              className="w-full h-auto object-contain transform group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl"
            />
          </div>
          {/* Decorative accents */}
          <div className="absolute top-10 right-0 w-40 h-40 rounded-full blur-2xl" style={{background: 'rgba(12, 105, 226, 0.25)'}} />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full blur-3xl" style={{background: 'rgba(12, 105, 226, 0.20)'}} />
          
          {/* Decorative dots/shapes */}
          <div className="absolute top-20 right-10 w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-xl z-20 animate-bounce-soft">
            <i className="fas fa-cake-candles text-2xl" />
          </div>
        </div>
      </div>

      <div className="w-full mt-12 mb-4">
        <ScrollVelocity 
          texts={scrollingTexts} 
          velocity={15} 
          className="font-title tracking-widest"
        />
      </div>
    </section>
  );
};

export default Hero;
