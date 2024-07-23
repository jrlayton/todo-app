import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import Card from "./Card";

function TodoList({ className }) {
  const [list, setList] = useState([
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

  const [filter, setFilter] = useState({
    all: false,
    active: false,
    completed: false,
  });

  const filteredList = list.filter((item) => {
    if (filter.all) return true;
    if (filter.active) return !item.completed;
    if (filter.completed) return item.completed;
    return true;
  });

  function markItemCompleted(id) {
    setList((prev) => {
      return prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
    });
  }

  function removeItem(id) {
    setList(list.filter((item) => item.id !== id));
  }

  function handleFilter(event) {
    const selectedFilter = event.target.innerText.toLowerCase();
    setFilter({
      all: selectedFilter === "all",
      active: selectedFilter === "active",
      completed: selectedFilter === "completed",
    });
  }

  function clearCompleted() {
    setList(list.filter((item) => !item.completed));
  }

  return (
    <div
      className={`${className} relative h-[100svh] w-[95vw] min-w-[320px] sm:max-w-[600px] mx-auto font-josefin`}
    >
      <div className="flex flex-col gap-x-[1vw] gap-y-[3vh] py-12 px-4 sm:gap-8 sm:py-20 sm:px-5">
        <div className="flex flex-row items-center justify-between">
          <h1 className="mt-2 text-2xl font-bold tracking-widest select-none sm:text-4xl text-light-very-light-gray">
            TODO
          </h1>
          <ThemeToggle />
        </div>
        <TodoForm list={list} setList={setList} />
        <div className="divide-y rounded-md shadow-2xl divide-light-light-grayish-blue dark:divide-dark-very-dark-grayish-blue-2 shadow-light-light-grayish-blue dark:shadow-dark-very-dark-blue">
          {filteredList.map((item, index) => (
            <div key={item.id}>
              <TodoItem
                description={item.description}
                completed={item.completed}
                setCompleted={() => markItemCompleted(item.id)}
                onClick={() => removeItem(item.id)}
                className={`${index === 0 ? "rounded-t-md" : ""}`}
              />
            </div>
          ))}
          <Card
            className={`${
              filteredList.length === 0 ? "rounded-md" : "rounded-b-md"
            } py-4`}
          >
            <div className="flex flex-row items-center justify-between select-none rounded-b-md">
              <span className="text-sm sm:text-base text-light-dark-grayish-blue dark:text-dark-dark-grayish-blue">
                {`${
                  filteredList.filter((item) => !item.completed).length
                } items left`}
              </span>
              <div className="flex-row hidden gap-4 mx-auto font-bold md:flex group text-light-dark-grayish-blue dark:text-dark-dark-grayish-blue">
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
                className="text-sm sm:text-base text-light-dark-grayish-blue dark:text-dark-dark-grayish-blue hover:cursor-pointer hover:text-light-very-dark-grayish-blue hover:dark:text-dark-light-grayish-blue"
                onClick={clearCompleted}
              >
                Clear Completed
              </div>
            </div>
          </Card>
        </div>
        <Card
          className={
            "md:hidden rounded-md shadow-2xl shadow-light-light-grayish-blue dark:shadow-dark-very-dark-blue"
          }
        >
          <div className="flex flex-row justify-center gap-6 mx-auto font-bold group text-light-dark-grayish-blue dark:text-dark-dark-grayish-blue">
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
        </Card>
        <span className="flex items-center justify-center my-5 text-sm text-light-dark-grayish-blue dark:text-dark-dark-grayish-blue">
          Drag and drop to reorder list
        </span>
      </div>
    </div>
  );
}

export default TodoList;
