import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = await request.json()
  const { text, scanType } = body

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // Mock scan logic (replace with actual AI/ML model in production)
  const aiProbability = Math.random() * 100
  const classification = aiProbability > 50 ? "AI Generated" : "Human"
  const confidence = aiProbability > 80 || aiProbability < 20 ? "highly" : "moderately"

  const result = {
    timestamp: new Date().toISOString(),
    confidence,
    aiProbability: Math.round(aiProbability),
    classification,
    breakdown: {
      human: Math.round(100 - aiProbability),
      mixed: Math.round(aiProbability * 0.2),
      ai: Math.round(aiProbability * 0.8),
    },
    scanType,
  }

  return NextResponse.json(result)
}

