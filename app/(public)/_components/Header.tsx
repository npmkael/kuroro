"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  CircleDot,
  LayoutDashboard,
  DollarSign,
  Sun,
  Moon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

const Header = () => {
  const [activePage, setActivePage] = useState("features");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleNavClick = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActivePage(page);
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="sticky top-0 z-50 pt-8 px-4">
      <header className="w-full max-w-7xl mx-auto py-3 px-6 md:px-8 flex items-center justify-between">
        <div className="p-3">
          <Image src="/fav-icon.png" alt="Logo" width={48} height={48} />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-3 rounded-2xl text-muted-foreground hover:text-foreground"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
          <div className="rounded-full px-1 py-1 backdrop-blur-md bg-background/80 border border-border shadow-lg">
            <ToggleGroup
              type="single"
              value={activePage}
              onValueChange={(value) => value && setActivePage(value)}
            >
              <ToggleGroupItem
                value="features"
                className={cn(
                  "px-4 py-2 !rounded-full transition-colors relative",
                  activePage === "features"
                    ? "text-accent-foreground bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
                onClick={handleNavClick("features")}
              >
                <CircleDot size={16} className="inline-block mr-1.5" /> Features
              </ToggleGroupItem>
              <ToggleGroupItem
                value="dashboard"
                className={cn(
                  "px-4 py-2 !rounded-full transition-colors relative",
                  activePage === "dashboard"
                    ? "text-accent-foreground bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
                onClick={handleNavClick("dashboard")}
              >
                <LayoutDashboard size={16} className="inline-block mr-1.5" />{" "}
                Dashboard
              </ToggleGroupItem>
              <ToggleGroupItem
                value="pricing"
                className={cn(
                  "px-4 py-2 !rounded-full transition-colors relative",
                  activePage === "pricing"
                    ? "text-accent-foreground bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
                onClick={handleNavClick("pricing")}
              >
                <DollarSign size={16} className="inline-block mr-1.5" /> Pricing
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </nav>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-32 left-4 right-4 bg-background/95 backdrop-blur-md py-4 px-6 border border-border rounded-2xl shadow-lg z-50">
            <div className="flex flex-col gap-4">
              <Link
                href="#features"
                className={`px-3 py-2 text-sm rounded-full transition-colors ${
                  activePage === "features"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                onClick={handleNavClick("features")}
              >
                <CircleDot size={16} className="inline-block mr-1.5" /> Features
              </Link>
              <Link
                href="#dashboard"
                className={`px-3 py-2 text-sm rounded-full transition-colors ${
                  activePage === "dashboard"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                onClick={handleNavClick("dashboard")}
              >
                <LayoutDashboard size={16} className="inline-block mr-1.5" />{" "}
                Dashboard
              </Link>
              <Link
                href="#pricing"
                className={`px-3 py-2 text-sm rounded-full transition-colors ${
                  activePage === "pricing"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                onClick={handleNavClick("pricing")}
              >
                <DollarSign size={16} className="inline-block mr-1.5" /> Pricing
              </Link>

              {/* Add theme toggle for mobile */}
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm text-muted-foreground">Theme</span>
                <div className="flex items-center gap-2">
                  <Moon
                    size={16}
                    className={`${
                      theme === "dark"
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                  <Switch
                    checked={theme === "light"}
                    onCheckedChange={toggleTheme}
                    className="data-[state=checked]:bg-primary"
                  />
                  <Sun
                    size={16}
                    className={`${
                      theme === "light"
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="hidden md:flex items-center gap-4">
          {/* Theme toggle for desktop */}
          <div className="flex items-center gap-2 rounded-full px-3 py-4">
            <Moon
              size={18}
              className={`${
                theme === "dark" ? "text-primary" : "text-muted-foreground"
              }`}
            />
            <Switch
              checked={theme === "light"}
              onCheckedChange={toggleTheme}
              className="data-[state=checked]:bg-primary"
            />
            <Sun
              size={18}
              className={`${
                theme === "light" ? "text-primary" : "text-muted-foreground"
              }`}
            />
          </div>
          <div className="rounded-2xl">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground hover:bg-muted"
            >
              Log in
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
