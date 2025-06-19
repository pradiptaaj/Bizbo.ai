"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { ArrowLeft, BarChart3, Database, Users, FileText, ArrowRight, Check, X, Plus } from "lucide-react"

export default function ResearchPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [qualitativeFile, setQualitativeFile] = useState<File | null>(null)

  // Secondary research completion tracking
  const [researchInsight, setResearchInsight] = useState("")
  const [researchSource, setResearchSource] = useState("")
  const [researchCategory, setResearchCategory] = useState("")
  const [addedInsights, setAddedInsights] = useState<any[]>([])

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleQualitativeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setQualitativeFile(file)
    }
  }

  const handleAddInsight = () => {
    if (researchInsight.trim()) {
      const newInsight = {
        id: Date.now(),
        insight: researchInsight,
        source: researchSource,
        category: researchCategory,
      }
      setAddedInsights([...addedInsights, newInsight])

      // Reset form
      setResearchInsight("")
      setResearchSource("")
      setResearchCategory("")
    }
  }

  const isSecondaryResearchComplete = addedInsights.length > 0

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
            <h1 className="text-2xl font-bold text-gray-900">Market Research Engine</h1>
            <p className="text-gray-600">Conduct comprehensive market research</p>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Step 1: Market Research Tool Landing */}
        {currentStep === 1 && (
          <div className="max-w-5xl mx-auto">
            {/* Top Navigation Steps */}
            <div className="flex justify-center items-center mb-16">
              <div className="flex items-center space-x-16">
                <div className="flex items-center">
                  <span className="text-2xl font-light text-gray-900 mr-3">1</span>
                  <span className="text-xl text-gray-900">Secondary Research</span>
                </div>
                <div className="w-24 h-px bg-gray-300"></div>
                <div className="flex items-center">
                  <span className="text-2xl font-light text-gray-400 mr-3">2</span>
                  <span className="text-xl text-gray-400">Primary Research</span>
                </div>
                <div className="w-24 h-px bg-gray-300"></div>
                <div className="flex items-center">
                  <span className="text-2xl font-light text-gray-400 mr-3">3</span>
                  <span className="text-xl text-gray-400">Report</span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="text-center mb-16">
              {/* Chart Icon */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <BarChart3 className="h-12 w-12 text-blue-600" />
                  <div className="absolute -top-1 -left-1">
                    <div className="flex space-x-1">
                      <div className="w-1 h-3 bg-red-500 rounded-sm"></div>
                      <div className="w-1 h-4 bg-green-500 rounded-sm"></div>
                      <div className="w-1 h-2 bg-blue-500 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-5xl font-bold text-gray-900 mb-8">Market Research Tool</h1>

              {/* Description */}
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-16">
                Conduct comprehensive market research in two phases: secondary research from existing sources, followed
                by primary research with direct customer insights.
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-2 gap-16 max-w-4xl mx-auto">
              {/* Secondary Research */}
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Database className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Secondary Research</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Gather quantitative insights from existing reports, studies, and industry data
                </p>
                <Button
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg py-4 rounded-lg font-medium"
                  onClick={nextStep}
                >
                  Start Secondary Research
                  <Check className="h-5 w-5 ml-2" />
                </Button>
              </div>

              {/* Primary Research */}
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-400 mb-4">Primary Research</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Collect qualitative data through surveys, interviews, and observations
                </p>
                <Button
                  className="w-full bg-gray-300 text-gray-500 text-lg py-4 rounded-lg font-medium cursor-not-allowed"
                  disabled
                >
                  Start Primary Research
                  <X className="h-5 w-5 ml-2" />
                </Button>
                <p className="text-gray-400 text-sm mt-3">Complete secondary research first</p>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Secondary Research */}
        {currentStep === 2 && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border">
              {/* Header */}
              <div className="text-center py-8 border-b">
                <div className="flex justify-center mb-4">
                  <Database className="h-12 w-12 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Secondary Research</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Gather quantitative insights from existing reports, studies, and industry data to build your research
                  foundation.
                </p>
              </div>

              <div className="p-8">
                {/* Add Research Insight Section */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Add Research Insight</h3>
                  <p className="text-gray-600 mb-6">Enter statistics, trends, or insights from trusted sources</p>

                  <div className="space-y-6">
                    <div>
                      <Textarea
                        placeholder="Enter your research insight or statistic..."
                        value={researchInsight}
                        onChange={(e) => setResearchInsight(e.target.value)}
                        className="min-h-[120px] text-base"
                      />
                    </div>

                    <div>
                      <Input
                        placeholder="Source (e.g., McKinsey, Gartner, Industry Report)"
                        value={researchSource}
                        onChange={(e) => setResearchSource(e.target.value)}
                        className="text-base"
                      />
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-gray-700 mb-2 block">Research Category</Label>
                      <Select value={researchCategory} onValueChange={setResearchCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="market-analysis">Market Analysis</SelectItem>
                          <SelectItem value="competitor-research">Competitor Research</SelectItem>
                          <SelectItem value="industry-trends">Industry Trends</SelectItem>
                          <SelectItem value="customer-tracking">Customer Tracking Issues</SelectItem>
                          <SelectItem value="financial-data">Financial Data</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      onClick={handleAddInsight}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                      disabled={!researchInsight.trim()}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Insight
                    </Button>
                  </div>
                </div>

                {/* Added Insights Display */}
                {addedInsights.length > 0 && (
                  <div className="mb-8 p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Added Insights ({addedInsights.length})</h4>
                    <div className="space-y-2">
                      {addedInsights.map((insight) => (
                        <div key={insight.id} className="text-sm text-green-700 bg-white p-2 rounded border">
                          <strong>{insight.category}:</strong> {insight.insight.substring(0, 100)}...
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between pt-6 border-t">
                  <Button variant="outline" onClick={prevStep}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Home
                  </Button>
                  <Button
                    className={
                      isSecondaryResearchComplete
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }
                    onClick={isSecondaryResearchComplete ? nextStep : undefined}
                    disabled={!isSecondaryResearchComplete}
                  >
                    Continue to Primary Research
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Primary Research */}
        {currentStep === 3 && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border">
              {/* Header */}
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-900 mb-1">Primary Research</h2>
                <p className="text-gray-600 text-sm">
                  Collect qualitative insights through customer interviews, surveys, and direct feedback
                </p>
              </div>

              <div className="p-6">
                {/* Progress Section */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Customer Insights (2)</span>
                    <span className="text-sm text-gray-500">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: "78%" }}></div>
                  </div>
                </div>

                {/* Customer Insights Form */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Insights</h3>

                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-700">Research Method</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select Method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="survey">Customer Survey</SelectItem>
                          <SelectItem value="interview">One-on-One Interview</SelectItem>
                          <SelectItem value="focus-group">Focus Group</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-gray-700">Target Audience</Label>
                      <Input className="mt-1" placeholder="e.g., Existing customers, Potential customers" />
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-gray-700">Key Questions Asked</Label>
                      <Textarea
                        className="mt-1"
                        rows={3}
                        placeholder="List the main questions you asked customers..."
                      />
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-gray-700">Customer Responses & Insights</Label>
                      <Textarea
                        className="mt-1"
                        rows={4}
                        placeholder="Summarize customer responses and key insights..."
                      />
                    </div>
                  </div>
                </div>

                {/* File Upload Section */}
                <div className="mb-6 pt-4 border-t">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🔎 Primary Research</h3>
                  <div className="space-y-4">
                    <input
                      type="file"
                      id="qualitative-upload"
                      accept=".txt,.docx,.csv"
                      onChange={handleQualitativeUpload}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById("qualitative-upload")?.click()}
                      className="w-full"
                    >
                      📥 Upload Qualitative Dataset
                    </Button>
                    {qualitativeFile && (
                      <div className="text-sm text-green-600 bg-green-50 p-2 rounded">
                        File uploaded: {qualitativeFile.name}
                      </div>
                    )}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between pt-4 border-t">
                  <Button variant="outline" onClick={prevStep}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700" onClick={nextStep}>
                    Generate Report
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Research Report */}
        {currentStep === 4 && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border">
              {/* Header */}
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">Research Report</h2>
                    <p className="text-gray-600 text-sm">
                      Comprehensive analysis and insights from your market research
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <div className="text-sm text-gray-500">Complete</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Report Content Grid */}
                <div className="grid grid-cols-2 gap-8">
                  {/* Left Column - Charts */}
                  <div className="space-y-6">
                    {/* Research Distribution Chart */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Research Distribution</h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center justify-center h-48">
                          {/* Pie Chart Representation */}
                          <div className="relative w-32 h-32">
                            <div className="absolute inset-0 rounded-full bg-blue-500"></div>
                            <div
                              className="absolute inset-0 rounded-full bg-green-500"
                              style={{
                                background: `conic-gradient(#3b82f6 0deg 180deg, #10b981 180deg 270deg, #f59e0b 270deg 360deg)`,
                              }}
                            ></div>
                            <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                              <span className="text-sm font-semibold">100%</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center space-x-4 mt-4">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
                            <span className="text-sm">Secondary (50%)</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
                            <span className="text-sm">Primary (35%)</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-yellow-500 rounded mr-2"></div>
                            <span className="text-sm">Analysis (15%)</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Insights by Category */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Insights by Category</h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Market Trends</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                              </div>
                              <span className="text-sm font-medium">85%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Customer Behavior</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div className="bg-green-600 h-2 rounded-full" style={{ width: "72%" }}></div>
                              </div>
                              <span className="text-sm font-medium">72%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Competitive Analysis</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div className="bg-purple-600 h-2 rounded-full" style={{ width: "68%" }}></div>
                              </div>
                              <span className="text-sm font-medium">68%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Key Takeaways */}
                  <div className="space-y-6">
                    {/* Key Takeaways */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Takeaways</h3>
                      <div className="space-y-4">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <h4 className="font-semibold text-green-800 mb-2">Market Opportunity</h4>
                          <p className="text-sm text-green-700">
                            Strong demand identified for organic and premium tea products in urban markets
                          </p>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-800 mb-2">Customer Preference</h4>
                          <p className="text-sm text-blue-700">
                            Quality and health benefits are primary drivers over price considerations
                          </p>
                        </div>
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                          <h4 className="font-semibold text-purple-800 mb-2">Market Gap</h4>
                          <p className="text-sm text-purple-700">
                            Limited availability of convenient, ready-to-drink premium tea options
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* AI Research Findings */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Research Findings</h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Data Quality Score</span>
                            <span className="text-sm font-semibold">92%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Research Completeness</span>
                            <span className="text-sm font-semibold">85%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Confidence Level</span>
                            <span className="text-sm font-semibold">High</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between pt-6 border-t mt-8">
                  <Button variant="outline" onClick={prevStep}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                  <div className="space-x-2">
                    <Button variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Export PDF
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700">Start New Research</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
