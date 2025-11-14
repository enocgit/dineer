import { Link, useLocation } from "@tanstack/react-router";
import { Home, Package, Heart, ShoppingCart, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { authClient } from "@/lib/auth-client";
import { Logo } from "./logo";

export default function DashboardNavigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate({
            to: "/",
          });
        },
      },
    });
  };

  const navItems = [
    { to: "/pantry", icon: Package, label: "Pantry" },
    { to: "/recipes", icon: Home, label: "Recipes" },
    { to: "/favorites", icon: Heart, label: "Favorites" },
    { to: "/shopping", icon: ShoppingCart, label: "Shopping" },
    { to: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="border-border bg-card sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/pantry" aria-label="home">
            <Logo />
          </Link>

          <div className="flex items-center gap-1">
            {navItems.map(({ to, icon: Icon, label }) => (
              <Link key={to} to={to} aria-label={label}>
                <Button
                  variant={location.pathname === to ? "default" : "ghost"}
                  size="sm"
                  className="gap-2"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden md:inline">{label}</span>
                </Button>
              </Link>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="ml-2 gap-2"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden md:inline">Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
