"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Bot, Send, Sparkles, UserRound } from "lucide-react";
import { portfolioKnowledge, fallbackResponse } from "@/data/portfolioKnowledge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Message = {
  role: "assistant" | "user";
  content: string;
};

type AskPortfolioChatProps = {
  compact?: boolean;
};

function findAnswer(prompt: string) {
  const normalized = prompt.toLowerCase();
  return (
    portfolioKnowledge.find((item) => item.prompt.toLowerCase() === normalized)?.response ??
    portfolioKnowledge.find((item) => normalized.includes("rag") && item.prompt.includes("RAG"))?.response ??
    portfolioKnowledge.find((item) => normalized.includes("agent") && item.prompt.includes("Agentic"))?.response ??
    portfolioKnowledge.find((item) => normalized.includes("volkswagen") && item.prompt.includes("Volkswagen"))?.response ??
    fallbackResponse
  );
}

export function AskPortfolioChat({ compact = false }: AskPortfolioChatProps) {
  const prompts = useMemo(() => portfolioKnowledge.map((item) => item.prompt), []);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Ask me recruiter-style questions about Mrityunjay's GenAI, RAG, Agentic AI, Volkswagen, BFSI, and product engineering work.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [draft, setDraft] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, draft]);

  const ask = (prompt: string) => {
    const trimmed = prompt.trim();
    if (!trimmed || isTyping) return;
    const answer = findAnswer(trimmed);
    setInput("");
    setMessages((current) => [...current, { role: "user", content: trimmed }]);
    setIsTyping(true);
    setDraft("");

    let index = 0;
    const interval = window.setInterval(() => {
      index += 4;
      setDraft(answer.slice(0, index));
      if (index >= answer.length) {
        window.clearInterval(interval);
        setMessages((current) => [...current, { role: "assistant", content: answer }]);
        setDraft("");
        setIsTyping(false);
      }
    }, 18);
  };

  return (
    <div className={cn("glass-panel-strong glow-border flex min-h-0 flex-col overflow-hidden rounded-[2rem]", compact ? "h-[min(650px,calc(100dvh-9rem))]" : "h-[720px] max-h-[calc(100dvh-7rem)]")}>
      <div className="shrink-0 border-b border-white/10 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/12 text-cyan-200">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Ask My Portfolio</h3>
            <p className="text-sm text-slate-400">Curated AI assistant demo for recruiters and reviewers.</p>
          </div>
        </div>
      </div>

      <div ref={listRef} className="scrollbar-chat min-h-0 flex-1 space-y-4 overflow-y-auto p-5 pr-3" aria-live="polite">
        {messages.map((message, index) => (
          <div key={`${message.role}-${index}`} className={cn("flex gap-3", message.role === "user" && "justify-end")}>
            {message.role === "assistant" ? (
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-300/12 text-cyan-200">
                <Bot className="h-4 w-4" />
              </div>
            ) : null}
            <div className={cn("max-w-[84%] rounded-3xl px-4 py-3 text-sm leading-6", message.role === "assistant" ? "border border-white/10 bg-white/[0.055] text-slate-200" : "bg-cyan-300 text-slate-950")}>
              {message.content}
            </div>
            {message.role === "user" ? (
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                <UserRound className="h-4 w-4" />
              </div>
            ) : null}
          </div>
        ))}
        {draft ? (
          <div className="flex gap-3">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-300/12 text-cyan-200">
              <Bot className="h-4 w-4" />
            </div>
            <div className="max-w-[84%] rounded-3xl border border-white/10 bg-white/[0.055] px-4 py-3 text-sm leading-6 text-slate-200">
              {draft}<span className="ml-1 inline-block h-4 w-1 animate-pulse bg-cyan-200 align-middle" />
            </div>
          </div>
        ) : null}
      </div>

      <div className="shrink-0 border-t border-white/10 bg-slate-950/72 p-4 backdrop-blur-xl sm:p-5">
        <div className="mb-3 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {prompts.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => ask(prompt)}
              className="shrink-0 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-left text-xs text-slate-300 transition hover:border-cyan-300/40 hover:text-white"
            >
              {prompt}
            </button>
          ))}
        </div>
        <form
          className="flex gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            ask(input);
          }}
        >
          <label className="sr-only" htmlFor={compact ? "ask-portfolio-modal" : "ask-portfolio"}>Ask a portfolio question</label>
          <input
            id={compact ? "ask-portfolio-modal" : "ask-portfolio"}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask about RAG, Agentic AI, impact, or leadership..."
            className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/[0.055] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
          />
          <Button type="submit" size="icon" aria-label="Send question" disabled={isTyping}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
        <p className="mt-3 text-xs leading-5 text-slate-500">
          Demo mode: responses are generated from curated portfolio data. Live LLM integration can be added later.
        </p>
      </div>
    </div>
  );
}
