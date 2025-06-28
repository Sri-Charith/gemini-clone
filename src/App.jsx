import React, { useState, useEffect } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  // Apply dark mode and store it
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <>
      {/* ✅ Repositioned toggle switch to bottom-left */}
      <label className="theme-switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <span className="slider"></span>
      </label>

      {/* App layout */}
      <Sidebar />
      <Main />
    </>
  );
};

export default App;
