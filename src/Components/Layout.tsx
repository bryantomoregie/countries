import React from "react";

export default function Layout({ children }: { children: any }) {
  return (
    <div>
      <header className="flex justify-between py-8 px-8 md:px-16 xl:px-28 bg-white shadow-2xl">
        <h1 className="text-2xl font-bold">Where in the world?</h1>
        <div className="flex gap-3">
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
          <p>Dark Mode</p>
        </div>
      </header>
      {children}
    </div>
  );
}
