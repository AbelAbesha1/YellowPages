import { useState } from "react";
import Home from "./pages/Home";
import { useTheme } from "./ThemeContext.jsx";
function App() {
  const { darkMode } = useTheme();
  return (
    <div className={` ${darkMode ? "bg-[#0D4045]" : " bg-[#f6f6f6]"}`}>
      <Home />
    </div>
  );
}

export default App;
