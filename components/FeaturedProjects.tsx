import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { featuredProjects, moreProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";

const systemLayers = [
  { label: "Retrieve", detail: "RAG, graph retrieval, multimodal document search" },
  { label: "Reason", detail: "Planner, agent workflows, semantic orchestration" },
  { label: "Optimize", detail: "CVXPY, Optuna, measurable workflow reduction" },
  { label: "Adopt", detail: "Training, enablement, AI awareness programs" },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="container-premium py-24">
      <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader
          eyebrow="Featured Systems"
          title="Enterprise AI work, framed as systems instead of slogans."
          description="These are public-safe summaries with enough technical clarity for AI teams and enough outcome clarity for recruiters, while avoiding confidential architecture, data, credentials, and client-sensitive workflows."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {systemLayers.map((layer, index) => (
            <div key={layer.label} className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-300/60 to-transparent" />
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">Layer 0{index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold text-white">{layer.label}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{layer.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6">
        {featuredProjects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
      </div>

      <div className="mt-20 rounded-[2.5rem] border border-white/10 bg-slate-950/62 p-5 backdrop-blur-xl md:p-7">
        <div className="mb-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <Badge variant="muted" className="mb-3 uppercase tracking-[0.24em]">More Systems</Badge>
            <h3 className="text-2xl font-semibold text-white md:text-4xl">A wider build surface, scanned like a mission board.</h3>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-400">Additional AI, platform, community, and product engineering work. Compact by design so reviewers can scan breadth quickly.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {moreProjects.map((project, index) => (
            <article key={project.title} className={`group rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/25 ${index === 0 ? "xl:col-span-2" : ""}`}>
              <div className="flex items-start justify-between gap-4">
                <div className="rounded-2xl bg-cyan-300/10 p-3 text-cyan-200">{project.source === "company" ? <ShieldCheck className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}</div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">{project.source === "company" ? "Safe summary" : "Public build"}</p>
              </div>
              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.22em] text-cyan-200/75">{project.domain}</p>
              <h4 className="mt-3 text-lg font-semibold text-white">{project.title}</h4>
              <p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.slice(0, 5).map((tag) => <Badge key={tag} variant="muted">{tag}</Badge>)}
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-100">
                Evidence summary <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}