const plans = [
  {
    name: "ESSENTIELLE",
    price: "15 000 FCFA",
    desc: "Idéal pour les petits moments gourmands et intimes.",
    features: ["Gâteau simple (6-8 pers)", "Décoration standard", "Saveur au choix", "20 gourmandises"],
    featured: false,
    cta: "COMMANDER",
  },
  {
    name: "PRESTIGE",
    price: "35 000 FCFA",
    desc: "L'élégance sur-mesure pour vos événements marquants.",
    features: ["Création sur-mesure", "Décorations premium", "Livraison zone urbaine", "Accompagnement VIP", "Service client prioritaire"],
    featured: true,
    cta: "COMMANDER",
  },
  {
    name: "SIGNATURE",
    price: "85 000 FCFA",
    desc: "L'excellence ultime pour des réceptions mémorables.",
    features: ["Pièces montées d'exception", "Buffet complet prestige", "Installation sur site", "Design inédit", "Fleurs comestibles"],
    featured: false,
    cta: "DEMANDER DEVIS",
  },
];

const Pricing = () => (
  <section id="tarifs" className="py-24 md:py-36 bg-slate-50 dark:bg-background/20 overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="text-center mb-24 reveal">
        <h2 className="text-4xl md:text-6xl font-title mb-6 text-[#0c69e2] dark:text-foreground">Nos Formules</h2>
        <p className="text-slate-600 dark:text-muted-foreground text-lg max-w-xl mx-auto">Choisissez la perfection pour vos instants sucrés.</p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-0 max-w-6xl mx-auto lg:items-center">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`reveal w-full max-w-[320px] p-8 lg:p-10 rounded-[2.5rem] transition-all duration-500 relative flex flex-col items-center text-center shadow-2xl ${
              plan.featured
                ? "bg-[#0c69e2] text-white z-20 lg:scale-105 shadow-[#0c69e2]/30 py-10 lg:min-h-[580px]"
                : "bg-white dark:bg-card text-slate-900 dark:text-foreground z-10 lg:min-h-[500px] border border-slate-100 dark:border-white/5"
            }`}
          >
            {/* Plan Name */}
            <h3 className={`text-[10px] font-bold tracking-[0.3em] mb-4 uppercase ${plan.featured ? "text-white/80" : "text-slate-400"}`}>
              {plan.name}
            </h3>

            {/* Description */}
            <p className={`text-xs mb-6 leading-relaxed px-2 ${plan.featured ? "text-white/90" : "text-slate-500 dark:text-muted-foreground"}`}>
              {plan.desc}
            </p>

            {/* Price */}
            <div className={`text-4xl font-bold mb-6 ${plan.featured ? "text-white" : "text-[#0c69e2]"}`}>
               {plan.price.split(' ')[0]} <span className="text-sm opacity-80">{plan.price.split(' ').slice(1).join(' ')}</span>
            </div>

            {/* Toggle UI Visual */}
            <div className={`flex p-1 rounded-full mb-8 w-40 ${plan.featured ? "bg-white/10" : "bg-slate-100 dark:bg-white/5"}`}>
              <div className={`flex-1 py-1.5 text-[9px] font-bold rounded-full ${plan.featured ? "bg-white/20 text-white" : "bg-white dark:bg-[#0c69e2] text-[#0c69e2] dark:text-white"}`}>Fixe</div>
              <div className={`flex-1 py-1.5 text-[9px] font-bold opacity-40`}>Sur-mesure</div>
            </div>
            
            {/* Features list */}
            <ul className="space-y-5 mb-12 text-left w-full pl-4">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center gap-4 text-sm font-medium">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.featured ? "bg-white/20" : "bg-[#0c69e2]/10"}`}>
                    <i className={`fas fa-check text-[8px] ${plan.featured ? "text-white" : "text-[#0c69e2]"}`} />
                  </div>
                  <span className={plan.featured ? "text-white/90" : "text-slate-600 dark:text-muted-foreground"}>{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="#contact"
              className={`w-full py-5 rounded-[1.5rem] font-bold text-sm tracking-widest transition-all active:scale-95 ${
                plan.featured
                  ? "bg-white text-[#0c69e2] hover:bg-slate-100"
                  : "border-2 border-slate-200 dark:border-white/10 text-slate-800 dark:text-white hover:border-[#0c69e2] hover:text-[#0c69e2]"
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>

      <p className="text-center mt-20 text-xs text-slate-400 uppercase tracking-widest font-semibold">
        * Tarifs personnalisables selon vos préférences culinaires.
      </p>
    </div>
  </section>
);

export default Pricing;
