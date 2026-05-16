export type SkillCategory = "Languages" | "Frameworks & Libraries" | "AI/ML" | "Retrieval & Vector" | "Cloud & Platforms" | "Databases" | "MLOps / DevOps" | "Ways of Working";

export type SkillItem = {
  name: string;
  category: SkillCategory;
  usedFor: string;
};

export const skillCategories: (SkillCategory | "All")[] = ["All", "Languages", "Frameworks & Libraries", "AI/ML", "Retrieval & Vector", "Cloud & Platforms", "Databases", "MLOps / DevOps", "Ways of Working"];

export const skills: SkillItem[] = [
  { name: "Python", category: "Languages", usedFor: "Primary language for AI systems, automation, APIs, and model pipelines." },
  { name: "SQL", category: "Languages", usedFor: "Structured analytics and enterprise data workflows." },
  { name: "JavaScript", category: "Languages", usedFor: "Interactive product surfaces and full-stack tooling." },
  { name: "HTML", category: "Languages", usedFor: "Accessible web interfaces and product documentation." },
  { name: "CSS", category: "Languages", usedFor: "Responsive AI product interfaces and polished UI systems." },
  { name: "FastAPI", category: "Frameworks & Libraries", usedFor: "Backend APIs for AI agents, RAG systems, and enterprise services." },
  { name: "ReactJS", category: "Frameworks & Libraries", usedFor: "Modern frontend experiences for demos and AI products." },
  { name: "Node.js", category: "Frameworks & Libraries", usedFor: "JavaScript tooling and service integrations." },
  { name: "TensorFlow", category: "Frameworks & Libraries", usedFor: "ML experimentation and model workflows." },
  { name: "Generative AI", category: "AI/ML", usedFor: "LLM-powered products, document interpretation, automation, and demos." },
  { name: "LLMs", category: "AI/ML", usedFor: "Reasoning, summarization, retrieval synthesis, and AI assistant workflows." },
  { name: "LangChain", category: "AI/ML", usedFor: "RAG and LLM application patterns." },
  { name: "Semantic Kernel", category: "AI/ML", usedFor: "Agentic ESG data collection and workflow orchestration." },
  { name: "LangGraph", category: "AI/ML", usedFor: "Agentic AI framework design and BFSI workflows." },
  { name: "AI Agents", category: "AI/ML", usedFor: "Planner, retriever, tool, memory, and response orchestration." },
  { name: "CrewAI", category: "AI/ML", usedFor: "Multi-agent experimentation and orchestration concepts." },
  { name: "OpenAI Whisper", category: "AI/ML", usedFor: "Speech-to-text and multimodal AI workflow potential." },
  { name: "Pinecone", category: "Retrieval & Vector", usedFor: "Vector search architecture and retrieval patterns." },
  { name: "pgvector", category: "Retrieval & Vector", usedFor: "Postgres-native vector search for agentic frameworks." },
  { name: "ChromaDB", category: "Retrieval & Vector", usedFor: "Local and prototype vector retrieval workflows." },
  { name: "RAG", category: "Retrieval & Vector", usedFor: "Legal, automotive, maintenance, and enterprise knowledge systems." },
  { name: "Graph-based Retrieval", category: "Retrieval & Vector", usedFor: "Legal retrieval relevance and connected document intelligence." },
  { name: "Azure", category: "Cloud & Platforms", usedFor: "Enterprise AI, backend services, and cloud deployments." },
  { name: "AWS", category: "Cloud & Platforms", usedFor: "Cloud AI and deployment ecosystem experience." },
  { name: "Azure AI Studio", category: "Cloud & Platforms", usedFor: "AI prototyping, deployment planning, and model operations." },
  { name: "Microsoft Foundry", category: "Cloud & Platforms", usedFor: "Volkswagen AI workflows, copilots, and enterprise AI systems." },
  { name: "Amazon Bedrock", category: "Cloud & Platforms", usedFor: "Enterprise GenAI provider ecosystem readiness." },
  { name: "MongoDB", category: "Databases", usedFor: "Document-oriented application data." },
  { name: "CosmosDB", category: "Databases", usedFor: "Cloud-native document data patterns." },
  { name: "Docker", category: "MLOps / DevOps", usedFor: "Portable AI services and deployment environments." },
  { name: "Kubernetes", category: "MLOps / DevOps", usedFor: "Container orchestration concepts for production systems." },
  { name: "Azure DevOps", category: "MLOps / DevOps", usedFor: "Enterprise delivery, CI/CD, and work tracking." },
  { name: "Git", category: "MLOps / DevOps", usedFor: "Version control and collaboration." },
  { name: "Bitbucket", category: "MLOps / DevOps", usedFor: "Enterprise source control workflows." },
  { name: "MLflow", category: "MLOps / DevOps", usedFor: "Experiment tracking and MLOps practices." },
  { name: "JIRA", category: "Ways of Working", usedFor: "Agile delivery and issue tracking." },
  { name: "Confluence", category: "Ways of Working", usedFor: "Technical documentation and knowledge sharing." },
  { name: "Agile", category: "Ways of Working", usedFor: "Iterative AI product delivery." },
  { name: "Scrum", category: "Ways of Working", usedFor: "Team rituals, planning, and delivery cadence." },
];
