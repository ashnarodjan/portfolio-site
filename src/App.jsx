import React from "react";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, BarChart3, Zap, Users, Layers, Brain, Rocket } from "lucide-react";

const metrics = [
  ["244%", "membership growth in 3 months"],
  ["6K+", "users in 30 days"],
  ["15K", "subscriber channel"],
  ["8% → 22%", "conversion lift"],
  ["3M+", "audience reach"],
  ["15+", "proposals reviewed weekly"],
];

const skills = [
  {
    title: "Growth Engine",
    icon: BarChart3,
    items: ["weekly pacing", "channel mix", "campaign systems", "performance diagnosis", "corrective action"],
  },
  {
    title: "Technical Marketing",
    icon: Zap,
    items: ["API-enabled platforms", "AI-driven platforms", "product education", "creator/user activation", "launch narratives"],
  },
  {
    title: "Distribution",
    icon: Rocket,
    items: ["content", "SEO/GEO-informed content", "social", "email", "partnerships", "community-style growth"],
  },
  {
    title: "Operations",
    icon: Layers,
    items: ["OKRs", "dashboards", "Asana systems", "CRM workflows", "founder support", "team cadence"],
  },
];

const programs = [
  {
    name: "Human Aeon Growth System",
    detail:
      "Built growth operations across content, email, social, partnerships, events, onboarding, dashboards, and team cadence.",
    stat: "244% membership growth in 3 months",
  },
  {
    name: "Infinite Timelines Creator Platform",
    detail:
      "Built operations for an AI-driven creator platform powered by transcript/API infrastructure with Amazon integration.",
    stat: "6K+ users in 30 days · 200+ assets launched",
  },
  {
    name: "Coil / Rafiki Web Monetization Ecosystem",
    detail:
      "Supported creator growth and ecosystem adoption for a Web Monetization platform using Rafiki API infrastructure.",
    stat: "15+ proposals/week · product, engineering, marketing alignment",
  },
];

const tools = [
  "Google Analytics", "HubSpot", "Hootsuite", "Asana", "Notion", "Airtable", "Miro", "Figma", "Slack", "Zapier",
  "Claude", "ChatGPT", "NotebookLM", "Gemini", "GitHub", "VS Code", "Cursor", "Lovable", "AI Prompting", "LLMs"
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-6 py-10 sm:py-16">
        <nav className="flex items-center justify-between gap-4">
          <div className="text-sm font-semibold tracking-widest text-slate-400">ASHNA RODJAN</div>
          <div className="flex gap-3 text-sm text-slate-300">
            <a className="hover:text-white" href="mailto:ashnarodjan@gmail.com">Email</a>
            <a className="hover:text-white" href="https://www.linkedin.com/in/ashnarodjan" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </nav>

        <div className="grid gap-10 pt-16 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              Growth Operations · Technical Marketing · AI / API-Enabled Platforms
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              I build the execution machine behind growth.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Hands-on growth operator turning founder strategy into channel plans, dashboards, campaign workflows, user activation, and cross-functional operating systems for fast-moving platform businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:ashnarodjan@gmail.com" className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/10 hover:bg-cyan-100">
                Contact me <ArrowRight size={18} />
              </a>
              <a href="https://www.linkedin.com/in/ashnarodjan" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 hover:border-slate-400">
                <Linkedin size={18} /> LinkedIn
                <a href="https://calendly.com/ashnarodjan" target="_blank"
rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 hover:border-slate-400">
  Book a Chat
</a>
              </a>
              <a href="https://github.com/ashnarodjan" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 hover:border-slate-400">
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl shadow-cyan-900/20">
            <div className="grid grid-cols-2 gap-3">
              {metrics.map(([num, label]) => (
                <div key={num} className="rounded-2xl bg-slate-950/70 p-4">
                  <div className="text-2xl font-bold text-cyan-200">{num}</div>
                  <div className="mt-1 text-sm text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-10 md:grid-cols-4">
          {skills.map(({ title, icon: Icon, items }) => (
            <div key={title} className="rounded-3xl border border-slate-800 bg-slate-950/60 p-5">
              <Icon className="mb-4 text-cyan-300" size={24} />
              <h2 className="font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">{items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Signature programmes</p>
            <h2 className="mt-2 text-3xl font-bold">Platform growth, packaged as proof.</h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {programs.map((program) => (
            <article key={program.name} className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-xl font-bold text-white">{program.name}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{program.detail}</p>
              <p className="mt-5 rounded-2xl bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-200">{program.stat}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-14 lg:grid-cols-[.85fr_1.15fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
          <Brain className="mb-4 text-cyan-300" />
          <h2 className="text-2xl font-bold">Why this matters</h2>
          <p className="mt-4 leading-7 text-slate-300">
            I work best where the scope is broad, the team is small, and the problem is not fully defined yet. My strength is building the operating rhythm: what ships, which channel matters, what the data says, and where the team should focus next.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-2xl font-bold">Tooling</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span key={tool} className="rounded-full border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-300">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold">Built for fast-moving teams.</h2>
            <p className="mt-1 text-slate-400">Available for growth operations, technical marketing, and founder-side execution roles.</p>
          </div>
          <a href="mailto:ashnarodjan@gmail.com" className="inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-200">
            <Mail size={18} /> Email Ashna
          </a>
        </div>
      </footer>
    </main>
  );
}
