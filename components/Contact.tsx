import { Download, Mail, Route } from "lucide-react";
import { GitHubMark, LinkedInMark } from "@/components/SocialIcons";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";

const routes = ["AI Engineer", "GenAI Engineer", "Applied AI", "Agentic AI", "RAG Systems", "Global roles"];

export function Contact() {
  return (
    <section id="contact" className="container-premium py-24">
      <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-slate-950/72 p-8 backdrop-blur-2xl md:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.2),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.16),transparent_34%)]" />
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-cyan-300/15" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-200/80">Contact</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">Let&apos;s build AI systems that actually ship.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Open to AI Engineer, GenAI Engineer, Applied AI Engineer, Agentic AI Engineer and global AI opportunities.
            </p>
            <p className="mt-4 text-slate-400">{profile.email}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><a href={`mailto:${profile.email}`}>Email Me <Mail className="h-4 w-4" /></a></Button>
              <Button asChild variant="secondary" size="lg"><a href={profile.linkedIn} target="_blank" rel="noreferrer">LinkedIn <LinkedInMark className="h-4 w-4" /></a></Button>
              <Button asChild variant="secondary" size="lg"><a href={profile.github} target="_blank" rel="noreferrer">GitHub <GitHubMark className="h-4 w-4" /></a></Button>
              <Button asChild variant="secondary" size="lg"><a href={profile.resume} download>Download Resume <Download className="h-4 w-4" /></a></Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-5">
            <div className="mb-5 flex items-center gap-3 text-cyan-100"><Route className="h-5 w-5" /> Opportunity routing</div>
            <div className="flex flex-wrap gap-2">
              {routes.map((route) => (
                <span key={route} className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.07] px-3 py-2 text-xs text-cyan-50">{route}</span>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-400">Best fit: teams turning complex workflows into reliable AI products with retrieval, orchestration, evaluation, and practical UX.</p>
          </div>
        </div>
      </div>
    </section>
  );
}