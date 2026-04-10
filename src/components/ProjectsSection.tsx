import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Windows Vulnerability Tester",
    desc: "Scans and identifies vulnerabilities in Windows systems.",
    tags: ["Python", "Security"],
  },
  {
    title: "Password Cracker GUI",
    desc: "GUI-based password testing and brute-force simulation tool.",
    tags: ["Python", "GUI", "Offensive"],
  },
  {
    title: "Secure File Vault",
    desc: "Encryption-based secure file storage with authentication and access control.",
    tags: ["Java", "Encryption"],
  },
  {
    title: "StealthNet (Chrome Extension)",
    desc: "Simulates firewall, IDS, and data exfiltration scenarios. In progress.",
    tags: ["JavaScript", "Extension", "WIP"],
  },
  {
    title: "Smart Box Project",
    desc: "IoT-based secure system concept with embedded protection mechanisms.",
    tags: ["IoT", "Embedded"],
  },
  {
    title: "ESP32 Rogue Wi-Fi AP",
    desc: "Rogue access point using ESP32 to simulate Wi-Fi deauthentication attacks. Demonstrates WPA/WPA2 vulnerabilities.",
    tags: ["ESP32", "Wireless", "Offensive"],
  },
  {
    title: "SSH Honeypot Server",
    desc: "Python-based SSH honeypot using Twisted Conch. Emulates SSH-2.0 protocol, captures attacker behavior for threat intelligence.",
    tags: ["Python", "Threat Intel", "Defensive"],
  },
  {
    title: "NFC Card Cloning & RFID Attack",
    desc: "Simulated NFC card cloning and penetration testing on RFID-based authentication systems.",
    tags: ["RFID", "NFC", "Physical"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2">{"// PROJECTS"}</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Built to <span className="neon-text">Exploit</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card p-6 group hover:neon-border transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-mono font-semibold text-foreground group-hover:text-primary transition-colors">
                  {proj.title}
                </h4>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{proj.desc}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs font-mono rounded bg-secondary text-secondary-foreground"
                  >
                    {tag}
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

export default ProjectsSection;
