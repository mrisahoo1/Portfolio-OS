export type PortfolioPrompt = {
  prompt: string;
  response: string;
};

export const portfolioKnowledge: PortfolioPrompt[] = [
  {
    prompt: "What kind of AI systems has Mrityunjay built?",
    response:
      "Mrityunjay builds enterprise AI systems where LLMs are part of a larger product workflow: multi-modal RAG for legal and automotive knowledge, agentic frameworks for BFSI, ESG automation with Azure Semantic Kernel, maintenance copilots for plant operations, and GenAI computer-vision demos. His work combines retrieval, orchestration, embeddings, backend APIs, and production-minded UX rather than isolated prompts.",
  },
  {
    prompt: "Show me his best GenAI projects",
    response:
      "Strong examples include Volkswagen Digital Library, a multi-modal RAG chatbot for legal document interpretation that reduced search time by over 80%; Agentic AI Framework + Spend Analyzer for BFSI using LangGraph, FastAPI, Hindsight, pgvector, Optuna, and CVXPY; ESG Data Collection using Azure Semantic Kernel with a 20% reduction in manual effort; and Cook Your Own Look, a GenAI avatar pipeline using diffusion and face-swap models.",
  },
  {
    prompt: "Why should we hire him as an AI Engineer?",
    response:
      "Hire Mrityunjay if you need an AI engineer who can move beyond prototypes. He has worked across RAG, agentic AI, enterprise automation, optimization, and AI enablement. He understands product outcomes, measurable impact, and adoption: 80% search-time reduction, 98% AIPowerX adoption, 20% ESG effort reduction, 15% retrieval relevance improvement, and 10% operational efficiency gains are all tied to practical systems.",
  },
  {
    prompt: "What is his experience with RAG?",
    response:
      "His RAG experience spans multi-modal legal document interpretation, maintenance copilots over SAP history and manuals, graph-based retrieval for legal workflows, vector search, embeddings, and enterprise search UX. The important pattern is that he treats RAG as a full product system: ingestion, retrieval quality, grounding, user workflows, and measurable search or response-time improvements.",
  },
  {
    prompt: "What has he done in Agentic AI?",
    response:
      "Mrityunjay is currently focused on Agentic AI for BFSI, including reusable enterprise patterns with LangGraph, FastAPI, Hindsight, pgvector, and orchestrated agent workflows. He has also built agentic ESG data collection with Azure Semantic Kernel and contributed to agentic workflow integration in legal retrieval systems. His agentic work is positioned around planning, retrieval, tool use, memory, and explainable responses.",
  },
  {
    prompt: "Tell me about his Volkswagen AI initiatives",
    response:
      "At Volkswagen Group Technology Solutions, Mrityunjay worked on AI systems such as Digital Library and Maintenance Copilot, contributed to AIPowerX and AI Champions, delivered AI trainings and technical sessions, and solely started AI Shots. AI Shots was featured on Volkswagen LinkedIn, showing both technical contribution and community-building impact.",
  },
  {
    prompt: "What makes him different from other candidates?",
    response:
      "Mrityunjay combines hands-on engineering with product thinking and community leadership. He can discuss LangGraph, RAG, Semantic Kernel, FastAPI, pgvector, optimization, and deployment concerns, but he also thinks about adoption, training, demos, and how people actually use AI systems. That mix makes him useful for teams turning AI prototypes into shipped enterprise products.",
  },
];

export const fallbackResponse =
  "I can answer from curated portfolio data about Mrityunjay's AI engineering work, RAG systems, agentic AI, Volkswagen initiatives, BFSI work, tools, impact metrics, and leadership. Try one of the suggested prompts or ask a focused recruiter-style question.";
