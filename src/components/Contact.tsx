import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F9FBF9] dark:bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3 reveal">
              <h2 className="text-3xl md:text-5xl font-title mb-10 text-[#0c69e2] dark:text-foreground leading-tight">
                Donnons vie <br className="sm:hidden" /> à votre projet
              </h2>
              {submitted ? (
                <div className="bg-primary/5 border border-primary/20 rounded-[2rem] p-12 text-center animate-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary/20">
                    <i className="fas fa-check text-white text-3xl" />
                  </div>
                  <p className="text-2xl font-bold mb-2">Message envoyé !</p>
                  <p className="text-muted-foreground">Le Chef Abed Négo vous contactera sous peu pour discuter de votre événement.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground/70 uppercase tracking-wider">Nom & Prénom</label>
                      <input
                        type="text"
                        required
                        placeholder="Jean Dupont"
                        className="w-full px-6 py-4 rounded-xl border border-primary/10 bg-white dark:bg-card text-foreground focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/30"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground/70 uppercase tracking-wider">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="jean@exemple.com"
                        className="w-full px-6 py-4 rounded-xl border border-primary/10 bg-white dark:bg-card text-foreground focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/30"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground/70 uppercase tracking-wider">Téléphone</label>
                      <input
                        type="tel"
                        placeholder="+229 XX XX XX XX"
                        className="w-full px-6 py-4 rounded-xl border border-primary/10 bg-white dark:bg-card text-foreground focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/30"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground/70 uppercase tracking-wider">Type d'événement</label>
                      <select className="w-full px-6 py-4 rounded-xl border border-primary/10 bg-white dark:bg-card text-foreground focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all cursor-pointer">
                        <option>Anniversaire</option>
                        <option>Mariage</option>
                        <option>Baptême</option>
                        <option>Événement d'entreprise</option>
                        <option>Cocktail Privé</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground/70 uppercase tracking-wider">Votre message</label>
                    <textarea
                      rows={5}
                      placeholder="Dites-nous en plus sur vos envies gourmandes..."
                      className="w-full px-6 py-4 rounded-xl border border-primary/10 bg-white dark:bg-card text-foreground focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/30 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-5 rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-xl shadow-primary/20 hover:bg-primary/90 hover:-translate-y-1 transition-all active:scale-95"
                  >
                    Envoyer ma demande
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-2 reveal">
                <div className="bg-primary text-primary-foreground p-12 rounded-[2.5rem] h-full flex flex-col justify-between shadow-2xl shadow-primary/20">
                <div>
                  <h3 className="text-3xl font-bold mb-10">Contact Direct</h3>
                  <ul className="space-y-10">
                    <li className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                        <i className="fas fa-phone text-xl" />
                      </div>
                      <div>
                        <span className="block text-sm opacity-60 uppercase tracking-widest font-semibold mb-1">Téléphone</span>
                        <span className="text-xl font-medium">+229 XX XX XX XX</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                        <i className="fas fa-envelope text-xl" />
                      </div>
                      <div>
                        <span className="block text-sm opacity-60 uppercase tracking-widest font-semibold mb-1">Email</span>
                        <span className="text-xl font-medium">contact@negosfood.com</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                        <i className="fas fa-location-dot text-xl" />
                      </div>
                      <div>
                        <span className="block text-sm opacity-60 uppercase tracking-widest font-semibold mb-1">Localisation</span>
                        <span className="text-xl font-medium">Cotonou, Bénin</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="flex gap-4 mt-12">
                  {["fa-instagram", "fa-facebook", "fa-whatsapp", "fa-tiktok"].map((icon) => (
                    <a
                      key={icon}
                      href="#"
                      className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all border border-white/5"
                      aria-label={icon}
                    >
                      <i className={`fab ${icon} text-xl`} />
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
