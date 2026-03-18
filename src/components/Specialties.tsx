const specialties = [
  { icon: "fa-birthday-cake", title: "Gâteaux d'Événement", desc: "Anniversaires, baptêmes et fêtes thématiques." },
  { icon: "fa-ice-cream", title: "Crèmes & Glaces", desc: "Onctuosité et fraîcheur artisanale." },
  { icon: "fa-bread-slice", title: "Viennoiseries & Pains", desc: "Le croustillant du beurre pur." },
  { icon: "fa-pizza-slice", title: "Mini Pizza & Friands", desc: "Feuilletés gourmands pour vos cocktails." },
  { icon: "fa-gem", title: "Gâteaux Miroir", desc: "L'élégance d'un glaçage parfait." },
  { icon: "fa-cookie", title: "Cakes Personnalisés", desc: "Personnalisation totale de vos envies." },
  { icon: "fa-champagne-glasses", title: "Mariages & Baptêmes", desc: "Pièces montées majestueuses." },
  { icon: "fa-gift", title: "Coffrets Cadeaux", desc: "Le plaisir d'offrir l'excellence." },
];

const Specialties = () => (
  <section id="services" className="py-24 md:py-32 bg-white dark:bg-card/50">
    <div className="container mx-auto px-6 text-center">
      <div className="max-w-3xl mx-auto mb-12 sm:mb-20 reveal px-4">
        <h2 className="text-3xl md:text-5xl font-title mb-6 text-[#0c69e2] dark:text-foreground">Nos Spécialités</h2>
        <p className="text-muted-foreground text-sm sm:text-lg">Une palette de saveurs raffinées pour vos plus beaux événements.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {specialties.map((s, i) => (
          <div
            key={i}
            className={`reveal group p-6 sm:p-8 mx-auto w-full max-w-[280px] sm:max-w-none rounded-[1.5rem] sm:rounded-[2.5rem] border transition-all duration-500 hover:shadow-2xl cursor-default ${
              i % 2 === 0
                ? "bg-primary text-white border-primary hover:shadow-primary/30"
                : "bg-white text-foreground border-primary/10 hover:border-primary/30 hover:shadow-primary/10"
            }`}
          >
            <div className={`w-14 h-14 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 transition-colors duration-500 ${
              i % 2 === 0 ? "bg-white/20 group-hover:bg-white/30" : "bg-primary/10 group-hover:bg-primary"
            }`}>
              <i className={`fas ${s.icon} text-2xl sm:text-3xl transition-colors duration-500 ${
                i % 2 === 0 ? "text-white" : "text-primary group-hover:text-white"
              }`} />
            </div>
            <h3 className={`text-lg sm:text-xl font-bold mb-3 ${i % 2 === 0 ? "text-white" : "text-primary"}`}>{s.title}</h3>
            <p className={`text-[13px] sm:text-sm leading-relaxed ${i % 2 === 0 ? "text-white/80" : "text-muted-foreground"}`}>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Specialties;
