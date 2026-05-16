import { ArrowRight } from "lucide-react";
import { featuredProjects, moreProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";

export function FeaturedProjects() {
  return (
    <section id="projects" className="container-premium py-24">
      <SectionHeader
        eyebrow="Featured Systems"
        title="Case studies built around enterprise AI outcomes."
        description="Medium-detail public summaries that show product direction and measurable impact without exposing confidential architecture, data, credentials, or private client workflows."
      />
      <div className="grid gap-6">
        {featuredProjects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
      </div>

      <div className="mt-20">
        <div className="mb-6 flex items-end justify-between gap-6">
          <div>
            <Badge variant="muted" className="mb-3 uppercase tracking-[0.24em]">More Systems</Badge>
            <h3 className="text-2xl font-semibold text-white md:text-3xl">More Systems I&apos;ve Built</h3>
          </div>
          <p className="hidden max-w-md text-sm leading-6 text-slate-400 md:block">A horizontal scan of additional AI, platform, community, and product engineering work.</p>
        </div>
        <div className="masked-fade -mx-4 overflow-x-auto px-4 pb-4 scrollbar-none">
          <div className="flex w-max gap-4">
            {moreProjects.map((project) => (
              <article key={project.title} className="w-[320px] rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/25">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan-200/75">{project.domain}</p>
                <h4 className="mt-3 text-lg font-semibold text-white">{project.title}</h4>
                <p className="mt-3 line-clamp-5 text-sm leading-6 text-slate-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tag) => <Badge key={tag} variant="muted">{tag}</Badge>)}
                </div>
                <div className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-100">
                  Public summary <ArrowRight className="h-4 w-4" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
