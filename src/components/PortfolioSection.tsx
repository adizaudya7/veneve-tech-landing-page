import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Toko Online Fashion",
    category: "E-Commerce",
    color: "from-neutral-100 to-neutral-200",
  },
  {
    title: "Restoran & Cafe",
    category: "Food & Beverage",
    color: "from-stone-100 to-stone-200",
  },
  {
    title: "Jasa Konsultasi",
    category: "Professional Service",
    color: "from-zinc-100 to-zinc-200",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-32 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Portfolio</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Beberapa contoh website yang telah kami kerjakan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.color} mb-4 flex items-center justify-center border border-border overflow-hidden relative`}>
                <div className="text-muted-foreground/30 text-6xl font-bold">
                  {project.title.charAt(0)}
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors flex items-center justify-center">
                  <ExternalLink
                    size={24}
                    className="text-foreground opacity-0 group-hover:opacity-50 transition-opacity"
                  />
                </div>
              </div>
              <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
