import { type NextRequest, NextResponse } from "next/server"

// Admin credentials - in production use environment variables
const ADMIN_EMAIL = "team.goadmit@gmail.com"
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "GoAdmit@2025"

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    // Validate credentials
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const response = NextResponse.json({ success: true })
      // Set authentication cookie
      response.cookies.set("admin_authenticated", "true", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 86400, // 24 hours
      })
      return response
    }

    return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 })
  } catch (error) {
    console.error("[v0] Login error:", error)
    return NextResponse.json({ error: "Login failed" }, { status: 500 })
  }
}
