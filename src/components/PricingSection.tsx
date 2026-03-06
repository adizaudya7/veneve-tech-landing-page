import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Starter",
    originalPrice: "Rp 3.000.000",
    promoPrice: "Rp 1.000.000",
    popular: false,
    features: [
      "1 Halaman Website",
      "Modern landing page design",
      "Mobile responsive",
      "WhatsApp contact button",
    ],
  },
  {
    name: "Business",
    originalPrice: "Rp 8.000.000",
    promoPrice: "Rp 2.900.000",
    popular: true,
    features: [
      "2 Halaman Website",
      "Custom design",
      "Mobile responsive",
      "Basic SEO setup",
      "Contact form",
      "WhatsApp contact button",
    ],
  },
  {
    name: "Premium",
    originalPrice: "Rp 10.000.000",
    promoPrice: "Rp 7.000.000",
    popular: false,
    features: [
      "5 Halaman Website",
      "Fully custom design",
      "Mobile responsive",
      "SEO optimization",
      "Contact form",
      "WhatsApp contact button",
    ],
  },
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

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-card border rounded-2xl p-8 flex flex-col ${
                pkg.popular
                  ? "border-primary shadow-lg scale-105"
                  : "border-border"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-medium px-4 py-1.5 rounded-bl-xl rounded-tr-2xl">
                  Populer
                </div>
              )}

              <p className="text-sm font-medium text-muted-foreground mb-4">{pkg.name}</p>

              <div className="mb-6">
                <span className="text-lg text-muted-foreground line-through">{pkg.originalPrice}</span>
                <div className="text-3xl font-bold text-foreground mt-1">{pkg.promoPrice}</div>
              </div>

              <div className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature) => (
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
                className={`block w-full text-center py-3.5 rounded-xl text-sm font-medium transition-opacity hover:opacity-90 ${
                  pkg.popular
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground"
                }`}
              >
                Pesan Sekarang
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
