"use client";

import { motion } from "framer-motion";
import { Activity, BrainCircuit, Database, Network, ShieldCheck, Sparkles } from "lucide-react";

const terminalLines = [
  "initializing portfolio.agent()",
  "loading enterprise_rag.memory",
  "retriever: legal + bfsi + industrial domains",
  "tools: langgraph | semantic-kernel | fastapi",
  "response: grounded, concise, recruiter-ready",
];

const pipeline = ["Query", "Plan", "Retrieve", "Reason", "Act", "Explain"];

const metrics = ["80% search time reduction", "98% AI adoption", "20% manual effort reduction", "15% retrieval relevance improvement"];

export function CommandCenter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-xl"
    >
      <div className="absolute -inset-8 rounded-[3rem] bg-cyan-300/10 blur-3xl" />
      <div className="glass-panel-strong glow-border relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_90%_25%,rgba(139,92,246,0.15),transparent_35%)]" />
        <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-200/80">AI Command Center</p>
            <h3 className="mt-1 text-lg font-semibold text-white">Portfolio Agent Runtime</h3>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-100">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" /> Live demo mode
          </div>
        </div>

        <div className="relative mt-5 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4 font-mono text-xs leading-6 text-slate-300">
            {terminalLines.map((line, index) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.16 }}
                className="flex gap-2"
              >
                <span className="text-cyan-300">{index === terminalLines.length - 1 ? ">" : "$"}</span>
                <span>{line}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-3">
            {[
              [BrainCircuit, "Planner", "Breaks work into safe steps"],
              [Database, "Retriever", "Grounds answers in curated data"],
              [Network, "Tools", "Connects workflows and APIs"],
              [ShieldCheck, "Memory", "Keeps context controlled"],
            ].map(([Icon, title, body]) => {
              const TypedIcon = Icon as typeof BrainCircuit;
              return (
                <div key={title as string} className="rounded-2xl border border-white/10 bg-white/[0.045] p-3">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-cyan-300/10 p-2 text-cyan-200"><TypedIcon className="h-4 w-4" /></div>
                    <div>
                      <p className="text-sm font-medium text-white">{title as string}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-400">{body as string}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative mt-5 rounded-3xl border border-white/10 bg-white/[0.04] p-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
            <Activity className="h-4 w-4 text-cyan-200" /> Agent pipeline
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {pipeline.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <motion.span
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: [0.55, 1, 0.55] }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.18 }}
                  className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100"
                >
                  {step}
                </motion.span>
                {index < pipeline.length - 1 ? <span className="text-slate-600">{`->`}</span> : null}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-5 grid gap-2 sm:grid-cols-2">
          {metrics.map((metric) => (
            <div key={metric} className="rounded-2xl border border-white/10 bg-slate-950/48 px-3 py-3 text-xs text-slate-200">
              <Sparkles className="mb-2 h-3.5 w-3.5 text-cyan-200" />
              {metric}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

