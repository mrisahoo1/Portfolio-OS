"use client";

import { useState } from "react";
import { ArrowRight, BrainCircuit, BriefcaseBusiness, Command, ExternalLink, Gauge, GraduationCap, Mail, PlayCircle, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GitHubMark, LinkedInMark } from "@/components/SocialIcons";
import { profile } from "@/data/profile";
import { publicShowcaseProjects } from "@/data/projects";
import { cn } from "@/lib/utils";

const routes = [
  {
    id: "hire",
    label: "Hire in 60 sec",
    icon: BriefcaseBusiness,
    title: "What a recruiter needs immediately",
    summary: "Role fit, measurable impact, public proof, and contact actions without scrolling through every section.",
    evidence: ["AI Engineer focused on GenAI, RAG, and Agentic AI", "Enterprise domains: BFSI, legal, automotive, industrial operations", "Public demos include RAG Battle Arena and Job Search Engine"],
    jump: "#contact",
  },
  {
    id: "technical",
    label: "Technical due diligence",
    icon: BrainCircuit,
    title: "What an AI lead should inspect",
    summary: "Retrieval quality, agent orchestration, evaluation thinking, backend judgment, and production-safe communication.",
    evidence: ["RAG Battle Arena compares retrieval strategies with quality and observability metrics", "Agentic AI work spans LangGraph, Semantic Kernel, FastAPI, pgvector, and optimization", "Company work is summarized without leaking proprietary implementation details"],
    jump: "#projects",
  },
  {
    id: "global",
    label: "Global reviewer",
    icon: GraduationCap,
    title: "What admissions and global teams see",
    summary: "A builder profile with shipped systems, public experiments, leadership, and human signal beyond keyword matching.",
    evidence: ["Enterprise AI plus independent live products", "AI enablement through AI Shots, AIPowerX, TechBytes, and TEDx", "Clear communication of boundaries, outcomes, and technical taste"],
    jump: "#leadership",
  },
];

const proofTiles = [
  { label: "Search time", value: "80%", detail: "Digital Library discovery reduction", icon: Gauge },
  { label: "AI adoption", value: "98%", detail: "AIPowerX adoption signal", icon: Sparkles },
  { label: "RAG modes", value: "4", detail: "Live RAG Battle Arena strategies", icon: PlayCircle },
  { label: "Public apps", value: "2", detail: "Live AI products with reviewable links", icon: ExternalLink },
];

export function ProofDeck() {
  const [activeRoute, setActiveRoute] = useState(routes[0]);
  const liveProjects = publicShowcaseProjects.slice(0, 2);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="fixed bottom-5 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 rounded-full border border-cyan-300/25 bg-slate-950/82 px-4 py-3 text-sm text-cyan-50 shadow-[0_18px_70px_rgba(34,211,238,0.16)] backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-300/45 md:bottom-7"
          aria-label="Open portfolio proof deck"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300 text-slate-950"><Command className="h-4 w-4" /></span>
          <span className="font-medium">Open Proof Deck</span>
          <span className="hidden rounded-full border border-white/10 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400 sm:inline">No-scroll mode</span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl p-0">
        <div className="relative max-h-[calc(100dvh-1.5rem)] overflow-y-auto p-5 scrollbar-chat md:p-7">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_85%_8%,rgba(139,92,246,0.16),transparent_30%)]" />
          <div className="relative">
            <DialogHeader className="pr-12">
              <DialogTitle className="text-3xl tracking-tight md:text-5xl">Portfolio Proof Deck</DialogTitle>
              <DialogDescription className="max-w-3xl text-base leading-7">
                A non-linear review layer for people who do not want to scroll. Pick a lens, inspect proof, open live demos, or jump directly to the relevant section.
              </DialogDescription>
            </DialogHeader>

            <div className="mt-7 grid gap-5 lg:grid-cols-[0.36fr_0.64fr]">
              <div className="grid gap-3">
                {routes.map((route) => {
                  const Icon = route.icon;
                  const isActive = activeRoute.id === route.id;
                  return (
                    <button
                      key={route.id}
                      type="button"
                      onClick={() => setActiveRoute(route)}
                      className={cn(
                        "rounded-[1.5rem] border p-4 text-left transition",
                        isActive ? "border-cyan-300/45 bg-cyan-300/12 text-white" : "border-white/10 bg-white/[0.045] text-slate-400 hover:border-cyan-300/30 hover:text-white",
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span className={cn("rounded-2xl p-3", isActive ? "bg-cyan-300/20 text-cyan-100" : "bg-white/[0.05] text-slate-500")}><Icon className="h-5 w-5" /></span>
                        <span className="font-semibold">{route.label}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-slate-950/62 p-5">
                <Badge variant="muted" className="mb-4 uppercase tracking-[0.2em]">Active route</Badge>
                <h3 className="text-2xl font-semibold text-white md:text-3xl">{activeRoute.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400 md:text-base">{activeRoute.summary}</p>
                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {activeRoute.evidence.map((item) => (
                    <div key={item} className="rounded-[1.25rem] border border-cyan-300/15 bg-cyan-300/[0.07] p-4 text-sm leading-6 text-cyan-50">{item}</div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button asChild><a href={activeRoute.jump}>Jump to section <ArrowRight className="h-4 w-4" /></a></Button>
                  <Button asChild variant="secondary"><a href={`mailto:${profile.email}`}>Email <Mail className="h-4 w-4" /></a></Button>
                  <Button asChild variant="secondary"><a href={profile.linkedIn} target="_blank" rel="noreferrer">LinkedIn <LinkedInMark className="h-4 w-4" /></a></Button>
                  <Button asChild variant="secondary"><a href={profile.github} target="_blank" rel="noreferrer">GitHub <GitHubMark className="h-4 w-4" /></a></Button>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-4">
              {proofTiles.map((tile) => {
                const Icon = tile.icon;
                return (
                  <div key={tile.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <Icon className="h-5 w-5 text-cyan-200" />
                      <p className="gradient-text text-3xl font-semibold">{tile.value}</p>
                    </div>
                    <p className="mt-3 text-sm font-medium text-white">{tile.label}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{tile.detail}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {liveProjects.map((project) => (
                <div key={project.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-200/75">Live proof</p>
                  <h4 className="mt-3 text-xl font-semibold text-white">{project.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{project.domain}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.links?.slice(0, 2).map((link) => (
                      <Button key={link.href} asChild size="sm" variant="secondary">
                        <a href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>{link.label} <ArrowRight className="h-3.5 w-3.5" /></a>
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}