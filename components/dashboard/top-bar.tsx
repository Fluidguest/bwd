"use client";

import { Bell, Search, ChevronDown } from "lucide-react";

interface TopBarProps {
  sidebarCollapsed?: boolean;
}

export function TopBar({ sidebarCollapsed = false }: TopBarProps) {
  return (
    <header
      className={`
        fixed top-0 right-0 z-30 h-16 bg-background border-b border-border
        transition-all duration-300 ease-in-out
        ${sidebarCollapsed ? "left-16" : "left-64"}
      `}
    >
      <div className="flex h-full items-center justify-between px-6">
        {/* Search */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="h-9 w-64 rounded-lg border border-input bg-background pl-9 pr-4 text-sm
                placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative flex h-9 w-9 items-center justify-center rounded-lg
            hover:bg-accent transition-colors duration-150">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-destructive" />
          </button>

          {/* User Profile */}
          <button className="flex items-center gap-3 rounded-lg px-3 py-1.5 hover:bg-accent
            transition-colors duration-150">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-xs font-medium text-primary-foreground">JD</span>
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-sm font-medium text-foreground">John Doe</p>
              <p className="text-xs text-muted-foreground">Administrator</p>
            </div>
            <ChevronDown className="h-4 w-4 text-muted-foreground hidden sm:block" />
          </button>
        </div>
      </div>
    </header>
  );
}
