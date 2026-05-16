const railItems = [
  { label: "Home", href: "#home" },
  { label: "Fast", href: "#fast-path" },
  { label: "Ask", href: "#ask" },
  { label: "Work", href: "#projects" },
  { label: "Demos", href: "#demo-lab" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export function SectionRail() {
  return (
    <aside className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 xl:block" aria-label="Quick section navigation">
      <div className="rounded-full border border-white/10 bg-slate-950/55 p-2 backdrop-blur-2xl">
        {railItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="group relative flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-cyan-300/10 hover:text-cyan-100"
            aria-label={`Jump to ${item.label}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            <span className="pointer-events-none absolute right-11 rounded-full border border-white/10 bg-slate-950/90 px-3 py-1 text-xs text-slate-200 opacity-0 shadow-xl transition group-hover:opacity-100">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
}
