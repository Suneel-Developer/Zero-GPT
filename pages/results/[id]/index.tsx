"use client"

import React, { useState, useRef, useEffect } from "react"
import { useParams } from "next/navigation"
import Header from "@/components/Dashboard/Header"
import Sidebar from "@/components/Dashboard/Sidebar"
import ADS from "@/components/ADS"
import { ScanResult } from "@/components/Dashboard/ScanResult"
import type { ScanResultProps } from "@/components/types/scanResult"
import DashboardContent from "@/components/Dashboard/DashboardContent"
import Link from "next/link"
import Image from "next/image"
import ScanButton from "@/components/Dashboard/ScanButton"
import TextDetector from "@/components/Home/TextDetector"
import { useDocumentsStore } from '@/store/documentsStore'

const ScanResultPage = () => {
  const params = useParams()
  const id = (params?.id as string) || "unknown"

  // Get document from store
  const documents = useDocumentsStore((state) => state.documents)
  const currentDocument = documents.find(doc => doc.id === id)

  // Create scan results from document
  const scanResults = currentDocument ? {
    timestamp: currentDocument.created,
    confidence: "highly" as const,
    aiProbability: currentDocument.aiProbability,
    classification: currentDocument.aiResult === "AI Generated" ? "ai" : "human" as const,
    breakdown: {
      human: 100 - currentDocument.aiProbability,
      mixed: 0,
      ai: currentDocument.aiProbability
    }
  } as const : undefined

  const [showScanTabs, setShowScanTabs] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)
  const [isScanning, setIsScanning] = useState(false)
  const [text, setText] = useState("")

  const menuRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setShowScanTabs(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  const handleScan = async () => {
    if (!text.trim()) return

    setIsScanning(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsScanning(false)
  }

  return (
    <div className="w-full flex">
      <div
        className="w-full flex flex-col"
        style={{
          backgroundImage: "url('/assets/dashboard-bg.png')",
          backgroundPosition: "top",
        }}
      >
        <Header />
        <div className="lg:hidden block">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 mt-2 px-3.5 text-main-clr text-lg font-work-sans"
          >
            <Image
              src="/assets/arrow-left.svg"
              alt="Back"
              width={8}
              height={8}
              className="rotate-180"
            />
            Back
          </Link>
        </div>
        <div className="py-4 md:py-6 flex items-start justify-between gap-3.5 sm:gap-5">
          <div className="lg:block hidden">
            <Sidebar />
          </div>
          <div className="w-full flex items-start xl:flex-row flex-col lg:pl-0 px-3.5 xl:pr-0 xl:gap-0 gap-5">
              <TextDetector/>
            {/* <DashboardContent onScan={handleScan} isScanning={isScanning} text={text} setText={setText} /> */}
            <div className="w-full xl:w-fit xl:px-3.5">
              {scanResults && <ScanResult {...scanResults} />}
              {/* <div className="mt-4 lg:block hidden"> */}
                {/* <ScanButton onScan={handleScan} isScanning={isScanning} textLength={text.length} scanResults={null} /> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScanResultPage

