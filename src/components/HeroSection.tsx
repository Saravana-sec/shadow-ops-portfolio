import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const useTypingEffect = (text: string, speed = 50, delay = 500) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayed, done };
};

const HeroSection = () => {
  const { displayed: name, done: nameDone } = useTypingEffect("Saravana Priyan", 80, 300);
  const { displayed: tagline, done: taglineDone } = useTypingEffect(
    "Breaking systems. Securing futures.",
    40,
    1800
  );

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden grid-bg scanline">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Terminal prefix */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0 }}
          className="font-mono text-sm text-muted-foreground mb-4"
        >
          root@kali:~$ whoami
        </motion.div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold font-mono tracking-tight mb-4">
          <span className="neon-text">{name}</span>
          {!nameDone && <span className="terminal-cursor" />}
        </h1>

        {/* Tagline */}
        <div className="h-10 mb-6">
          <p className="text-xl md:text-2xl font-mono text-foreground/80">
            {tagline}
            {nameDone && !taglineDone && <span className="terminal-cursor" />}
          </p>
        </div>

        {/* Role badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {["Cybersecurity Student", "Aspiring Security Researcher", "CTF Player"].map((role) => (
            <span
              key={role}
              className="px-4 py-1.5 rounded-full border border-primary/30 text-primary/80 text-sm font-mono bg-primary/5"
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.8, duration: 0.6 }}
          className="max-w-2xl mx-auto text-muted-foreground mb-10 leading-relaxed"
        >
          Passionate about offensive security, penetration testing, and building tools that expose
          vulnerabilities before adversaries do. Turning curiosity into capability, one exploit at a time.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.1, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button variant="neon" size="lg" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="neon-outline" size="lg" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border-2 border-primary/30 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
