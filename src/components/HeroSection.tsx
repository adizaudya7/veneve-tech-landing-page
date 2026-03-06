import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-muted-foreground text-xs font-medium mb-8 border border-border">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Menerima pesanan website
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Website Profesional
            <br />
            <span className="text-muted-foreground">untuk Bisnis Anda</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Kami membantu UMKM dan profesional memiliki website modern, cepat, dan terpercaya.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Lihat Paket
              <ArrowRight size={16} />
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border text-foreground px-8 py-3.5 rounded-xl text-sm font-medium hover:bg-secondary transition-colors"
            >
              Mulai Sekarang
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
