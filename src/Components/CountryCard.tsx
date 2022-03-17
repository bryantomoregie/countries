import React from "react";

interface CountryCardProps {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}

export default function CountryCard({
  name,
  population,
  region,
  capital,
  flag,
}: CountryCardProps) {
  return (
    <div className="mx-auto rounded-lg shadow-lg bg-white max-w-xs mt-10">
      <a href="#!">
        <img className="rounded-t-lg" src={flag} alt="" />
      </a>
      <div className="p-6">
        <h5 className="text-gray-900 text-xl font-medium mb-4">{name}</h5>
        <p className="text-gray-700 text-base mb-2">
          <strong>Population:</strong> {population}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <strong>Region:</strong> {region}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </div>
  );
}
