import React from "react";

function Card({ className, children }) {
  return (
    <div
      className={`group bg-light-very-light-gray dark:bg-dark-very-dark-desaturated-blue w-full px-6 py-5 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
