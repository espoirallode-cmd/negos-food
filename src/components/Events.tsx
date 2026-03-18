import "./Events.css";

const events = [
  { icon: "fa-birthday-cake", title: "Anniversaire", desc: "Des gâteaux personnalisés pour marquer chaque année avec gourmandise." },
  { icon: "fa-ring", title: "Mariage", desc: "Pièces montées et buffets sucrés pour le plus beau jour de votre vie." },
  { icon: "fa-baby", title: "Baptême", desc: "Des douceurs tendres et raffinées pour célébrer les tout-petits." },
  { icon: "fa-glass-cheers", title: "Fêtes & Réceptions", desc: "Cocktails, soirées d'entreprise et événements sur-mesure." },
];

const Events = () => (
  <section id="evenements" className="py-24 md:py-32 bg-white dark:bg-background overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12 sm:mb-20 reveal px-4">
        <h2 className="text-3xl md:text-5xl font-title mb-6 leading-tight text-[#0c69e2] dark:text-foreground">Occasions & Événements</h2>
        <p className="text-slate-600 dark:text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto">Pour chaque moment, une création unique qui raconte votre histoire.</p>
      </div>
      
      <div className="events-container reveal">
        {events.map((e, index) => (
          <div key={index} className="event-card group">
            <div className="icon-box">
              <i className={`fas ${e.icon} text-primary text-xl transition-colors`} />
            </div>
            <div>
              <h3>{e.title}</h3>
              <p>{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Events;
