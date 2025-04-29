
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Resource } from "@/data/resources";

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const {
    id,
    title,
    description,
    category,
    fileType,
    tags,
    downloads,
    dateUploaded,
  } = resource;

  const getCategoryIcon = () => {
    switch (category) {
      case "Books":
        return <Book className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <CardHeader className="p-4 pb-2">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="flex gap-1 items-center">
            {getCategoryIcon()}
            {category}
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {fileType}
          </Badge>
        </div>
        <CardTitle className="text-lg mt-2 line-clamp-1">
          <Link
            to={`/resources/${id}`}
            className="hover:text-brand-500 transition-colors"
          >
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between text-xs text-muted-foreground">
        <span>Uploaded: {new Date(dateUploaded).toLocaleDateString()}</span>
        <div className="flex items-center gap-1">
          <Download className="h-3 w-3" />
          {downloads}
        </div>
      </CardFooter>
    </Card>
  );
}
