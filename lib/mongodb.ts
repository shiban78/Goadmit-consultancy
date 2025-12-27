import { MongoClient } from "mongodb"

const mongoUri = process.env.MONGODB_URI

let cachedClient: MongoClient | null = null

export async function getMongoClient() {
  if (!mongoUri) {
    throw new Error("MONGODB_URI is not configured")
  }

  if (cachedClient) {
    return cachedClient
  }

  try {
    cachedClient = new MongoClient(mongoUri)
    await cachedClient.connect()
    console.log("[v0] Connected to MongoDB")
    return cachedClient
  } catch (error) {
    console.error("[v0] MongoDB connection failed:", error)
    throw error
  }
}

export async function closeMongoClient() {
  if (cachedClient) {
    await cachedClient.close()
    cachedClient = null
  }
}
