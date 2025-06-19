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
import { ArrowLeft, Upload, Plus, Trash2 } from "lucide-react"

export default function AddDataPage() {
  const [customers, setCustomers] = useState([
    { id: 1, name: "", age: "", gender: "", purchaseAmount: "", items: "", frequency: "" },
  ])

  const addCustomer = () => {
    setCustomers([
      ...customers,
      {
        id: Date.now(),
        name: "",
        age: "",
        gender: "",
        purchaseAmount: "",
        items: "",
        frequency: "",
      },
    ])
  }

  const removeCustomer = (id: number) => {
    setCustomers(customers.filter((customer) => customer.id !== id))
  }

  const updateCustomer = (id: number, field: string, value: string) => {
    setCustomers(customers.map((customer) => (customer.id === id ? { ...customer, [field]: value } : customer)))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Customer data submitted:", customers)
    // In real app, this would send data to API
    alert("Data submitted successfully! AI recommendations will be updated.")
    window.location.href = "/dashboard"
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
            <h1 className="text-xl font-semibold">Add Daily Customer Data</h1>
            <p className="text-sm text-gray-500">Input today's customer transactions for AI analysis</p>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Quick Data Entry Options</CardTitle>
              <CardDescription>Choose how you want to add your customer data</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-4">
              <Button variant="outline">
                <Upload className="h-4 w-4 mr-2" />
                Upload CSV File
              </Button>
              <Button variant="outline">Connect POS System</Button>
              <Button>Manual Entry (Current)</Button>
            </CardContent>
          </Card>

          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Customer Transaction Data</CardTitle>
                    <CardDescription>Add individual customer purchase information</CardDescription>
                  </div>
                  <Button type="button" onClick={addCustomer} variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Customer
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {customers.map((customer, index) => (
                  <div key={customer.id} className="border rounded-lg p-4 relative">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium">Customer #{index + 1}</h3>
                      {customers.length > 1 && (
                        <Button type="button" variant="outline" size="sm" onClick={() => removeCustomer(customer.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label>Customer Name (Optional)</Label>
                        <Input
                          placeholder="e.g., Ram Sharma"
                          value={customer.name}
                          onChange={(e) => updateCustomer(customer.id, "name", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Age Group</Label>
                        <Select onValueChange={(value) => updateCustomer(customer.id, "age", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select age group" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="18-25">18-25</SelectItem>
                            <SelectItem value="26-35">26-35</SelectItem>
                            <SelectItem value="36-45">36-45</SelectItem>
                            <SelectItem value="46-55">46-55</SelectItem>
                            <SelectItem value="56+">56+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Gender</Label>
                        <Select onValueChange={(value) => updateCustomer(customer.id, "gender", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Purchase Amount (₹)</Label>
                        <Input
                          type="number"
                          placeholder="e.g., 1500"
                          value={customer.purchaseAmount}
                          onChange={(e) => updateCustomer(customer.id, "purchaseAmount", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Visit Frequency</Label>
                        <Select onValueChange={(value) => updateCustomer(customer.id, "frequency", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="How often do they visit?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="daily">Daily</SelectItem>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="first-time">First Time</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2 md:col-span-2 lg:col-span-1">
                        <Label>Items Purchased</Label>
                        <Textarea
                          placeholder="e.g., Rice, Dal, Oil, Vegetables"
                          value={customer.items}
                          onChange={(e) => updateCustomer(customer.id, "items", e.target.value)}
                          className="min-h-[80px]"
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <div className="flex justify-end gap-4 pt-4">
                  <Link href="/dashboard">
                    <Button variant="outline">Cancel</Button>
                  </Link>
                  <Button type="submit">Submit Data & Generate Insights</Button>
                </div>
              </CardContent>
            </Card>
          </form>

          {/* Data Privacy Notice */}
          <Card className="mt-6">
            <CardContent className="pt-6">
              <div className="text-sm text-gray-600">
                <h4 className="font-medium mb-2">Data Privacy & Security</h4>
                <p>
                  Your customer data is encrypted and stored securely. We only use this information to generate
                  personalized business insights and recommendations. Customer names are optional and can be anonymized
                  for privacy.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
