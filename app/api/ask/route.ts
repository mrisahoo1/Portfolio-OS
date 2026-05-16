import { NextResponse } from "next/server";

export async function POST() {
  // Future live LLM integration point:
  // 1. Validate the incoming question.
  // 2. Retrieve relevant entries from data/portfolioKnowledge.ts or a vector index.
  // 3. Call OpenAI, Gemini, Azure OpenAI, or Bedrock with a safe system prompt.
  // 4. Return a grounded answer with citations to portfolio sections.
  return NextResponse.json(
    { message: "Demo mode uses curated frontend portfolio responses. Add an API key and model provider here when ready." },
    { status: 501 },
  );
}
