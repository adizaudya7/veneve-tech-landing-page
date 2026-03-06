import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "1 Halaman Website",
  "Modern landing page design",
  "Mobile responsive",
  "Basic SEO",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Paket Website</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-medium px-4 py-1.5 rounded-bl-xl">
              Populer
            </div>

            <p className="text-sm font-medium text-muted-foreground mb-2">Starter</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-foreground">Rp 1.000.000</span>
            </div>

            <div className="space-y-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-foreground" />
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-primary text-primary-foreground text-center py-3.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Pesan Sekarang
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
