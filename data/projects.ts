export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Project = {
  title: string;
  domain: string;
  description: string;
  tech: string[];
  impact: string[];
  details?: string[];
  source?: "company" | "public";
  links?: ProjectLink[];
};

export const featuredProjects: Project[] = [
  {
    title: "Volkswagen Digital Library - Multi-modal RAG Chatbot",
    domain: "Legal / Automotive / Enterprise Knowledge",
    source: "company",
    description:
      "Developed and deployed a multi-modal Retrieval-Augmented Generation based chatbot and document management system for legal document interpretation from sources such as NHTSA and Transport Canada. Implemented smart content discovery to reduce user search time by over 80%.",
    tech: ["RAG", "GPT", "Multimodal Retrieval", "Document Intelligence", "Azure / Microsoft Foundry", "Embeddings", "Enterprise Search"],
    impact: ["Reduced search time by over 80%", "Improved legal document discovery", "Enabled intelligent document interpretation"],
    details: [
      "Company-linked work; no public demo or private product walkthrough is included.",
      "Built for safe enterprise knowledge discovery across complex legal and regulatory content.",
      "Focused on grounded retrieval, document interpretation, and practical user workflows rather than generic chat.",
      "Public portfolio summary intentionally avoids client-sensitive architecture and private document details.",
    ],
  },
  {
    title: "Agentic AI Framework + Spend Analyzer for BFSI",
    domain: "BFSI / Agentic AI / Optimization",
    source: "company",
    description:
      "Designing and contributing to a reusable Agentic AI Framework for BFSI use cases, focused on scalable enterprise adoption using LangGraph, FastAPI, Hindsight, pgvector and agent orchestration. Also working on a Spend Analyzer that uses Optuna and CVXPY for budget optimization, converting analytical decisioning workflows into agentic AI-powered systems.",
    tech: ["LangGraph", "FastAPI", "Agentic AI", "pgvector", "Hindsight", "Optuna", "CVXPY", "BFSI", "Optimization", "AI Agents"],
    impact: [
      "Converts decisioning workflows into AI-powered agentic systems",
      "Supports reusable enterprise AI architecture",
      "Blends GenAI orchestration with mathematical optimization",
    ],
    details: [
      "Company-linked work; no public demo or private product walkthrough is included.",
      "Positions LLM orchestration around traceability, retrieval, memory, and decision support.",
      "Combines agent workflows with optimization logic where deterministic math is more appropriate than pure generation.",
      "Designed for enterprise patterns that can repeat across BFSI use cases.",
    ],
  },
  {
    title: "ESG Data Collection System - Azure Semantic Kernel",
    domain: "ESG / Sustainability / Agentic Automation",
    source: "company",
    description:
      "Built an agentic ESG data collection system using Azure Semantic Kernel, automating extraction and orchestration of sustainability-related information and reducing manual data collection effort by 20%.",
    tech: ["Azure Semantic Kernel", "Agentic Workflows", "ESG", "Sustainability Data", "Automation", "Python"],
    impact: ["Reduced manual data collection effort by 20%", "Automated sustainability-related information extraction", "Improved workflow orchestration"],
    details: [
      "Company-linked work; no public demo or private product walkthrough is included.",
      "Used agentic orchestration to streamline repetitive ESG data collection tasks.",
      "Focused on operational reliability and measurable manual-effort reduction.",
      "Kept domain data and proprietary workflow details out of public materials.",
    ],
  },
];

export const moreProjects: Project[] = [
  {
    title: "UK Law Firm Legal Retrieval Platform",
    domain: "Legal AI / Retrieval",
    source: "company",
    description: "Enhanced legal document platform through graph-based retrieval, improved retrieval pipelines, and agentic workflow integration, improving retrieval relevance by 15%.",
    tech: ["Graph Retrieval", "RAG", "Agentic Workflows", "Legal AI"],
    impact: ["15% retrieval relevance improvement"],
  },
  {
    title: "Maintenance Copilot",
    domain: "Industrial AI / Plant Operations",
    source: "company",
    description: "RAG chatbot using GPT, embeddings, Microsoft Foundry / Agent Workflows, SAP historical data, and maintenance manuals, improving operational efficiency at Audi Neckarsulm Plant by 10% through reduced query response times.",
    tech: ["GPT", "Embeddings", "Microsoft Foundry", "SAP Data", "RAG"],
    impact: ["10% operational efficiency improvement"],
  },
  {
    title: "AIPowerX / AI Shots / AI Champions",
    domain: "AI Enablement / Community",
    source: "company",
    description: "Organization-wide AI awareness and enablement initiatives at Volkswagen Group Technology Solutions. Mrityunjay solely led and started AI Shots, contributed to org-wide AI training, technical sessions, and AI growth. AI Shots was featured on Volkswagen LinkedIn.",
    tech: ["AI Training", "Community Building", "Technical Sessions", "Product Demos"],
    impact: ["98% AIPowerX adoption", "Volkswagen LinkedIn feature available"],
    links: [{ label: "Watch AI Shots feature", href: "https://www.linkedin.com/posts/vwgdigitalsolutionsindia_volkswagengrouptechnologysolutionsindia-technologyleadership-activity-7442251752776785920--mkW?utm_source=share&utm_medium=member_android&rcm=ACoAACzuGtsB7mESEDlsNfXAyqZa-_R0G0WXoJg", external: true }],
  },
  {
    title: "Mercer Mettl Assessment Platform",
    domain: "Assessment Technology",
    source: "company",
    description: "Contributed to technical skill assessments and backend development for assessment platform workflows.",
    tech: ["Backend Development", "Assessments", "Workflow Engineering"],
    impact: ["Supported scalable assessment workflows"],
  },
  {
    title: "Cook Your Own Look",
    domain: "GenAI / Computer Vision",
    source: "public",
    description: "GenAI avatar generation pipeline using RealVisXL, InSwapper, Buffalo_l, stable diffusion models, and computer vision.",
    tech: ["RealVisXL", "InSwapper", "Buffalo_l", "Stable Diffusion", "Computer Vision"],
    impact: ["Built experimental avatar generation pipeline"],
  },
  {
    title: "PTI-MFG",
    domain: "Manufacturing Tools",
    source: "public",
    description: "Modular Python/React application to create and generate 3D car part files, optimize backend workflows, and bundle executables for seamless deployment.",
    tech: ["Python", "React", "3D Files", "Executable Bundling"],
    impact: ["Improved backend workflows and deployment usability"],
  },
];

export const publicShowcaseProjects: Project[] = [
  {
    title: "RAG Battle Arena",
    domain: "Live RAG Evaluation / Observability Platform",
    source: "public",
    description:
      "An enterprise-style AI observability and evaluation platform for comparing Retrieval-Augmented Generation pipelines side-by-side. It demonstrates how retrieval architecture choices affect answer quality, evidence selection, latency, cost, hallucination risk, and explainability across Naive Vector RAG, Hybrid Search RAG, Reranked RAG, and Agentic RAG.",
    tech: ["Next.js", "TypeScript", "FastAPI", "Python", "RAG", "BM25", "Reranking", "pgvector-ready", "Render", "Vercel"],
    impact: [
      "Compares four RAG strategies against the same query",
      "Surfaces relevance, faithfulness, groundedness, precision, recall, and risk metrics",
      "Includes retrieval inspection and observability views for latency, tokens, cost, and cache behavior",
    ],
    links: [
      { label: "Open live app", href: "https://rag-battle-arena.vercel.app/", external: true },
      { label: "View GitHub repo", href: "https://github.com/mrisahoo1/RAG-Battle-Arena", external: true },
    ],
  },
  {
    title: "Job Search Engine - Adzuna + OpenAI Workbench",
    domain: "Live Full-stack AI Product / Job Search Automation",
    source: "public",
    description:
      "A full-stack job search and curation workbench for finding relevant roles, ranking them against a resume, preparing tailored application material, and tracking hiring prospects. The app supports an EU-first search workflow, Adzuna-powered live listings, optional OpenAI personalization, explainable fit scoring, resume tailoring, outreach drafts, and prospect tracking.",
    tech: ["React", "Vite", "Python", "Vercel Functions", "Adzuna API", "OpenAI Responses API", "Resume Parsing", "Fit Scoring"],
    impact: [
      "Moves job search from raw listings to an organized application pipeline",
      "Supports live Adzuna pagination and partial-result handling",
      "Keeps application submission manual and user-controlled",
    ],
    links: [
      { label: "Open live app", href: "https://job-search-curation-agent.vercel.app", external: true },
      { label: "View GitHub repo", href: "https://github.com/mrisahoo1/Job-Search-Engine-powered-by-Adzuna-and-OpenAI", external: true },
    ],
  },
  {
    title: "Ask My Portfolio",
    domain: "Interactive Portfolio AI / Public Product Surface",
    source: "public",
    description:
      "A portfolio experience with curated knowledge responses, prompt chips, typing simulation, and an API route stub designed for future OpenAI, Gemini, Azure OpenAI, or Bedrock integration.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Local Knowledge Base", "LLM API Stub"],
    impact: ["Turns a static portfolio into an interactive AI experience"],
    links: [{ label: "Try it on this page", href: "#ask" }],
  },
  {
    title: "Cook Your Own Look",
    domain: "GenAI / Computer Vision",
    source: "public",
    description: "A GenAI computer-vision project for avatar generation using diffusion and face-swap models.",
    tech: ["RealVisXL", "InSwapper", "Buffalo_l", "Stable Diffusion", "Computer Vision"],
    impact: ["Demonstrates applied GenAI beyond enterprise-confidential work"],
    links: [{ label: "GitHub profile", href: "https://github.com/mrisahoo1", external: true }],
  },
  {
    title: "PTI-MFG",
    domain: "Engineering Demo / Python + React",
    source: "public",
    description: "A modular Python/React product-style demo for generating 3D car part files, optimizing backend workflows, and packaging executables.",
    tech: ["Python", "React", "3D Files", "Backend Workflows", "Packaging"],
    impact: ["Shows product engineering depth beyond AI-only prototypes"],
  },
];

