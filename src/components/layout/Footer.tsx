
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full border-t bg-white py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
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
                  className="h-5 w-5"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
              </div>
              <span className="text-lg font-bold">Agora</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              A centralized platform for college resource sharing and accessibility.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/resources?category=study" className="hover:underline">Study Materials</Link>
                </li>
                <li>
                  <Link to="/resources?category=research" className="hover:underline">Research Papers</Link>
                </li>
                <li>
                  <Link to="/resources?category=books" className="hover:underline">Books</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Links</h3>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/" className="hover:underline">Home</Link>
                </li>
                <li>
                  <Link to="/resources" className="hover:underline">Browse</Link>
                </li>
                <li>
                  <Link to="/upload" className="hover:underline">Upload</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium">Subscribe to Updates</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Get notified about new resources and features.
            </p>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-md border bg-background px-3 py-2 text-sm"
              />
              <button
                type="submit"
                className="rounded-md bg-brand-500 px-3 py-2 text-sm font-medium text-white hover:bg-brand-600"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Agora Resource Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
