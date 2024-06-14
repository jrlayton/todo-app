import React from "react";
import Card from "./Card";

function CreateTodo() {
  return (
    <Card className={"rounded-md"}>
      <div className="flex flex-row justify-start items-center w-full h-full">
        <div className="rounded-full border-solid border-light-very-light-gray dark:border-dark-very-dark-grayish-blue-1 border-2 h-6 w-6 mr-6"></div>
        <input
          className="bg-light-very-light-gray dark:bg-dark-very-dark-desaturated-blue dark:text-dark-dark-grayish-blue focus:outline-none"
          type="text"
          placeholder="Create a new todo..."
        />
      </div>
    </Card>
  );
}

export default CreateTodo;
