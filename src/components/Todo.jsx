import React, { useState } from "react";
import Icon from "./Icon";
import Card from "./Card";

function Todo({ description, completed, onClick, className }) {
  const [isCompleted, setIsCompleted] = useState(completed);

  const markCompleted = () => {};

  return (
    <Card className={className}>
      <div className="flex flex-row items-center w-full h-full">
        <div className="flex justify-center items-center rounded-full border-solid border-light-very-light-gray dark:border-dark-very-dark-grayish-blue-1 border-2 h-6 w-6 mr-6">
          <Icon
            name="check"
            onClick={markCompleted}
            className={isCompleted ? "visible" : "invisible"}
          />
        </div>
        <span className="flex-1 text-light-very-light-gray dark:text-dark-light-grayish-blue">
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
