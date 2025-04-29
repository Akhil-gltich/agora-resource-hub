
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Upload, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getAllCategories, getAllTags } from "@/data/resources";

const UploadResource = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const categories = getAllCategories();
  const popularTags = getAllTags().slice(0, 20);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);

    // Simulate upload delay
    setTimeout(() => {
      setIsUploading(false);
      toast({
        title: "Resource uploaded successfully!",
        description: "Your resource is now available in the library.",
      });
      navigate("/resources");
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Upload Resource</h1>
        <p className="text-muted-foreground">
          Share your academic resources with the college community
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="border rounded-lg p-6 bg-white">
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Resource Title *</Label>
              <Input
                id="title"
                placeholder="Enter resource title"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                placeholder="Provide a brief description of the resource"
                className="min-h-32"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="category">Category *</Label>
                <Select value={category} onValueChange={setCategory} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="tags">Tags (select multiple)</Label>
                <Select value={tags} onValueChange={setTags}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tags" />
                  </SelectTrigger>
                  <SelectContent>
                    {popularTags.map((tag) => (
                      <SelectItem key={tag} value={tag}>
                        {tag}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground mt-1">
                  You can select multiple tags or add new ones
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-6 bg-white">
          <h2 className="text-lg font-semibold mb-4">Upload File</h2>
          <div className="border-2 border-dashed rounded-lg p-6 text-center">
            {selectedFile ? (
              <div className="flex items-center justify-center gap-2">
                <FileText className="h-6 w-6 text-brand-500" />
                <div>
                  <p className="font-medium">{selectedFile.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
            ) : (
              <div className="py-4">
                <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-lg mb-1">Drag and drop your file here</p>
                <p className="text-sm text-muted-foreground mb-4">
                  or click to browse (PDF, DOC, PPT, ZIP up to 50MB)
                </p>
              </div>
            )}
            <Input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              {selectedFile ? "Change File" : "Browse Files"}
            </Button>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Button variant="outline" type="button" onClick={() => navigate("/resources")}>
            Cancel
          </Button>
          <Button type="submit" disabled={isUploading || !selectedFile}>
            {isUploading ? (
              <>Uploading...</>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Upload Resource
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UploadResource;
