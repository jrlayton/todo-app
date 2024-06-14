import React from "react";
import CreateTodo from "./CreateTodo";
import ThemeToggle from "./ThemeToggle";
import TodoList from "./TodoList";

function MainContent({ className }) {
  return (
    <div className={`${className} relative w-[600px] mx-auto font-josefin`}>
      <div className="flex flex-col gap-8 py-20 px-5">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold text-4xl tracking-widest text-light-very-light-gray mt-2">
            TODO
          </h1>
          <ThemeToggle className={"w-8 h-8"} />
        </div>
        <CreateTodo />
        <TodoList />
        <span className="flex justify-center items-center my-5 dark:text-dark-dark-grayish-blue">
          Drag and drop to reorder list
        </span>
      </div>
    </div>
  );
}

export default MainContent;
