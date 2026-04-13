import React from 'react'
import { Folder, FilePlus, Upload } from "lucide-react";


const DocHeader = () => {
    return (
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold">Documents</h1>
            <div className="flex space-x-3">
                <button className="flex items-center gap-2 px-4 py-2 border rounded-md bg-white shadow-sm hover:bg-gray-50">
                    <Folder size={16} />
                    New Folder
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border rounded-md bg-white shadow-sm hover:bg-gray-50">
                    <FilePlus size={16} />
                    New Scan
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border rounded-md bg-white shadow-sm hover:bg-gray-50">
                    <Upload size={16} />
                    Upload Files
                </button>
            </div>
        </div>
    )
}

export default DocHeader