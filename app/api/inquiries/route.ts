import { getMongoClient } from "@/lib/mongodb"

export async function GET() {
  try {
    const client = await getMongoClient()
    const db = client.db("goadmit")

    const inquiries = await db.collection("inquiries").find({}).sort({ createdAt: -1 }).toArray()
    console.log("[v0] Retrieved inquiries:", inquiries.length)

    return new Response(JSON.stringify(inquiries), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("[v0] Get inquiries error:", error)
    return new Response(JSON.stringify({ error: "Failed to fetch inquiries", details: String(error) }), { status: 500 })
  }
}
