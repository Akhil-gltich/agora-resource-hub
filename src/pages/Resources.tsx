
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ResourceFilter } from "@/components/resources/ResourceFilter";
import { ResourceGrid } from "@/components/resources/ResourceGrid";
import { resources, Resource } from "@/data/resources";

const Resources = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredResources, setFilteredResources] = useState<Resource[]>(resources);

  // Get initial filter values from URL params
  const initialCategory = searchParams.get("category") || "";

  useEffect(() => {
    // Apply initial filters if any exist in URL
    if (initialCategory) {
      filterResources({
        search: "",
        category: initialCategory,
        fileType: "",
        tags: [],
      });
    }
  }, [initialCategory]);

  const filterResources = (filters: {
    search: string;
    category: string;
    fileType: string;
    tags: string[];
  }) => {
    const { search, category, fileType, tags } = filters;
    
    // Update URL params
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    setSearchParams(params);

    // Filter resources
    const filtered = resources.filter((resource) => {
      // Search filter
      const matchesSearch = !search
        ? true
        : resource.title.toLowerCase().includes(search.toLowerCase()) ||
          resource.description.toLowerCase().includes(search.toLowerCase());

      // Category filter
      const matchesCategory = !category
        ? true
        : resource.category === category;

      // File type filter
      const matchesFileType = !fileType
        ? true
        : resource.fileType === fileType;

      // Tags filter
      const matchesTags =
        tags.length === 0
          ? true
          : tags.some((tag) => resource.tags.includes(tag));

      return matchesSearch && matchesCategory && matchesFileType && matchesTags;
    });

    setFilteredResources(filtered);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Browse Resources</h1>
        <p className="text-muted-foreground">
          Discover academic resources shared by faculty and students
        </p>
      </div>

      <ResourceFilter onFilterChange={filterResources} />

      <div>
        <h2 className="text-xl font-semibold mb-4">
          {filteredResources.length} Resources Found
        </h2>
        <ResourceGrid
          resources={filteredResources}
          emptyMessage="No resources match your filters"
        />
      </div>
    </div>
  );
}

export default Resources;
