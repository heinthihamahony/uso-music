"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
  isLightMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize with the saved theme or default to dark mode
  const [isLightMode, setIsLightMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme === "light";
    }
    return false; // Default to dark mode for SSR
  });

  // Apply theme to document body on mount and when theme changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", isLightMode ? "light" : "dark");

      // Apply theme to document body
      if (isLightMode) {
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
      } else {
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
      }
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
