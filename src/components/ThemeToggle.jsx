// src/components/ThemeToggle.jsx
import React from "react";
import { Sun, Moon } from "lucide-react"; // Icons for the toggle
import useTheme from "../hooks/useTheme"; // Import the custom hook

const ThemeToggle = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-button ms-2" // Added ms-2 for spacing
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

export default ThemeToggle;
