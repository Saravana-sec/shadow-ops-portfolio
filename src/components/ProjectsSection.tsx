import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Windows Vulnerability Tester",
    desc: "Scans and identifies vulnerabilities in Windows systems.",
    tags: ["Python", "Security"],
    github: "https://github.com/Saravana-sec",
    details: [
      "Built a Python-based scanner that enumerates Windows services, open ports, and weak configurations.",
      "Integrated CVE database lookups to match discovered services against known vulnerabilities.",
      "Generates detailed HTML reports with severity ratings and remediation steps.",
      "Supports both local and remote scanning via SMB and WMI protocols.",
    ],
  },
  {
    title: "Password Cracker GUI",
    desc: "GUI-based password testing and brute-force simulation tool.",
    tags: ["Python", "GUI", "Offensive"],
    github: "https://github.com/Saravana-sec",
    details: [
      "Developed a Tkinter-based GUI for password strength analysis and brute-force simulation.",
      "Supports dictionary attacks, rainbow table lookups, and custom charset brute-force.",
      "Implements multi-threading for faster cracking and real-time progress visualization.",
      "Includes hash identification for MD5, SHA-1, SHA-256, and bcrypt formats.",
    ],
  },
  {
    title: "Secure File Vault",
    desc: "Encryption-based secure file storage with authentication and access control.",
    tags: ["Java", "Encryption"],
    github: "https://github.com/Saravana-sec",
    details: [
      "Built in Java using AES-256 encryption for secure file storage.",
      "Implements user authentication with hashed passwords and session management.",
      "Features role-based access control for multi-user environments.",
      "Includes file integrity verification using SHA-256 checksums.",
    ],
  },
  {
    title: "StealthNet (Chrome Extension)",
    desc: "Simulates firewall, IDS, and data exfiltration scenarios. In progress.",
    tags: ["JavaScript", "Extension", "WIP"],
    github: "https://github.com/Saravana-sec",
    details: [
      "Chrome extension that simulates network security scenarios in a sandboxed environment.",
      "Demonstrates firewall bypass techniques and IDS evasion methods.",
      "Visualizes data exfiltration paths and packet flow in real-time.",
      "Currently in active development — adding DNS tunneling simulation.",
    ],
  },
  {
    title: "Smart Box Project",
    desc: "IoT-based secure system concept with embedded protection mechanisms.",
    tags: ["IoT", "Embedded"],
    github: "https://github.com/Saravana-sec",
    details: [
      "Designed an IoT security framework using ESP32 and Raspberry Pi.",
      "Implements tamper detection, encrypted communication, and secure boot.",
      "Features real-time monitoring dashboard for sensor data and alerts.",
      "Demonstrates defense-in-depth approach for embedded systems.",
    ],
  },
  {
    title: "ESP32 Rogue Wi-Fi AP",
    desc: "Rogue access point using ESP32 to simulate Wi-Fi deauthentication attacks. Demonstrates WPA/WPA2 vulnerabilities.",
    tags: ["ESP32", "Wireless", "Offensive"],
    github: "https://github.com/Saravana-sec",
    details: [
      "Programmed an ESP32 to create a rogue access point mimicking legitimate networks.",
      "Implements 802.11 deauthentication frame injection for client disconnection.",
      "Captures WPA/WPA2 handshakes for offline analysis and password auditing.",
      "Includes a captive portal for demonstrating evil twin attack vectors.",
      "Built for educational purposes to understand wireless security flaws.",
    ],
  },
  {
    title: "SSH Honeypot Server",
    desc: "Python-based SSH honeypot using Twisted Conch. Emulates SSH-2.0 protocol, captures attacker behavior for threat intelligence.",
    tags: ["Python", "Threat Intel", "Defensive"],
    github: "https://github.com/Saravana-sec",
    details: [
      "Built using Twisted Conch framework with full SSH-2.0 protocol emulation.",
      "Handles key exchange (KEX) negotiation and simulates realistic shell sessions.",
      "Deploys a fake interactive shell that logs all attacker commands and keystrokes.",
      "Stores captured data in structured format for threat intelligence analysis.",
      "Detects brute-force patterns, credential stuffing, and lateral movement attempts.",
    ],
  },
  {
    title: "NFC Card Cloning & RFID Attack",
    desc: "Simulated NFC card cloning and penetration testing on RFID-based authentication systems.",
    tags: ["RFID", "NFC", "Physical"],
    github: "https://github.com/Saravana-sec",
    details: [
      "Performed NFC card cloning using Proxmark3 and ACR122U readers.",
      "Analyzed MIFARE Classic and DESFire authentication protocols for vulnerabilities.",
      "Demonstrated relay attacks and UID spoofing on access control systems.",
      "Tested RFID-based door locks and payment systems for security weaknesses.",
      "Documented findings with remediation recommendations for physical security teams.",
    ],
  },
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

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
              onClick={() => setSelected(proj)}
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

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="glass-card border-primary/20 max-w-lg max-h-[80vh] overflow-y-auto">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="font-mono text-primary text-xl">{selected.title}</DialogTitle>
                <DialogDescription className="text-muted-foreground">{selected.desc}</DialogDescription>
              </DialogHeader>
              <div className="space-y-3 mt-2">
                <h4 className="font-mono text-sm text-primary">{"// IMPLEMENTATION"}</h4>
                <ul className="space-y-2">
                  {selected.details.map((detail, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1 shrink-0">▹</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {selected.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-xs font-mono rounded bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <Button variant="neon" size="sm" asChild>
                  <a href={selected.github} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
