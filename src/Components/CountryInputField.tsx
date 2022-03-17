import React from "react";

interface CountryInputFieldProps {
  setSearchValue: (value: string) => void;
}

export default function CountryInputField({
  setSearchValue,
}: CountryInputFieldProps) {
  const handleChange = (value: string) => {
    setSearchValue(value);
  };
  return (
    <input
      className="h-14 md:w-1/2 xl:w-1/3 mt-8 pl-4 drop-shadow-md rounded-md"
      type="text"
      placeholder="Search for a country..."
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}
