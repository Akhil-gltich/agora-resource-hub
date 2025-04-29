
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SidebarProvider } from "@/components/ui/sidebar";

export function AppLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col w-full bg-gray-50">
        <Header />
        <main className="flex-1 container mx-auto py-8 px-4 md:px-6 animate-fade-in">
          <Outlet />
        </main>
        <Footer />
      </div>
    </SidebarProvider>
  );
}
