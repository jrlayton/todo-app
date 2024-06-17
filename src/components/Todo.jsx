import React from "react";
import Icon from "./Icon";
import Card from "./Card";

function Todo({ description, completed, setCompleted, onClick, className }) {
  return (
    <Card className={className}>
      <div className="flex flex-row items-center w-full h-full">
        <div className="rounded-full bg-light-very-light-grayish-blue dark:bg-dark-very-dark-grayish-blue-1 h-6 w-6 mr-6 hover:cursor-pointer hover:bg-check-background p-[1px]">
          <div
            className={`flex items-center justify-center w-full h-full rounded-full bg-light-very-light-gray dark:bg-dark-very-dark-desaturated-blue ${
              completed ? "bg-check-background" : ""
            }`}
            onClick={setCompleted}
          >
            <Icon
              name="check"
              className={`${completed ? "visible" : "invisible"}`}
            />
          </div>
        </div>
        <span
          className={`flex-1 text-light-very-dark-grayish-blue dark:text-dark-light-grayish-blue ${
            completed
              ? "line-through text-light-l-g-b dark:text-dark-very-dark-grayish-blue-1"
              : ""
          }`}
        >
          {description}
        </span>
        <Icon
          name="cross"
          onClick={onClick}
          className={"invisible group-hover:visible hover:cursor-pointer"}
        />
      </div>
    </Card>
  );
}

export default Todo;
