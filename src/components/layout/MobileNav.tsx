
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import { Link } from "react-router-dom";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mb-4">
          <SheetTitle>Agora Resources</SheetTitle>
        </SheetHeader>
        <div className="grid gap-2 py-6">
          <Button variant="ghost" asChild className="justify-start">
            <Link to="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild className="justify-start">
            <Link to="/resources">Resources</Link>
          </Button>
          <Button variant="ghost" asChild className="justify-start">
            <Link to="/upload">Upload</Link>
          </Button>
          <div className="mt-4">
            <Button className="w-full" asChild>
              <Link to="/upload">Upload Resource</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
