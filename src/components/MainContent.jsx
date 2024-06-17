import React, { useState } from "react";
import CreateTodo from "./CreateTodo";
import ThemeToggle from "./ThemeToggle";
import TodoList from "./TodoList";

function MainContent({ className }) {
  const [todos, setTodos] = useState([
    {
      id: 0,
      completed: false,
      description: "10 minutes meditation",
    },
    {
      id: 1,
      completed: false,
      description: "Jog around the park 3x",
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

  return (
    <div className={`${className} relative w-[600px] mx-auto font-josefin`}>
      <div className="flex flex-col gap-8 py-20 px-5">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold text-4xl tracking-widest text-light-very-light-gray mt-2">
            TODO
          </h1>
          <ThemeToggle className={"w-8 h-8"} />
        </div>
        <CreateTodo todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
        <span className="flex justify-center items-center my-5 text-light-dark-grayish-blue dark:text-dark-dark-grayish-blue">
          Drag and drop to reorder list
        </span>
      </div>
    </div>
  );
}

export default MainContent;
