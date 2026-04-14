import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud, Network, Brain, BookOpen, Sparkles, ChevronRight, X, CheckCircle2, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const learningTopics = [
  {
    icon: Cloud,
    title: "Cloud Security",
    description:
      "Exploring AWS & Azure security architectures, IAM policies, cloud-native SIEM, and container security with a focus on misconfigurations and privilege escalation in multi-tenant environments.",
    tags: ["AWS Security Hub", "Azure Sentinel", "Container Hardening", "IAM Exploitation"],
    details: {
      overview:
        "Cloud infrastructure is the new attack surface. I'm learning how to secure, audit, and exploit cloud environments across AWS and Azure — understanding both the defender's and attacker's perspective.",
      topics: [
        "IAM privilege escalation & policy misconfiguration hunting",
        "S3 bucket enumeration and access control auditing",
        "Cloud-native SIEM setup with AWS Security Hub & Azure Sentinel",
        "Container security — Docker escape techniques & Kubernetes RBAC",
        "Serverless function exploitation (Lambda, Azure Functions)",
        "Cloud forensics & incident response workflows",
      ],
      tools: ["AWS CLI", "ScoutSuite", "Prowler", "Pacu", "CloudSploit", "Trivy"],
      resources: [
        { name: "AWS Security Specialty prep", url: "https://aws.amazon.com/certification/certified-security-specialty/" },
        { name: "HackTricks Cloud", url: "https://cloud.hacktricks.xyz/" },
      ],
      progress: 45,
    },
  },
  {
    icon: Network,
    title: "Network Security",
    description:
      "Deepening expertise in enterprise network defense — firewall rule optimization, IDS/IPS evasion techniques, zero-trust architecture, and advanced traffic analysis using packet-level inspection.",
    tags: ["Zero Trust", "IDS/IPS Evasion", "Packet Analysis", "Firewall Tuning"],
    details: {
      overview:
        "Networks are the backbone of every organization. I'm mastering how to defend, monitor, and test enterprise networks — from packet-level analysis to zero-trust architecture design.",
      topics: [
        "Advanced Wireshark filters & protocol dissection",
        "IDS/IPS evasion techniques using fragmentation & encoding",
        "Zero-trust network architecture implementation",
        "Firewall rule auditing & optimization strategies",
        "Network traffic anomaly detection with ML-based tools",
        "VPN & tunnel security analysis (WireGuard, IPSec)",
      ],
      tools: ["Wireshark", "Suricata", "Snort", "Zeek", "pfSense", "NetworkMiner"],
      resources: [
        { name: "CompTIA Network+ materials", url: "https://www.comptia.org/certifications/network" },
        { name: "Malware Traffic Analysis", url: "https://www.malware-traffic-analysis.net/" },
      ],
      progress: 60,
    },
  },
  {
    icon: Brain,
    title: "AI Security in LLMs",
    description:
      "Researching adversarial attacks on Large Language Models — prompt injection, jailbreaking, data poisoning, and building guardrails for LLM-powered applications to prevent exploitation.",
    tags: ["Prompt Injection", "LLM Jailbreaking", "Data Poisoning", "AI Guardrails"],
    details: {
      overview:
        "As AI becomes embedded in critical systems, securing LLMs is the next frontier. I'm researching attack vectors specific to language models and building defenses against adversarial manipulation.",
      topics: [
        "Direct & indirect prompt injection techniques",
        "LLM jailbreaking — DAN, role-play, and encoding bypasses",
        "Training data poisoning & backdoor attacks",
        "Building input/output guardrails for LLM applications",
        "OWASP Top 10 for LLM Applications",
        "RAG pipeline security — retrieval poisoning & context manipulation",
      ],
      tools: ["Garak", "Rebuff", "LangChain Guard", "NeMo Guardrails", "TextAttack", "Adversarial Robustness Toolbox"],
      resources: [
        { name: "OWASP LLM Top 10", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/" },
        { name: "AI Red Teaming resources", url: "https://github.com/leondz/garak" },
      ],
      progress: 35,
    },
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
  const [selectedTopic, setSelectedTopic] = useState<typeof learningTopics[0] | null>(null);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
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
            Always leveling up — click a card to see what I'm diving into.
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
              onClick={() => setSelectedTopic(topic)}
              className="glass-card p-6 group hover:neon-border transition-all duration-300 flex flex-col cursor-pointer"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4 group-hover:shadow-[0_0_12px_hsl(var(--primary)/0.4)] transition-shadow duration-300">
                <topic.icon className="w-6 h-6" />
              </div>

              <h4 className="font-mono font-bold text-lg text-foreground mb-2 flex items-center gap-2">
                {topic.title}
                <Sparkles className="w-3.5 h-3.5 text-primary/60" />
              </h4>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {topic.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {topic.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-[10px] font-mono rounded bg-primary/10 text-primary/80 border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Click hint */}
              <div className="flex items-center gap-1 text-xs font-mono text-primary/50 group-hover:text-primary transition-colors">
                <span>View details</span>
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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

      {/* Detail Modal */}
      <Dialog open={!!selectedTopic} onOpenChange={() => setSelectedTopic(null)}>
        <DialogContent className="bg-card border-border max-w-2xl max-h-[85vh] overflow-y-auto">
          {selectedTopic && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-1">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <selectedTopic.icon className="w-5 h-5" />
                  </div>
                  <DialogTitle className="font-mono text-xl">
                    {selectedTopic.title}
                  </DialogTitle>
                </div>
              </DialogHeader>

              <div className="space-y-6 mt-2">
                {/* Overview */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedTopic.details.overview}
                </p>

                {/* Progress */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-muted-foreground">Learning Progress</span>
                    <span className="text-xs font-mono text-primary">{selectedTopic.details.progress}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-primary/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedTopic.details.progress}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.5)]"
                    />
                  </div>
                </div>

                {/* Topics */}
                <div>
                  <h4 className="font-mono font-semibold text-sm text-foreground mb-3">
                    What I'm Covering
                  </h4>
                  <ul className="space-y-2">
                    {selectedTopic.details.topics.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div>
                  <h4 className="font-mono font-semibold text-sm text-foreground mb-3">
                    Tools & Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedTopic.details.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 text-xs font-mono rounded-md bg-primary/10 text-primary border border-primary/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Resources */}
                <div>
                  <h4 className="font-mono font-semibold text-sm text-foreground mb-3">
                    Resources
                  </h4>
                  <div className="space-y-2">
                    {selectedTopic.details.resources.map((r) => (
                      <a
                        key={r.name}
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary/80 hover:text-primary transition-colors group"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span className="group-hover:underline">{r.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ExperienceSection;
