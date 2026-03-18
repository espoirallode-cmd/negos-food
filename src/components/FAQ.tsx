import { useState } from "react";
import "./FAQ.css";

const faqData = [
  { q: "Quel est le délai de commande ?", a: "Nous recommandons de commander au moins 48h à l'avance pour les gâteaux simples et 1 semaine pour les événements majeurs.", icon: "fa-clock" },
  { q: "Livrez-vous à domicile ?", a: "Oui, nous livrons dans toute la zone urbaine de Cotonou et les environs. Les frais varient selon la distance.", icon: "fa-truck-fast" },
  { q: "Peut-on personnaliser les saveurs ?", a: "Absolument ! Nous discutons avec vous de vos préférences pour créer une saveur qui vous ressemble.", icon: "fa-wand-magic-sparkles" },
  { q: "Comment passer une commande ?", a: "Vous pouvez nous contacter via WhatsApp ou par téléphone. Nous confirmons votre commande sous 24h.", icon: "fa-mobile-screen-button" },
  { q: "Quels modes de paiement acceptés ?", a: "Nous acceptons les Mobile Money (MTN, Moov) et le paiement en espèces à la livraison.", icon: "fa-credit-card" },
  { q: "Faites-vous les grands événements ?", a: "Oui, nous proposons des forfaits sur-mesure pour les séminaires, cocktails et événements corporate.", icon: "fa-building-columns" },
];

const FAQ = () => {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-slate-50 dark:bg-background/50 overflow-hidden">
      <div className="container mx-auto px-6 faq-modern-container reveal">
        
        <div className="offer-card">
          <div className="offer-card__header">
            <h2 className="offer-card__title font-title">FAQ</h2>
            <p className="offer-card__subtitle font-semibold">Toutes vos questions, nos réponses gourmandes.</p>
          </div>

          <div className="offer-card__options">
            {faqData.map((item, i) => (
              <div 
                key={i} 
                className={`offer-card__option ${active === i ? "offer-card__option--active" : ""}`}
                onClick={() => setActive(active === i ? null : i)}
              >
                <div className="offer-card__option-content">
                  <div className="offer-card__option-header">
                    <div className="offer-card__option-icon-wrapper">
                      <i className={`fas ${item.icon} text-lg`} />
                    </div>
                    <div className="offer-card__option-text">
                      <span className="offer-card__option-title">{item.q}</span>
                    </div>
                    <div className="offer-card__option-arrow">
                      <i className="fas fa-chevron-down text-xs" />
                    </div>
                  </div>
                  
                  <div className="offer-card__answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="offer-card__footer">
            <a href="#contact" className="offer-card__btn">
              <span>Besoin d'aide ?</span>
              <i className="fas fa-paper-plane text-xs" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
