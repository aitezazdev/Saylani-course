import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Home = () => {
  const { toggle, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-all duration-300 ${
        toggle === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      <p className="mb-4 text-lg text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus accusantium rerum doloremque vel fugit quae quod consequuntur asperiores blanditiis unde?
      </p>
      <div className="space-x-4">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-600"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Home;