"use client"

import type React from "react"
import { useState, useRef } from "react"
import ADS from "@/components/ADS"
import Header from "@/components/Dashboard/Header"
import Sidebar from "@/components/Dashboard/Sidebar"
import ScanTabs from "@/components/Dashboard/ScanTabs"
import DashboardContent from "@/components/Dashboard/DashboardContent"
import TextDetector from "@/components/Home/TextDetector"

const Dashboard = () => {
    const [isScanning, setIsScanning] = useState(false)
    const [text, setText] = useState("")

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
                <div className="py-6 flex items-start justify-between gap-3.5 sm:gap-5">
                    <Sidebar />
                    <TextDetector/>
                    {/* <DashboardContent onScan={handleScan} isScanning={isScanning} text={text} setText={setText} /> */}
                    <div className="lg:block hidden">
                        <ScanTabs onScan={handleScan} isScanning={isScanning} textLength={text.length} scanResults={null} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

