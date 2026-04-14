import { motion } from "framer-motion";
import { Cloud, Network, Brain, BookOpen, Sparkles } from "lucide-react";

const learningTopics = [
  {
    icon: Cloud,
    title: "Cloud Security",
    description:
      "Exploring AWS & Azure security architectures, IAM policies, cloud-native SIEM, and container security with a focus on misconfigurations and privilege escalation in multi-tenant environments.",
    tags: ["AWS Security Hub", "Azure Sentinel", "Container Hardening", "IAM Exploitation"],
  },
  {
    icon: Network,
    title: "Network Security",
    description:
      "Deepening expertise in enterprise network defense — firewall rule optimization, IDS/IPS evasion techniques, zero-trust architecture, and advanced traffic analysis using packet-level inspection.",
    tags: ["Zero Trust", "IDS/IPS Evasion", "Packet Analysis", "Firewall Tuning"],
  },
  {
    icon: Brain,
    title: "AI Security in LLMs",
    description:
      "Researching adversarial attacks on Large Language Models — prompt injection, jailbreaking, data poisoning, and building guardrails for LLM-powered applications to prevent exploitation.",
    tags: ["Prompt Injection", "LLM Jailbreaking", "Data Poisoning", "AI Guardrails"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-mono text-sm text-primary mb-2">{"// CURRENTLY LEARNING"}</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-3">
            What I'm <span className="neon-text">Exploring</span>
          </h3>
          <p className="text-muted-foreground max-w-xl">
            Always leveling up — here's what I'm currently diving deep into.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {learningTopics.map((topic, i) => (
            <motion.div
              key={topic.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass-card p-6 group hover:neon-border transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4 group-hover:shadow-[0_0_12px_hsl(var(--primary)/0.4)] transition-shadow duration-300">
                <topic.icon className="w-6 h-6" />
              </div>

              {/* Title */}
              <h4 className="font-mono font-bold text-lg text-foreground mb-2 flex items-center gap-2">
                {topic.title}
                <Sparkles className="w-3.5 h-3.5 text-primary/60" />
              </h4>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {topic.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {topic.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-[10px] font-mono rounded bg-primary/10 text-primary/80 border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-xs font-mono text-muted-foreground flex items-center justify-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-primary" />
            Constantly updating my skill tree — offense informs defense.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
