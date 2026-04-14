import { motion } from "framer-motion";
import { FileText, Download, Award, GraduationCap, Briefcase, Shield, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const education = [
  {
    school: "Velammal Engineering College",
    degree: "B.E in CSE - Cybersecurity",
    period: "Expected 2027",
    location: "Chennai, IN",
    gpa: "8.01 / 10.0",
  },
  {
    school: "Velammal School",
    degree: "Higher Secondary",
    period: "Grad. May 2023",
    location: "Chennai, IN",
  },
];

const certifications = [
  "CompTIA PenTest+ (TryHackMe) — 2025",
  "Google Cybersecurity Professional — 2024",
  "Certified Ethical Hacker (CEH)",
  "Cybersecurity Fundamentals (IBM)",
  "Networking Basics — 2024",
  "CSX - Cybersecurity Fundamentals",
];

const awards = [
  { year: "2025", rank: "7th / 52", name: "CYSCOM VIT Chennai — Final Trace CTF" },
  { year: "2025", rank: "127th / 972", name: "K17 CTF — UNSW SecSoc" },
  { year: "2025", rank: "37th / 134", name: "ACNCTF '25 — Amrita Cybernation" },
  { year: "2025", rank: "National", name: "CTF — Indian Army Terrier Cyber Quest '25" },
  { year: "2025", rank: "7th / 53", name: "Flag Rush 2.0" },
  { year: "2025", rank: "Finalist", name: "Smart India Hackathon (SIH) 2025" },
];

const skills = [
  "Penetration Testing & Bug Bounty",
  "Network Security & Honeypot Servers",
  "Linux Security Tools & Scripting",
  "Wireshark · Maltego · Metasploit",
  "Hardware / IoT Security",
  "N8N Workflow Automation",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase">
            {"// résumé"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            My <span className="neon-text">Credentials</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A snapshot of my education, certifications, achievements, and technical arsenal.
          </p>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            {/* Education */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card/60 backdrop-blur border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h3 className="font-mono font-bold text-lg">Education</h3>
              </div>
              <div className="space-y-5">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.school}
                    custom={i}
                    variants={fadeUp}
                    className="relative pl-5 border-l-2 border-primary/30"
                  >
                    <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
                    <h4 className="font-semibold text-foreground">{edu.school}</h4>
                    <p className="text-sm text-primary font-mono">{edu.degree}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {edu.period} · {edu.location}
                      {edu.gpa && <span className="ml-2 text-primary/80">GPA: {edu.gpa}</span>}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card/60 backdrop-blur border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <Shield className="w-5 h-5 text-primary" />
                <h3 className="font-mono font-bold text-lg">Certifications</h3>
              </div>
              <ul className="space-y-3">
                {certifications.map((cert, i) => (
                  <motion.li
                    key={cert}
                    custom={i}
                    variants={fadeUp}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary mt-0.5 font-mono text-xs">▹</span>
                    {cert}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Technical Skills */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card/60 backdrop-blur border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <Code className="w-5 h-5 text-primary" />
                <h3 className="font-mono font-bold text-lg">Technical Arsenal</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    custom={i}
                    variants={fadeUp}
                    className="px-3 py-1.5 text-xs font-mono rounded-md bg-primary/10 text-primary border border-primary/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
            {/* Awards & CTF Rankings */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card/60 backdrop-blur border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <Award className="w-5 h-5 text-primary" />
                <h3 className="font-mono font-bold text-lg">Awards & Rankings</h3>
              </div>
              <div className="space-y-3">
                {awards.map((award, i) => (
                  <motion.div
                    key={award.name}
                    custom={i}
                    variants={fadeUp}
                    className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <div className="shrink-0 w-16 text-center">
                      <span className="text-xs font-mono text-primary font-bold block">
                        {award.rank}
                      </span>
                      <span className="text-[10px] text-muted-foreground">{award.year}</span>
                    </div>
                    <div className="h-8 w-px bg-primary/20" />
                    <p className="text-sm text-muted-foreground">{award.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience Highlights */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card/60 backdrop-blur border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <Briefcase className="w-5 h-5 text-primary" />
                <h3 className="font-mono font-bold text-lg">Key Roles</h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "Vice President — CyberCom Club",
                    period: "Oct 2024 – Present",
                    desc: "Led 60+ engineers in scalable cybersecurity learning pipelines with SIEM platforms and threat-hunting labs.",
                  },
                  {
                    title: "Operations Associate — DedSec CTF Team",
                    period: "Apr 2025 – Present",
                    desc: "Competed in national-level CTFs including Final Trace, ACNCTF '25, and Indian Army Terrier Cyber Quest.",
                  },
                  {
                    title: "Workshop Lead — Noctivus Sympo (IoT)",
                    period: "Jul – Aug 2025",
                    desc: "Showcased hardware security tools: ESP32, ESP8266, Arduino, and ATtiny85 payload devices.",
                  },
                ].map((role, i) => (
                  <motion.div
                    key={role.title}
                    custom={i}
                    variants={fadeUp}
                    className="relative pl-5 border-l-2 border-primary/30"
                  >
                    <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
                    <h4 className="font-semibold text-sm text-foreground">{role.title}</h4>
                    <p className="text-xs font-mono text-primary/70 mt-0.5">{role.period}</p>
                    <p className="text-xs text-muted-foreground mt-1">{role.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Download CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 text-center"
            >
              <FileText className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-mono font-bold mb-2">Want the full résumé?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Download the complete PDF with all details.
              </p>
              <div className="flex gap-3 justify-center">
                <Button variant="neon" asChild>
                  <a href="/Saravana-resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="w-4 h-4" />
                    View PDF
                  </a>
                </Button>
                <Button variant="neon-outline" asChild>
                  <a href="/Saravana-resume.pdf" download>
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
