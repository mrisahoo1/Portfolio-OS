import { Flag, Gamepad2, Goal, Hammer, Network } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const items = [
  { title: "Football", body: "State-level football player and huge Real Madrid fan.", icon: Goal },
  { title: "F1", body: "Race weekends are sacred - strategy, speed, and split-second decisioning.", icon: Flag },
  { title: "Gaming", body: "FPS shooter enthusiast - CS2 and Valorant. Precision, reflexes, and systems thinking.", icon: Gamepad2 },
  { title: "Builder Mode", body: "Always experimenting with AI tools, demos, and new ways to turn ideas into working products.", icon: Hammer },
  { title: "Community", body: "TEDx, TechBytes, AI training, and product demos.", icon: Network },
];

export function HumanLayer() {
  return (
    <section id="human-layer" className="container-premium py-24">
      <SectionHeader
        eyebrow="Human Layer"
        title="Outside the model weights."
        description="The portfolio is professional first, but the human signal matters: taste, curiosity, discipline, and the instincts of someone who likes building things."
        align="center"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className={`rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/25 ${index < 2 ? "lg:col-span-2" : ""}`}>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200"><Icon className="h-6 w-6" /></div>
              <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
