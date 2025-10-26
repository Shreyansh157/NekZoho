// src/hooks/useTheme.js
import { useState, useEffect, useCallback } from "react";

const useTheme = () => {
  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    // You could also check for system preference here if desired
    return storedTheme || "light";
  });

  // Apply the theme to the document element
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme); // Save preference
  }, [theme]);

  // Function to toggle the theme
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  return [theme, toggleTheme];
};

export default useTheme;
