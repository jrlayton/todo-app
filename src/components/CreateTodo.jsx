import React, { useState } from "react";
import Card from "./Card";

function CreateTodo({ todos, setTodos }) {
  const [input, setInput] = useState("");

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter" && input !== "") {
      const newTodo = {
        id: todos.length,
        completed: false,
        description: input,
      };
      setTodos([...todos].concat(newTodo));
    }
  };

  return (
    <Card className={"rounded-md"}>
      <div className="flex flex-row justify-start items-center w-full h-full">
        <div className="rounded-full border-solid border-light-very-light-grayish-blue dark:border-dark-very-dark-grayish-blue-1 dark:text-dark-light-grayish-blue border-2 h-6 w-6 mr-6"></div>
        <input
          className="bg-light-very-light-gray dark:bg-dark-very-dark-desaturated-blue text-light-dark-grayish-blue 
          dark:text-dark-light-grayish-blue placeholder-light-dark-grayish-blue pt-1 focus:text-light-very-dark-grayish-blue focus:outline-none a"
          type="text"
          placeholder="Create a new todo..."
          onInput={(e) => setInput(e.target.value)}
          onKeyDown={(e) => handleOnKeyDown(e)}
        />
      </div>
    </Card>
  );
}

export default CreateTodo;
