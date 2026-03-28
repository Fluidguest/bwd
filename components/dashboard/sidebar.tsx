"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  DollarSign,
  TrendingUp,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  active?: boolean;
}

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: <LayoutDashboard className="h-5 w-5" />,
    active: true,
  },
  {
    label: "Clients",
    href: "/clients",
    icon: <Users className="h-5 w-5" />,
  },
  {
    label: "Finance",
    href: "/finance",
    icon: <DollarSign className="h-5 w-5" />,
  },
  {
    label: "Sales",
    href: "/sales",
    icon: <TrendingUp className="h-5 w-5" />,
  },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`
        fixed left-0 top-0 z-40 h-screen bg-sidebar border-r border-sidebar-border
        transition-all duration-300 ease-in-out
        ${collapsed ? "w-16" : "w-64"}
      `}
    >
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
          {!collapsed && (
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">E</span>
              </div>
              <span className="text-lg font-semibold text-sidebar-foreground">ERP Pro</span>
            </Link>
          )}
          {collapsed && (
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary mx-auto">
              <span className="text-sm font-bold text-primary-foreground">E</span>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`
                flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium
                transition-colors duration-150
                ${
                  item.active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }
                ${collapsed ? "justify-center" : ""}
              `}
              title={collapsed ? item.label : undefined}
            >
              {item.icon}
              {!collapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* Settings & Collapse */}
        <div className="border-t border-sidebar-border px-3 py-4">
          <Link
            href="/settings"
            className={`
              flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium
              text-muted-foreground hover:bg-accent hover:text-accent-foreground
              transition-colors duration-150
              ${collapsed ? "justify-center" : ""}
            `}
            title={collapsed ? "Settings" : undefined}
          >
            <Settings className="h-5 w-5" />
            {!collapsed && <span>Settings</span>}
          </Link>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className={`
              mt-2 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium
              text-muted-foreground hover:bg-accent hover:text-accent-foreground
              transition-colors duration-150
              ${collapsed ? "justify-center" : ""}
            `}
          >
            {collapsed ? (
              <ChevronRight className="h-5 w-5" />
            ) : (
              <>
                <ChevronLeft className="h-5 w-5" />
                <span>Collapse</span>
              </>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
}
