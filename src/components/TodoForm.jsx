import React, { useState } from "react";
import Card from "./Card";
import Icon from "./Icon";

function TodoForm(props) {
  const { list, setList } = props;
  const [input, setInput] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (input !== "") {
      const newListItem = {
        id: list.length,
        completed: false,
        description: input,
      };
      setList([...list].concat(newListItem));
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <Card className={"rounded-md"}>
        <div className="flex flex-row items-center w-full h-full">
          <div className="rounded-full bg-light-very-light-grayish-blue dark:bg-dark-very-dark-grayish-blue-1 h-5 w-5 mr-5 sm:h-6 sm:w-6 min-w-5 min-h-5 sm:mr-6 p-[1px]">
            <div
              className={`flex items-center justify-center w-full h-full rounded-full bg-light-very-light-gray dark:bg-dark-very-dark-desaturated-blue`}
            >
              <Icon name="check" className={"invisible"} />
            </div>
          </div>
          <input
            className="pt-1 flex-1 text-sm sm:text-lg bg-light-very-light-gray dark:bg-dark-very-dark-desaturated-blue text-light-dark-grayish-blue dark:text-dark-light-grayish-blue placeholder-light-dark-grayish-blue focus:text-light-very-dark-grayish-blue focus:outline-none"
            type="text"
            placeholder="Create a new todo..."
            onInput={(e) => setInput(e.target.value)}
          />
        </div>
      </Card>
    </form>
  );
}

export default TodoForm;
