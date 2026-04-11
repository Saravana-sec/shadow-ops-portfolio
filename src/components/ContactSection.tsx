import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { icon: Mail, label: "Email", value: "saravanaofffcial0501@gmail.com", href: "mailto:saravanaofffcial0501@gmail.com" },
  { icon: Github, label: "GitHub", value: "github.com/Saravana-sec", href: "https://github.com/Saravana-sec" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/saravana101", href: "https://www.linkedin.com/in/saravana101/" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2">{"// CONTACT"}</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="neon-text">Touch</span>
          </h3>
          <p className="text-muted-foreground mb-10">
            Interested in collaborating on security research or have a CTF team? Let's connect.
          </p>
        </motion.div>

        <div className="space-y-4 mb-10">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="glass-card p-4 flex items-center gap-4 group hover:neon-border transition-all duration-300"
            >
              <div className="p-2 rounded-md bg-primary/10">
                <link.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground font-mono">{link.label}</p>
                <p className="text-sm text-foreground group-hover:text-primary transition-colors font-mono">
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button variant="neon" size="lg" asChild>
            <a href="mailto:saravanaofffcial0501@gmail.com">Say Hello</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
