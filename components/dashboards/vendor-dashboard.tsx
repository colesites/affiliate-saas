"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, DollarSign, Users, TrendingUp, Plus, Eye, Edit } from "lucide-react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { StatsCard } from "@/components/ui/stats-card"

export function VendorDashboard() {
  return (
    <DashboardLayout userRole="vendor" userName="John Vendor">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Vendor Dashboard</h1>
            <p className="text-muted-foreground">Manage your products and track sales</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add New Product
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard title="Total Revenue" value="$24,563" change="+18.2%" icon={DollarSign} trend="up" />
          <StatsCard title="Active Products" value="12" change="+2" icon={Package} trend="up" />
          <StatsCard title="Active Affiliates" value="156" change="+23" icon={Users} trend="up" />
          <StatsCard title="Conversion Rate" value="4.2%" change="+0.5%" icon={TrendingUp} trend="up" />
        </div>

        {/* Main Content */}
        <Tabs defaultValue="products" className="space-y-4">
          <TabsList>
            <TabsTrigger value="products">My Products</TabsTrigger>
            <TabsTrigger value="affiliates">Affiliates</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Product Management</CardTitle>
                <CardDescription>Manage your digital products and settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">Digital Marketing Mastery</h4>
                      <p className="text-sm text-muted-foreground">Course • $97 • 50% commission</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge variant="secondary">Active</Badge>
                        <Badge variant="outline">156 affiliates</Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">SEO Optimization Guide</h4>
                      <p className="text-sm text-muted-foreground">eBook • $47 • $20 fixed commission</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge variant="secondary">Active</Badge>
                        <Badge variant="outline">89 affiliates</Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">Premium Marketing Membership</h4>
                      <p className="text-sm text-muted-foreground">Subscription • $97/month • 40% commission</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge variant="secondary">Active</Badge>
                        <Badge variant="outline">234 affiliates</Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="affiliates" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Affiliates</CardTitle>
                <CardDescription>Your best affiliate partners this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Alex Rodriguez</h4>
                      <p className="text-sm text-muted-foreground">156 sales • $12,450 generated</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-green-600">$6,225 commission</p>
                      <Button size="sm" variant="outline" className="mt-1">
                        Contact
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Emma Thompson</h4>
                      <p className="text-sm text-muted-foreground">142 sales • $11,280 generated</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-green-600">$5,640 commission</p>
                      <Button size="sm" variant="outline" className="mt-1">
                        Contact
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
                  <CardTitle>Sales by Product</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Digital Marketing Mastery</span>
                      <span className="font-medium">234 sales</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Premium Marketing Membership</span>
                      <span className="font-medium">189 sales</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">SEO Optimization Guide</span>
                      <span className="font-medium">156 sales</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue by Currency</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">USD</span>
                      <span className="font-medium">$18,450</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">EUR</span>
                      <span className="font-medium">€4,230</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">GBP</span>
                      <span className="font-medium">£1,883</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="earnings" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Earnings Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>This Month</span>
                      <span className="font-medium">$4,563</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Last Month</span>
                      <span className="font-medium">$3,892</span>
                    </div>
                    <div className="flex justify-between">
                      <span>This Year</span>
                      <span className="font-medium">$24,563</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="font-medium">Available Balance</span>
                      <span className="font-bold text-green-600">$2,450</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Commission Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Affiliate Commissions Paid</span>
                      <span className="font-medium text-red-600">-$12,450</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Platform Fee (5%)</span>
                      <span className="font-medium text-red-600">-$1,228</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Payment Processing</span>
                      <span className="font-medium text-red-600">-$245</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="font-medium">Net Earnings</span>
                      <span className="font-bold text-green-600">$24,563</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
