import React, { useState } from "react";

const Todo = ({ todo, index, removeTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState(todo);
  const [todoDone, setTodoDone] = useState(false);

  const handleEdit = () => {
    if (!isEditing) {
      editTodo(editInput, index);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="pr-1 pl-2 py-1 bg-gray-200 rounded-lg my-1 flex items-center gap-2 shadow">
      {isEditing ? (
        <input
          className="flex-grow outline-none px-2 py-1 bg-gray-300 rounded-md"
          type="text"
          value={editInput}
          spellCheck={false}
          onChange={(e) => setEditInput(e.target.value)}
        />
      ) : (
        <p
          onClick={() => setTodoDone(!todoDone)}
          className={`flex-grow cursor-pointer ${
            todoDone && "line-through text-gray-500"
          }`}
        >
          {editInput}
        </p>
      )}
      <button
        onClick={handleEdit}
        className={`px-3 py-1 text-sm text-white rounded-md transition duration-200 ${
          isEditing ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      <button
        disabled={isEditing}
        onClick={() => removeTodo(index)}
        className={`px-2 py-1 text-sm text-white rounded-md transition duration-200 ${
          isEditing ? "bg-red-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"
        }`}
      >
        Remove
      </button>
    </div>
  );
};

export default Todo;