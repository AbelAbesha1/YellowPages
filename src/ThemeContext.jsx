import React, { createContext, useState, useContext } from "react";

// Create the context
const ThemeContext = createContext();

// Provide the context
export const Theme = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark", !darkMode); // Apply 'dark' class to the body
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook for consuming the context
export const useTheme = () => useContext(ThemeContext);
