import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (name.trim() === "") {
      setError("Please enter your name.");
      return;
    }
    setSubmittedName(name);
    setName("");
    setError("");
  };

  const handleReset = () => {
    setSubmittedName("");
    setError("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-700">React Name Input</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full px-4 py-2 mt-4 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <div className="flex mt-4 space-x-4">
          <button
            onClick={handleSubmit}
            className="flex-1 px-4 py-2 font-semibold text-white transition duration-200 bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
          <button
            onClick={handleReset}
            className="flex-1 px-4 py-2 font-semibold text-white transition duration-200 bg-gray-500 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Reset
          </button>
        </div>
        <div className="mt-6">
          {error && <p className="text-sm font-medium text-center text-red-500">{error}</p>}
          {submittedName && (
            <p className="text-lg font-semibold text-center text-gray-700">
              Hello, <span className="text-blue-500">{submittedName}</span>!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;