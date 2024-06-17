import React, { useState } from "react";
import Todo from "./Todo";
import Card from "./Card";

function TodoList({ todos, setTodos }) {
  const [filter, setFilter] = useState({
    all: false,
    active: false,
    completed: false,
  });

  const markCompleted = (id) => {
    setTodos((prev) => {
      return prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };

  const clearTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleFilter = (event) => {
    const selectedFilter = event.target.innerText.toLowerCase();
    setFilter({
      all: selectedFilter === "all",
      active: selectedFilter === "active",
      completed: selectedFilter === "completed",
    });
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter.all) return true;
    if (filter.active) return !todo.completed;
    if (filter.completed) return todo.completed;
    return true;
  });

  return (
    <div className="divide-y divide-light-light-grayish-blue dark:divide-dark-very-dark-grayish-blue-2 rounded-md shadow-2xl shadow-light-light-grayish-blue dark:shadow-dark-very-dark-blue">
      {filteredTodos.map((todo, index) => (
        <Todo
          key={todo.id}
          description={todo.description}
          completed={todo.completed}
          setCompleted={() => markCompleted(todo.id)}
          onClick={() => clearTodo(todo.id)}
          className={`${index === 0 ? "rounded-t-md" : ""}`}
        />
      ))}
      <Card className={"rounded-b-md"}>
        <div className="flex flex-row items-center rounded-b-md">
          <div>
            <span className="text-light-dark-grayish-blue dark:text-dark-dark-grayish-blue">
              {`${
                filteredTodos.filter((todo) => !todo.completed).length
              } items left`}
            </span>
          </div>
          <div className="flex flex-row gap-4 mx-auto group text-light-dark-grayish-blue dark:text-dark-dark-grayish-blue">
            <span
              className={`hover:cursor-pointer hover:text-light-very-dark-grayish-blue dark:hover:text-dark-light-grayish-blue-hover ${
                filter.all ? "text-primary-bright-blue" : ""
              }`}
              onClick={(e) => handleFilter(e)}
            >
              All
            </span>
            <span
              className={`hover:cursor-pointer hover:text-light-very-dark-grayish-blue dark:hover:text-dark-light-grayish-blue-hover ${
                filter.active ? "text-primary-bright-blue" : ""
              }`}
              onClick={(e) => handleFilter(e)}
            >
              Active
            </span>
            <span
              className={`hover:cursor-pointer hover:text-light-very-dark-grayish-blue dark:hover:text-dark-light-grayish-blue-hover ${
                filter.completed ? "text-primary-bright-blue" : ""
              }`}
              onClick={(e) => handleFilter(e)}
            >
              Completed
            </span>
          </div>
          <div
            className="text-light-dark-grayish-blue dark:text-dark-dark-grayish-blue hover:cursor-pointer hover:text-light-very-dark-grayish-blue hover:dark:text-dark-light-grayish-blue"
            onClick={clearCompleted}
          >
            Clear Completed
          </div>
        </div>
      </Card>
    </div>
  );
}

export default TodoList;
