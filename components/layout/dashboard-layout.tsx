"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LayoutDashboard,
  Package,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  Bell,
  HelpCircle,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
  userRole: "admin" | "vendor" | "affiliate" | "customer";
  userName: string;
}

export function DashboardLayout({
  children,
  userRole,
  userName,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const getNavItems = () => {
    const baseItems = [
      {
        icon: LayoutDashboard,
        label: "Dashboard",
        href: `/dashboard/${userRole}`,
      },
    ];

    switch (userRole) {
      case "admin":
        return [
          ...baseItems,
          { icon: Users, label: "Users", href: "/dashboard/admin/users" },
          {
            icon: Package,
            label: "Products",
            href: "/dashboard/admin/products",
          },
          {
            icon: BarChart3,
            label: "Analytics",
            href: "/dashboard/admin/analytics",
          },
          {
            icon: Settings,
            label: "Settings",
            href: "/dashboard/admin/settings",
          },
        ];
      case "vendor":
        return [
          ...baseItems,
          {
            icon: Package,
            label: "My Products",
            href: "/dashboard/vendor/products",
          },
          {
            icon: Users,
            label: "Affiliates",
            href: "/dashboard/vendor/affiliates",
          },
          {
            icon: BarChart3,
            label: "Analytics",
            href: "/dashboard/vendor/analytics",
          },
          {
            icon: Settings,
            label: "Settings",
            href: "/dashboard/vendor/settings",
          },
        ];
      case "affiliate":
        return [
          ...baseItems,
          {
            icon: Package,
            label: "Products",
            href: "/dashboard/affiliate/products",
          },
          {
            icon: BarChart3,
            label: "Performance",
            href: "/dashboard/affiliate/performance",
          },
          {
            icon: Settings,
            label: "Settings",
            href: "/dashboard/affiliate/settings",
          },
        ];
      case "customer":
        return [
          ...baseItems,
          {
            icon: Package,
            label: "My Library",
            href: "/dashboard/customer/library",
          },
          {
            icon: Settings,
            label: "Settings",
            href: "/dashboard/customer/settings",
          },
        ];
      default:
        return baseItems;
    }
  };

  const handleLogout = () => {
    router.push("/auth/login");
  };

  const handleSupportClick = () => {
    const supportEmails = {
      admin: "admin@affiliatehub.com",
      vendor: "vendor@affiliatehub.com",
      affiliate: "affiliate@affiliatehub.com",
      customer: "support@affiliatehub.com",
    };

    window.location.href = `mailto:${supportEmails[userRole]}?subject=Support Request`;
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
      fixed top-0 left-0 z-50 w-64 h-full bg-card border-r transform transition-transform duration-200 ease-in-out
      ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      lg:translate-x-0 lg:fixed
    `}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center h-6 space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">A</span>
            </div>
            <span className="text-lg font-bold">AffiliateHub</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            ×
          </Button>
        </div>

        <nav className="p-4 space-y-2">
          {getNavItems().map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <Button
            variant="outline"
            className="w-full justify-start"
            onClick={handleSupportClick}
          >
            <HelpCircle className="mr-2 h-4 w-4" />
            Contact Support
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-grow lg:ml-64">
        {/* Header (also fixed) */}
        <header className="bg-card border-b px-4 py-3 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="capitalize text-sm text-muted-foreground">
              {userRole} Dashboard
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="h-5 w-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="" alt={userName} />
                    <AvatarFallback>
                      {userName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {userName}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground capitalize">
                      {userRole}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSupportClick}>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Support</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Scrollable Page content */}
        <main className="flex-grow p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
