
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedResources } from "@/components/home/FeaturedResources";
import { StatsSection } from "@/components/home/StatsSection";

const Index = () => {
  return (
    <div className="space-y-10">
      <HeroSection />
      <FeaturedResources />
      <StatsSection />
    </div>
  );
};

export default Index;
