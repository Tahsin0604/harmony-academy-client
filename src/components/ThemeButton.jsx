import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeButton = () => {
  const theme = localStorage.getItem("theme") || "light";
  const [darkMode, setDarkMode] = useState(theme);
  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  const handleTheme = (buttonTheme) => {
    setDarkMode(buttonTheme);
    localStorage.setItem("theme", buttonTheme);
  };
  return (
    <div>
      {darkMode === "dark" ? (
        <button
          className="p-1 custom-button border-[#de5e02] rounded-full"
          onClick={() => {
            handleTheme("light");
          }}
          title="Light"
        >
          <FaSun className="text-sm"></FaSun>
        </button>
      ) : (
        <button
          className="p-1 custom-button border-[#de5e02] rounded-full"
          onClick={() => {
            handleTheme("dark");
          }}
          title="Dark"
        >
          <FaMoon className="text-sm"></FaMoon>
        </button>
      )}
    </div>
  );
};

export default ThemeButton;
