import "./Testimonials.css";

const testimonials = [
  {
    quote: "Le gâteau de mariage était tout simplement sublime, tant visuellement qu'au goût. Merci Chef !",
    name: "Marie-Claire L.",
    event: "Mariage",
  },
  {
    quote: "Les viennoiseries de Négo's Food sont les meilleures de la ville. Un vrai régal chaque matin.",
    name: "Jean-Paul D.",
    event: "Client fidèle",
  },
  {
    quote: "Une pièce montée exceptionnelle pour le baptême de notre fils. Tous les invités ont adoré !",
    name: "Sandrine A.",
    event: "Baptême",
  },
  {
    quote: "Professionnalisme, ponctualité et un goût incroyable. Je recommande les yeux fermés !",
    name: "Patrick M.",
    event: "Anniversaire",
  },
  {
    quote: "Un service irréprochable et des saveurs authentiques. C'est l'adresse incontournable !",
    name: "Sophie K.",
    event: "Réception",
  },
  {
    quote: "Le gâteau personnalisé pour les 10 ans de ma fille était un pur bonheur pour les yeux et les papilles.",
    name: "Thomas B.",
    event: "Anniversaire Enfant",
  }
];

const Testimonials = () => {
  return (
    <section id="temoignages" className="py-16 md:py-24 bg-white dark:bg-card/10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="text-4xl md:text-5xl font-title mb-6 leading-tight text-[#0c69e2] dark:text-foreground">Ce que disent nos clients</h2>
          <p className="text-slate-600 dark:text-muted-foreground text-lg max-w-2xl mx-auto">Votre satisfaction est notre plus belle réussite culinaire.</p>
        </div>

        <div className="testimonials-slider-wrapper reveal mt-4">
          <div className="slider">
            <div className="list">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div key={i} className="item">
                  <div className="testimonial-card">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <i key={j} className="fas fa-star text-[#e69d12] text-sm" />
                      ))}
                    </div>
                    
                    <p className="quote">"{t.quote}"</p>
                    
                    <div className="mt-2">
                      <div className="client-name">{t.name}</div>
                      <div className="client-event">{t.event}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
