import React, { useMemo, useEffect, useState } from "react";

import Layout from "./Components/Layout";
import CountryInputField from "./Components/CountryInputField";
import CountryCard from "./Components/CountryCard";
import RegionDropwdown from "./Components/RegionDropdown";
import { useTheme } from "./utils/ThemeProvider";

import axios from "axios";
import { v4 as uuid } from "uuid";
import Fuse from "fuse.js";

function App() {
  const [countries, setCountries] = useState<any>();
  const [searchValue, setSearchValue] = useState<string>("");
  const [regionValue, setRegionValue] = useState<string>("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => setCountries(response.data));
  }, []);

  const filteredCountries = useMemo(() => {
    const fuseName = new Fuse(countries, {
      threshold: 0.6,
      keys: ["name"],
    });
    if (searchValue === "") {
      if (regionValue === "") {
        return countries;
      }
      return countries.filter((country: any) => country.region === regionValue);
    }

    const results = fuseName.search(searchValue);

    if (regionValue === "") {
      return results.map((result) => result.item);
    }

    return results
      .map((result) => result.item)
      .filter((country: any) => country.region === regionValue);
  }, [countries, regionValue, searchValue]);

  const { theme } = useTheme();

  return (
    <Layout>
      <div
        className={`px-8 md:px-16 xl:px-28 min-h-screen ${theme.background}`}
      >
        <div className="flex justify-between flex-col md:flex-row">
          <CountryInputField setSearchValue={setSearchValue} />
          <RegionDropwdown
            regionValue={regionValue}
            setRegionValue={setRegionValue}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:gap-24 justify-center">
          {filteredCountries?.map((country: any) => {
            return (
              <CountryCard
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
                flag={country.flag}
                key={uuid()}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default App;
