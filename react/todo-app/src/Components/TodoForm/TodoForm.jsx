import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleInput = (e) => {
    setError("");
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setError("Input cannot be empty");
      return;
    }
    addTodo(input);
    setInput("");
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={handleInput}
          type="text"
          placeholder="Add a todo"
          autoComplete="off"
          spellCheck={false}
          className="px-4 py-2 flex-grow border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-200"
        >
          Add Todo
        </button>
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </form>
  );
};

export default TodoForm;
