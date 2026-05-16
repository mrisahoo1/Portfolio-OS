export const profile = {
  name: "Mrityunjay Sahoo",
  initials: "MS.",
  role: "AI Engineer | Senior Software Engineer - AI/ML",
  headline: "AI Engineer building enterprise-grade GenAI, RAG, and Agentic AI systems.",
  subheadline:
    "I design and build intelligent systems that turn complex enterprise workflows into scalable AI-powered products across BFSI, legal, and industrial domains.",
  email: "mrityunjaysahoo6@gmail.com",
  location: "India | Open to global AI opportunities",
  linkedIn: "https://www.linkedin.com/in/mrityunjay-sahoo-b8b543190",
  github: "https://github.com/mrisahoo1",
  website: "https://mrityunjaysahoo19.wixsite.com/my-site",
  resume: "/resume/Mrityunjay-Sahoo-Resume.pdf",
  status: "Currently building Agentic AI systems for BFSI",
  badges: ["GenAI Systems", "Agentic AI", "RAG Engineering", "BFSI AI", "Enterprise Automation", "Applied AI"],
  systemStatus: [
    { label: "Role", value: "AI Engineer" },
    { label: "Current Focus", value: "Agentic AI for BFSI" },
    { label: "Mode", value: "Building" },
    { label: "Availability", value: "Open to global opportunities" },
  ],
  skills: [
    "Generative AI",
    "RAG",
    "Agentic AI",
    "LangGraph",
    "Semantic Kernel",
    "FastAPI",
    "pgvector",
    "Azure AI",
    "Amazon Bedrock",
    "Python",
  ],
};

export const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "AI Engineer",
  email: `mailto:${profile.email}`,
  url: "https://portfolio-os-orpin.vercel.app",
  sameAs: [profile.linkedIn, profile.github],
  knowsAbout: profile.skills,
};

