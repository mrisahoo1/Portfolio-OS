import { ArrowUpRight } from "lucide-react";
import { notes } from "@/data/notes";
import { SectionHeader } from "@/components/SectionHeader";

export function FieldNotes() {
  return (
    <section className="container-premium py-24">
      <SectionHeader
        eyebrow="Field Notes"
        title="Short thinking, not a heavy CMS."
        description="Placeholder articles for future writing about enterprise RAG, agentic AI, and AI portfolio strategy."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {notes.map((note) => (
          <article key={note.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/25">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200/80">{note.status}</p>
            <h3 className="mt-4 text-xl font-semibold leading-snug text-white">{note.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">{note.excerpt}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-cyan-100">Read later <ArrowUpRight className="h-4 w-4" /></div>
          </article>
        ))}
      </div>
    </section>
  );
}
