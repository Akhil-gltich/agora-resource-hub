
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Discover and Share Academic Resources
          </h1>
          <p className="text-lg text-muted-foreground">
            Agora is a centralized platform for college resource sharing and
            accessibility. Find study materials, research papers, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" asChild>
              <Link to="/resources">Browse Resources</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/upload">Upload Resource</Link>
            </Button>
          </div>
        </div>
        <div className="lg:pl-10">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-brand-100 to-brand-200 p-1">
            <div className="bg-white rounded-xl p-6 md:p-8">
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4 flex gap-4 items-start">
                  <div className="rounded bg-brand-100 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-brand-600"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Study Materials</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Access notes, textbooks, and study guides
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 flex gap-4 items-start">
                  <div className="rounded bg-brand-100 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-brand-600"
                    >
                      <path d="M8 3H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.414A2 2 0 0 0 20.414 6L15 .586A2 2 0 0 0 13.586 0H8a2 2 0 0 0-2 2v1Z" />
                      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Research Papers</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Discover academic research across disciplines
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 flex gap-4 items-start">
                  <div className="rounded bg-brand-100 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-brand-600"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M10 10h4v4h-4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Presentations & Media</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Access slides, videos, and interactive content
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
