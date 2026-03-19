import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-16 md:py-32 bg-[#F9FBF9] dark:bg-background overflow-hidden px-4 md:px-0">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-10 sm:gap-16 max-w-[340px] lg:max-w-none mx-auto">
            <div className="lg:col-span-3 reveal text-center sm:text-left">
              <h2 className="text-3xl md:text-5xl font-title mb-8 text-[#0c69e2] dark:text-foreground leading-tight">
                Donnons vie <br className="sm:hidden" /> à votre projet
              </h2>
              {submitted ? (
                <div className="bg-primary/5 border border-primary/20 rounded-[1.5rem] sm:rounded-[2rem] p-8 sm:p-12 text-center animate-in zoom-in duration-500">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary/20">
                    <i className="fas fa-check text-white text-2xl sm:text-3xl" />
                  </div>
                  <p className="text-xl sm:text-2xl font-bold mb-2">Message envoyé !</p>
                  <p className="text-sm sm:text-base text-muted-foreground">Le Chef Abed Négo vous contactera sous peu.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 text-left">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-[10px] sm:text-sm font-semibold mb-2 text-foreground/70 uppercase tracking-wider">Nom & Prénom</label>
                      <input
                        type="text"
                        required
                        placeholder="Jean Dupont"
                        className="w-full px-4 py-2.5 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl border border-primary/10 bg-white dark:bg-card text-foreground focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/30 text-[13px] sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] sm:text-sm font-semibold mb-2 text-foreground/70 uppercase tracking-wider">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="jean@exemple.com"
                        className="w-full px-4 py-2.5 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl border border-primary/10 bg-white dark:bg-card text-foreground focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/30 text-[13px] sm:text-base"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-[10px] sm:text-sm font-semibold mb-2 text-foreground/70 uppercase tracking-wider">Téléphone</label>
                      <input
                        type="tel"
                        placeholder="+229 XX XX XX XX"
                        className="w-full px-4 py-2.5 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl border border-primary/10 bg-white dark:bg-card text-foreground focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/30 text-[13px] sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] sm:text-sm font-semibold mb-2 text-foreground/70 uppercase tracking-wider">Type d'événement</label>
                      <select className="w-full px-4 py-2.5 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl border border-primary/10 bg-white dark:bg-card text-foreground focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all cursor-pointer text-[13px] sm:text-base">
                        <option>Anniversaire</option>
                        <option>Mariage</option>
                        <option>Baptême</option>
                        <option>Événement d'entreprise</option>
                        <option>Cocktail Privé</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] sm:text-sm font-semibold mb-2 text-foreground/70 uppercase tracking-wider">Votre message</label>
                    <textarea
                      rows={4}
                      placeholder="Dites-nous en plus..."
                      className="w-full px-4 py-2.5 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl border border-primary/10 bg-white dark:bg-card text-foreground focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/30 resize-none text-[13px] sm:text-base"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-5 rounded-lg sm:rounded-xl bg-primary text-primary-foreground font-bold text-[15px] sm:text-lg shadow-xl shadow-primary/20 hover:bg-primary/90 hover:-translate-y-1 transition-all active:scale-95"
                  >
                    Envoyer ma demande
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-2 reveal">
                <div className="bg-primary text-primary-foreground p-6 sm:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] h-full flex flex-col justify-between shadow-2xl shadow-primary/20">
                <div>
                  <h3 className="text-xl sm:text-3xl font-bold mb-6 sm:mb-10 text-center sm:text-left">Contact Direct</h3>
                  <ul className="space-y-4 sm:space-y-10">
                    <li className="flex items-start gap-3 sm:gap-5">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                        <i className="fas fa-phone text-base sm:text-xl" />
                      </div>
                      <div>
                        <span className="block text-[8px] opacity-60 uppercase tracking-widest font-semibold mb-0.5">Téléphone</span>
                        <span className="text-base sm:text-xl font-medium">+229 XX XX XX XX</span>
                       </div>
                    </li>
                    <li className="flex items-start gap-3 sm:gap-5">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                        <i className="fas fa-envelope text-base sm:text-xl" />
                      </div>
                      <div>
                        <span className="block text-[8px] opacity-60 uppercase tracking-widest font-semibold mb-0.5">Email</span>
                        <span className="text-sm sm:text-xl font-medium whitespace-nowrap tracking-tighter">contact@negosfood.com</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 sm:gap-5">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                        <i className="fas fa-location-dot text-base sm:text-xl" />
                      </div>
                      <div>
                        <span className="block text-[8px] opacity-60 uppercase tracking-widest font-semibold mb-0.5">Localisation</span>
                        <span className="text-base sm:text-xl font-medium">Cotonou, Bénin</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center sm:justify-start gap-3 mt-8 sm:mt-12">
                  {["fa-instagram", "fa-facebook", "fa-whatsapp", "fa-tiktok"].map((icon) => (
                    <a
                      key={icon}
                      href="#"
                      className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all border border-white/5"
                      aria-label={icon}
                    >
                      <i className={`fab ${icon} text-base sm:text-xl`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
