import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { motion } from "framer-motion";

const COMMANDS: Record<string, string> = {
  help: `Available commands:
  whoami      - About Saravana Priyan
  skills      - Technical skills
  projects    - Project list
  experience  - Events & experience
  contact     - Contact info
  clear       - Clear terminal
  help        - Show this help`,

  whoami: `╔══════════════════════════════════════╗
║  Saravana Priyan                     ║
║  Cybersecurity Student               ║
║  Aspiring Security Researcher        ║
║  CTF Player                          ║
╚══════════════════════════════════════╝

CSE student specializing in Cybersecurity.
Passionate about network security, penetration
testing, and cyber forensics. Active CTF
competitor who builds real-world security tools.`,

  skills: `[Cybersecurity]  VAPT · Pentesting · Digital Forensics · Network Security
[Tools]          Wireshark · Nmap · Burp Suite · Metasploit · Maltego
[Languages]      Python · Java · C++
[Web]            Java · FastAPI · Tailwind CSS
[Other]          OSINT · Malware Analysis · IoT Security · Docker · DFIR`,

  projects: `1. Windows Vulnerability Tester    [Python, Security]
2. Password Cracker GUI            [Python, GUI, Offensive]
3. Secure File Vault               [Java, Encryption]
4. StealthNet (Chrome Extension)   [JavaScript, WIP]
5. Smart Box Project               [IoT, Embedded]
6. ESP32 Rogue Wi-Fi AP            [ESP32, Wireless]
7. SSH Honeypot Server             [Python, Threat Intel]
8. NFC Card Cloning & RFID Attack  [RFID, NFC, Physical]

Type a project number (e.g. "1") for details.`,

  experience: `> DEF CON Chennai
  CTF competition — secured 28th place

> OWASP Meetups
  Sessions on modern web vulnerabilities

> Noctivus Symposium
  IoT workshop and tools expo`,

  contact: `Email    : saravanaofffcial0501@gmail.com
GitHub   : github.com/Saravana-sec
LinkedIn : linkedin.com/in/saravana101
Medium   : medium.com/@saroinaction2005`,

  "1": `[Windows Vulnerability Tester]
Python-based scanner that enumerates Windows services,
open ports, and weak configurations. Integrates CVE
database lookups and generates severity reports.`,
  "2": `[Password Cracker GUI]
Tkinter GUI for password analysis. Supports dictionary
attacks, rainbow tables, and multi-threaded brute-force.
Identifies MD5, SHA-1, SHA-256, and bcrypt hashes.`,
  "3": `[Secure File Vault]
Java app using AES-256 encryption with role-based access
control and SHA-256 file integrity verification.`,
  "4": `[StealthNet — Chrome Extension]
Simulates firewall bypass, IDS evasion, and data
exfiltration in a sandboxed browser environment. WIP.`,
  "5": `[Smart Box Project]
IoT security framework with tamper detection, encrypted
comms, secure boot, and real-time monitoring dashboard.`,
  "6": `[ESP32 Rogue Wi-Fi AP]
Rogue access point with deauth frame injection and
captive portal. Captures WPA/WPA2 handshakes.`,
  "7": `[SSH Honeypot Server]
Twisted Conch SSH-2.0 honeypot with fake interactive
shell. Logs attacker commands for threat intelligence.`,
  "8": `[NFC Card Cloning & RFID Attack]
Proxmark3-based NFC cloning and RFID pen-testing.
Demonstrates relay attacks and UID spoofing.`,
};

interface Line {
  type: "input" | "output";
  text: string;
}

const TerminalSection = () => {
  const [lines, setLines] = useState<Line[]>([
    { type: "output", text: 'Welcome to SaravanaOS v1.0 — Type "help" for commands.' },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const run = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const newLines: Line[] = [
      ...lines,
      { type: "input", text: `visitor@saravana:~$ ${cmd}` },
    ];

    if (trimmed === "clear") {
      setLines([{ type: "output", text: "Terminal cleared." }]);
    } else {
      const output = COMMANDS[trimmed] ?? `Command not found: ${trimmed}. Type "help" for available commands.`;
      newLines.push({ type: "output", text: output });
      setLines(newLines);
    }

    setHistory((h) => [cmd, ...h]);
    setHistIdx(-1);
    setInput("");
  };

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      run(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const next = Math.min(histIdx + 1, history.length - 1);
        setHistIdx(next);
        setInput(history[next]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx > 0) {
        const next = histIdx - 1;
        setHistIdx(next);
        setInput(history[next]);
      } else {
        setHistIdx(-1);
        setInput("");
      }
    }
  };

  return (
    <section id="terminal" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2">{"// TERMINAL"}</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Interactive <span className="neon-text">Shell</span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="glass-card overflow-hidden neon-border"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-primary/10 bg-background/60">
            <span className="w-3 h-3 rounded-full bg-destructive/80" />
            <span className="w-3 h-3 rounded-full bg-accent/80" />
            <span className="w-3 h-3 rounded-full bg-primary/80" />
            <span className="ml-3 text-xs font-mono text-muted-foreground">saravana@kali:~</span>
          </div>

          {/* Output */}
          <div className="p-4 h-80 overflow-y-auto font-mono text-sm leading-relaxed">
            {lines.map((line, i) => (
              <div key={i} className={line.type === "input" ? "text-primary mt-2" : "text-muted-foreground whitespace-pre-wrap"}>
                {line.text}
              </div>
            ))}
            <div className="flex items-center gap-1 mt-2">
              <span className="text-primary">visitor@saravana:~$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                className="flex-1 bg-transparent border-none outline-none text-foreground font-mono text-sm caret-primary"
                spellCheck={false}
                autoComplete="off"
              />
            </div>
            <div ref={bottomRef} />
          </div>
        </motion.div>

        <p className="text-xs text-muted-foreground font-mono mt-3 text-center">
          Try: help · whoami · skills · projects · contact
        </p>
      </div>
    </section>
  );
};

export default TerminalSection;
