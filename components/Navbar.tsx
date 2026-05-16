"use client";

import { Command, Mail } from "lucide-react";
import { GitHubMark, LinkedInMark } from "@/components/SocialIcons";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AskPortfolioChat } from "@/components/AskPortfolioChat";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Demos", href: "#demo-lab" },
  { label: "AI Stack", href: "#stack" },
  { label: "Leadership", href: "#leadership" },
  { label: "Beyond Code", href: "#human-layer" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-slate-950/60 backdrop-blur-2xl">
      <nav className="container-premium flex h-16 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3" aria-label="Mrityunjay Sahoo home">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-sm font-bold text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.12)]">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-medium text-slate-200 sm:inline">Mrityunjay Sahoo</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm text-slate-400 transition hover:bg-white/[0.06] hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a className="hidden rounded-full p-2 text-slate-400 transition hover:bg-white/[0.06] hover:text-white sm:inline-flex" href={`mailto:${profile.email}`} aria-label="Email Mrityunjay">
            <Mail className="h-4 w-4" />
          </a>
          <a className="hidden rounded-full p-2 text-slate-400 transition hover:bg-white/[0.06] hover:text-white sm:inline-flex" href={profile.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInMark className="h-4 w-4" />
          </a>
          <a className="hidden rounded-full p-2 text-slate-400 transition hover:bg-white/[0.06] hover:text-white sm:inline-flex" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubMark className="h-4 w-4" />
          </a>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" size="sm" className="border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                <Command className="h-4 w-4" />
                <span className="hidden sm:inline">Ask Portfolio</span>
                <span className="sm:hidden">Ask</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="pr-10">
                <DialogTitle>Command Palette: Ask Portfolio</DialogTitle>
                <DialogDescription>Use curated portfolio data now. Replace the API stub later for live model responses.</DialogDescription>
              </DialogHeader>
              <AskPortfolioChat compact />
            </DialogContent>
          </Dialog>
        </div>
      </nav>
    </header>
  );
}



