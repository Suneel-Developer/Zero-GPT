"use client";

import React from "react";

interface Option {
    id: number;
    language: string;
}

const options: Option[] = [
    { id: 1, language: "English" },
    { id: 2, language: "French" },
    { id: 3, language: "Spanish" },
    { id: 4, language: "German" },
];

export default function DetectorText() {
    return (
        <div
            className="w-full  bg-white rounded-[20px] px-4 sm:px-6 py-6 border border-[#00000026]"
            style={{ boxShadow: " 4px 4px 40px 0px #0000001A" }}
        >
            <div className="flex sm:items-center sm:flex-row flex-col gap-2 text-sm">
                <div className="flex flex-wrap gap-4">
                    {options.map((option) => (
                        <h3 key={option.id} className="text-[#414952E5] font-normal text-base leading-[28px]">
                            {option.language}
                        </h3>
                    ))}
                </div>
            </div>

            <div className="mt-4 relative">
                <textarea
                    placeholder="Enter your data"
                    className="w-full bg-transparent resize-none outline-none text-sm h-[200px] placeholder:text-medium-gray/60 text-dark-blue"
                />
            </div>

            <div className="mt-4 flex justify-end sm:flex-row flex-col sm:items-center gap-4">
                <div className="flex items-center justify-between gap-3 sm:w-fit w-full">
                    <button className="px-10 h-[46px] bg-main-clr hover:bg-white hover:text-dark-blue border hover:shadow-2xl transition-all duration-500 text-white rounded-[30px] text-sm font-normal">
                        Detect Text
                    </button>
                </div>
            </div>
        </div>
    );
}

