
import { ResourceCard } from "./ResourceCard";
import { Resource } from "@/data/resources";

interface ResourceGridProps {
  resources: Resource[];
  emptyMessage?: string;
}

export function ResourceGrid({ resources, emptyMessage = "No resources found" }: ResourceGridProps) {
  if (resources.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <h3 className="text-lg font-medium mb-2">{emptyMessage}</h3>
        <p className="text-muted-foreground">
          Try adjusting your search or filter criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  );
}
