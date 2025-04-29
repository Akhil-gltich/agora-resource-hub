
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getAllCategories, getAllTags } from "@/data/resources";

interface ResourceFilterProps {
  onFilterChange: (filters: {
    search: string;
    category: string;
    fileType: string;
    tags: string[];
  }) => void;
}

export function ResourceFilter({ onFilterChange }: ResourceFilterProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [fileType, setFileType] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allCategories = getAllCategories();
  const allTags = getAllTags();
  const fileTypes = ["PDF", "DOC", "PPT", "ZIP", "Other"];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    applyFilters(e.target.value, category, fileType, selectedTags);
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    applyFilters(search, value, fileType, selectedTags);
  };

  const handleFileTypeChange = (value: string) => {
    setFileType(value);
    applyFilters(search, category, value, selectedTags);
  };

  const toggleTag = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    
    setSelectedTags(newTags);
    applyFilters(search, category, fileType, newTags);
  };

  const applyFilters = (
    search: string,
    category: string,
    fileType: string,
    tags: string[]
  ) => {
    onFilterChange({
      search,
      category,
      fileType,
      tags,
    });
  };

  const clearFilters = () => {
    setSearch("");
    setCategory("");
    setFileType("");
    setSelectedTags([]);
    onFilterChange({
      search: "",
      category: "",
      fileType: "",
      tags: [],
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search resources..."
            className="pl-8"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <div className="flex gap-2">
          <Select value={category} onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Categories</SelectItem>
              {allCategories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={fileType} onValueChange={handleFileTypeChange}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="File Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Types</SelectItem>
              {fileTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium">Popular Tags</h3>
          {(search || category || fileType || selectedTags.length > 0) && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              Clear filters
            </Button>
          )}
        </div>
        <div className="flex flex-wrap gap-1">
          {allTags.slice(0, 12).map((tag) => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
