import Image from "next/image";
import { ArrowRight, BrainCircuit, BriefcaseBusiness, Gauge, Layers3, Mail, PlayCircle, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";

const fastRoutes = [
  { label: "Flagship AI work", detail: "Enterprise GenAI, RAG, and agents", href: "#projects", icon: BrainCircuit },
  { label: "Public demos", detail: "Live projects and walkthroughs", href: "#demo-lab", icon: PlayCircle },
  { label: "Experience", detail: "Role timeline", href: "#work", icon: BriefcaseBusiness },
  { label: "AI stack", detail: "Tools mapped to usage", href: "#stack", icon: Layers3 },
  { label: "Impact", detail: "Measured outcomes", href: "#impact", icon: Gauge },
  { label: "Contact", detail: "Email / LinkedIn / GitHub", href: "#contact", icon: Mail },
];

export function PortfolioOS() {
  return (
    <section id="fast-path" className="container-premium relative -mt-8 pb-20 pt-4 md:-mt-12">
      <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="glass-panel-strong relative overflow-hidden rounded-[2.25rem] p-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]" />
          <div className="relative grid gap-5 sm:grid-cols-[180px_1fr] lg:grid-cols-1 xl:grid-cols-[190px_1fr]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900">
              <Image src="/images/MS-1.jpg" alt="Portrait of Mrityunjay Sahoo" fill sizes="(max-width: 768px) 45vw, 220px" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-4">
                <p className="text-sm font-semibold text-white">Mrityunjay Sahoo</p>
                <p className="text-xs text-cyan-100">AI Engineer</p>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                  <Sparkles className="h-3.5 w-3.5" /> Quick review path
                </div>
                <h2 className="text-balance text-2xl font-semibold tracking-tight text-white md:text-3xl">Review the strongest evidence first.</h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Start with shipped systems, measurable impact, live public demos, and the engineering stack behind the work.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Focus</p>
                  <p className="mt-2 font-medium text-white">GenAI / RAG / Agents</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Now</p>
                  <p className="mt-2 font-medium text-white">BFSI Agentic AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {fastRoutes.map((route) => {
            const Icon = route.icon;
            return (
              <a
                key={route.href}
                href={route.href}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-cyan-300/[0.07]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-2xl bg-cyan-300/10 p-3 text-cyan-200"><Icon className="h-5 w-5" /></div>
                  <ArrowRight className="h-4 w-4 text-slate-500 transition group-hover:translate-x-1 group-hover:text-cyan-100" />
                </div>
                <h3 className="mt-6 font-semibold text-white">{route.label}</h3>
                <p className="mt-2 text-sm text-slate-400">{route.detail}</p>
              </a>
            );
          })}
        </div>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-[1.75rem] border border-white/10 bg-slate-950/52 p-4 backdrop-blur-xl">
        <p className="text-sm leading-6 text-slate-400">Employer and client projects are described at a safe public level. Live links are provided only for projects that can be shared publicly.</p>
        <Button asChild variant="secondary" size="sm"><a href={profile.resume} download>Download resume</a></Button>
      </div>
    </section>
  );
}
