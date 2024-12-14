import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, removeTodo, editTodo }) => {
  return (
    <div className="mt-3 max-h-60 overflow-y-auto">
      {todos.map((todo, index) => (
        <Todo
          todo={todo.text}
          key={todo.id}
          removeTodo={removeTodo}
          editTodo={editTodo}
          index={index}
        />
      ))}
    </div>
  );
};

export default Todos;
