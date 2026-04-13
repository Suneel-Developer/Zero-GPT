export interface ScanResultProps {
    timestamp: string;
    confidence: "low" | "moderately" | "highly";
    aiProbability: number;
    classification: "human" | "ai" | "mixed";
    breakdown: {
      human: number;
      mixed: number;
      ai: number;
    };
  }
  