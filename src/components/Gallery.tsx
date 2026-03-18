import { useState } from "react";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import pancakesImg from "@/assets/pancakes.png";

const items = [
  { src: gallery1, alt: "Gâteau Miroir", cat: "gateaux" },
  { src: gallery4, alt: "Crème Artisanale", cat: "glaces" },
  { src: gallery2, alt: "Wedding Cake", cat: "gateaux" },
  { src: gallery3, alt: "Croissants", cat: "viennoiseries" },
  { src: gallery5, alt: "Gâteau Anniversaire", cat: "gateaux" },
  { src: gallery6, alt: "Pain Viennois", cat: "viennoiseries" },
  { src: gallery7, alt: "Mini Pizza", cat: "evenements" },
  { src: gallery8, alt: "Mousse Chocolat", cat: "gateaux" },
  { src: gallery9, alt: "Pièce Montée", cat: "evenements" },
  { src: pancakesImg, alt: "Pancakes Maison", cat: "viennoiseries", mobileOnly: true },
];

const filters = [
  { label: "Tout", value: "all" },
  { label: "Gâteaux", value: "gateaux" },
  { label: "Glaces", value: "glaces" },
  { label: "Viennoiseries", value: "viennoiseries" },
  { label: "Événements", value: "evenements" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "all" ? items : items.filter((it) => it.cat === filter);

  return (
    <section id="galerie" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 reveal">
          <h2 className="text-3xl md:text-5xl font-title mb-3 text-[#0c69e2] dark:text-foreground">Galerie</h2>
          <p className="text-muted-foreground">Un aperçu de nos créations</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10 reveal">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
                filter === f.value
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-foreground hover:border-primary/40"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 reveal">
          {filtered.map((item, i) => (
            <div
              key={`${item.cat}-${i}`}
              className={`gallery-item relative rounded-xl overflow-hidden aspect-square cursor-pointer group ${
                (item as any).mobileOnly ? "md:hidden" : ""
              }`}
              onClick={() => setLightbox(i)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500"
                loading="lazy"
              />
              <div className="gallery-overlay absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 transition-opacity duration-500">
                <i className="fas fa-search text-primary-foreground text-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <div
            className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-primary-foreground text-3xl hover:text-accent transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Fermer"
            >
              <i className="fas fa-times" />
            </button>
            <img
              src={filtered[lightbox]?.src}
              alt={filtered[lightbox]?.alt}
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
