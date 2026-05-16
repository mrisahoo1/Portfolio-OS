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
    title: "Cook Your Own Look",
    domain: "Public GenAI Demo / Avatar Pipeline",
    source: "public",
    description: "A showable GenAI computer-vision project for avatar generation using diffusion and face-swap models. Add the live demo or walkthrough link when it is ready.",
    tech: ["RealVisXL", "InSwapper", "Buffalo_l", "Stable Diffusion", "Computer Vision"],
    impact: ["Demonstrates applied GenAI beyond enterprise-confidential work"],
    links: [
      { label: "Demo link placeholder", href: "#contact" },
      { label: "GitHub placeholder", href: "https://github.com/mrisahoo1", external: true },
    ],
  },
  {
    title: "PTI-MFG",
    domain: "Public Engineering Demo / Python + React",
    source: "public",
    description: "A modular Python/React product-style demo for generating 3D car part files, optimizing backend workflows, and packaging executables.",
    tech: ["Python", "React", "3D Files", "Backend Workflows", "Packaging"],
    impact: ["Shows product engineering depth beyond AI-only prototypes"],
    links: [
      { label: "Demo link placeholder", href: "#contact" },
      { label: "Architecture note placeholder", href: "#contact" },
    ],
  },
  {
    title: "Ask My Portfolio",
    domain: "Public AI Product Surface",
    source: "public",
    description: "The portfolio itself acts like a lightweight AI product: curated knowledge, prompt chips, typing simulation, and a clean API route stub for future LLM integration.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Local Knowledge Base", "LLM API Stub"],
    impact: ["Turns a static portfolio into an interactive AI experience"],
    links: [
      { label: "Try it on this page", href: "#ask" },
      { label: "API stub", href: "#demo-lab" },
    ],
  },
];
