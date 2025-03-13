
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LogIn, UserPlus } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/recipes", label: "Recipes" },
    { path: "/about", label: "About" },
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-semibold tracking-tight">
            NutriGuide
          </Link>
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-2">
            <Link to="/login">
              <Button variant="outline" size="sm" className="hidden md:flex">
                <LogIn className="mr-2 h-4 w-4" />
                Log in
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="hidden md:flex">
                <UserPlus className="mr-2 h-4 w-4" />
                Sign up
              </Button>
            </Link>
            <div className="md:hidden">
              {/* Mobile menu button */}
              <button className="p-2 rounded-md hover:bg-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 pt-24 pb-12">
        <div className="container">{children}</div>
      </main>
      <footer className="py-6 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} NutriGuide. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
