
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-md bg-brand-500 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              </svg>
            </div>
            <span className="text-xl font-bold">Agora</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-brand-500 transition-colors">
            Home
          </Link>
          <Link to="/resources" className="text-sm font-medium hover:text-brand-500 transition-colors">
            Resources
          </Link>
          <Link to="/upload" className="text-sm font-medium hover:text-brand-500 transition-colors">
            Upload
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="hidden md:flex">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
          <Button className="hidden md:flex" asChild>
            <Link to="/upload">Upload Resource</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
