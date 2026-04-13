import React, { useState, useEffect, useRef } from "react";

export const Dropdown: React.FC<{
  label: string;
  options: string[];
  onSelect: (option: string) => void;
}> = ({ label, options, onSelect }) => {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full sm:w-fit" ref={dropdownRef}>
      <button
        className="flex justify-between items-center px-2.5 sm:px-4 py-1.5 sm:py-2 gap-4 border bg-white border-[#727172]/50 shadow-sm rounded-md w-full text-left "
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base font-helvetica">
          {label}: <span className="font-medium">{selected}</span>
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border shadow-md rounded-md z-10">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
