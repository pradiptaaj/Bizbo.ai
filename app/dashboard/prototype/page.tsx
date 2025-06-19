"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Lightbulb, Plus, Star, Users, TrendingUp } from "lucide-react"

export default function PrototypePage() {
  const [newPrototype, setNewPrototype] = useState({
    name: "",
    description: "",
    category: "",
    targetMarket: "",
  })

  const prototypes = [
    {
      id: 1,
      name: "Cold Brew Tea Concentrate",
      description: "Ready-to-mix concentrated tea for instant cold brew preparation",
      category: "Beverages",
      status: "Testing",
      acceptability: 78,
      feedback: [
        { user: "Ram K.", rating: 4, comment: "Great taste, convenient packaging" },
        { user: "Sita M.", rating: 5, comment: "Perfect for office use" },
        { user: "Hari T.", rating: 3, comment: "Price seems high for the quantity" },
      ],
    },
    {
      id: 2,
      name: "Herbal Immunity Blend",
      description: "Organic herbal tea blend focused on immunity boosting",
      category: "Health & Wellness",
      status: "Concept",
      acceptability: 65,
      feedback: [
        { user: "Maya S.", rating: 4, comment: "Love the health benefits focus" },
        { user: "Bikash L.", rating: 4, comment: "Taste could be improved" },
      ],
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("New prototype:", newPrototype)
    // Reset form
    setNewPrototype({ name: "", description: "", category: "", targetMarket: "" })
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
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Product Prototype</h1>
            <p className="text-gray-600">Manage product ideas and test market acceptability</p>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Add New Prototype */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5 text-purple-600" />
              Create New Prototype
            </CardTitle>
            <CardDescription>Add a new product idea for testing and validation</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input
                    id="name"
                    placeholder="e.g., Premium Green Tea Blend"
                    value={newPrototype.name}
                    onChange={(e) => setNewPrototype({ ...newPrototype, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select onValueChange={(value) => setNewPrototype({ ...newPrototype, category: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beverages">Beverages</SelectItem>
                      <SelectItem value="health">Health & Wellness</SelectItem>
                      <SelectItem value="snacks">Snacks</SelectItem>
                      <SelectItem value="organic">Organic Products</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your product concept..."
                  value={newPrototype.description}
                  onChange={(e) => setNewPrototype({ ...newPrototype, description: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="target">Target Market</Label>
                <Input
                  id="target"
                  placeholder="e.g., Health-conscious millennials, Office workers"
                  value={newPrototype.targetMarket}
                  onChange={(e) => setNewPrototype({ ...newPrototype, targetMarket: e.target.value })}
                />
              </div>
              <Button type="submit" className="w-full md:w-auto">
                <Lightbulb className="h-4 w-4 mr-2" />
                Create Prototype
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Existing Prototypes */}
        <div className="grid gap-6">
          {prototypes.map((prototype) => (
            <Card key={prototype.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{prototype.name}</CardTitle>
                    <CardDescription className="mt-1">{prototype.description}</CardDescription>
                  </div>
                  <Badge variant={prototype.status === "Testing" ? "default" : "secondary"}>{prototype.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">{prototype.acceptability}%</div>
                    <div className="text-sm text-blue-700">Market Acceptability</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">{prototype.feedback.length}</div>
                    <div className="text-sm text-green-700">User Feedback</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Star className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-600">
                      {(prototype.feedback.reduce((acc, f) => acc + f.rating, 0) / prototype.feedback.length).toFixed(
                        1,
                      )}
                    </div>
                    <div className="text-sm text-purple-700">Avg Rating</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">User Feedback</h4>
                  <div className="space-y-3">
                    {prototype.feedback.map((feedback, index) => (
                      <div key={index} className="border rounded-lg p-3 bg-gray-50">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{feedback.user}</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < feedback.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">{feedback.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    Edit Prototype
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Collect Feedback
                  </Button>
                  <Button className="flex-1">Launch Product</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
