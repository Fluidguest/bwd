"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "./sidebar";
import { TopBar } from "./top-bar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Listen for sidebar state changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <TopBar sidebarCollapsed={sidebarCollapsed} />
      <main
        className={`
          pt-16 min-h-screen transition-all duration-300 ease-in-out
          ${sidebarCollapsed ? "pl-16" : "pl-64"}
        `}
      >
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
