import { motion } from "framer-motion";
import { Shield, Terminal, Code, Globe, Search } from "lucide-react";

const skillCategories = [
  {
    title: "Cybersecurity",
    icon: Shield,
    skills: ["VAPT", "Penetration Testing", "Digital Forensics", "Network Security"],
  },
  {
    title: "Tools",
    icon: Terminal,
    skills: ["Wireshark", "Nmap", "Burp Suite", "Metasploit", "Maltego"],
  },
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "Java", "C++"],
  },
  {
    title: "Web",
    icon: Globe,
    skills: ["Java", "FastAPI", "Tailwind CSS"],
  },
  {
    title: "Other",
    icon: Search,
    skills: ["OSINT", "Malware Analysis", "IoT Security", "Docker", "DFIR"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2">{"// SKILLS"}</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Tech <span className="neon-text">Arsenal</span>
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-6 group hover:neon-border transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <cat.icon className="w-5 h-5 text-primary" />
                <h4 className="font-mono font-semibold text-foreground">{cat.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-mono rounded-md bg-primary/10 text-primary/80 border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
