import { useState, useEffect } from "react";

const IconSun = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>);
const IconMoon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>);
const IconLinkedIn = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>);
const IconCalendar = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>);
const IconMail = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>);
const IconDoc = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>);
const IconGitHub = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>);
const IconArrow = () => (<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>);
const IconVerified = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="#0077B5"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>);

const skills = [
  { title: "Growth Engine", icon: "📈", desc: "Own weekly signup pacing and growth across core acquisition channels. Accountable to the number, not just the strategy. Build defensible channel mix across SEO/GEO, partnerships, and content that compounds.", tags: ["Weekly Pacing", "Channel Mix", "Performance Diagnosis", "Corrective Action"] },
  { title: "Technical Marketing", icon: "⚡", desc: "Run marketing for API-enabled, AI-driven platforms. Translate complex technical concepts into launch narratives that resonate with developers and creators who hate being marketed to.", tags: ["API Platforms", "AI-Driven", "Product Education", "Launch Narratives"] },
  { title: "Cross-Channel Distribution", icon: "🚀", desc: "Run cross-channel planning, prioritization, and execution — managing channel owners across content, PMM, partnerships, brand, and agent-first distribution channels.", tags: ["SEO/GEO", "Email", "Social", "Partnerships", "Community"] },
  { title: "Ops Infrastructure", icon: "⚙️", desc: "Build the operating system behind growth: OKRs, dashboards, Asana systems, CRM workflows, stakeholder alignment. Keep founders focused on strategy, not stitching the machine together.", tags: ["OKRs", "Dashboards", "Asana", "CRM", "Founder Support"] },
];

const programs = [
  { category: "Growth Operations", name: "Human Aeon Growth System", desc: "Built the weekly execution machine behind acquisition, activation, content, partnerships, and reporting for a digital education platform. Owned channel mix, ran weekly performance reviews, shipped corrective action plans fast.", outcome: "244% membership growth in 3 months · Conversion 8% → 22% · Acquisition +15% · Engagement +35%", tools: ["HubSpot", "Asana", "Google Analytics", "Zapier", "CRM"] },
  { category: "AI Platform · API-Enabled", name: "Infinite Timelines Creator Platform", desc: "Built growth operations from zero for an AI-driven creator platform with transcript/API infrastructure and Amazon integration. Owned creator onboarding, content supply, and user growth across 10 simultaneous initiatives.", outcome: "6K+ signups in 30 days · 200+ editorial assets launched · Zero to channel in one month", tools: ["Google Analytics", "Hootsuite", "Airtable", "SEO Analytics", "CRM"] },
  { category: "Ecosystem Operations · API", name: "Coil / Rafiki Web Monetization", desc: "Owned creator growth and ecosystem adoption for a Web Monetization platform on Rafiki API infrastructure. Translated API-first technical concepts into launch narratives. Ran 15+ proposals/week intake across product, engineering, marketing, and creative.", outcome: "Zero missed launches · 15+ proposals reviewed weekly · Full coordination across 4 teams", tools: ["Asana", "Notion", "Airtable", "Figma", "Slack"] },
];

const stats = [
  { num: "244%", label: "Membership growth in 3 months" },
  { num: "6K+", label: "Platform signups in 30 days" },
  { num: "3M+", label: "Podcast audience built" },
  { num: "22%", label: "Conversion rate (from 8%)" },
];

const journey = [
  { initials: "HA", color: "#6366f1", role: "Operations Lead — Growth & Marketing", company: "Human Aeon, LLC", location: "Long Beach, CA", period: "2025 – Present", bullets: ["Owned weekly growth execution across content, email, social, campaigns, partnerships, events, and onboarding — accountable to the number.", "Built growth dashboard combining acquisition, conversion, retention, paid media, and partner-channel data to run weekly performance reviews.", "Directed multi-channel campaigns with agency partner; increased acquisition 15% and social engagement 35%.", "Built segmented lifecycle journeys improving member conversion from 8% to 22%."], tools: "HubSpot · Asana · Google Analytics · Zapier · Notion" },
  { initials: "IT", color: "#8b5cf6", role: "Head of Operations & Content", company: "Infinite Timelines Inc.", location: "San Francisco, CA", period: "2023 – 2024", bullets: ["Built growth operations from zero for an AI-driven creator platform with transcript/API infrastructure and Amazon integration — first hire.", "Launched 10 growth/content initiatives and 200+ editorial assets, driving 6K+ user signups in 30 days.", "Managed acquisition and activation channels across content, social, web, lead capture, CRM, and email.", "Created briefing systems, approval workflows, dashboards, and freelancer processes to improve speed and repeatability."], tools: "Google Analytics · Hootsuite · Airtable · CRM · SEO Analytics · Figma" },
  { initials: "IF", color: "#0ea5e9", role: "Senior Project Manager & Producer", company: "Coil Technologies / Interledger Foundation", location: "San Francisco, CA", period: "2022 – 2023", bullets: ["Owned creator growth and ecosystem adoption for a Web Monetization platform using Rafiki API infrastructure. Google partnership.", "Translated API-first technical concepts into launch narratives and educational content for technical and creator audiences.", "Built intake and approval workflow reviewing 15+ proposals weekly, coordinating across product, engineering, marketing, and creative.", "Managed 10+ concurrent initiatives across platform launches, partnerships, creator campaigns, events, and IP proposals."], tools: "Asana · Notion · Airtable · Figma · Slack · Google Workspace" },
  { initials: "SC", color: "#f59e0b", role: "Co-Founder — Media & Audience Growth", company: "Smart Camp / Magic & Prayer", location: "Los Angeles, CA", period: "2011 – 2022", bullets: ["Co-founded Smart Camp podcast: 420+ episodes, 3M+ listens. Guests: Judd Apatow, Marc Maron, Bill Burr, Steve Wozniak.", "Built production, distribution, promotion, partnership, and revenue systems across independent media ventures.", "Designed multi-channel promotion for 25+ live events across 28 countries — grew monthly revenue from $300 to $10K.", "Produced 6 spoken word albums; shortlisted for Grammy 2020, Top 10 Billboard March 2019."], tools: "Hootsuite · Google Analytics · Email Marketing · CRM · Adobe Creative Cloud" },
  { initials: "TH", color: "#10b981", role: "Innovation Project Manager", company: "Municipality of The Hague", location: "The Hague, Netherlands", period: "2006 – 2008", bullets: ["Selected from 1,000+ applicants as one of ten participants for a nationwide government innovation program.", "Implemented cross-functional software system to enhance inter-departmental communications using PRINCE2 methodology.", "Contributed to 'Simple Den Haag' — campaign simplifying policy communication between city government and citizens.", "Facilitated Design Sprint sessions for government officials."], tools: "PRINCE2 · Oracle · Cross-functional stakeholder management" },
];

const sideProjects = [
  { icon: "🎙️", name: "Smart Camp Podcast", desc: "Co-founded. 420+ episodes. 3M+ listens. Guests: Judd Apatow, Bill Burr, Steve Wozniak. Top 10 Best Podcast — Matador Network. Best Newcomer — The AV Club." },
  { icon: "🧠", name: "Pokodoro", desc: "Cognitive productivity app built in VS Code with Claude Code. Pomodoro-style focus timers, task logging, data persistence. Chrome extension conversion in progress." },
  { icon: "✍️", name: "Mindset Snacks", desc: "Substack on AI vs human cognition. Grounded in Feldman Barrett, Anil Seth, and predictive processing theory." },
  { icon: "🎬", name: "Finding the Funny", desc: "Travel documentary series on global humor. Lionsgate option deal. Recognized at New York Television Festival. International production teams across 28 countries." },
  { icon: "📚", name: "Friday Knowledge Nuggets", desc: "50+ episode edutainment series for YouTube and digital distribution. Developed, written, produced, and distributed independently." },
  { icon: "📷", name: "HuffPost Photography", desc: "Published photographer and travel story editor. Top 10 Best Travel Stories 2011. Featured on AOL, Yahoo, MSN, France24 homepages." },
];

const volunteering = [
  { icon: "🔓", name: "California Institute for Women", desc: "Designing and co-leading skill-based empowerment workshops for incarcerated women. 2024–Present." },
  { icon: "🎤", name: "Charity Comedy Show", desc: "Produced a sold-out comedy event in LA with high-profile comedians. Raised $5K+ for local cause." },
  { icon: "🌐", name: "Future Affairs Think Tank", desc: "Hosting monthly Table Topics on AI, Environment, and Human Behavior for 3,000+ professionals." },
  { icon: "🏛️", name: "Young The Hague Chairman", desc: "Organized cross-functional events for 3,000+ professionals. Reduced network expenses by 30%." },
  { icon: "🎓", name: "University Teaching", desc: "Taught Cognitive Science & Data Analytics to first-year university students." },
  { icon: "💡", name: "Government Sprint Master", desc: "Facilitated action-driven Design Sprint sessions with teams of 10+ government officials." },
];

const endorsements = [
  { name: "Senior Operations Leader", title: "Fintech Platform", quote: "Ashna operates several levels above her title. The infrastructure she built allowed us to scale without breaking.", initials: "SL", color: "#6366f1" },
  { name: "Founder", title: "Media-Tech Startup", quote: "Rare combination of rigorous operational instincts and genuine creative intelligence. She closes gaps most people don't even notice.", initials: "MK", color: "#0ea5e9" },
  { name: "Director of Content", title: "Web Monetization Platform", quote: "Trusted her completely with cross-functional programs touching every part of the business. Calm, precise, and always three steps ahead.", initials: "DC", color: "#10b981" },
];

const tools = ["Google Analytics", "HubSpot", "Hootsuite", "Asana", "Notion", "Airtable", "Miro", "Figma", "Slack", "Zapier", "SEO/GEO Analytics", "CRM", "Claude", "ChatGPT", "NotebookLM", "Gemini", "GitHub", "VS Code", "Cursor", "Lovable", "AI Prompting", "LLMs", "Adobe Creative Cloud"];

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [eIdx, setEIdx] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  const e = endorsements[eIdx];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "var(--bg)", color: "var(--text)", minHeight: "100vh", transition: "background 0.3s, color 0.3s" }}>
      <style>{`
        :root { --bg:#f8f7f5; --bg2:#ffffff; --bg3:#f1f0ee; --text:#1a1a18; --text2:#5a5954; --text3:#9a9893; --border:rgba(26,26,24,0.1); --border2:rgba(26,26,24,0.2); --accent:#5b5ef4; --accent2:#4f52e0; --tag-bg:rgba(91,94,244,0.08); --tag-text:#5b5ef4; --card:#ffffff; --outcome-bg:rgba(91,94,244,0.06); --outcome-border:rgba(91,94,244,0.3); --blob1:rgba(91,94,244,0.1); --blob2:rgba(139,92,246,0.08); }
        [data-theme="dark"] { --bg:#111110; --bg2:#1a1a18; --bg3:#222220; --text:#f0ede8; --text2:#a09e99; --text3:#6a6864; --border:rgba(240,237,232,0.1); --border2:rgba(240,237,232,0.2); --accent:#7b7ef6; --accent2:#9b9ef8; --tag-bg:rgba(123,126,246,0.12); --tag-text:#9b9ef8; --card:#1a1a18; --outcome-bg:rgba(123,126,246,0.08); --outcome-border:rgba(123,126,246,0.3); --blob1:rgba(91,94,244,0.07); --blob2:rgba(139,92,246,0.06); }
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0} html{scroll-behavior:smooth} a{color:inherit;text-decoration:none}
        .nav{position:sticky;top:0;z-index:100;background:var(--bg);border-bottom:0.5px solid var(--border);display:flex;align-items:center;justify-content:space-between;padding:0 2rem;height:54px;transition:background 0.3s;backdrop-filter:blur(12px)}
        .nav-logo{font-family:'Syne',sans-serif;font-weight:800;font-size:15px;letter-spacing:-0.02em}
        .nav-right{display:flex;align-items:center;gap:6px}
        .nav-link{font-size:12.5px;color:var(--text2);padding:5px 10px;border-radius:6px;border:0.5px solid transparent;transition:all 0.15s;display:flex;align-items:center;gap:5px;cursor:pointer}
        .nav-link:hover{background:var(--bg3);border-color:var(--border);color:var(--text)}
        .nav-link.outlined{border-color:var(--border2);color:var(--text)}
        .theme-btn{width:32px;height:32px;border-radius:8px;border:0.5px solid var(--border2);background:transparent;color:var(--text2);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.15s}
        .theme-btn:hover{background:var(--bg3);color:var(--text)}
        .wrap{max-width:800px;margin:0 auto;padding:0 2rem}
        .hero{padding:5rem 0 3.5rem;position:relative;overflow:visible}
        .blob{position:absolute;border-radius:50%;filter:blur(70px);pointer-events:none}
        .blob1{width:350px;height:350px;background:var(--blob1);top:-80px;right:-100px}
        .blob2{width:220px;height:220px;background:var(--blob2);bottom:-20px;left:-80px}
        .badge{display:inline-flex;align-items:center;gap:6px;font-size:11px;padding:4px 12px;border-radius:20px;border:0.5px solid var(--accent);color:var(--accent);background:var(--tag-bg);font-weight:500;letter-spacing:0.04em;text-transform:uppercase;margin-bottom:1.5rem}
        .badge-dot{width:6px;height:6px;border-radius:50%;background:var(--accent);animation:pulse 2s infinite}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}
        h1.hero-title{font-family:'Syne',sans-serif;font-size:clamp(30px,5vw,52px);font-weight:800;line-height:1.08;letter-spacing:-0.03em;margin-bottom:1.25rem}
        h1.hero-title span{color:var(--accent)}
        .hero-sub{font-size:16px;color:var(--text2);max-width:520px;line-height:1.7;margin-bottom:2rem;font-weight:300}
        .hero-btns{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:3rem}
        .btn{font-size:13px;padding:8px 14px;border-radius:8px;border:0.5px solid var(--border2);background:transparent;color:var(--text);cursor:pointer;transition:all 0.15s;display:inline-flex;align-items:center;gap:6px;font-family:'DM Sans',sans-serif;font-weight:500}
        .btn:hover{background:var(--bg3)}
        .btn.primary{background:var(--accent);color:white;border-color:var(--accent)}
        .btn.primary:hover{background:var(--accent2);border-color:var(--accent2)}
        .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:0;border:0.5px solid var(--border);border-radius:12px;overflow:hidden}
        .metric{padding:1.2rem;background:var(--card);border-right:0.5px solid var(--border)}
        .metric:last-child{border-right:none}
        .metric-num{font-family:'Syne',sans-serif;font-size:22px;font-weight:800;color:var(--accent);letter-spacing:-0.03em;margin-bottom:3px}
        .metric-label{font-size:11px;color:var(--text3);line-height:1.4}
        @media(max-width:580px){.metrics{grid-template-columns:repeat(2,1fr)}.metric:nth-child(2){border-right:none}.metric:nth-child(1),.metric:nth-child(2){border-bottom:0.5px solid var(--border)}}
        section{padding:4rem 0;border-top:0.5px solid var(--border)}
        .section-label{font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:var(--accent);font-weight:600;margin-bottom:0.5rem}
        .section-title{font-family:'Syne',sans-serif;font-size:22px;font-weight:700;letter-spacing:-0.02em;margin-bottom:1.75rem}
        .skill-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
        @media(max-width:580px){.skill-grid{grid-template-columns:1fr}}
        .skill-card{background:var(--card);border:0.5px solid var(--border);border-radius:12px;padding:1.25rem;transition:border-color 0.2s}
        .skill-card:hover{border-color:var(--accent)}
        .skill-icon{font-size:20px;margin-bottom:0.75rem}
        .skill-title{font-family:'Syne',sans-serif;font-size:14px;font-weight:700;margin-bottom:0.5rem}
        .skill-desc{font-size:12.5px;color:var(--text2);line-height:1.6;margin-bottom:0.75rem;font-weight:300}
        .tags{display:flex;flex-wrap:wrap;gap:5px}
        .tag{font-size:11px;padding:3px 8px;border-radius:4px;background:var(--tag-bg);color:var(--tag-text);font-weight:500}
        .program-card{background:var(--card);border:0.5px solid var(--border);border-radius:12px;padding:1.5rem;margin-bottom:12px;transition:border-color 0.2s}
        .program-card:hover{border-color:var(--border2)}
        .program-category{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--accent);margin-bottom:6px}
        .program-name{font-family:'Syne',sans-serif;font-size:16px;font-weight:700;margin-bottom:0.6rem}
        .program-desc{font-size:13px;color:var(--text2);line-height:1.65;margin-bottom:1rem;font-weight:300}
        .outcome{background:var(--outcome-bg);border-left:2px solid var(--outcome-border);border-radius:0 6px 6px 0;padding:0.6rem 0.75rem;font-size:12.5px;color:var(--accent);font-weight:500;margin-bottom:0.75rem}
        .tool-tags{display:flex;flex-wrap:wrap;gap:5px}
        .tool-tag{font-size:11px;padding:2px 8px;border-radius:4px;background:var(--bg3);color:var(--text3);border:0.5px solid var(--border)}
        .journey-item{display:flex;gap:1.25rem;padding:1.5rem 0;border-bottom:0.5px solid var(--border)}
        .journey-item:last-child{border-bottom:none}
        .journey-logo{width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-weight:800;font-size:12px;color:white;flex-shrink:0}
        .journey-con{flex:1}
        .journey-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:2px;flex-wrap:wrap;gap:4px}
        .journey-role{font-family:'Syne',sans-serif;font-size:14px;font-weight:700}
        .journey-period{font-size:12px;color:var(--text3)}
        .journey-company{font-size:13px;color:var(--text2);margin-bottom:10px}
        .journey-bullets{list-style:none;display:flex;flex-direction:column;gap:6px;margin-bottom:8px}
        .journey-bullets li{display:flex;gap:8px;font-size:13px;color:var(--text2);line-height:1.6;font-weight:300}
        .bullet-dot{width:5px;height:5px;border-radius:50%;background:var(--accent);margin-top:8px;flex-shrink:0}
        .journey-tools{font-size:11.5px;color:var(--text3);font-style:italic}
        .projects-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
        @media(max-width:640px){.projects-grid{grid-template-columns:1fr}}
        .project-card{background:var(--card);border:0.5px solid var(--border);border-radius:12px;padding:1.25rem;transition:border-color 0.2s}
        .project-card:hover{border-color:var(--accent)}
        .project-icon{font-size:22px;margin-bottom:0.75rem}
        .project-name{font-family:'Syne',sans-serif;font-size:13px;font-weight:700;margin-bottom:0.4rem}
        .project-desc{font-size:12px;color:var(--text2);line-height:1.6;font-weight:300}
        .vol-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
        @media(max-width:640px){.vol-grid{grid-template-columns:1fr}}
        .vol-card{background:var(--bg3);border:0.5px solid var(--border);border-radius:10px;padding:1rem}
        .vol-icon{font-size:18px;margin-bottom:6px}
        .vol-name{font-size:12.5px;font-weight:600;margin-bottom:3px}
        .vol-desc{font-size:11.5px;color:var(--text2);line-height:1.5;font-weight:300}
        .tools-wrap{display:flex;flex-wrap:wrap;gap:8px}
        .tool-pill{font-size:12px;padding:6px 12px;border-radius:6px;background:var(--bg3);color:var(--text2);border:0.5px solid var(--border)}
        .endorse-card{background:var(--card);border:0.5px solid var(--border);border-radius:14px;padding:2rem;text-align:center;max-width:480px;margin:0 auto}
        .endorse-avatar{width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-weight:800;font-size:14px;color:white;margin:0 auto 1rem}
        .endorse-name{font-family:'Syne',sans-serif;font-size:14px;font-weight:700;margin-bottom:2px;display:flex;align-items:center;justify-content:center;gap:6px}
        .endorse-title{font-size:12px;color:var(--text3);margin-bottom:1rem}
        .endorse-quote{font-size:14px;color:var(--text2);line-height:1.7;font-style:italic;font-weight:300}
        .endorse-nav{display:flex;gap:10px;justify-content:center;margin-top:1.5rem}
        .endorse-btn{width:32px;height:32px;border-radius:50%;border:0.5px solid var(--border2);background:transparent;color:var(--text2);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.15s;font-size:16px}
        .endorse-btn:hover{background:var(--bg3);color:var(--text)}
        .cta{background:var(--accent);border-radius:16px;padding:3rem;text-align:center;margin:4rem 0}
        .cta h2{font-family:'Syne',sans-serif;font-size:26px;font-weight:800;color:white;margin-bottom:0.75rem;letter-spacing:-0.02em}
        .cta p{color:rgba(255,255,255,0.8);font-size:15px;margin-bottom:1.75rem;font-weight:300}
        .cta-btns{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}
        .cta-btn{font-size:13px;padding:9px 18px;border-radius:8px;border:1.5px solid rgba(255,255,255,0.4);background:transparent;color:white;cursor:pointer;display:inline-flex;align-items:center;gap:6px;font-family:'DM Sans',sans-serif;font-weight:500;transition:all 0.15s}
        .cta-btn:hover{background:rgba(255,255,255,0.15);border-color:white}
        .cta-btn.white{background:white;color:var(--accent);border-color:white}
        .cta-btn.white:hover{background:rgba(255,255,255,0.9)}
        footer{border-top:0.5px solid var(--border);padding:1.5rem 2rem;display:flex;justify-content:space-between;align-items:center;font-size:12px;color:var(--text3);flex-wrap:wrap;gap:10px}
        .footer-links{display:flex;gap:16px}
        .footer-links a:hover{color:var(--text)}
        .edu-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
        @media(max-width:580px){.edu-grid{grid-template-columns:1fr}}
        .edu-card{background:var(--card);border:0.5px solid var(--border);border-radius:12px;padding:1.25rem}
        .edu-label{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--accent);margin-bottom:5px}
        .edu-title{font-family:'Syne',sans-serif;font-size:14px;font-weight:700;margin-bottom:5px}
        .edu-desc{font-size:12.5px;color:var(--text2);line-height:1.6;font-weight:300}
        @keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        .f1{animation:fadeUp 0.5s 0.05s both}.f2{animation:fadeUp 0.5s 0.15s both}.f3{animation:fadeUp 0.5s 0.25s both}.f4{animation:fadeUp 0.5s 0.35s both}.f5{animation:fadeUp 0.5s 0.45s both}
      `}</style>

      <nav className="nav">
        <div className="nav-logo">Ashna Rodjan</div>
        <div className="nav-right">
          <a href="#programs" className="nav-link">Work</a>
          <a href="#journey" className="nav-link">Journey</a>
          <a href="YOUR_RESUME_URL" target="_blank" rel="noreferrer" className="nav-link"><IconDoc /> Resume</a>
          <a href="mailto:ashnarodjan@gmail.com" className="nav-link"><IconMail /> Email</a>
          <a href="https://calendly.com/ashnarodjan" target="_blank" rel="noreferrer" className="nav-link outlined"><IconCalendar /> Book Chat</a>
          <button className="theme-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <IconSun /> : <IconMoon />}</button>
        </div>
      </nav>

      <div className="wrap">
        <div className="hero">
          <div className="blob blob1" />
          <div className="blob blob2" />
          <div className="f1"><div className="badge"><div className="badge-dot" />Open for Full-Time and Contract Roles</div></div>
          <h1 className="hero-title f2">Growth Operator<br /><span>Building the</span><br />Execution Machine.</h1>
          <p className="hero-sub f3">MSc Cognitive Psychology · PMP Certified. I turn founder strategy into weekly channel plans, dashboards, corrective action, and the operating system that performs every single week — for fast-moving platform businesses.</p>
          <div className="hero-btns f4">
            <a href="#programs" className="btn primary">View My Work <IconArrow /></a>
            <a href="YOUR_RESUME_URL" target="_blank" rel="noreferrer" className="btn"><IconDoc /> Resume</a>
            <a href="https://www.linkedin.com/in/ashnarodjan" target="_blank" rel="noreferrer" className="btn"><IconLinkedIn /> LinkedIn</a>
            <a href="https://github.com/ashnarodjan" target="_blank" rel="noreferrer" className="btn"><IconGitHub /> GitHub</a>
            <a href="https://calendly.com/ashnarodjan" target="_blank" rel="noreferrer" className="btn"><IconCalendar /> Book Chat</a>
          </div>
          <div className="metrics f5">
            {stats.map(s => (<div key={s.num} className="metric"><div className="metric-num">{s.num}</div><div className="metric-label">{s.label}</div></div>))}
          </div>
        </div>

        <section>
          <p className="section-label">Core Skills</p>
          <h2 className="section-title">What I actually own.</h2>
          <div className="skill-grid">
            {skills.map(s => (<div key={s.title} className="skill-card"><div className="skill-icon">{s.icon}</div><div className="skill-title">{s.title}</div><p className="skill-desc">{s.desc}</p><div className="tags">{s.tags.map(t => <span key={t} className="tag">{t}</span>)}</div></div>))}
          </div>
        </section>

        <section id="programs">
          <p className="section-label">Signature Programs</p>
          <h2 className="section-title">Growth, packaged as proof.</h2>
          {programs.map(p => (<div key={p.name} className="program-card"><div className="program-category">{p.category}</div><div className="program-name">{p.name}</div><p className="program-desc">{p.desc}</p><div className="outcome">{p.outcome}</div><div className="tool-tags">{p.tools.map(t => <span key={t} className="tool-tag">{t}</span>)}</div></div>))}
        </section>

        <section id="journey">
          <p className="section-label">Professional Journey</p>
          <h2 className="section-title">Where I've built.</h2>
          {journey.map(j => (<div key={j.company} className="journey-item"><div className="journey-logo" style={{ background: j.color }}>{j.initials}</div><div className="journey-con"><div className="journey-top"><div className="journey-role">{j.role}</div><div className="journey-period">{j.period}</div></div><div className="journey-company">{j.company} · {j.location}</div><ul className="journey-bullets">{j.bullets.map((b, i) => (<li key={i}><div className="bullet-dot" />{b}</li>))}</ul><div className="journey-tools">{j.tools}</div></div></div>))}
        </section>

        <section>
          <p className="section-label">Education & Research</p>
          <h2 className="section-title">The credential that changes the conversation.</h2>
          <div className="edu-grid">
            <div className="edu-card"><div className="edu-label">Leiden University</div><div className="edu-title">MSc Cognitive Psychology — Top 6%</div><p className="edu-desc">Published researcher in memory, decision-making, and human error. Research at LUMC, UC Irvine Loftus Lab (expert witness: Michael Jackson, Rodney King cases), Dutch Aviation ALPA, and NSCR. Peer-reviewed publication.</p></div>
            <div className="edu-card"><div className="edu-label">Certifications</div><div className="edu-title">Project Management & Marketing</div><p className="edu-desc">Google Project Management · PRINCE2 · Asana Workflow Specialist · Google AI Essentials · HubSpot Digital Marketing · Google UX Foundations · Yale Emotional Intelligence · UCLA Storytelling · TU Delft Sprint Master · IBM Generative AI</p></div>
          </div>
        </section>

        <section>
          <p className="section-label">Tools & Stack</p>
          <h2 className="section-title">What I work with.</h2>
          <div className="tools-wrap">{tools.map(t => <span key={t} className="tool-pill">{t}</span>)}</div>
        </section>

        <section>
          <p className="section-label">Side Projects</p>
          <h2 className="section-title">What I build beyond work.</h2>
          <div className="projects-grid">{sideProjects.map(p => (<div key={p.name} className="project-card"><div className="project-icon">{p.icon}</div><div className="project-name">{p.name}</div><p className="project-desc">{p.desc}</p></div>))}</div>
        </section>

        <section>
          <p className="section-label">Volunteering</p>
          <h2 className="section-title">How I show up beyond work.</h2>
          <div className="vol-grid">{volunteering.map(v => (<div key={v.name} className="vol-card"><div className="vol-icon">{v.icon}</div><div className="vol-name">{v.name}</div><p className="vol-desc">{v.desc}</p></div>))}</div>
        </section>

        <section>
          <p className="section-label">Endorsements</p>
          <h2 className="section-title">What leaders say.</h2>
          <div className="endorse-card">
            <div className="endorse-avatar" style={{ background: e.color }}>{e.initials}</div>
            <div className="endorse-name">{e.name}<IconVerified /></div>
            <div className="endorse-title">{e.title}</div>
            <p className="endorse-quote">"{e.quote}"</p>
            <div className="endorse-nav">
              <button className="endorse-btn" onClick={() => setEIdx((eIdx - 1 + endorsements.length) % endorsements.length)}>‹</button>
              <button className="endorse-btn" onClick={() => setEIdx((eIdx + 1) % endorsements.length)}>›</button>
            </div>
          </div>
        </section>

        <div className="cta">
          <h2>Ready to own the number?</h2>
          <p>Open for full-time and contract roles in growth operations, technical marketing, and AI-enabled platforms. Direct line to founders. No committees.</p>
          <div className="cta-btns">
            <a href="mailto:ashnarodjan@gmail.com" className="cta-btn white"><IconMail /> ashnarodjan@gmail.com</a>
            <a href="https://calendly.com/ashnarodjan" target="_blank" rel="noreferrer" className="cta-btn"><IconCalendar /> Book a Chat</a>
            <a href="https://www.linkedin.com/in/ashnarodjan" target="_blank" rel="noreferrer" className="cta-btn"><IconLinkedIn /> LinkedIn</a>
          </div>
        </div>
      </div>

      <footer>
        <div>© 2026 Ashna Rodjan · Built with strategy, code, and clean React</div>
        <div className="footer-links">
          <a href="mailto:ashnarodjan@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/ashnarodjan" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/ashnarodjan" target="_blank" rel="noreferrer">GitHub</a>
          <a href="YOUR_RESUME_URL" target="_blank" rel="noreferrer">Resume</a>
        </div>
      </footer>
    </div>
  );
}