"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { DollarSign, TrendingUp, Users, MousePointer, Copy, ExternalLink, Gift, Calendar } from "lucide-react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { StatsCard } from "@/components/ui/stats-card"

export function AffiliateDashboard() {
  return (
    <DashboardLayout userRole="affiliate" userName="Alex Rodriguez">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-y-4 md:flex-row items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Affiliate Dashboard</h1>
            <p className="text-muted-foreground">Track your performance and earnings</p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary">Rank #1</Badge>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Next Payout: Saturday
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard title="Total Earnings" value="$12,450" change="+23.5%" icon={DollarSign} trend="up" />
          <StatsCard title="This Month" value="$2,340" change="+18.2%" icon={TrendingUp} trend="up" />
          <StatsCard title="Total Sales" value="156" change="+12" icon={Users} trend="up" />
          <StatsCard title="Click Rate" value="3.2%" change="+0.8%" icon={MousePointer} trend="up" />
        </div>

        {/* Main Content */}
        <Tabs defaultValue="links" className="space-y-4">
          <TabsList className="max-w-[300px] mx-auto">
            <TabsTrigger className="max-sm:text-[10px]" value="links">Affiliate Links</TabsTrigger>
            <TabsTrigger className="max-sm:text-[10px]" value="performance">Performance</TabsTrigger>
            <TabsTrigger className="max-sm:text-[10px]" value="bonuses">Bonuses</TabsTrigger>
            <TabsTrigger className="max-sm:text-[10px]" value="withdrawals">Withdrawals</TabsTrigger>
          </TabsList>

          <TabsContent value="links" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Your Affiliate Links</CardTitle>
                <CardDescription>Promote these products and earn commissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-medium">Digital Marketing Mastery</h4>
                        <p className="text-sm text-muted-foreground">$97 • 50% commission ($48.50 per sale)</p>
                      </div>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Input value="https://platform.com/product/123?ref=AFF789" readOnly className="flex-1" />
                      <Button size="sm" variant="outline">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="mt-3 text-sm text-muted-foreground">
                      <span>34 clicks • 12 sales • $582 earned</span>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-medium">SEO Optimization Guide</h4>
                        <p className="text-sm text-muted-foreground">$47 • $20 fixed commission</p>
                      </div>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Input value="https://platform.com/product/456?ref=AFF789" readOnly className="flex-1" />
                      <Button size="sm" variant="outline">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="mt-3 text-sm text-muted-foreground">
                      <span>28 clicks • 8 sales • $160 earned</span>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-medium">Premium Marketing Membership</h4>
                        <p className="text-sm text-muted-foreground">$97/month • 40% commission ($38.80 per month)</p>
                      </div>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Input value="https://platform.com/product/789?ref=AFF789" readOnly className="flex-1" />
                      <Button size="sm" variant="outline">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="mt-3 text-sm text-muted-foreground">
                      <span>156 clicks • 23 subscribers • $892.40 monthly recurring</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>This Week</span>
                      <span className="font-medium">$450</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Last Week</span>
                      <span className="font-medium">$380</span>
                    </div>
                    <div className="flex justify-between">
                      <span>2 Weeks Ago</span>
                      <span className="font-medium">$320</span>
                    </div>
                    <div className="flex justify-between">
                      <span>3 Weeks Ago</span>
                      <span className="font-medium">$290</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Conversion Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Total Clicks</span>
                      <span className="font-medium">2,456</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Sales</span>
                      <span className="font-medium">156</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Conversion Rate</span>
                      <span className="font-medium">6.35%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Avg. Commission</span>
                      <span className="font-medium">$79.81</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Leaderboard Position</CardTitle>
                <CardDescription>Your ranking among all affiliates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg border-2 border-primary">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Alex Rodriguez (You)</p>
                        <p className="text-sm text-muted-foreground">156 sales • $12,450</p>
                      </div>
                    </div>
                    <Badge>Top Performer</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <p className="font-medium">Emma Thompson</p>
                        <p className="text-sm text-muted-foreground">142 sales • $11,280</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <p className="font-medium">David Chen</p>
                        <p className="text-sm text-muted-foreground">128 sales • $10,240</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bonuses" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Bonus Management</CardTitle>
                <CardDescription>Add bonuses to increase your conversion rates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Gift className="h-5 w-5 text-primary" />
                        <h4 className="font-medium">Email Marketing Templates</h4>
                      </div>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      50+ proven email templates for Digital Marketing Mastery customers
                    </p>
                    <Button size="sm" variant="outline">
                      Edit Bonus
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Gift className="h-5 w-5 text-primary" />
                        <h4 className="font-medium">1-on-1 Strategy Call</h4>
                      </div>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      30-minute personal consultation for SEO Guide customers
                    </p>
                    <Button size="sm" variant="outline">
                      Edit Bonus
                    </Button>
                  </div>

                  <Button className="w-full" variant="outline">
                    <Gift className="mr-2 h-4 w-4" />
                    Add New Bonus
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="withdrawals" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Available Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">$2,450.00</div>
                    <p className="text-sm text-muted-foreground mb-4">Next payout: Saturday, 12:00 PM</p>
                    <Button className="w-full">Request Withdrawal</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Withdrawal History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Dec 16, 2023</span>
                      <span className="font-medium">$1,890.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Dec 9, 2023</span>
                      <span className="font-medium">$1,650.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Dec 2, 2023</span>
                      <span className="font-medium">$1,420.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Nov 25, 2023</span>
                      <span className="font-medium">$1,280.00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Withdrawal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Withdrawal Schedule</h4>
                    <p className="text-sm text-muted-foreground">
                      Withdrawals are processed every Saturday from 12:00 PM. Minimum withdrawal amount is $50.
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Payment Methods</h4>
                    <p className="text-sm text-muted-foreground">
                      PayPal, Bank Transfer, Stripe. Processing time: 1-3 business days.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
