import React, { createContext, useContext } from "react";

export const themes = {
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

const ThemeContext = createContext(themes.Dark);

export function ThemeProvider({ children, themeValue }: any) {
  return (
    <ThemeContext.Provider
      value={themeValue === "Dark" ? themes.Dark : themes.Light}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
