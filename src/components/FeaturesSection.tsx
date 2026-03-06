import { motion } from "framer-motion";
import { Palette, Smartphone, Search, Zap } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Modern Design",
    description: "Desain bersih dan profesional yang membuat bisnis Anda tampil premium.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Tampil sempurna di semua perangkat — desktop, tablet, dan smartphone.",
  },
  {
    icon: Search,
    title: "SEO Friendly",
    description: "Dioptimalkan agar website Anda mudah ditemukan di Google.",
  },
  {
    icon: Zap,
    title: "Fast Loading",
    description: "Performa cepat untuk pengalaman pengguna yang lebih baik.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-32 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Setiap website yang kami buat dirancang untuk memberikan hasil terbaik bagi bisnis Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border hover:border-foreground/20 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center mb-5">
                <feature.icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
