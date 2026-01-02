"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, Mail, Phone } from "lucide-react"
// Triggering a new Vercel deployment
interface Inquiry {
  _id: string
  name: string
  email: string
  phone: string
  destination: string
  educationLevel: string
  course: string
  message: string
  referredBy?: string
  referrerPhone?: string
  status: "pending" | "done"
  comments: Array<{ text: string; timestamp: string }>
  createdAt: string
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null)
  const [commentText, setCommentText] = useState("")
  const [filter, setFilter] = useState<"all" | "pending" | "done">("all")
  const [loading, setLoading] = useState(false)

  // Fetch inquiries when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchInquiries()
    }
  }, [isAuthenticated])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      if (response.ok) {
        setIsAuthenticated(true)
      } else {
        alert("Invalid credentials. Use team.goadmit@gmail.com")
      }
    } catch (error) {
      console.error("[v0] Login error:", error)
      alert("Login failed")
    } finally {
      setLoading(false)
    }
  }

  const fetchInquiries = async () => {
    try {
      const response = await fetch("/api/inquiries")
      if (response.ok) {
        const data = await response.json()
        setInquiries(data)
      }
    } catch (error) {
      console.error("[v0] Fetch inquiries error:", error)
    }
  }

  const updateStatus = async (inquiryId: string, newStatus: "pending" | "done") => {
    try {
      const response = await fetch("/api/inquiries/update-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inquiryId, status: newStatus }),
      })

      if (response.ok) {
        fetchInquiries()
        if (selectedInquiry && selectedInquiry._id === inquiryId) {
          setSelectedInquiry((prev) => (prev ? { ...prev, status: newStatus } : null))
        }
      }
    } catch (error) {
      console.error("[v0] Update status error:", error)
    }
  }

  const addComment = async () => {
    if (!selectedInquiry || !commentText.trim()) return

    try {
      const response = await fetch("/api/inquiries/add-comment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inquiryId: selectedInquiry._id, comment: commentText }),
      })

      if (response.ok) {
        setCommentText("")
        fetchInquiries()
        const updated = inquiries.find((i) => i._id === selectedInquiry._id)
        if (updated) setSelectedInquiry(updated)
      }
    } catch (error) {
      console.error("[v0] Add comment error:", error)
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setEmail("")
    setPassword("")
    setInquiries([])
    setSelectedInquiry(null)
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Header />
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>Access the GoAdmit admin dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="team.goadmit@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-4">Admin Email: team.goadmit@gmail.com</p>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  const filteredInquiries = inquiries.filter((inquiry) => {
    if (filter === "all") return true
    return inquiry.status === filter
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage student inquiries</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Inquiries List */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Inquiries</CardTitle>
                <div className="flex gap-2 mt-4">
                  {(["all", "pending", "done"] as const).map((status) => (
                    <Button
                      key={status}
                      variant={filter === status ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilter(status)}
                    >
                      {status === "all" ? "All" : status === "pending" ? "Pending" : "Done"}
                    </Button>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-3 max-h-[600px] overflow-y-auto">
                {filteredInquiries.map((inquiry) => (
                  <div
                    key={inquiry._id}
                    onClick={() => setSelectedInquiry(inquiry)}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedInquiry?._id === inquiry._id
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">{inquiry.name}</p>
                        <p className="text-sm opacity-75">{inquiry.email}</p>
                      </div>
                      <Badge variant={inquiry.status === "done" ? "default" : "secondary"}>{inquiry.status}</Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Selected Inquiry Details */}
          <div className="lg:col-span-2">
            {selectedInquiry ? (
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{selectedInquiry.name}</CardTitle>
                      <CardDescription>
                        Applied on {new Date(selectedInquiry.createdAt).toLocaleDateString()}
                      </CardDescription>
                    </div>
                    <Badge variant={selectedInquiry.status === "done" ? "default" : "secondary"}>
                      {selectedInquiry.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Contact Information */}
                  <div className="space-y-3">
                    <h3 className="font-semibold">Contact Information</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <a href={`mailto:${selectedInquiry.email}`} className="text-primary hover:underline">
                          {selectedInquiry.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <a href={`tel:${selectedInquiry.phone}`} className="text-primary hover:underline">
                          {selectedInquiry.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Application Details */}
                  <div className="space-y-3">
                    <h3 className="font-semibold">Application Details</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Destination</p>
                        <p className="font-medium">{selectedInquiry.destination}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Education Level</p>
                        <p className="font-medium">{selectedInquiry.educationLevel}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-muted-foreground">Course of Interest</p>
                        <p className="font-medium">{selectedInquiry.course}</p>
                      </div>
                    </div>
                  </div>

                  {/* Referral Information */}
                  {selectedInquiry.referredBy && (
                    <div className="space-y-3 border-t pt-4">
                      <h3 className="font-semibold">Referral Information</h3>
                      <div className="text-sm space-y-2">
                        <div>
                          <p className="text-muted-foreground">Referred By</p>
                          <p className="font-medium">{selectedInquiry.referredBy}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Referrer Phone</p>
                          <p className="font-medium">{selectedInquiry.referrerPhone}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Message */}
                  <div className="space-y-3 border-t pt-4">
                    <h3 className="font-semibold">Message</h3>
                    <p className="text-sm text-muted-foreground">{selectedInquiry.message}</p>
                  </div>

                  {/* Status Management */}
                  <div className="space-y-3 border-t pt-4">
                    <h3 className="font-semibold">Status</h3>
                    <div className="flex gap-2">
                      <Button
                        variant={selectedInquiry.status === "pending" ? "default" : "outline"}
                        onClick={() => updateStatus(selectedInquiry._id, "pending")}
                        className="gap-2"
                      >
                        <Clock className="w-4 h-4" />
                        Pending
                      </Button>
                      <Button
                        variant={selectedInquiry.status === "done" ? "default" : "outline"}
                        onClick={() => updateStatus(selectedInquiry._id, "done")}
                        className="gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        Done
                      </Button>
                    </div>
                  </div>

                  {/* Comments */}
                  <div className="space-y-3 border-t pt-4">
                    <h3 className="font-semibold">Comments</h3>
                    <div className="space-y-3 max-h-48 overflow-y-auto">
                      {selectedInquiry.comments.map((comment, idx) => (
                        <div key={idx} className="bg-muted p-3 rounded-lg text-sm">
                          <p className="text-muted-foreground text-xs mb-1">
                            {new Date(comment.timestamp).toLocaleString()}
                          </p>
                          <p>{comment.text}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Textarea
                        placeholder="Add a comment..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        className="min-h-20"
                      />
                      <Button onClick={addComment} disabled={!commentText.trim()}>
                        Add
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="flex items-center justify-center h-96">
                <p className="text-muted-foreground">Select an inquiry to view details</p>
              </Card>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
