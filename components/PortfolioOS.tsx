"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Gauge,
  GraduationCap,
  Layers3,
  Mail,
  PlayCircle,
  Radar,
  Sparkles,
  TerminalSquare,
  Trophy,
} from "lucide-react";
import { profile } from "@/data/profile";
import { publicShowcaseProjects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fastRoutes = [
  { label: "Flagship AI work", detail: "Enterprise GenAI, RAG, and agents", href: "#projects", icon: BrainCircuit, span: "lg:col-span-2" },
  { label: "Live demos", detail: "Public builds with links", href: "#demo-lab", icon: PlayCircle, span: "" },
  { label: "Experience", detail: "Role timeline", href: "#work", icon: BriefcaseBusiness, span: "" },
  { label: "AI stack", detail: "Tools mapped to usage", href: "#stack", icon: Layers3, span: "" },
  { label: "Impact", detail: "Measured outcomes", href: "#impact", icon: Gauge, span: "" },
  { label: "Contact", detail: "Email / LinkedIn / GitHub", href: "#contact", icon: Mail, span: "" },
];

const reviewerLenses = [
  {
    id: "recruiter",
    label: "Recruiter scan",
    icon: Radar,
    title: "30-second hiring signal",
    summary: "A quick path to role fit, verified outcomes, live demos, and contact links without forcing a full-page read.",
    proof: ["AI Engineer focused on GenAI, RAG, and agentic systems", "Public demos are separated from company-confidential work", "Measured impact is surfaced before long descriptions"],
    cta: { label: "Jump to public demos", href: "#demo-lab" },
  },
  {
    id: "ai-lead",
    label: "AI lead review",
    icon: TerminalSquare,
    title: "Engineering evidence first",
    summary: "Shows the practical systems behind the keywords: retrieval quality, agent orchestration, enterprise automation, and production constraints.",
    proof: ["RAG Battle Arena demonstrates evaluation and observability thinking", "BFSI and legal work show enterprise AI patterns", "Stack section maps tools to actual use instead of name-dropping"],
    cta: { label: "Review flagship work", href: "#projects" },
  },
  {
    id: "admissions",
    label: "Global reviewer",
    icon: GraduationCap,
    title: "Builder profile with breadth",
    summary: "Balances professional AI systems, public experiments, community leadership, and human interests for master's and global opportunity reviewers.",
    proof: ["Enterprise AI delivery plus public product-building", "Community initiatives: AI Shots, AIPowerX, TechBytes, TEDx", "Clear human layer beyond technical claims"],
    cta: { label: "See leadership", href: "#leadership" },
  },
];

const signals = [
  { value: "80%", label: "search time reduction", tone: "from-cyan-300/25" },
  { value: "98%", label: "AI adoption", tone: "from-emerald-300/25" },
  { value: "4", label: "RAG modes in live arena", tone: "from-blue-300/25" },
  { value: "2", label: "public live AI products", tone: "from-violet-300/25" },
];

export function PortfolioOS() {
  const [activeLens, setActiveLens] = useState(reviewerLenses[0]);
  const featuredDemos = publicShowcaseProjects.slice(0, 2);

  return (
    <section id="fast-path" className="container-premium relative -mt-8 pb-20 pt-4 md:-mt-12">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-full border border-cyan-300/15 bg-slate-950/72 px-5 py-3 text-sm text-slate-300 backdrop-blur-xl">
        <span className="inline-flex items-center gap-2 text-cyan-100"><Sparkles className="h-4 w-4" /> Portfolio proof navigator</span>
        <span className="text-slate-500">Choose a reviewer lens, then jump straight to the evidence that matters.</span>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="glass-panel-strong relative overflow-hidden rounded-[2.25rem] p-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.2),transparent_32%),radial-gradient(circle_at_86%_22%,rgba(139,92,246,0.18),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_46%)]" />
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-cyan-300/20" />
          <div className="relative grid gap-5 xl:grid-cols-[190px_1fr]">
            <div className="relative min-h-[280px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900">
              <Image src="/images/MS-1.jpg" alt="Portrait of Mrityunjay Sahoo" fill sizes="(max-width: 768px) 80vw, 220px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-sm font-semibold text-white">Mrityunjay Sahoo</p>
                <p className="text-xs text-cyan-100">AI Engineer / GenAI Builder</p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200/75">Reviewer lens</p>
                <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-white md:text-3xl">A portfolio that adapts to how people actually review candidates.</h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Instead of making every visitor scroll the same path, this panel surfaces the strongest proof by intent: hiring fit, technical depth, or global reviewer context.
                </p>
              </div>

              <div className="grid gap-2 sm:grid-cols-3 xl:grid-cols-1">
                {reviewerLenses.map((lens) => {
                  const Icon = lens.icon;
                  const isActive = activeLens.id === lens.id;
                  return (
                    <button
                      key={lens.id}
                      type="button"
                      onClick={() => setActiveLens(lens)}
                      className={cn(
                        "group flex items-center gap-3 rounded-2xl border p-3 text-left transition",
                        isActive ? "border-cyan-300/45 bg-cyan-300/12 text-white" : "border-white/10 bg-white/[0.045] text-slate-400 hover:border-cyan-300/25 hover:text-white",
                      )}
                    >
                      <span className={cn("rounded-xl p-2", isActive ? "bg-cyan-300/20 text-cyan-100" : "bg-white/[0.05] text-slate-500 group-hover:text-cyan-100")}><Icon className="h-4 w-4" /></span>
                      <span className="text-sm font-medium">{lens.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative mt-5 rounded-[1.75rem] border border-white/10 bg-slate-950/58 p-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500">Active brief</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{activeLens.title}</h3>
              </div>
              <Button asChild size="sm" variant="secondary"><a href={activeLens.cta.href}>{activeLens.cta.label} <ArrowRight className="h-3.5 w-3.5" /></a></Button>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-400">{activeLens.summary}</p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {activeLens.proof.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300">
                  <CheckCircle2 className="mb-3 h-4 w-4 text-emerald-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {fastRoutes.map((route) => {
              const Icon = route.icon;
              return (
                <a
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-cyan-300/[0.07]",
                    route.span,
                  )}
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

          <div className="grid gap-5 xl:grid-cols-[0.92fr_1.08fr]">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/66 p-5 backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.18),transparent_34%)]" />
              <div className="relative">
                <div className="mb-4 flex items-center gap-2 text-sm text-cyan-100"><Trophy className="h-4 w-4" /> Signal board</div>
                <div className="grid grid-cols-2 gap-3">
                  {signals.map((signal) => (
                    <div key={signal.label} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                      <div className={cn("absolute inset-x-0 top-0 h-px bg-gradient-to-r to-transparent", signal.tone)} />
                      <p className="text-2xl font-semibold tracking-tight text-white">{signal.value}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-400">{signal.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/66 p-5 backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-200/75">Live proof</p>
                  <h3 className="mt-2 font-semibold text-white">Projects hiring teams can open now</h3>
                </div>
                <Button asChild size="sm" variant="secondary"><a href="#demo-lab">All demos</a></Button>
              </div>
              <div className="space-y-3">
                {featuredDemos.map((project) => (
                  <div key={project.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-sm font-medium text-white">{project.title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{project.domain}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.links?.slice(0, 2).map((link) => (
                        <a key={link.href} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined} className="inline-flex items-center gap-1 rounded-full border border-cyan-300/15 bg-cyan-300/[0.08] px-3 py-1 text-xs text-cyan-100 transition hover:border-cyan-300/40">
                          {link.label} <ArrowRight className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/52 p-4 text-sm leading-6 text-slate-400 backdrop-blur-xl">
            Employer and client projects are summarized safely. Public links are shown only where the app or repository can be shared openly.
            <Button asChild variant="link" size="sm" className="ml-0 mt-2 px-0 sm:ml-3 sm:mt-0"><a href={profile.resume} download>Download resume</a></Button>
          </div>
        </div>
      </div>
    </section>
  );
}