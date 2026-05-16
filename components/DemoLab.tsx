import { ArrowUpRight, FlaskConical, LockKeyhole, PlayCircle } from "lucide-react";
import { publicShowcaseProjects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";

export function DemoLab() {
  return (
    <section id="demo-lab" className="container-premium py-24">
      <div className="mb-8 grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
        <SectionHeader
          eyebrow="Public Demo Lab"
          title="Company work stays protected. Showable builds get the spotlight."
          description="Recruiters still need proof they can click. This section is reserved for public demos, walkthroughs, GitHub links, and videos that are safe to share."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-[1.75rem] border border-amber-300/20 bg-amber-300/[0.07] p-5 text-amber-50">
            <LockKeyhole className="mb-4 h-5 w-5" />
            <h3 className="font-semibold">Internal projects</h3>
            <p className="mt-2 text-sm leading-6 text-amber-100/75">Summarized with impact and safe architecture notes. No copyrighted product demos or private workflows.</p>
          </div>
          <div className="rounded-[1.75rem] border border-cyan-300/20 bg-cyan-300/[0.07] p-5 text-cyan-50">
            <FlaskConical className="mb-4 h-5 w-5" />
            <h3 className="font-semibold">Showcase projects</h3>
            <p className="mt-2 text-sm leading-6 text-cyan-100/75">Add live demos here as public projects become ready. The layout already supports those links.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {publicShowcaseProjects.map((project) => (
          <article key={project.title} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/62 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/30">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="flex items-start justify-between gap-4">
              <div className="rounded-2xl bg-cyan-300/10 p-3 text-cyan-200"><PlayCircle className="h-5 w-5" /></div>
              <Badge variant="success">Public-safe</Badge>
            </div>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.22em] text-cyan-200/75">{project.domain}</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tag) => <Badge key={tag} variant="muted">{tag}</Badge>)}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links?.map((link) => (
                <Button key={link.label} variant="secondary" size="sm" asChild>
                  <a href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>
                    {link.label} <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </Button>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
