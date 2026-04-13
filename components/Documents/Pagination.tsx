import React, { useState } from "react";

export const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  rowsPerPage: number;
  onRowsChange: (rows: number) => void;
}> = ({ currentPage, totalPages, onPageChange, rowsPerPage, onRowsChange }) => {
  const rowsOptions = [5, 10, 30, 50];  

  return (
    <div className="flex justify-between items-center mt-4 border-t pt-3 mb-4">
      {/* Rows Per Page Dropdown */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">Rows per page</span>
        <select
          value={rowsPerPage}
          onChange={(e) => onRowsChange(Number(e.target.value))}
          className="border rounded-md px-2 py-1 bg-white text-sm text-gray-700 outline-none"
        >
          {rowsOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center gap-4">
        {/* Previous Button */}
        <button
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className={`border px-3 sm:px-3 py-1.5 rounded-md ${
            currentPage === 1
              ? "text-gray-400 bg-gray-100 cursor-not-allowed"
              : "text-gray-700 bg-white hover:bg-gray-50"
          }`}
        >
          &lt;
        </button>

        {/* Current Page */}
        <span className="text-sm font-medium text-gray-700">{currentPage}</span>

        {/* Next Button */}
        <button
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`border px-3 py-1.5 rounded-md ${
            currentPage === totalPages
              ? "text-gray-400 bg-gray-100 cursor-not-allowed"
              : "text-gray-700 bg-white hover:bg-gray-50"
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
