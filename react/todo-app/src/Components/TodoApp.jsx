import React, { useState } from "react";
import Todos from "./Todos/Todos";
import TodoForm from "./TodoForm/TodoForm";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodo = { id: Date.now(), text: todo };
    setTodos((prev) => [...prev, newTodo]);
  };

  const removeTodo = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  const editTodo = (editedTodo, index) => {
    setTodos((prev) =>
      prev.map((todo, i) => (i === index ? { ...todo, text: editedTodo } : todo))
    );
  };

  return (
    <div className="max-w-md mx-auto mt-20 rounded-md shadow bg-zinc-200 p-5">
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos} removeTodo={removeTodo} editTodo={editTodo} />
    </div>
  );
};

export default TodoApp;
