"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Megaphone, TrendingUp, Users, Target, Calendar } from "lucide-react"

export default function StrategiesPage() {
  const strategies = [
    {
      id: 1,
      name: "Customer Retention Campaign",
      description: "Re-engage customers who haven't purchased in 30+ days",
      type: "Retention",
      status: "Active",
      progress: 65,
      targetAudience: "Inactive customers (30+ days)",
      channels: ["Email", "WhatsApp", "SMS"],
      metrics: {
        reach: "1,250 customers",
        engagement: "23%",
        conversion: "8.5%",
        revenue: "₹45,000",
      },
    },
    {
      id: 2,
      name: "New Product Launch",
      description: "Introduce Cold Brew Tea Concentrate to target market",
      type: "Launch",
      status: "Planning",
      progress: 30,
      targetAudience: "Office workers, Health enthusiasts",
      channels: ["Social Media", "Influencers", "Sampling"],
      metrics: {
        reach: "5,000 prospects",
        engagement: "15%",
        conversion: "12%",
        revenue: "₹120,000",
      },
    },
    {
      id: 3,
      name: "Premium Upsell Strategy",
      description: "Convert regular customers to premium product lines",
      type: "Upsell",
      status: "Draft",
      progress: 10,
      targetAudience: "Frequent buyers, High-value customers",
      channels: ["In-store", "Email", "Personal calls"],
      metrics: {
        reach: "800 customers",
        engagement: "35%",
        conversion: "18%",
        revenue: "₹85,000",
      },
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Planning":
        return "bg-blue-100 text-blue-800"
      case "Draft":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Retention":
        return "bg-purple-100 text-purple-800"
      case "Launch":
        return "bg-orange-100 text-orange-800"
      case "Upsell":
        return "bg-pink-100 text-pink-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-6 py-4 flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">Marketing Strategies</h1>
            <p className="text-gray-600">Build campaign strategies based on customer behavior</p>
          </div>
          <Button>
            <Megaphone className="h-4 w-4 mr-2" />
            Create Strategy
          </Button>
        </div>
      </header>

      <div className="p-6">
        {/* Strategy Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Megaphone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">3</div>
                  <div className="text-sm text-gray-600">Active Strategies</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">₹2.5L</div>
                  <div className="text-sm text-gray-600">Total Revenue</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">7.1K</div>
                  <div className="text-sm text-gray-600">Total Reach</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Target className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">12.8%</div>
                  <div className="text-sm text-gray-600">Avg Conversion</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Strategy Cards */}
        <div className="grid gap-6">
          {strategies.map((strategy) => (
            <Card key={strategy.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{strategy.name}</CardTitle>
                    <CardDescription className="mt-1">{strategy.description}</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getTypeColor(strategy.type)}>{strategy.type}</Badge>
                    <Badge className={getStatusColor(strategy.status)}>{strategy.status}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Progress */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Campaign Progress</span>
                    <span className="text-sm text-gray-600">{strategy.progress}%</span>
                  </div>
                  <Progress value={strategy.progress} className="h-2" />
                </div>

                {/* Strategy Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Users className="h-4 w-4 text-blue-600" />
                        Target Audience
                      </h4>
                      <p className="text-sm text-gray-600">{strategy.targetAudience}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Megaphone className="h-4 w-4 text-green-600" />
                        Marketing Channels
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {strategy.channels.map((channel, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {channel}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-purple-600" />
                      Performance Metrics
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="text-sm text-blue-700">Reach</div>
                        <div className="font-semibold text-blue-900">{strategy.metrics.reach}</div>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="text-sm text-green-700">Engagement</div>
                        <div className="font-semibold text-green-900">{strategy.metrics.engagement}</div>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <div className="text-sm text-purple-700">Conversion</div>
                        <div className="font-semibold text-purple-900">{strategy.metrics.conversion}</div>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <div className="text-sm text-orange-700">Revenue</div>
                        <div className="font-semibold text-orange-900">{strategy.metrics.revenue}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4 border-t">
                  <Button variant="outline" className="flex-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View Analytics
                  </Button>
                  <Button className="flex-1">
                    {strategy.status === "Active" ? "Manage Campaign" : "Launch Strategy"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
