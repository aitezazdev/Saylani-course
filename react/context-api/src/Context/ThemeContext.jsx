import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeToggle = ({ children }) => {
  const [toggle, setToggle] = useState("light");

  const toggleTheme = () => {
    setToggle((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};