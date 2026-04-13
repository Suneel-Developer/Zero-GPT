"use client"

import { MoreHorizontal, ChevronDown } from "lucide-react"
import { type Document } from "@/store/documentsStore"

interface DocumentTableProps {
  documentsResult: Document[]
}

export const DocumentTable: React.FC<DocumentTableProps> = ({ documentsResult }) => {
  return (
    <div className="w-full rounded-lg border bg-white shadow-sm overflow-x-auto">
      <table className="w-full text-sm xl:text-wrap text-nowrap">
        <thead>
          <tr className="border-b">
            <th className="h-12 w-12 px-2">
              <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300" />
            </th>
            <th className="h-12 px-2 text-left">
              <button className="inline-flex items-center text-sm font-medium text-gray-500 focus:text-gray-700">
                Name
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </th>
            <th className="h-12 px-2 text-left">
              <button className="inline-flex items-center text-sm font-medium text-gray-500 focus:text-gray-700">
                Author
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </th>
            <th className="h-12 px-2 text-left">
              <button className="inline-flex items-center text-sm font-medium text-gray-500 focus:text-gray-700">
                Created
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </th>
            <th className="h-12 px-2 text-left">
              <button className="inline-flex items-center text-sm font-medium text-gray-500 focus:text-gray-700">
                AI Result
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </th>
            <th className="h-12 px-2 text-left">
              <button className="inline-flex items-center text-sm font-medium text-gray-500 focus:text-gray-700">
                AI Probability
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </th>
            <th className="h-12 px-2 text-left">
              <button className="inline-flex items-center text-sm font-medium text-gray-500 focus:text-gray-700">
                Plagiarism
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </th>
            <th className="h-12 w-12 px-2"></th>
          </tr>
        </thead>
        <tbody>
          {documentsResult.map((doc, index) => (
            <tr key={doc.id} className="border-b transition-colors hover:bg-gray-50">
              <td className="h-12 w-12 px-4">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
              </td>
              <td className="h-12 px-2 text-sm">{doc.name}</td>
              <td className="h-12 px-2 text-sm ">{doc.author}</td>
              <td className="h-12 px-2 text-sm">{new Date(doc.created).toLocaleString()}</td>
              <td className="h-12 px-2">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    doc.aiResult === "AI Generated" 
                      ? "bg-yellow-100 text-yellow-800"
                      : doc.aiResult === "Mixed Content"
                      ? "bg-purple-100 text-purple-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {doc.aiResult}
                </span>
              </td>
              <td className="h-12 px-2">
                <div className="flex items-center gap-2">
                  <div className="relative w-6 h-6">
                    <div className="absolute top-0 left-0 w-full h-full rounded-full border-[3px] border-gray-200"></div>
                    <div
                      className="absolute top-0 left-0 w-full h-full rounded-full"
                      style={{
                        background: `conic-gradient(
                          #3b82f6 ${doc.aiProbability * 3.6}deg,
                          transparent ${doc.aiProbability * 3.6}deg
                        )`,
                        mask: "radial-gradient(white, transparent)",
                        WebkitMask: "radial-gradient(white, transparent)",
                      }}
                    ></div>
                  </div>
                  <div className="text-xs font-medium text-gray-800">{doc.aiProbability}%</div>
                </div>
              </td>
              <td className="h-12 px-2">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    doc.plagiarismLevel === "High" 
                      ? "bg-red-100 text-red-800"
                      : doc.plagiarismLevel === "Moderate"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {doc.plagiarism} - {doc.plagiarismLevel}
                </span>
              </td>
              <td className="h-12 w-12 px-2">
                <div className="relative">
                  <button className="rounded-lg p-1 hover:bg-gray-100">
                    <MoreHorizontal className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

