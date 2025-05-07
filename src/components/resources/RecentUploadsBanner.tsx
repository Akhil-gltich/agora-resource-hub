
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { File, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getRecentResources, Resource } from "@/data/resources";
import { cn } from "@/lib/utils";

export function RecentUploadsBanner() {
  const [expanded, setExpanded] = useState(true);
  const recentUploads = getRecentResources(3);

  if (!expanded || recentUploads.length === 0) {
    return null;
  }

  return (
    <Card className="mb-6 border-l-4 border-l-blue-500">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-blue-50 text-blue-700">New</Badge>
            <h3 className="font-medium">Recently Uploaded Resources</h3>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8"
            onClick={() => setExpanded(false)}
          >
            Dismiss
          </Button>
        </div>
        
        <ul className="space-y-2">
          {recentUploads.map((resource) => (
            <RecentUploadItem key={resource.id} resource={resource} />
          ))}
        </ul>
        
        <div className="mt-3 flex justify-end">
          <Button variant="link" size="sm" asChild className="text-blue-600">
            <Link to="/" className="flex items-center gap-1">
              View all new uploads 
              <ArrowRight className="h-3 w-3" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

interface RecentUploadItemProps {
  resource: Resource;
}

function RecentUploadItem({ resource }: RecentUploadItemProps) {
  const daysAgo = Math.floor((new Date().getTime() - new Date(resource.dateUploaded).getTime()) / (1000 * 3600 * 24));
  let timeLabel = "";
  
  if (daysAgo === 0) timeLabel = "Today";
  else if (daysAgo === 1) timeLabel = "Yesterday";
  else timeLabel = `${daysAgo} days ago`;

  return (
    <li>
      <Link 
        to={`/resources/${resource.id}`}
        className="flex items-center gap-3 p-2 rounded-md hover:bg-muted transition-colors"
      >
        <div className={cn(
          "p-2 rounded-md",
          resource.fileType === "PDF" && "bg-red-100 text-red-800",
          resource.fileType === "DOC" && "bg-blue-100 text-blue-800",
          resource.fileType === "PPT" && "bg-orange-100 text-orange-800",
          resource.fileType === "ZIP" && "bg-purple-100 text-purple-800",
          resource.fileType === "Other" && "bg-gray-100 text-gray-800"
        )}>
          <File className="h-4 w-4" />
        </div>
        <div className="flex-1">
          <p className="font-medium line-clamp-1">{resource.title}</p>
          <p className="text-xs text-muted-foreground">
            {resource.fileType} • {resource.fileSize} • Uploaded by {resource.uploadedBy}
          </p>
        </div>
        <Badge variant="outline" className="text-xs ml-auto bg-blue-50">
          {timeLabel}
        </Badge>
      </Link>
    </li>
  );
}
