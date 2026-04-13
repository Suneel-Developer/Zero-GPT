"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useDocumentsStore } from '@/store/documentsStore'

interface Option {
    id: string
    label: string
}

const options: Option[] = [
    { id: "chatgpt", label: "ChatGPT" },
    { id: "claude", label: "Claude" },
    { id: "human", label: "Human" },
    { id: "ai-human", label: "AI + Human" },
]

export default function TextDetector() {
    const [text, setText] = useState<string>("")
    const [selectedOption, setSelectedOption] = useState<string | null>(null)
    const [isScanning, setIsScanning] = useState(false)
    const router = useRouter()

    const addDocument = useDocumentsStore((state) => state.addDocument)

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
    }

    const handleOptionSelect = (optionId: string) => {
        setSelectedOption(optionId)
    }

    const onScan = async () => {
        setIsScanning(true)
        
        // Generate random probabilities
        const aiProb = Math.floor(Math.random() * 100)
        const humanProb = Math.floor(Math.random() * (100 - aiProb))
        const mixedProb = 100 - aiProb - humanProb
        
        // Generate random plagiarism percentage
        const plagiarismPercentage = Math.floor(Math.random() * 100)

        // Determine result based on probabilities
        let result
        if (aiProb >= 50) {
            result = "AI Generated"
        } else if (humanProb >= 50) {
            result = "Human Written"
        } else {
            result = "Mixed Content"
        }
        
        // Create document from scan
        const newDocument = {
            id: Date.now().toString(),
            name: 'Untitled Document',
            author: 'Current User',
            created: new Date().toISOString(),
            aiResult: result,
            aiProbability: aiProb,
            humanProbability: humanProb,
            mixedProbability: mixedProb,
            plagiarism: `${plagiarismPercentage}%`,
            plagiarismLevel: getPlagiarismLevel(plagiarismPercentage),
            content: text
        }

        addDocument(newDocument)
        
        setIsScanning(false)
        router.push(`/results/${newDocument.id}`)
    }

    const getPlagiarismLevel = (percentage: number): string => {
        if (percentage < 20) return "Low"
        if (percentage < 50) return "Moderate"
        return "High"
    }

    return (
        <div className="w-full bg-white rounded-[20px] px-4 py-6 sm:p-8"
            style={{ boxShadow: "4px 4px 40px 0px #0000001A" }}>
            <h1 className="text-xl sm:text-[22px] leading-[32px] font-bold text-dark-blue">
                Was this text written by AI or a Human?
            </h1>

            <div className="mt-4 sm:mt-6 flex sm:items-center sm:flex-row flex-col gap-2 text-sm">
                <span className="text-medium-gray text-sm font-normal">Try an example:</span>
                <div className="flex flex-wrap gap-1.5">
                    {options.map((option) => (
                        <button
                            key={option.id}
                            onClick={() => handleOptionSelect(option.id)}
                            className={`px-2.5 py-2 rounded-[30px] text-sm font-normal hover:bg-light-shadow text-medium-gray transition-colors
                                ${selectedOption === option.id
                                    ? "border border-medium-shadow bg-light-shadow text-black"
                                    : "border border-medium-shadow bg-transparent"
                                }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-[19px] relative">
                <textarea
                    placeholder="Paste your text"
                    value={text}
                    onChange={handleTextChange}
                    className="w-full bg-transparent resize-none outline-none text-sm h-[200px] placeholder:text-medium-gray/60 text-dark-blue"
                />
            </div>

            <div className="text-sm font-normal text-medium-gray/60">{text.length}/250 characters</div>

            <div className="mt-4 flex justify-between sm:flex-row flex-col sm:items-center gap-4">
                <div className="flex items-center gap-3">
                    <Link
                        href="/pricing"
                        className="sm:w-fit w-full border border-gray-olive text-dark-ash-gray py-3 sm:py-2.5 hover:shadow-2xl hover:text-white transition-all duration-300 hover:bg-main-clr px-3.5 rounded-full font-medium text-base sm:text-sm leading-[16px] tracking-[0.3px]"
                    >
                        Upgrade Scan
                    </Link>
                </div>
                <div className="flex items-center justify-between gap-3 sm:w-fit w-full">
                    <button
                        onClick={onScan}
                        disabled={isScanning || text.length < 250}
                        className="sm:w-fit w-full px-6 h-[46px] bg-main-clr hover:bg-white hover:text-dark-blue border hover:shadow-2xl transition-all duration-500 text-white rounded-[30px] text-sm font-normal flex items-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isScanning ? "Scanning..." : "Scan for AI"}
                    </button>
                </div>
            </div>
        </div>
    )
}


