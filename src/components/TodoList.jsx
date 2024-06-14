import React, { useState } from "react";
import Todo from "./Todo";
import Card from "./Card";

function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      completed: false,
      description: "10 minutes meditation",
    },
    {
      id: 1,
      completed: false,
      description: "Read for 1 hour",
    },
    {
      id: 2,
      completed: false,
      description: "Read for 1 hour",
    },
    {
      id: 3,
      completed: false,
      description: "Pick up groceries",
    },
    {
      id: 4,
      completed: false,
      description: "Complete Todo App",
    },
  ]);

  const clearTodo = (removeID) => {
    console.log("clicked");
    setTodos(todos.filter((todo) => todo.id !== removeID));
  };

  return (
    <div className="divide-y divide-light-very-light-gray dark:divide-dark-very-dark-grayish-blue-2">
      {todos.map((todo, index) => (
        <Todo
          key={todo.id}
          description={todo.description}
          completed={todo.completed}
          onClick={() => clearTodo(todo.id)}
          className={`${index === 0 ? "rounded-t-md" : ""}`}
        />
      ))}
      <Card className={"rounded-b-md"}>
        <div className="flex flex-row justify-between items-center dark:text-dark-dark-grayish-blue">
          <div>
            <span>5 items left</span>
          </div>
          <div className="flex flex-row gap-2 group">
            <span>All</span>
            <span>Active</span>
            <span>Completed</span>
          </div>
          <div>Clear Completed</div>
        </div>
      </Card>
    </div>
  );
}

export default TodoList;
