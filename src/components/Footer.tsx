const Footer = () => (
  <footer className="bg-white dark:bg-background pt-20 pb-8 border-t border-slate-100 dark:border-white/5">
    <div className="container mx-auto px-6">
      <div className="grid sm:grid-cols-2 gap-10 mb-14">
        <div>
          <h3 className="font-display text-2xl font-semibold mb-3 text-[#0c69e2]">Négo's Food</h3>
          <p className="text-slate-500 dark:text-muted-foreground text-sm">L'Art de Sublimer Chaque Instant Sucré par le Chef DHOSSOU Abed Négo.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact & Réseaux</h4>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center text-sm text-slate-500 dark:text-muted-foreground">
              <i className="fas fa-phone mr-2 text-[#0c69e2]" /> +229 XX XX XX XX
            </div>
            <div className="flex items-center text-sm text-slate-500 dark:text-muted-foreground">
              <i className="fas fa-envelope mr-2 text-[#0c69e2]" /> contact@negosfood.com
            </div>
            <div className="flex gap-3">
              {["fa-instagram", "fa-facebook", "fa-whatsapp", "fa-tiktok"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-9 h-9 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-[#0c69e2] hover:text-white hover:border-[#0c69e2] transition-colors"
                  aria-label={icon}
                >
                  <i className={`fab ${icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-px bg-slate-100 dark:bg-white/5 mb-6" />
      <p className="text-center text-xs text-slate-400">
        © 2025 Négo's Food · DHOSSOU Abed Négo · Tous droits réservés.
      </p>
    </div>
  </footer>
);

export default Footer;
