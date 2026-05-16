import { Mail } from "lucide-react";
import { GitHubMark, LinkedInMark } from "@/components/SocialIcons";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-premium flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">Mrityunjay Sahoo</p>
          <p className="mt-1 text-sm text-slate-400">AI Engineer</p>
          <p className="mt-2 text-xs text-slate-500">Built with Next.js, TypeScript, Tailwind, shadcn/ui, Motion</p>
        </div>
        <div className="flex items-center gap-3">
          <a className="rounded-full border border-white/10 bg-white/[0.045] p-3 text-slate-400 transition hover:text-white" href={`mailto:${profile.email}`} aria-label="Email"><Mail className="h-4 w-4" /></a>
          <a className="rounded-full border border-white/10 bg-white/[0.045] p-3 text-slate-400 transition hover:text-white" href={profile.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInMark className="h-4 w-4" /></a>
          <a className="rounded-full border border-white/10 bg-white/[0.045] p-3 text-slate-400 transition hover:text-white" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubMark className="h-4 w-4" /></a>
        </div>
        <p className="text-xs text-slate-500">Copyright {new Date().getFullYear()} Mrityunjay Sahoo. All rights reserved.</p>
      </div>
    </footer>
  );
}


