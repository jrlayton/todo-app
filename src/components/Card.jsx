import React from "react";

function Card({ className, children }) {
  return (
    <div
      className={`group bg-light-very-light-gray dark:bg-dark-very-dark-desaturated-blue w-full px-4 py-3 sm:px-6 sm:py-4 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
