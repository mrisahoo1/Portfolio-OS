"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ExternalLink, LockKeyhole } from "lucide-react";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(index === 0);
  const isCompanyProject = project.source === "company";

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/62 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-slate-900/72"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="mb-3 flex flex-wrap gap-2">
            <p className="font-mono text-xs uppercase tracking-[0.26em] text-cyan-200/80">{project.domain}</p>
            {isCompanyProject ? <Badge variant="muted" className="border-amber-300/20 bg-amber-300/10 text-amber-100">Protected work</Badge> : <Badge variant="success">Public-safe</Badge>}
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
        </div>
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs text-slate-300 transition hover:text-white"
          aria-expanded={expanded}
        >
          Safe details <ChevronDown className={cn("h-4 w-4 transition", expanded && "rotate-180")} />
        </button>
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-300 md:text-base">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tag) => <Badge key={tag} variant="muted">{tag}</Badge>)}
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {project.impact.map((impact) => (
          <div key={impact} className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07] p-4 text-sm leading-6 text-cyan-50">
            {impact}
          </div>
        ))}
      </div>

      {expanded && project.details ? (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-6 rounded-3xl border border-white/10 bg-white/[0.045] p-5">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-slate-500">Safe public notes</p>
          <ul className="space-y-3 text-sm leading-6 text-slate-300">
            {project.details.map((detail) => <li key={detail}>- {detail}</li>)}
          </ul>
        </motion.div>
      ) : null}

      <div className="mt-7 flex flex-wrap gap-3">
        {isCompanyProject ? (
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs font-medium text-amber-100">
            <LockKeyhole className="h-3.5 w-3.5" /> Public demo unavailable for employer/client-owned work
          </span>
        ) : (
          project.links?.map((link) => (
            <Button key={link.label} variant="secondary" size="sm" asChild>
              <a href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>{link.label} <ExternalLink className="h-3.5 w-3.5" /></a>
            </Button>
          )) ?? null
        )}
      </div>
    </motion.article>
  );
}
