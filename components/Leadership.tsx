import { ArrowUpRight, Mic2, PlayCircle, Sparkles, UsersRound } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const aiShotsLink = "https://www.linkedin.com/posts/vwgdigitalsolutionsindia_volkswagengrouptechnologysolutionsindia-technologyleadership-activity-7442251752776785920--mkW?utm_source=share&utm_medium=member_android&rcm=ACoAACzuGtsB7mESEDlsNfXAyqZa-_R0G0WXoJg";

const leadershipItems = [
  "Led / orchestrated AIPowerX at Volkswagen",
  "Started AI Shots",
  "Contributed to AI Champions",
  "Delivered specialized AI trainings",
  "Organized technical sessions for organization-wide AI growth",
  "Featured on Volkswagen LinkedIn through AI Shots video",
  "Host of TechBytes, a community-driven initiative for technology showcases and product demos",
  "TEDxNIITUniversity: CEM Team Member in first year, Lead Curator in second year",
];

const mediaWall = [
  { title: "Volkswagen LinkedIn Feature", subtitle: "Watch the AI Shots video", icon: PlayCircle, href: aiShotsLink },
  { title: "AI Shots", subtitle: "Started and led", icon: Sparkles },
  { title: "AIPowerX", subtitle: "Org-wide adoption", icon: UsersRound },
  { title: "TechBytes", subtitle: "Community demos", icon: Mic2 },
  { title: "TEDx", subtitle: "Curation and events", icon: Sparkles },
];

export function Leadership() {
  return (
    <section id="leadership" className="container-premium py-24">
      <SectionHeader
        eyebrow="Leadership / Community"
        title="Beyond building AI systems, I help people understand them."
        description="Technical influence matters when AI products need adoption, trust, and internal momentum."
      />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
          <ul className="space-y-4 text-sm leading-7 text-slate-300">
            {leadershipItems.map((item) => <li key={item}>- {item}</li>)}
          </ul>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {mediaWall.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200"><Icon className="h-6 w-6" /></div>
                  {item.href ? <ArrowUpRight className="h-5 w-5 text-cyan-100" /> : null}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.subtitle}</p>
              </>
            );

            const className = `min-h-44 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.025] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/30 ${index === 0 ? "sm:col-span-2" : ""}`;
            return item.href ? (
              <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className={className} aria-label="Watch Volkswagen LinkedIn AI Shots feature">
                {content}
              </a>
            ) : (
              <article key={item.title} className={className}>{content}</article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
