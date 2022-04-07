import React from "react";
import { useTheme } from "../utils/ThemeProvider";

interface LayoutProps {
  children: any;
  // themeValue: string;
  // updateTheme: (theme: string) => void;
}

export default function Layout({
  children,
}: // themeValue,
// updateTheme,
LayoutProps) {
  const { theme, setThemeValue, themeValue } = useTheme();

  const handleClick = () => {
    const newTheme = themeValue === "Dark" ? "Light" : "Dark";
    setThemeValue(newTheme);
  };

  return (
    <div>
      <header
        className={`flex justify-between py-8 px-8 md:px-16 xl:px-28 shadow-2xl ${theme.foreground} ${theme.text}`}
      >
        <h1 className="text-2xl font-bold">Where in the world?</h1>
        <div className="flex gap-3" onClick={handleClick}>
          {themeValue === "Dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          )}

          <p>{themeValue} Mode</p>
        </div>
      </header>
      {children}
    </div>
  );
}
