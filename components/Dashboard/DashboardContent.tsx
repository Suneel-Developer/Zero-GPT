"use client"

import Image from "next/image"
import type React from "react"
import { useState, useRef } from "react"
import { Menu, X } from "lucide-react"
import ScanTabs from "./ScanTabs"
import ScanButton from "./ScanButton"
import Link from "next/link"

interface DashboardContentProps {
  onScan: () => Promise<void>
  isScanning: boolean
  text: string
  setText: (text: string) => void
}

const DashboardContent: React.FC<DashboardContentProps> = ({ onScan, isScanning, text, setText }) => {
  const [showScanTabs, setShowScanTabs] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleToggleScanTabs = (event: React.MouseEvent) => {
    event.stopPropagation()
    setShowScanTabs((prevState) => !prevState)
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFileName(file.name)
    }
  }

  const handleButtonClick = () => {
    const inputElement = document.getElementById("file-input") as HTMLInputElement
    if (inputElement) {
      inputElement.click()
    }
  }

  return (
    <div className="lg:mr-0 mr-0 sm:mr-4 relative pb-20 w-full bg-white border border-[#E5E7EB] rounded-xl">
      <div
        className="flex items-center justify-between py-3.5 sm:py-5 px-3.5 sm:px-8 w-full border-b bg-[#FFFFFF01]"
        style={{ boxShadow: "0px 4px 4px -4px #0000001A" }}
      >
        <button
          onClick={handleButtonClick}
          className="group hover:shadow-2xl hover:bg-main-clr hover:text-white transition-all duration-300 border border-dark-gray bg-white w-[135px] sm:w-[150px] h-10 sm:h-[46px] rounded-full flex items-center justify-center gap-1.5 text-dark-ash-gray font-semibold text-sm tracking-[0.3px]"
        >
          <Image
            src="/assets/upload-file-white.svg"
            alt="upload-file"
            width={16}
            height={20}
            className="hidden group-hover:block"
          />
          <Image
            src="/assets/upload-file.svg"
            alt="upload-file"
            width={16}
            height={20}
            className="group-hover:hidden block"
          />
          Upload file
        </button>
        <input id="file-input" type="file" onChange={handleFileChange} className="hidden" />

        <div className="relative lg:hidden flex gap-2 sm:gap-5 items-center" ref={menuRef}>
          <button className="lg:hidden flex" onClick={handleToggleScanTabs}>
            {showScanTabs ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <div className="absolute top-9 -right-2">
            {showScanTabs && <ScanTabs onScan={onScan} isScanning={isScanning} textLength={text.length} scanResults={null} />}
          </div>
        </div>
      </div>

      <div className="px-3.5 sm:px-8 py-4 mb-16 lg:mb-0">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter the text you want to scan"
          className="w-full h-[400px] lg:h-[410px] outline-none resize-none placeholder:text-gray-olive text-sm font-normal leading-[24px] tracking-[0.3px]"
        />
      </div>

      <div className="mt-10 w-full absolute bottom-[15px] sm:bottom-[30px] px-3.5 sm:px-8 flex md:flex-row flex-col gap-3.5 sm:items-center justify-between">
        <h3 className="text-dark-ash-gray text-sm font-medium">
          <span>{text.length}</span>/<span>250</span> character minimum
        </h3>
        <div className="lg:hidden block w-full md:w-[200px] ">
          <ScanButton onScan={onScan} isScanning={isScanning} textLength={text.length} scanResults={null} />
        </div>
        <Link href='/pricing' className="border border-gray-olive text-dark-ash-gray py-3 sm:py-2.5 hover:shadow-2xl hover:text-white transition-all duration-300 hover:bg-main-clr px-3.5 rounded-full font-medium text-base sm:text-sm leading-[16px] tracking-[0.3px]">
          Upgrade Scan
        </Link>
      </div>
    </div>
  )
}

export default DashboardContent

