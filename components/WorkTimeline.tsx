"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { SectionHeader } from "@/components/SectionHeader";

export function WorkTimeline() {
  return (
    <section id="work" className="container-premium py-24">
      <SectionHeader
        eyebrow="Experience Timeline"
        title="From AI enablement to enterprise-grade agent systems."
        description="A compact view of roles, dates, and focus areas relevant to AI Engineer, GenAI Engineer, Applied AI Engineer, and Agentic AI Engineer opportunities."
      />
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-300/60 via-white/10 to-transparent md:left-1/2" />
        <div className="space-y-8">
          {experiences.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.period}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative grid gap-6 pl-12 md:grid-cols-2 md:pl-0"
            >
              <div className={`hidden md:block ${index % 2 === 0 ? "text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-200/80">{item.period}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.company}</h3>
              </div>
              <div className="absolute left-0 top-2 h-9 w-9 rounded-full border border-cyan-300/30 bg-slate-950 p-1 md:left-1/2 md:-translate-x-1/2">
                <span className="block h-full w-full rounded-full bg-cyan-300/60 shadow-[0_0_24px_rgba(34,211,238,0.45)]" />
              </div>
              <div className={`rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl ${index % 2 === 0 ? "md:col-start-2 md:pl-6" : "md:col-start-1 md:row-start-1"}`}>
                <div className="md:hidden">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-200/80">{item.period}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{item.company}</h3>
                </div>
                <p className="text-base font-medium text-white md:text-lg">{item.role}</p>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.focus}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
