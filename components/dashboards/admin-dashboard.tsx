"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  DollarSign,
  TrendingUp,
  Package,
  Settings,
  UserCheck,
  ShoppingCart,
} from "lucide-react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { StatsCard } from "@/components/ui/stats-card";
import { RecentActivity } from "@/components/ui/recent-activity";
import { TopPerformers } from "@/components/ui/top-performers";
import { TopProducts } from "../ui/top-products";

export function AdminDashboard() {
  return (
    <DashboardLayout userRole="admin" userName="Admin User">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-y-4 md:flex-row items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Platform overview and management
            </p>
          </div>
          <Button>
            <Settings className="mr-2 h-4 w-4" />
            Platform Settings
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Revenue"
            value="$124,563"
            change="+12.5%"
            icon={DollarSign}
            trend="up"
          />
          <StatsCard
            title="Active Users"
            value="2,847"
            change="+8.2%"
            icon={Users}
            trend="up"
          />
          <StatsCard
            title="Total Products"
            value="1,234"
            change="+15.3%"
            icon={Package}
            trend="up"
          />
          <StatsCard
            title="Conversion Rate"
            value="3.2%"
            change="+0.8%"
            icon={TrendingUp}
            trend="up"
          />
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-4 ">
          <TabsList className="max-sm:max-w-[300px] max-sm:mx-auto">
            <TabsTrigger className="max-sm:text-[10px]" value="overview">Overview</TabsTrigger>
            <TabsTrigger className="max-sm:text-[10px]" value="users">Users</TabsTrigger>
            <TabsTrigger className="max-sm:text-[10px]" value="products">Products</TabsTrigger>
            <TabsTrigger className="max-sm:text-[10px]" value="analytics">Analytics</TabsTrigger>
            <TabsTrigger className="max-sm:text-[10px]" value="payouts">Payouts</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest platform activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentActivity
                    activities={[
                      {
                        user: "John Doe",
                        action: "New vendor registration",
                        time: "2 minutes ago",
                      },
                      {
                        user: "Jane Smith",
                        action: "Product approved",
                        time: "5 minutes ago",
                      },
                      {
                        user: "Mike Johnson",
                        action: "Affiliate payout processed",
                        time: "10 minutes ago",
                      },
                      {
                        user: "Sarah Wilson",
                        action: "New product submitted",
                        time: "15 minutes ago",
                      },
                    ]}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Affiliates</CardTitle>
                  <CardDescription>
                    Best performing affiliates this month
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TopPerformers
                    performers={[
                      {
                        name: "Alex Rodriguez",
                        sales: 156,
                        earnings: "$12,450",
                      },
                      {
                        name: "Emma Thompson",
                        sales: 142,
                        earnings: "$11,280",
                      },
                      { name: "David Chen", sales: 128, earnings: "$10,240" },
                      { name: "Lisa Garcia", sales: 115, earnings: "$9,200" },
                    ]}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Products</CardTitle>
                  <CardDescription>
                    Product with the most sales this month
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TopProducts
                    products={[
                      {
                        name: "Digital Marketing Mastery",
                        vendor: "John Vendor",
                        sales: 345,
                        earnings: "$92,450",
                      },
                    ]}
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Vendors
                  </CardTitle>
                  <UserCheck className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">342</div>
                  <p className="text-xs text-muted-foreground">
                    +12 from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Affiliates
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,847</div>
                  <p className="text-xs text-muted-foreground">
                    +156 from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Customers
                  </CardTitle>
                  <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8,234</div>
                  <p className="text-xs text-muted-foreground">
                    +423 from last month
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="products" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Product Management</CardTitle>
                <CardDescription>
                  Manage all products on the platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Digital Marketing Mastery</h4>
                      <p className="text-sm text-muted-foreground">
                        by John Vendor • $97
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">Active</Badge>
                      <Button size="sm" variant="outline">
                        Review
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Web Development Course</h4>
                      <p className="text-sm text-muted-foreground">
                        by Jane Developer • $149
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">Pending</Badge>
                      <Button size="sm" variant="outline">
                        Review
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue by Currency</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>USD</span>
                      <span className="font-medium">$45,230</span>
                    </div>
                    <div className="flex justify-between">
                      <span>EUR</span>
                      <span className="font-medium">€32,150</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GBP</span>
                      <span className="font-medium">£28,940</span>
                    </div>
                    <div className="flex justify-between">
                      <span>NGN</span>
                      <span className="font-medium">₦18,243,000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Regions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>United States</span>
                      <span className="font-medium">34%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Nigeria</span>
                      <span className="font-medium">28%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>United Kingdom</span>
                      <span className="font-medium">18%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Germany</span>
                      <span className="font-medium">12%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="payouts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pending Payouts</CardTitle>
                <CardDescription>
                  Payouts scheduled for this Saturday
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Alex Rodriguez</h4>
                      <p className="text-sm text-muted-foreground">
                        Affiliate • 156 sales
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$2,450.00</p>
                      <Button size="sm" className="mt-1">
                        Approve
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Emma Thompson</h4>
                      <p className="text-sm text-muted-foreground">
                        Affiliate • 142 sales
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$2,280.00</p>
                      <Button size="sm" className="mt-1">
                        Approve
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
