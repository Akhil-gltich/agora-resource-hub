
import { Button } from "@/components/ui/button";
import { ResourceGrid } from "../resources/ResourceGrid";
import { getFeaturedResources } from "@/data/resources";
import { Link } from "react-router-dom";

export function FeaturedResources() {
  const featuredResources = getFeaturedResources();

  return (
    <section className="py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold tracking-tight">Featured Resources</h2>
        <Button variant="outline" asChild>
          <Link to="/resources">View all</Link>
        </Button>
      </div>
      <ResourceGrid resources={featuredResources} />
    </section>
  );
}
