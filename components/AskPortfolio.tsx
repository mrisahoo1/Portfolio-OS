import { AskPortfolioChat } from "@/components/AskPortfolioChat";
import { SectionHeader } from "@/components/SectionHeader";

export function AskPortfolio() {
  return (
    <section id="ask" className="container-premium py-24">
      <SectionHeader
        eyebrow="Interactive Portfolio AI"
        title="Ask the portfolio like an AI product, not a PDF."
        description="A frontend-only AI chat simulation powered by curated local knowledge. It is intentionally designed to be easy to replace with a real LLM endpoint later."
        align="center"
      />
      <div className="mx-auto max-w-5xl">
        <AskPortfolioChat />
      </div>
    </section>
  );
}
