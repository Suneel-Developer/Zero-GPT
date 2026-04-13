import React, { useRef } from "react";
import { FolderPlus, Scan, Upload } from "lucide-react";
import Link from "next/link";

const FileUploadButton: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            console.log("Uploaded files:", files);
        }
    };

    return (
        <div className="flex items-center gap-3 flex-wrap">
            <button className="flex items-center gap-2 px-2.5 sm:px-4 py-2 sm:py-2 border border-[#727172] rounded-lg text-gray-600 hover:bg-gray-50">
                <FolderPlus className="w-5 h-5" />
                <span className="text-sm font-medium">New folder</span>
            </button>

            <Link href='/dashboard' className="flex items-center gap-2 px-2.5 sm:px-4 py-2 sm:py-2 border border-[#727172] rounded-lg text-gray-600 hover:bg-gray-50">
                <Scan className="w-5 h-5" />
                <span className="text-sm font-medium">New scan</span>
            </Link>

            <div className="">
                <button
                    className="flex items-center gap-2 px-2.5 sm:px-4 py-2 sm:py-2.5 border border-[#727172] rounded-lg text-gray-600 hover:bg-gray-100"
                    onClick={handleFileUpload}
                >
                    <Upload className="w-5 h-5" />
                    <span className="text-sm font-medium">Upload files</span>
                </button>

                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                    multiple
                />
            </div>
        </div>
    );
};

export default FileUploadButton;
