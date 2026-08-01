import Link from "next/link";

const projects = [
  {
    name: "TrenchReads",
    tag: "live",
    desc: "A full-stack risk-scoring platform that analyzes blockchain tokens across Solana and EVM chains. Built a unified scoring engine used across web, API, and Telegram bot. Features include real-time price monitoring, liquidity analysis, LP lock detection, and a tiered subscription API for developers.",
    stack: ["Next.js", "Node.js", "Neon PostgreSQL", "REST APIs", "Telegram Bot", "Vercel", "Render"],
    links: [
      { label: "live site", href: "https://trenchreads.vercel.app" },
      { label: "github", href: "https://github.com/Adaminda1/trenchreads" },
    ],
  },
  {
    name: "TrenchPulse",
    tag: "live",
    desc: "An autonomous trading signals bot that processes real-time blockchain data via WebSocket, applies AI analysis for pattern recognition, and executes trades with manual approval. Deployed on production infrastructure with 24/7 uptime monitoring. Handles smart filtering, reputation scoring, and tiered exit strategies.",
    stack: ["Node.js", "WebSocket", "Groq AI", "Telegram Bot", "Render", "UptimeRobot"],
    links: [
      { label: "github", href: "https://github.com/Adaminda1" },
    ],
  },
  {
    name: "FlowSense",
    tag: "live",
    desc: "An AI-powered news aggregation and summarization tool that pulls real-time market data and synthesizes it into actionable insights. Built to demonstrate prompt engineering, API integration, and multi-source data processing at scale.",
    stack: ["Next.js", "AI Summarization", "API Integration", "Vercel"],
    links: [
      { label: "live site", href: "https://flowsense-phi.vercel.app" },
      { label: "github", href: "https://github.com/Adaminda1/flowsense" },
    ],
  },
  {
    name: "TrenchReads Agent",
    tag: "hackathon",
    desc: "An autonomous reasoning system built for the Microsoft Agents League Hackathon 2026. Implements multi-step reasoning loops with tool-calling architecture, integrating real-time data sources. Built to showcase advanced prompt engineering and LLM orchestration.",
    stack: ["Azure AI Foundry", "GPT-4.1-mini", "Tool-Calling Architecture", "API Integration"],
    links: [
      { label: "project", href: "#" },
    ],
  },
];

const skills = [
  {
    cat: "Frontend",
    items: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS", "Responsive Design"],
  },
  {
    cat: "Backend & Infrastructure",
    items: ["Node.js", "Express.js", "REST APIs", "WebSocket", "Real-time Processing"],
  },
  {
    cat: "Databases",
    items: ["PostgreSQL", "Neon", "Query Optimization", "Database Design"],
  },
  {
    cat: "AI & Automation",
    items: ["LLM Integration", "Prompt Engineering", "Groq API", "Azure AI", "Autonomous Systems"],
  },
  {
    cat: "DevOps & Tools",
    items: ["Vercel Deployment", "Render", "Git / GitHub", "Telegram Bot API", "UptimeRobot"],
  },
  {
    cat: "Languages",
    items: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
];

const experience = [
  {
    role: "Full-Stack Engineer & Product Builder",
    focus: "Shipped production-grade full-stack applications from ideation to deployment. Specialize in building systems that handle real-time data processing, payment integration, and autonomous automation.",
    highlights: [
      "Built unified scoring engine serving 3+ platforms (web, API, bot)",
      "Implemented tiered SaaS payment system with wallet integration",
      "Designed and deployed WebSocket-based real-time data processors",
      "Integrated multiple third-party APIs and orchestrated data pipelines",
      "Maintained production infrastructure with 24/7 uptime monitoring",
    ],
  },
];

const services = [
  {
    num: "01",
    name: "Full-Stack Web Applications",
    desc: "End-to-end development of scalable, production-ready web apps using modern JavaScript and Next.js",
  },
  {
    num: "02",
    name: "API Design & Backend Systems",
    desc: "RESTful APIs, real-time data processing, payment systems, and scalable infrastructure",
  },
  {
    num: "03",
    name: "AI & Automation Integration",
    desc: "LLM integration, autonomous systems, data analysis tools, and intelligent automation workflows",
  },
  {
    num: "04",
    name: "Product Strategy & Deployment",
    desc: "From MVP to production: architecture decisions, deployment optimization, and infrastructure scaling",
  },
];

const approach = [
  "Evidence-based problem solving",
  "Ship fast, iterate on feedback",
  "Focus on maintainable, clean code",
  "Obsess over user experience",
];

export default function Home() {
  return (
    <main>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/85 backdrop-blur-md border-b border-line">
        <div className="max-w-[920px] mx-auto px-6 py-[18px] flex justify-between items-center">
          <div className="font-mono font-bold text-[15px] tracking-tight">
            abdullahi<span className="text-accent2">dev</span>
          </div>
          <div className="flex gap-7 font-mono text-[13px] text-muted">
            <a href="#projects" className="hover:text-text transition-colors">projects</a>
            <a href="#skills" className="hover:text-text transition-colors">skills</a>
            <a href="#about" className="hover:text-text transition-colors">about</a>
            <a href="#contact" className="hover:text-text transition-colors">contact</a>
            <div className="flex items-center gap-1.5 text-accent2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent2 shadow-[0_0_8px_#14F195] animate-pulse" />
              <span className="hidden sm:inline">shipping</span>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-[160px] pb-[100px] border-b border-line">
        <div className="max-w-[920px] mx-auto px-6">
          <div className="flex items-center gap-2.5 font-mono text-[13px] text-muted mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent2" />
            Bauchi, Nigeria
          </div>
          <h1 className="font-mono font-bold text-[clamp(32px,6vw,56px)] leading-[1.15] tracking-tight max-w-[780px]">
            Full-Stack Software{" "}
            <span className="bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">
              Engineer
            </span>
          </h1>
          <p className="mt-6 text-[17px] text-muted max-w-[560px]">
            I build production-ready full-stack applications using Next.js, Node.js, and modern infrastructure. Self-taught. Ship fast. Focus on solving real problems.
          </p>
          <div className="mt-10 flex gap-3.5 flex-wrap">
            <a
              href="#projects"
              className="font-mono text-[13px] px-[22px] py-3 rounded-md bg-text text-bg font-semibold hover:bg-accent2 transition-colors"
            >
              view projects →
            </a>
            <a
              href="#contact"
              className="font-mono text-[13px] px-[22px] py-3 rounded-md border border-line hover:border-muted transition-colors"
            >
              get in touch
            </a>
          </div>
        </div>
      </section>

      <section className="py-[90px] border-b border-line" id="projects">
        <div className="max-w-[920px] mx-auto px-6">
          <div className="font-mono text-[13px] text-accent2 mb-3">// 01</div>
          <h2 className="font-mono font-bold text-[clamp(24px,4vw,32px)] tracking-tight mb-12">
            shipped products
          </h2>

          {projects.map((p) => (
            <div
              key={p.name}
              className="border border-line rounded-[10px] bg-elevated p-8 mb-5 hover:border-[#2a2a30] transition-colors"
            >
              <div className="flex justify-between items-start gap-5 flex-wrap mb-4">
                <div className="font-mono font-bold text-[19px]">{p.name}</div>
                <div className="font-mono text-[11px] text-accent2 border border-accent2/25 bg-accent2/[0.06] px-2.5 py-1 rounded-full whitespace-nowrap">
                  {p.tag}
                </div>
              </div>
              <p className="text-muted text-[15px] mb-5 max-w-[640px]">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs text-muted border border-line px-2.5 py-1 rounded-md"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex gap-[18px] font-mono text-[13px]">
                {p.links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    className="border-b border-line pb-0.5 hover:border-accent2 transition-colors"
                  >
                    {l.label} ↗
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-[90px] border-b border-line" id="skills">
        <div className="max-w-[920px] mx-auto px-6">
          <div className="font-mono text-[13px] text-accent2 mb-3">// 02</div>
          <h2 className="font-mono font-bold text-[clamp(24px,4vw,32px)] tracking-tight mb-12">
            skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-[10px] overflow-hidden">
            {skills.map((s) => (
              <div key={s.cat} className="bg-bg p-6">
                <div className="font-mono text-xs text-accent2 mb-4 font-semibold">{s.cat}</div>
                <div className="text-sm text-muted leading-[1.8] space-y-2">
                  {s.items.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="text-accent2 mt-0.5">↳</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[90px] border-b border-line" id="experience">
        <div className="max-w-[920px] mx-auto px-6">
          <div className="font-mono text-[13px] text-accent2 mb-3">// 03</div>
          <h2 className="font-mono font-bold text-[clamp(24px,4vw,32px)] tracking-tight mb-12">
            experience
          </h2>

          {experience.map((exp) => (
            <div key={exp.role} className="border border-line rounded-[10px] bg-elevated p-8">
              <h3 className="font-mono font-bold text-[17px] mb-2">{exp.role}</h3>
              <p className="text-muted text-[15px] mb-6 max-w-[640px]">{exp.focus}</p>
              <div className="space-y-2">
                {exp.highlights.map((h) => (
                  <div key={h} className="flex gap-3 text-[15px] text-muted">
                    <span className="text-accent2 flex-shrink-0">+</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-[90px] border-b border-line" id="services">
        <div className="max-w-[920px] mx-auto px-6">
          <div className="font-mono text-[13px] text-accent2 mb-3">// 04</div>
          <h2 className="font-mono font-bold text-[clamp(24px,4vw,32px)] tracking-tight mb-12">
            what I build
          </h2>
          <div className="grid gap-3.5">
            {services.map((s) => (
              <div
                key={s.num}
                className="flex items-baseline gap-5 py-[18px] border-b border-line last:border-b-0 flex-col sm:flex-row"
              >
                <div className="font-mono text-[13px] text-accent2 min-w-8">
                  {s.num}
                </div>
                <div className="font-mono font-semibold text-[15px] min-w-[240px]">
                  {s.name}
                </div>
                <div className="text-muted text-sm">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[90px] border-b border-line" id="about">
        <div className="max-w-[920px] mx-auto px-6">
          <div className="font-mono text-[13px] text-accent2 mb-3">// 05</div>
          <h2 className="font-mono font-bold text-[clamp(24px,4vw,32px)] tracking-tight mb-12">
            about
          </h2>
          <div className="text-base text-muted max-w-[680px] leading-[1.8] space-y-[18px]">
            <p>
              I'm Abdullahi, a self-taught software engineer from Nigeria. I build full-stack web applications and ship them to production.
            </p>
            <p>
              I specialize in{" "}
              <strong className="text-text font-semibold">
                end-to-end product development
              </strong>
              : from system architecture to deployment. I combine technical depth with pragmatic decision-making. I don't overthink. I ship, test, and iterate.
            </p>
            <p>
              I'm comfortable across the entire stack: frontend, backend, databases, infrastructure, and AI integration. I write clean code, build for scale, and care about user experience.
            </p>
            <p>
              Currently open to software engineering roles, contract work, and building new products. Let's talk.
            </p>
          </div>

          <div className="mt-12 border-t border-line pt-10">
            <h3 className="font-mono text-sm text-accent2 mb-6">my approach</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {approach.map((a) => (
                <div key={a} className="font-mono text-[13px] text-muted border border-line px-4 py-3 rounded-md text-center">
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-[90px] pb-[120px]" id="contact">
        <div className="max-w-[920px] mx-auto px-6">
          <div className="border border-line rounded-[10px] bg-elevated px-10 py-12 text-center">
            <h2 className="font-mono text-[clamp(22px,4vw,30px)] mb-3.5">
              Let's work together
            </h2>
            <p className="text-muted mb-8 max-w-[440px] mx-auto">
              Open to full-time roles, contract projects, and building new products. Have an interesting project or opportunity? Reach out.
            </p>
            <div className="flex justify-center gap-3.5 flex-wrap">
              <a
                href="mailto:Abdullahsalis48@gmail.com"
                className="font-mono text-[13px] px-[22px] py-3 rounded-md bg-text text-bg font-semibold hover:bg-accent2 transition-colors"
              >
                email me →
              </a>
              <a
                href="https://x.com/ADAMINDA_1"
                target="_blank"
                className="font-mono text-[13px] px-[22px] py-3 rounded-md border border-line hover:border-muted transition-colors"
              >
                x
              </a>
              <a
                href="https://github.com/Adaminda1"
                target="_blank"
                className="font-mono text-[13px] px-[22px] py-3 rounded-md border border-line hover:border-muted transition-colors"
              >
                github
              </a>
              <a
                href="https://www.linkedin.com/in/abdullahi-salisu-ab7449225"
                target="_blank"
                className="font-mono text-[13px] px-[22px] py-3 rounded-md border border-line hover:border-muted transition-colors"
              >
                linkedin
              </a>
              <a
                href="https://t.me/Web3Abdull"
                target="_blank"
                className="font-mono text-[13px] px-[22px] py-3 rounded-md border border-line hover:border-muted transition-colors"
              >
                telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 font-mono text-xs text-muted">
        shipping real products 🚀
      </footer>
    </main>
  );
}