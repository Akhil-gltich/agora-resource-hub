
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedResources } from "@/components/home/FeaturedResources";
import { StatsSection } from "@/components/home/StatsSection";
import { RecentUploads } from "@/components/home/RecentUploads";

const Index = () => {
  return (
    <div className="space-y-10">
      <HeroSection />
      <FeaturedResources />
      <RecentUploads />
      <StatsSection />
    </div>
  );
};

export default Index;
