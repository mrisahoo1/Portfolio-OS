"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, Download, Globe2, MapPin, MessageSquareText } from "lucide-react";
import { profile } from "@/data/profile";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CommandCenter } from "@/components/CommandCenter";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24 md:pt-28">
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="container-premium relative grid min-h-[calc(100svh-7rem)] items-center gap-12 pb-16 lg:grid-cols-[1fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" /> {profile.status}
          </div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.38em] text-cyan-200/80">{profile.role}</p>
          <h1 className="text-balance text-5xl font-semibold tracking-[-0.055em] text-white md:text-7xl lg:text-8xl">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">{profile.subheadline}</p>

          <div className="mt-7 flex flex-wrap gap-2">
            {profile.badges.map((badge) => (
              <Badge key={badge} variant="muted">{badge}</Badge>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#projects">Explore My Work <ArrowDownRight className="h-4 w-4" /></a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#ask">Ask My Portfolio <MessageSquareText className="h-4 w-4" /></a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={profile.resume} download>Download Resume <Download className="h-4 w-4" /></a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan-200" /> {profile.location}</span>
            <span className="inline-flex items-center gap-2"><Globe2 className="h-4 w-4 text-cyan-200" /> Global teams, master&apos;s reviewers, and AI product groups</span>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {profile.systemStatus.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{item.label}</p>
                <p className="mt-2 text-sm font-medium text-slate-100">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute -right-6 top-8 hidden w-40 rotate-6 rounded-[2rem] border border-white/10 bg-white/[0.05] p-2 backdrop-blur-xl md:block">
            <Image src="/images/MS-2.jpg" alt="Mrityunjay Sahoo portfolio visual" width={320} height={420} className="h-44 rounded-[1.5rem] object-cover" priority />
          </div>
          <CommandCenter />
        </div>
      </div>
    </section>
  );
}
