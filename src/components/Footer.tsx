const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2026 Veneve Tech. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {["Home", "Paket", "Portfolio", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item === "Contact" ? "cta" : item === "Paket" ? "pricing" : item.toLowerCase()}`}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
