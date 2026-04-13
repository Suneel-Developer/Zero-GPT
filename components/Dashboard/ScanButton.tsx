"use client"

import Image from "next/image"
import type React from "react"
import { useRouter } from "next/navigation"
import type { ScanTabsProps } from "../types/scanTabs"

const ScanButton: React.FC<ScanTabsProps> = ({ onScan, isScanning, textLength }) => {
    const router = useRouter()

    const handleScan = async () => {
        if (onScan) {
            await onScan()
            const scanId = Date.now().toString()
            router.push(`/results/${scanId}`)
        }
    }

    return (
        <div>
            <button
                onClick={handleScan}
                disabled={isScanning || textLength < 250}
                className="px-5 group flex items-center hover:border justify-between w-full h-[45px] sm:h-[52px] bg-main-clr hover:bg-white hover:text-black transition-all duration-300 rounded-[30px] text-white text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ boxShadow: "0px 2px 4px -2px #0000001A, 0px 4px 6px -1px #0000001A" }}
            >
                {isScanning ? "Scanning..." : "Scan"}
                <div className="group">
                    <Image src="/assets/dark-arrow.svg" alt="arrow" width={24} height={24} className="hidden group-hover:block" />
                    <Image src="/assets/scan-arrow.svg" alt="arrow" width={24} height={24} className="group-hover:hidden block" />
                </div>
            </button>
        </div>
    )
}

export default ScanButton

