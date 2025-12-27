import { MongoClient, ObjectId } from "mongodb"

const mongoUri = process.env.MONGODB_URI

export async function POST(request: Request) {
  if (!mongoUri) {
    return new Response(JSON.stringify({ error: "MongoDB URI not configured" }), { status: 500 })
  }

  try {
    const { inquiryId, comment } = await request.json()

    if (!inquiryId || !comment) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 })
    }

    const client = new MongoClient(mongoUri)
    await client.connect()

    const db = client.db("goadmit")
    await db.collection("inquiries").updateOne(
      { _id: new ObjectId(inquiryId) },
      {
        $push: {
          comments: {
            text: comment,
            timestamp: new Date().toISOString(),
          },
        },
      },
    )

    await client.close()

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("[v0] Add comment error:", error)
    return new Response(JSON.stringify({ error: "Failed to add comment" }), { status: 500 })
  }
}
