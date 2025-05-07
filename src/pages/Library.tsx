
import { useState } from "react";
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
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Library = () => {
  const [view, setView] = useState<"grid" | "table">("grid");

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Resource Library</h1>
        <p className="text-muted-foreground">
          Browse all available academic resources in our library
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-semibold">
                {resources.length} Total Resources
              </h2>
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
              <ResourceGrid resources={resources} />
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
                    {resources.map((resource) => (
                      <TableRow key={resource.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <Link
                              to={`/resources/${resource.id}`}
                              className="hover:underline font-medium"
                            >
                              {resource.title}
                            </Link>
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
                    ))}
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
