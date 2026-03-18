import gallery5 from "@/assets/gallery-5.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";

const realisations = [
  { img: gallery5, title: "Anniversaire Royal", desc: "50 convives · Cotonou", badge: "Cotonou" },
  { img: gallery2, title: "Mariage Élégant", desc: "200 convives · Porto-Novo", badge: "Porto-Novo" },
  { img: gallery8, title: "Soirée d'Entreprise", desc: "100 convives · Abomey-Calavi", badge: "Abomey-Calavi" },
  { img: gallery9, title: "Baptême Chic", desc: "30 convives · Parakou", badge: "Parakou" },
];

const Realizations = () => (
  <section className="py-24 md:py-32 bg-white dark:bg-background">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12 sm:mb-20 reveal px-4">
        <h2 className="text-2xl sm:text-5xl font-title mb-6 text-[#0c69e2] dark:text-foreground">Nos Réalisations</h2>
        <p className="text-muted-foreground text-sm sm:text-lg max-w-3xl mx-auto">Découvrez quelques-uns de nos projets réalisés avec passion à travers le Bénin.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {realisations.map((r, i) => (
          <div key={i} className="reveal group bg-white dark:bg-card rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-primary/5 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 w-full max-w-[320px] mx-auto sm:max-w-none">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={r.img} alt={r.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
            </div>
            <div className="p-6 sm:p-8 group-hover:bg-primary/5 transition-colors">
              <span className="inline-block text-[10px] sm:text-[11px] font-bold text-white bg-secondary px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest shadow-lg shadow-secondary/20">{r.badge}</span>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-primary">{r.title}</h3>
              <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 sm:mt-16 text-center reveal px-2 sm:px-4">
        <div className="inline-flex items-center gap-1.5 px-2 py-2 sm:px-6 sm:py-3.5 rounded-full bg-primary/5 text-primary font-bold text-[9px] sm:text-base border border-primary/10 whitespace-nowrap overflow-hidden">
          <i className="fas fa-truck text-secondary shrink-0" />
          <span>Disponible pour déplacement dans tout le Bénin</span>
        </div>
      </div>
    </div>
  </section>
);

export default Realizations;
