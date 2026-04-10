import { motion } from "framer-motion";
import { Skull, Flag, Zap, Clock } from "lucide-react";

const stats = [
  { icon: Flag, label: "CTFs Played", value: "5+", color: "text-primary" },
  { icon: Skull, label: "Challenges Solved", value: "30+", color: "text-primary" },
  { icon: Zap, label: "Best Rank", value: "#28", color: "text-primary" },
  { icon: Clock, label: "Hours of Hacking", value: "200+", color: "text-primary" },
];

const CTFStatsSection = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2">{"// CTF STATS"}</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-10">
            Capture The <span className="neon-text">Flag</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="glass-card p-6 text-center group hover:neon-border transition-all duration-300"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-2xl md:text-3xl font-bold font-mono neon-text mb-1">{stat.value}</p>
              <p className="text-xs text-muted-foreground font-mono">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTFStatsSection;
