
import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getResourceById } from "@/data/resources";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Calendar,
  User,
  FileText,
  Bookmark,
  Share2,
  Eye,
  ThumbsUp,
} from "lucide-react";
import { format } from "date-fns";

const ResourceDetail = () => {
  const { id } = useParams();
  const resource = getResourceById(id || "");

  if (!resource) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <h1 className="text-2xl font-bold mb-2">Resource Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The resource you are looking for doesn't exist or has been removed.
        </p>
        <Button variant="outline" onClick={() => window.history.back()}>
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Resource Header */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">{resource.title}</h1>
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="secondary">{resource.category}</Badge>
            <Badge variant="outline">{resource.fileType}</Badge>
            {resource.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {format(resource.dateAdded, "MMM d, yyyy")}
            </span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {resource.uploadedBy}
            </span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              <FileText className="h-4 w-4 mr-1" />
              {resource.fileSize}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Bookmark className="h-4 w-4 mr-1" />
            Save
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-1" />
            Share
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-1" />
            Download
          </Button>
        </div>
      </div>

      {/* Resource Preview */}
      <div className="border rounded-lg overflow-hidden bg-white mb-6">
        <div className="aspect-video bg-gray-100 flex items-center justify-center">
          {resource.previewImage ? (
            <img
              src={resource.previewImage}
              alt={resource.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <FileText className="h-16 w-16 text-gray-300" />
          )}
        </div>
      </div>

      {/* Resource Description */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="p-6 border rounded-lg bg-white">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <div className="prose max-w-none">
              <p>{resource.description}</p>
            </div>
          </div>

          {/* Comments Section */}
          <div className="p-6 border rounded-lg bg-white">
            <h2 className="text-xl font-semibold mb-4">Comments</h2>
            <div className="space-y-4">
              {resource.comments && resource.comments.length > 0 ? (
                resource.comments.map((comment, index) => (
                  <div key={index} className="border-b pb-4 last:border-0">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{comment.author}</span>
                      <span className="text-sm text-muted-foreground">
                        {format(comment.date, "MMM d, yyyy")}
                      </span>
                    </div>
                    <p>{comment.text}</p>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground">No comments yet.</p>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="p-6 border rounded-lg bg-white">
            <h3 className="font-semibold mb-3">Resource Stats</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground flex items-center">
                  <Eye className="h-4 w-4 mr-2" /> Views
                </span>
                <span className="font-medium">{resource.views}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground flex items-center">
                  <Download className="h-4 w-4 mr-2" /> Downloads
                </span>
                <span className="font-medium">{resource.downloads}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground flex items-center">
                  <ThumbsUp className="h-4 w-4 mr-2" /> Likes
                </span>
                <span className="font-medium">{resource.likes}</span>
              </div>
            </div>
          </div>

          <div className="p-6 border rounded-lg bg-white">
            <h3 className="font-semibold mb-3">Related Resources</h3>
            <div className="space-y-3">
              {resource.relatedResources && 
                resource.relatedResources.map((related, index) => (
                  <div key={index} className="flex gap-2">
                    <FileText className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                    <a href={`/resources/${related.id}`} className="text-sm hover:underline">
                      {related.title}
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetail;
