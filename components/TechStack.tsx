"use client";

import { useDeferredValue, useState } from "react";
import { Cpu } from "lucide-react";
import { skillCategories, skills, type SkillCategory } from "@/data/skills";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

export function TechStack() {
  const [active, setActive] = useState<SkillCategory | "All">("All");
  const deferredActive = useDeferredValue(active);
  const visibleSkills = deferredActive === "All" ? skills : skills.filter((skill) => skill.category === deferredActive);

  return (
    <section id="stack" className="container-premium py-24">
      <SectionHeader
        eyebrow="AI Engineering Stack"
        title="Tools are useful. Production judgment matters more."
        description="Filter the stack by category and hover to see where each tool fits into Mrityunjay's AI engineering work."
      />
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none" aria-label="Skill categories">
        {skillCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2 text-sm transition",
              active === category ? "border-cyan-300/50 bg-cyan-300/15 text-cyan-50" : "border-white/10 bg-white/[0.045] text-slate-400 hover:text-white",
            )}
            aria-pressed={active === category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleSkills.map((skill) => (
          <article key={`${skill.category}-${skill.name}`} className="group min-h-40 rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/[0.07]">
            <div className="flex items-center justify-between gap-4">
              <div className="rounded-2xl bg-cyan-300/10 p-3 text-cyan-200"><Cpu className="h-5 w-5" /></div>
              <p className="text-right font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">{skill.category}</p>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-white">{skill.name}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400 transition group-hover:text-slate-300">{skill.usedFor}</p>
          </article>
        ))}
      </div>

      <p className="mt-8 rounded-[1.5rem] border border-cyan-300/15 bg-cyan-300/[0.07] p-5 text-sm leading-7 text-cyan-50">
        I care less about tool worship and more about building AI systems that survive production.
      </p>
    </section>
  );
}
