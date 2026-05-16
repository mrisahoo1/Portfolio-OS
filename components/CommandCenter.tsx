"use client";

import { motion } from "framer-motion";
import { Activity, BrainCircuit, Database, Network, ShieldCheck, Sparkles } from "lucide-react";

const systemAreas = [
  { icon: BrainCircuit, title: "Agentic AI", body: "Planner, retrieval, tools, memory, and workflow orchestration for BFSI use cases." },
  { icon: Database, title: "RAG Engineering", body: "Enterprise search, document intelligence, embeddings, and relevance improvement." },
  { icon: Network, title: "Product APIs", body: "FastAPI and full-stack interfaces that turn AI workflows into usable products." },
  { icon: ShieldCheck, title: "Safe Delivery", body: "Public summaries avoid private architecture, client data, credentials, and proprietary workflows." },
];

const domains = ["BFSI", "Legal AI", "Industrial AI", "Sustainability", "Career AI"];

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
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-200/80">AI Systems Snapshot</p>
            <h3 className="mt-1 text-lg font-semibold text-white">What hiring teams should know first</h3>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-100">
            <span className="h-2 w-2 rounded-full bg-emerald-300" /> Open to global roles
          </div>
        </div>

        <div className="relative mt-5 rounded-3xl border border-white/10 bg-slate-950/62 p-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
            <Activity className="h-4 w-4 text-cyan-200" /> Engineering focus
          </div>
          <p className="text-sm leading-7 text-slate-300">
            I build applied AI systems where LLMs are connected to retrieval, business workflows, evaluation signals, backend services, and product interfaces.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {domains.map((domain) => (
              <span key={domain} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                {domain}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
          {systemAreas.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"
              >
                <div className="mb-3 rounded-xl bg-cyan-300/10 p-2 text-cyan-200 w-fit"><Icon className="h-4 w-4" /></div>
                <p className="text-sm font-medium text-white">{item.title}</p>
                <p className="mt-2 text-xs leading-5 text-slate-400">{item.body}</p>
              </motion.div>
            );
          })}
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
