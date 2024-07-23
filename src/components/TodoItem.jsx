import React from "react";
import Icon from "./Icon";
import Card from "./Card";

function TodoItem({
  description,
  completed,
  setCompleted,
  onClick,
  className,
}) {
  return (
    <Card className={className}>
      <div className="flex items-center box-border">
        <div className="rounded-full bg-light-very-light-grayish-blue dark:bg-dark-very-dark-grayish-blue-1 h-5 w-5 mr-5 sm:h-6 sm:w-6 sm:mr-6 hover:cursor-pointer hover:bg-check-background p-[1px]">
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
        <div className="flex-1 min-w-0 pr-3 pt-[0.25vh]">
          <span
            className={`text-sm block truncate sm:text-lg text-light-very-dark-grayish-blue dark:text-dark-light-grayish-blue hover:cursor-pointer select-none ${
              completed
                ? "line-through text-light-very-light-grayish-blue dark:text-dark-very-dark-grayish-blue-1"
                : ""
            }`}
            onClick={setCompleted}
          >
            {description}
          </span>
        </div>
        <Icon
          name="cross"
          onClick={onClick}
          className={
            "sm:invisible h-3 w-3 sm:h-5 sm:w-5 sm:min-w-5 sm:min-h-5 group-hover:visible hover:cursor-pointer flex-shrink-0"
          }
        />
      </div>
    </Card>
  );
}

export default TodoItem;
