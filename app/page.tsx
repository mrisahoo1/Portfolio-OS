import { AskPortfolio } from "@/components/AskPortfolio";
import { Contact } from "@/components/Contact";
import { DemoLab } from "@/components/DemoLab";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { FieldNotes } from "@/components/FieldNotes";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HumanLayer } from "@/components/HumanLayer";
import { ImpactMetrics } from "@/components/ImpactMetrics";
import { Leadership } from "@/components/Leadership";
import { Navbar } from "@/components/Navbar";
import { PortfolioOS } from "@/components/PortfolioOS";
import { ProofDeck } from "@/components/ProofDeck";
import { SectionRail } from "@/components/SectionRail";
import { TechStack } from "@/components/TechStack";
import { WorkTimeline } from "@/components/WorkTimeline";
import { jsonLdPerson } from "@/data/profile";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }} />
      <Navbar />
      <SectionRail />
      <ProofDeck />
      <main>
        <Hero />
        <PortfolioOS />
        <AskPortfolio />
        <FeaturedProjects />
        <DemoLab />
        <WorkTimeline />
        <TechStack />
        <ImpactMetrics />
        <Leadership />
        <HumanLayer />
        <FieldNotes />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
