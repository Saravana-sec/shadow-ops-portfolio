import { motion } from "framer-motion";

const points = [
  "Computer Science Engineering student specializing in Cybersecurity",
  "Strong interest in network security, penetration testing, and cyber forensics",
  "Hands-on builder of real-world security tools and attack simulations",
  "Active CTF player with practical exploitation experience",
  "Chill personality but intensely focused on tech 😄",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2">{"// ABOUT ME"}</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Who <span className="neon-text">am</span> I?
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Terminal-style about */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 neon-border"
          >
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-primary/80" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">about.sh</span>
            </div>
            <div className="font-mono text-sm space-y-2">
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> cat /home/saravana/about.txt
              </p>
              {points.map((point, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="text-foreground/80 pl-4 border-l-2 border-primary/30"
                >
                  → {point}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Projects Built", value: "8+" },
              { label: "CTF Competitions", value: "5+" },
              { label: "Tools Developed", value: "6+" },
              { label: "Security Domains", value: "4+" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-6 text-center group hover:neon-border transition-all duration-300">
                <p className="text-3xl font-bold font-mono neon-text mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
