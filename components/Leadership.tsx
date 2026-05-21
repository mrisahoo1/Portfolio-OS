import { ArrowUpRight, Mic2, PlayCircle, Sparkles, UsersRound } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const aiShotsLink = "https://www.linkedin.com/posts/vwgdigitalsolutionsindia_volkswagengrouptechnologysolutionsindia-technologyleadership-activity-7442251752776785920--mkW?utm_source=share&utm_medium=member_android&rcm=ACoAACzuGtsB7mESEDlsNfXAyqZa-_R0G0WXoJg";

const leadershipItems = [
  { label: "AIPowerX", body: "Led / orchestrated organization-wide AI enablement at Volkswagen.", metric: "98% adoption" },
  { label: "AI Shots", body: "Started and led a practical AI awareness format that later appeared on Volkswagen LinkedIn.", metric: "Started solo" },
  { label: "AI Champions", body: "Contributed to internal AI growth through sessions, training, and technical momentum.", metric: "Org enablement" },
  { label: "TechBytes", body: "Hosted a community-driven initiative for technology showcases and product demos.", metric: "Community" },
  { label: "TEDx", body: "CEM Team Member in first year and Lead Curator in second year at TEDxNIITUniversity.", metric: "Curation" },
];

const mediaWall = [
  { title: "Volkswagen LinkedIn Feature", subtitle: "AI Shots video", icon: PlayCircle, href: aiShotsLink, className: "md:col-span-2 md:row-span-2" },
  { title: "AI Shots", subtitle: "Started and led", icon: Sparkles, className: "" },
  { title: "AIPowerX", subtitle: "Org-wide AI adoption", icon: UsersRound, className: "" },
  { title: "TechBytes", subtitle: "Demos and showcases", icon: Mic2, className: "" },
  { title: "TEDx", subtitle: "Curator mindset", icon: Sparkles, className: "" },
];

export function Leadership() {
  return (
    <section id="leadership" className="container-premium py-24">
      <SectionHeader
        eyebrow="Leadership / Community"
        title="AI adoption is also a product problem."
        description="The same person who builds AI systems also knows how to explain them, demo them, and create internal momentum around them."
      />
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/68 p-6 backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(139,92,246,0.14),transparent_32%)]" />
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200/75">Influence loop</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">Build, teach, demo, repeat.</h3>
            <div className="mt-7 space-y-4">
              {leadershipItems.map((item) => (
                <div key={item.label} className="grid gap-3 rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-4 sm:grid-cols-[120px_1fr]">
                  <div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-200/75">{item.metric}</p>
                  </div>
                  <p className="text-sm leading-6 text-slate-400">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid auto-rows-[150px] gap-4 md:grid-cols-2">
          {mediaWall.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200"><Icon className="h-6 w-6" /></div>
                  {item.href ? <ArrowUpRight className="h-5 w-5 text-cyan-100" /> : null}
                </div>
                <div className="mt-auto">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{item.subtitle}</p>
                </div>
              </>
            );

            const className = `group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.025] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/30 ${item.className}`;
            return item.href ? (
              <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className={className} aria-label="Watch Volkswagen LinkedIn AI Shots feature">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_36%)] opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex h-full flex-col">{content}</div>
              </a>
            ) : (
              <article key={item.title} className={className}><div className="relative flex h-full flex-col">{content}</div></article>
            );
          })}
        </div>
      </div>
    </section>
  );
}