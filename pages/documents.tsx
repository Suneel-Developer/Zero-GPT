import type React from "react"
import { useState } from "react"
import ADS from "@/components/ADS"
import Sidebar from "@/components/Dashboard/Sidebar"
import { DocumentTable } from "@/components/Documents/DocumentTable"
import { Dropdown } from "@/components/Documents/Dropdown"
import { Pagination } from "@/components/Documents/Pagination"
import { FolderPlus, Search } from "lucide-react"
import ActionButtons from "@/components/Documents/ActionButtons"
import Header from "@/components/Dashboard/Header"
import { useDocumentsStore } from '@/store/documentsStore'

type Document = {
  name: string
  author: string
  created: string
  aiResult: string
  aiProbability: number
  plagiarism: string
}


const Documents: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedScanType, setSelectedScanType] = useState("All")
  const [selectedCreated, setSelectedCreated] = useState("Newest")
  const [selectedAIResult, setSelectedAIResult] = useState("All")

  // Get documents from store
  const documents = useDocumentsStore((state) => state.documents)

  const filteredDocuments = documents
    .filter(
      (doc) =>
        doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.author.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .filter((doc) => selectedAIResult === "All" || doc.aiResult === selectedAIResult)
    .sort((a, b) =>
      selectedCreated === "Newest"
        ? new Date(b.created).valueOf() - new Date(a.created).valueOf()
        : new Date(a.created).valueOf() - new Date(b.created).valueOf(),
    )

  const totalPages = Math.ceil(filteredDocuments.length / rowsPerPage)
  const paginatedDocuments = filteredDocuments.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)

  return (
    <div className="w-full flex">
      <div className="w-full flex items-start flex-col">
        <div className="w-full mb-6">
          <Header />
        </div>
        <div className="w-full flex items-start">
          <Sidebar />
          <div className="w-full px-3.5 lg:px-5 overflow-x-auto">
            <h2 className="pb-6 md:pb-10 font-semibold text-xl sm:text-3xl flex items-center gap-3">
              <FolderPlus className="h-6 w-6 sm:w-8 sm:h-8" /> Documents
            </h2>
            <div className="flex md:items-center md:flex-row flex-col justify-between gap-4 mb-6">
              <div className="relative w-full md:max-w-xs lg:max-w-md">
                <input
                  type="text"
                  placeholder="Search name or author"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className=" w-full px-4 py-2 pl-10 rounded-md border border-[#727172] bg-white shadow-sm outline-none"
                />
                <Search className="absolute left-3 top-2.5 text-charcoal" size={20} />
              </div>
              <ActionButtons />
            </div>
            <div className="flex gap-3 mb-4 flex-wrap">
              <Dropdown label="Scan type" options={["All", "PDF", "PDF"]} onSelect={setSelectedScanType} />
              <Dropdown label="Created" options={["Newest", "Oldest"]} onSelect={setSelectedCreated} />
              <Dropdown label="AI Result" options={["All", "Human Written", "AI Generated", "Mixed Content"]} onSelect={setSelectedAIResult} />
            </div>
            <div className="overflow-x-auto">
              <DocumentTable documentsResult={paginatedDocuments} />
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              rowsPerPage={rowsPerPage}
              onRowsChange={setRowsPerPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Documents

