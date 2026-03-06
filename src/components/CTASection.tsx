import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Butuh website untuk
            <br />
            bisnis Anda?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Konsultasikan kebutuhan website Anda secara gratis. Kami siap membantu.
          </p>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={18} />
            Hubungi via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
