import { ArrowUpRight, FlaskConical, LockKeyhole, PlayCircle, RadioTower } from "lucide-react";
import { publicShowcaseProjects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { GitHubMark } from "@/components/SocialIcons";

export function DemoLab() {
  const [leadDemo, ...otherDemos] = publicShowcaseProjects;

  return (
    <section id="demo-lab" className="container-premium py-24">
      <div className="mb-8 grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
        <SectionHeader
          eyebrow="Public Demos"
          title="Live projects that make the AI claims inspectable."
          description="Company-linked work stays protected. Public builds carry the proof: live app links, repositories, product decisions, and implementation depth that reviewers can inspect directly."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-[1.75rem] border border-amber-300/20 bg-amber-300/[0.07] p-5 text-amber-50">
            <LockKeyhole className="mb-4 h-5 w-5" />
            <h3 className="font-semibold">Clear boundary</h3>
            <p className="mt-2 text-sm leading-6 text-amber-100/75">Employer work is summarized safely. Public products are where links, demos, and repositories are exposed.</p>
          </div>
          <div className="rounded-[1.75rem] border border-cyan-300/20 bg-cyan-300/[0.07] p-5 text-cyan-50">
            <RadioTower className="mb-4 h-5 w-5" />
            <h3 className="font-semibold">Open proof</h3>
            <p className="mt-2 text-sm leading-6 text-cyan-100/75">Live deployments show applied AI judgment, not just resume keywords.</p>
          </div>
        </div>
      </div>

      {leadDemo ? (
        <article className="group relative mb-5 overflow-hidden rounded-[2.25rem] border border-cyan-300/20 bg-slate-950/72 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/45 md:p-7">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.2),transparent_32%),radial-gradient(circle_at_86%_10%,rgba(59,130,246,0.14),transparent_28%)]" />
          <div className="relative grid gap-6 lg:grid-cols-[1fr_0.82fr] lg:items-start">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <div className="rounded-2xl bg-cyan-300/10 p-3 text-cyan-200"><PlayCircle className="h-5 w-5" /></div>
                <Badge variant="success">Featured live build</Badge>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-200/75">{leadDemo.domain}</p>
              </div>
              <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{leadDemo.title}</h3>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300 md:text-base">{leadDemo.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {leadDemo.tech.map((tag) => <Badge key={tag} variant="muted">{tag}</Badge>)}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500">Review checklist</p>
              <div className="mt-4 grid gap-3">
                {leadDemo.impact.map((impact) => (
                  <p key={impact} className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07] p-3 text-sm leading-6 text-cyan-50">{impact}</p>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {leadDemo.links?.map((link) => (
                  <Button key={link.label} variant={link.label.toLowerCase().includes("github") ? "secondary" : "default"} size="sm" asChild>
                    <a href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>
                      {link.label} {link.label.toLowerCase().includes("github") ? <GitHubMark className="h-3.5 w-3.5" /> : <ArrowUpRight className="h-3.5 w-3.5" />}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </article>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {otherDemos.map((project) => (
          <article key={project.title} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/62 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/30">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="flex items-start justify-between gap-4">
              <div className="rounded-2xl bg-cyan-300/10 p-3 text-cyan-200"><FlaskConical className="h-5 w-5" /></div>
              <Badge variant="success">Public-safe</Badge>
            </div>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.22em] text-cyan-200/75">{project.domain}</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.slice(0, 6).map((tag) => <Badge key={tag} variant="muted">{tag}</Badge>)}
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