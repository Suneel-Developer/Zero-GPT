"use client"

import Image from "next/image"
import type React from "react"
import { useState } from "react"
import type { ScanTabsProps } from "../types/scanTabs"

const ScanTabs: React.FC<ScanTabsProps> = () => {
    const [activeTab, setActiveTab] = useState("basic")

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId)
    }

    return (
        <div className="mr-0 lg:mr-6">
            <div
                className="mb-4 space-y-2 sm:space-y-4 min-w-[250px] lg:min-w-[284px] bg-white border border-[#E5E7EB] rounded-2xl px-2 sm:px-3.5 py-3.5 sm:py-5"
                style={{ boxShadow: "0px 2px 4px -2px #0000001A, 0px 4px 6px -1px #0000001A" }}
            >
                <button
                    className={`w-full flex items-center gap-2 h-10 sm:h-[44px] rounded-[25px] px-3 hover:bg-[#C5EBF9] transition-all duration-300 ${activeTab === "basic" ? "bg-[#C5EBF9]" : "bg-white"}`}
                    onClick={() => handleTabClick("basic")}
                >
                    <Image src="/assets/basic-scan.svg" alt="basic-scan" width={24} height={24} />
                    <h3 className="text-dark-ash-gray text-base font-medium tracking-[0.3px]">Basic scan</h3>
                </button>
                <button
                    className={`w-full flex items-center gap-2 h-10 sm:h-[44px] rounded-[25px] px-3 hover:bg-[#C5EBF9] transition-all duration-300 ${activeTab === "chatgpt" ? "bg-[#C5EBF9]" : "bg-white"}`}
                    onClick={() => handleTabClick("chatgpt")}
                >
                    <Image src="/assets/chat-gpt-detector.svg" alt="basic-scan" width={24} height={24} />
                    <h3 className="text-dark-ash-gray text-base font-medium tracking-[0.3px]">Chat GPT detector</h3>
                </button>
                <button
                    className={`w-full flex items-center gap-2 h-10 sm:h-[44px] rounded-[25px] px-3 hover:bg-[#C5EBF9] transition-all duration-300 ${activeTab === "plagiarism" ? "bg-[#C5EBF9]" : "bg-white"}`}
                    onClick={() => handleTabClick("plagiarism")}
                >
                    <Image src="/assets/plagiarism-scan.svg" alt="basic-scan" width={24} height={24} />
                    <h3 className="text-dark-ash-gray text-base font-medium tracking-[0.3px]">Plagiarism scan</h3>
                </button>
                <button
                    className={`w-full flex items-center gap-2 h-10 sm:h-[44px] rounded-[25px] px-3 hover:bg-[#C5EBF9] transition-all duration-300 ${activeTab === "writing" ? "bg-[#C5EBF9]" : "bg-white"}`}
                    onClick={() => handleTabClick("writing")}
                >
                    <Image src="/assets/writing-feedback.svg" alt="basic-scan" width={24} height={24} />
                    <h3 className="text-dark-ash-gray text-base font-medium tracking-[0.3px]">Writing feedback</h3>
                </button>
                <button
                    className={`w-full flex items-center gap-2 h-10 sm:h-[44px] rounded-[25px] px-3 hover:bg-[#C5EBF9] transition-all duration-300 ${activeTab === "vocabulary" ? "bg-[#C5EBF9]" : "bg-white"}`}
                    onClick={() => handleTabClick("vocabulary")}
                >
                    <Image src="/assets/ai-vocabulary.svg" alt="basic-scan" width={36} height={36} className="-ml-1" />
                    <h3 className="text-dark-ash-gray text-base font-medium tracking-[0.3px]">AI Vocabulary</h3>
                </button>
                <button
                    className={`w-full flex items-center gap-2 h-10 sm:h-[44px] rounded-[25px] px-3 hover:bg-[#C5EBF9] transition-all duration-300 ${activeTab === "sources" ? "bg-[#C5EBF9]" : "bg-white"}`}
                    onClick={() => handleTabClick("sources")}
                >
                    <Image src="/assets/search-sources.svg" alt="basic-scan" width={36} height={36} className="-ml-1" />
                    <h3 className="text-dark-ash-gray text-base font-medium tracking-[0.3px]">Search Sources</h3>
                </button>
            </div>
        </div>
    )
}

export default ScanTabs

