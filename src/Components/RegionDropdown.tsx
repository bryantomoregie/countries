import React, { useState } from "react";
import { useTheme } from "../utils/ThemeProvider";

interface RegionDropDownProps {
  setRegionValue: (filter: string) => void;
  regionValue: string;
}

export default React.memo(function RegionDropwdown({
  setRegionValue,
  regionValue,
}: RegionDropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const handleFilterChange = (filter: string) => {
    setRegionValue(filter);
  };

  return (
    <>
      <div className="w-56 mt-8 relative text-left">
        <div>
          <button
            type="button"
            className={`inline-flex justify-between w-full rounded-md drop-shadow-md px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 ${theme.foreground} ${theme.text}`}
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => setIsOpen(!isOpen)}
          >
            {regionValue === "" ? "Filter by Region" : regionValue}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${
            !isOpen ? "invisible" : null
          }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="cursor-pointer" role="none">
            <div
              className={`${theme.foreground} ${theme.text} block px-4 py-2 text-sm`}
              role="menuitem"
              id="menu-item-0"
              onClick={() => handleFilterChange("Africa")}
            >
              Africa
            </div>
            <div
              className={`${theme.foreground} ${theme.text} block px-4 py-2 text-sm`}
              role="menuitem"
              id="menu-item-1"
              onClick={() => handleFilterChange("America")}
            >
              America
            </div>
            <div
              className={`${theme.foreground} ${theme.text} block px-4 py-2 text-sm`}
              role="menuitem"
              id="menu-item-2"
              onClick={() => handleFilterChange("Asia")}
            >
              Asia
            </div>
            <div
              className={`${theme.foreground} ${theme.text} block px-4 py-2 text-sm`}
              role="menuitem"
              id="menu-item-3"
              onClick={() => handleFilterChange("Europe")}
            >
              Europe
            </div>
            <div
              className={`${theme.foreground} ${theme.text} block px-4 py-2 text-sm`}
              role="menuitem"
              id="menu-item-4"
              onClick={() => handleFilterChange("Oceania")}
            >
              Oceania
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
