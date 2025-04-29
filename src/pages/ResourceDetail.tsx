
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getResourceById } from "@/data/resources";
import { Download, Calendar, User, FileType, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ResourceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const resource = getResourceById(id || "");
  const { toast } = useToast();

  if (!resource) {
    return (
      <div className="py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Resource Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The resource you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link to="/resources">Browse Resources</Link>
        </Button>
      </div>
    );
  }

  const handleDownload = () => {
    toast({
      title: "Download started",
      description: `${resource.title} is being downloaded.`,
    });
  };

  return (
    <div className="space-y-6">
      <Button variant="ghost" asChild className="mb-6">
        <Link to="/resources" className="flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" />
          Back to resources
        </Link>
      </Button>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Badge>{resource.category}</Badge>
            <Badge variant="outline">{resource.fileType}</Badge>
          </div>
          <h1 className="text-3xl font-bold mb-4">{resource.title}</h1>
          <div className="prose max-w-none mb-6">
            <p className="text-muted-foreground">{resource.description}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <Card>
              <CardContent className="p-4 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Date Uploaded</p>
                  <p className="font-medium">
                    {new Date(resource.dateUploaded).toLocaleDateString()}
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Uploaded By</p>
                  <p className="font-medium">{resource.uploadedBy}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-2">
                <FileType className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">File Size</p>
                  <p className="font-medium">{resource.fileSize}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-2">
                <Download className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Downloads</p>
                  <p className="font-medium">{resource.downloads}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Tags</h2>
            <div className="flex flex-wrap gap-1">
              {resource.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <Button size="lg" className="gap-2 w-full md:w-auto" onClick={handleDownload}>
            <Download className="h-4 w-4" />
            Download Resource
          </Button>
        </div>

        <div className="w-full md:w-80">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Related Resources</h3>
              <div className="space-y-4">
                {resources
                  .filter(
                    (r) =>
                      r.id !== resource.id &&
                      (r.category === resource.category ||
                        r.tags.some((tag) => resource.tags.includes(tag)))
                  )
                  .slice(0, 3)
                  .map((relatedResource) => (
                    <div key={relatedResource.id} className="flex flex-col">
                      <Link
                        to={`/resources/${relatedResource.id}`}
                        className="font-medium hover:text-brand-500 transition-colors"
                      >
                        {relatedResource.title}
                      </Link>
                      <span className="text-xs text-muted-foreground">
                        {relatedResource.category}
                      </span>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetail;
