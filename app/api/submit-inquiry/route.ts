import { NextResponse } from "next/server"
import { getMongoClient } from "@/lib/mongodb"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, phone, destination, educationLevel, course, message, referredBy, referrerPhone } = data

    // Validate required fields
    if (!name || !email || !phone || !destination || !educationLevel) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    try {
      const client = await getMongoClient()
      const db = client.db("goadmit")
      const result = await db.collection("inquiries").insertOne({
        name,
        email,
        phone,
        destination,
        educationLevel,
        course: course || "Not specified",
        message: message || "No message",
        referredBy: referredBy || "None",
        referrerPhone: referrerPhone || "N/A",
        status: "pending",
        comments: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      console.log("[v0] Inquiry saved to MongoDB:", result.insertedId)
    } catch (mongoError) {
      console.error("[v0] MongoDB save error:", mongoError)
      // Continue even if MongoDB fails
    }

    // Also send to Google Sheets if configured
    const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL
    if (GOOGLE_SHEETS_URL) {
      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          name,
          email,
          phone,
          destination,
          educationLevel,
          course: course || "Not specified",
          message: message || "No message",
          referredBy: referredBy || "None",
          referrerPhone: referrerPhone || "N/A",
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Error submitting inquiry:", error)
    return NextResponse.json({ error: "Failed to submit inquiry" }, { status: 500 })
  }
}
