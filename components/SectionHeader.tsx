import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 max-w-3xl", align === "center" && "mx-auto text-center")}>
      <Badge variant="muted" className="mb-4 uppercase tracking-[0.28em] text-cyan-100/90">
        {eyebrow}
      </Badge>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-400 md:text-lg">{description}</p> : null}
    </div>
  );
}
