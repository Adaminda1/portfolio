import Link from "next/link";

const projects = [
  {
    name: "TrenchReads",
    tag: "live",
    desc: "A Solana token risk-scoring tool that gives traders a clear safety verdict before they buy — combining onchain security data, liquidity analysis, and AI reasoning into one score. Includes a 24/7 Telegram bot for instant checks.",
    stack: ["Next.js", "GoPlus Security", "DexScreener", "Helius", "Groq AI", "Vercel"],
    links: [
      { label: "live site", href: "https://trenchreads.vercel.app" },
      { label: "github", href: "https://github.com/Adaminda1/trenchreads" },
    ],
  },
  {
    name: "FlowSense",
    tag: "live",
    desc: "An AI-powered crypto morning brief that summarizes overnight market movement, key news, and onchain activity into a clean daily digest — built for traders who want signal without the noise.",
    stack: ["Next.js", "AI Summarization", "Vercel"],
    links: [
      { label: "live site", href: "https://flowsense-phi.vercel.app" },
      { label: "github", href: "https://github.com/Adaminda1/flowsense" },
    ],
  },
  {
    name: "TrenchReads Agent",
    tag: "hackathon",
    desc: "An autonomous reasoning agent built for the Microsoft Agents League Hackathon 2026, extending TrenchReads' risk-analysis logic into a 5-step reasoning system using GPT-4.1-mini with DexScreener and GoPlus as live tools.",
    stack: ["Azure AI Foundry", "GPT-4.1-mini", "OpenAPI Tools"],
    links: [{ label: "request demo", href: "#contact" }],
  },
];

const concepts = [
  {
    emoji: "🏫",
    name: "Concept — School Website",
    desc: "A clean, parent-friendly website for a private school: admissions info, programs, staff directory, and a contact form — built to make enrollment easy and the school look established online.",
    stack: ["Next.js", "Tailwind CSS", "Responsive design"],
  },
  {
    emoji: "☕",
    name: "Concept — Restaurant Landing Page",
    desc: "A single-page site for a café or restaurant: menu showcase, location and hours, and a reservation CTA — fast-loading and built to convert visitors into walk-ins.",
    stack: ["Next.js", "Tailwind CSS", "Mobile-first"],
  },
  {
    emoji: "💪",
    name: "Concept — Creator Portfolio",
    desc: "A personal brand site for a fitness coach or creator: program offerings, social proof placeholders, and a booking CTA — built to turn followers into paying clients.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
  },
];

const skills = [
  {
    cat: "frontend",
    items: ["Next.js (App Router)", "Tailwind CSS", "Responsive design", "Vercel deployment"],
  },
  {
    cat: "web3 & data",
    items: ["Solana ecosystem", "GoPlus / DexScreener", "Helius RPC", "Onchain risk analysis"],
  },
  {
    cat: "ai integration",
    items: ["Groq API", "Azure AI Foundry", "Prompt engineering", "Reasoning agents"],
  },
  {
    cat: "infrastructure",
    items: ["Railway (24/7 bots)", "Neon PostgreSQL", "Telegram bot API", "Git / GitHub"],
  },
];

const services = [
  {
    num: "01",
    name: "Landing Pages",
    desc: "Fast, clean, conversion-focused pages built with Next.js and Tailwind",
  },
  {
    num: "02",
    name: "Portfolio Websites",
    desc: "Professional personal or business sites that build instant credibility",
  },
  {
    num: "03",
    name: "AI-powered MVPs",
    desc: "From idea to live product — AI features, fast-shipped, fully functional",
  },
];

const whoIWorkWith = [
  "Startup founders",
  "Creators",
  "Small businesses",
  "Web3 teams",
];

export default function Home() {
  return (
    <main>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/85 backdrop-blur-md border-b border-line">
        <div className="max-w-[920px] mx-auto px-6 py-[18px] flex justify-between items-center">
          <div className="font-mono font-bold text-[15px] tracking-tight">
            web3<span className="text-accent2">abdul</span>
          </div>
          <div className="flex gap-7 font-mono text-[13px] text-muted">
            <a href="#projects" className="hover:text-text transition-colors">projects</a>
            <a href="#skills" className="hover:text-text transition-colors">skills</a>
            <a href="#about" className="hover:text-text transition-colors">about</a>
            <a href="#contact" className="hover:text-text transition-colors">contact</a>
            <div className="flex items-center gap-1.5 text-accent2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent2 shadow-[0_0_8px_#14F195] animate-pulse" />
              <span className="hidden sm:inline">building</span>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-[160px] pb-[100px] border-b border-line">
        <div className="max-w-[920px] mx-auto px-6">
          <div className="flex items-center gap-2.5 font-mono text-[13px] text-muted mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent2" />
            based in nigeria
          </div>
          <h1 className="font-mono font-bold text-[clamp(32px,6vw,56px)] leading-[1.15] tracking-tight max-w-[780px]">
            AI &amp;{" "}
            <span className="bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">
              Web3 Builder
            </span>
          </h1>
          <p className="mt-6 text-[17px] text-muted max-w-[560px]">
            I build AI-powered products, MVPs, and modern websites using
            Next.js. Self-taught, solo-built, shipped fast.
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
            things I&apos;ve shipped
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

      <section className="py-[90px] border-b border-line" id="concepts">
        <div className="max-w-[920px] mx-auto px-6">
          <div className="font-mono text-[13px] text-accent2 mb-3">// 02</div>
          <h2 className="font-mono font-bold text-[clamp(24px,4vw,32px)] tracking-tight mb-3">
            concept projects
          </h2>
          <p className="text-muted text-[15px] mb-12 max-w-[640px]">
            Example builds showing what I can create for different business
            types — not real clients, just demonstrations of capability.
          </p>

          <div className="grid gap-5">
            {concepts.map((c) => (
              <div
                key={c.name}
                className="border border-line rounded-[10px] bg-elevated p-8 hover:border-[#2a2a30] transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-2xl leading-none">{c.emoji}</div>
                  <div className="font-mono font-bold text-[17px] pt-0.5">
                    {c.name}
                  </div>
                </div>
                <p className="text-muted text-[15px] mb-5 max-w-[640px]">
                  {c.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {c.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-xs text-muted border border-line px-2.5 py-1 rounded-md"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[90px] border-b border-line" id="skills">
        <div className="max-w-[920px] mx-auto px-6">
          <div className="font-mono text-[13px] text-accent2 mb-3">// 03</div>
          <h2 className="font-mono font-bold text-[clamp(24px,4vw,32px)] tracking-tight mb-12">
            stack &amp; skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line border border-line rounded-[10px] overflow-hidden">
            {skills.map((s) => (
              <div key={s.cat} className="bg-bg p-6">
                <div className="font-mono text-xs text-accent2 mb-3">{s.cat}</div>
                <div className="text-sm text-muted leading-[1.9]">
                  {s.items.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[90px] border-b border-line" id="about">
        <div className="max-w-[920px] mx-auto px-6">
          <div className="font-mono text-[13px] text-accent2 mb-3">// 04</div>
          <h2 className="font-mono font-bold text-[clamp(24px,4vw,32px)] tracking-tight mb-12">
            about
          </h2>
          <div className="text-base text-muted max-w-[680px] leading-[1.8] space-y-[18px]">
            <p>
              I&apos;m Abdul — a self-taught digital builder based in Nigeria,
              working at the intersection of Web3 and AI.
            </p>
            <p>
              My focus is{" "}
              <strong className="text-text font-semibold">
                onchain safety and transparency
              </strong>
              . TrenchReads exists because too many traders rely on hype
              instead of data — I wanted to build something that gives a
              clear, honest answer fast.
            </p>
            <p>
              I work solo, ship fast, and care more about whether something
              actually works than whether it looks impressive in a pitch
              deck.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[90px] border-b border-line" id="services">
        <div className="max-w-[920px] mx-auto px-6">
          <div className="font-mono text-[13px] text-accent2 mb-3">// 05</div>
          <h2 className="font-mono font-bold text-[clamp(24px,4vw,32px)] tracking-tight mb-12">
            services
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
                <div className="font-mono font-semibold text-[15px] min-w-[220px]">
                  {s.name}
                </div>
                <div className="text-muted text-sm">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[90px] border-b border-line" id="who-i-work-with">
        <div className="max-w-[920px] mx-auto px-6">
          <div className="font-mono text-[13px] text-accent2 mb-3">// 06</div>
          <h2 className="font-mono font-bold text-[clamp(24px,4vw,32px)] tracking-tight mb-12">
            who I work with
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-line border border-line rounded-[10px] overflow-hidden">
            {whoIWorkWith.map((w) => (
              <div
                key={w}
                className="bg-bg p-6 text-center font-mono text-sm text-muted"
              >
                {w}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[90px] pb-[120px]" id="contact">
        <div className="max-w-[920px] mx-auto px-6">
          <div className="border border-line rounded-[10px] bg-elevated px-10 py-12 text-center">
            <h2 className="font-mono text-[clamp(22px,4vw,30px)] mb-3.5">
              Need a website or MVP built?
              <br />
              Let&apos;s work together.
            </h2>
            <p className="text-muted mb-8 max-w-[440px] mx-auto">
              Open to freelance work, collaborations, and Web3/AI projects.
              Reach out and let&apos;s talk.
            </p>
            <div className="flex justify-center gap-3.5 flex-wrap">
              <a
                href="https://x.com/ADAMINDA_1"
                target="_blank"
                className="font-mono text-[13px] px-[22px] py-3 rounded-md bg-text text-bg font-semibold hover:bg-accent2 transition-colors"
              >
                contact me on x →
              </a>
              <a
                href="mailto:Web3Abdull@gmail.com"
                className="font-mono text-[13px] px-[22px] py-3 rounded-md border border-line hover:border-muted transition-colors"
              >
                email me
              </a>
              <a
                href="https://t.me/Web3Abdull"
                target="_blank"
                className="font-mono text-[13px] px-[22px] py-3 rounded-md border border-line hover:border-muted transition-colors"
              >
                telegram
              </a>
              <a
                href="https://github.com/Adaminda1"
                target="_blank"
                className="font-mono text-[13px] px-[22px] py-3 rounded-md border border-line hover:border-muted transition-colors"
              >
                github
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 font-mono text-xs text-muted">
        the lab never closes 🔍 — built by web3abdul
      </footer>
    </main>
  );
}
