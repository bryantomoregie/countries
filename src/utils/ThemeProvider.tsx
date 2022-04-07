import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext<{
  theme: { foreground: string; background: string; text: string };
  setThemeValue: React.Dispatch<React.SetStateAction<string>>;
  themeValue: string;
}>(
  // @ts-ignore
  null
);

export function ThemeProvider({ children }: any) {
  console.log("themeprovider");
  const themes = {
    Light: {
      foreground: "bg-white",
      background: "bg-slate-100",
      text: "text-black",
    },
    Dark: {
      foreground: "bg-slate-700",
      background: "bg-slate-800",
      text: "text-white",
    },
  };
  const [themeValue, setThemeValue] = useState<string>("Dark");

  const theme = themeValue === "Dark" ? themes.Dark : themes.Light;

  return (
    <ThemeContext.Provider value={{ theme, setThemeValue, themeValue }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
