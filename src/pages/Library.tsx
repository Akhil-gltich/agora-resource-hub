
import { useState, useEffect } from "react";
import { resources } from "@/data/resources";
import { ResourceGrid } from "@/components/resources/ResourceGrid";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  FileText,
  Download,
  Calendar,
  User,
  Info,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Library = () => {
  const [view, setView] = useState<"grid" | "table">("grid");
  const [showNewUploadAlert, setShowNewUploadAlert] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "myUploads">("all");
  const location = useLocation();
  
  useEffect(() => {
    // Check if we just came from the upload page
    const justUploaded = location.state?.justUploaded;
    if (justUploaded) {
      setShowNewUploadAlert(true);
      setActiveTab("myUploads"); // Switch to my uploads tab when user uploads a file
      // Hide the alert after 10 seconds
      const timer = setTimeout(() => setShowNewUploadAlert(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [location]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };
  
  // Find the most recent resource (for highlighting)
  const mostRecentResource = [...resources].sort((a, b) => 
    new Date(b.dateUploaded).getTime() - new Date(a.dateUploaded).getTime()
  )[0];

  // Filter resources for "My Uploads" (resources uploaded by "You")
  const myUploads = resources.filter(resource => resource.uploadedBy === "You");
  
  // Get the resources to display based on the active tab
  const displayedResources = activeTab === "myUploads" ? myUploads : resources;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Resource Library</h1>
        <p className="text-muted-foreground">
          Browse all available academic resources in our library
        </p>
      </div>

      {showNewUploadAlert && (
        <Alert className="border-green-500 bg-green-50">
          <Info className="h-4 w-4 text-green-500" />
          <AlertDescription>
            Your file was uploaded successfully! You can find it in the "My Uploads" section.
          </AlertDescription>
        </Alert>
      )}

      <Card>
        <CardContent className="pt-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <Tabs 
                value={activeTab} 
                onValueChange={(v) => setActiveTab(v as "all" | "myUploads")}
                className="mr-4"
              >
                <TabsList>
                  <TabsTrigger value="all">All Resources ({resources.length})</TabsTrigger>
                  <TabsTrigger value="myUploads">My Uploads ({myUploads.length})</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="flex items-center gap-4">
              <Tabs
                defaultValue="grid"
                value={view}
                onValueChange={(v) => setView(v as "grid" | "table")}
              >
                <TabsList className="grid w-[180px] grid-cols-2">
                  <TabsTrigger value="grid">Grid View</TabsTrigger>
                  <TabsTrigger value="table">Table View</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <Tabs value={view}>
            <TabsContent value="grid">
              <ResourceGrid 
                resources={displayedResources}
                emptyMessage={activeTab === "myUploads" ? "You haven't uploaded any resources yet" : "No resources found"}
              />
            </TabsContent>
            <TabsContent value="table">
              <div className="border rounded-md">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Uploaded</TableHead>
                      <TableHead>By</TableHead>
                      <TableHead>Downloads</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {displayedResources.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                          {activeTab === "myUploads" ? "You haven't uploaded any resources yet" : "No resources found"}
                        </TableCell>
                      </TableRow>
                    ) : (
                      displayedResources.map((resource) => (
                        <TableRow key={resource.id} className={resource.id === mostRecentResource?.id ? "bg-blue-50" : ""}>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4 text-muted-foreground" />
                              <Link
                                to={`/resources/${resource.id}`}
                                className="hover:underline font-medium"
                              >
                                {resource.title}
                              </Link>
                              {resource.id === mostRecentResource?.id && (
                                <Badge className="ml-2 bg-blue-100 text-blue-800 hover:bg-blue-200">New</Badge>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{resource.category}</Badge>
                          </TableCell>
                          <TableCell>{resource.fileType}</TableCell>
                          <TableCell className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formatDate(resource.dateUploaded)}
                          </TableCell>
                          <TableCell className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {resource.uploadedBy}
                          </TableCell>
                          <TableCell className="flex items-center gap-1">
                            <Download className="h-3 w-3" />
                            {resource.downloads}
                          </TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="ghost"
                              size="sm"
                              asChild
                              className="h-7"
                            >
                              <Link to={`/resources/${resource.id}`}>
                                View
                              </Link>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Library;
