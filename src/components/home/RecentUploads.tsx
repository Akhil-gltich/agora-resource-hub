
import { Button } from "@/components/ui/button";
import { ResourceGrid } from "../resources/ResourceGrid";
import { getRecentResources } from "@/data/resources";
import { Link } from "react-router-dom";

export function RecentUploads() {
  const recentResources = getRecentResources();

  return (
    <section className="py-10 border-t">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Recently Uploaded</h2>
          <p className="text-muted-foreground">The latest resources added to our library</p>
        </div>
        <Button variant="outline" asChild>
          <Link to="/resources">View all</Link>
        </Button>
      </div>
      <ResourceGrid resources={recentResources} />
    </section>
  );
}
