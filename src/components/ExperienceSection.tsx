import { motion } from "framer-motion";
import { Trophy, BookOpen, Award, Target } from "lucide-react";

const experiences = [
  {
    icon: Trophy,
    title: "DEF CON Chennai",
    detail: "Participated in CTF competition — secured 28th place",
  },
  {
    icon: BookOpen,
    title: "OWASP Meetups",
    detail: "Attended sessions on modern web vulnerabilities and security practices",
  },
  {
    icon: Award,
    title: "Noctivus Symposium",
    detail: "Contributed to IoT workshop and tools expo",
  },
];

const certifications = [
  "Network Security",
  "Cyber Forensics",
  "Malware Analysis",
  "Firewalls and IDS/IPS",
];

const achievements = [
  "Active CTF competitor",
  "Built multiple offensive & defensive security tools",
  "Hands-on experience in real-world attack simulations",
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2">{"// EXPERIENCE"}</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Events & <span className="neon-text">Achievements</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Events */}
          <div className="lg:col-span-2 space-y-4">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="glass-card p-5 flex items-start gap-4 group hover:neon-border transition-all duration-300"
              >
                <div className="p-2 rounded-md bg-primary/10 text-primary">
                  <exp.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-mono font-semibold text-foreground mb-1">{exp.title}</h4>
                  <p className="text-sm text-muted-foreground">{exp.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Side column */}
          <div className="space-y-6">
            {/* Learning */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="glass-card p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-4 h-4 text-primary" />
                <h4 className="font-mono font-semibold text-sm text-foreground">Currently Learning</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {certifications.map((c) => (
                  <span
                    key={c}
                    className="px-2 py-1 text-xs font-mono rounded bg-primary/10 text-primary/80 border border-primary/20"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="glass-card p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-primary" />
                <h4 className="font-mono font-semibold text-sm text-foreground">Achievements</h4>
              </div>
              <ul className="space-y-2">
                {achievements.map((a) => (
                  <li key={a} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-0.5">▹</span> {a}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
