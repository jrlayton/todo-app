import React from "react";

function ThemedBackground({ className }) {
  return (
    <div
      className={`bg-light-very-light-gray dark:bg-dark-very-dark-blue absolute top-[200px] sm:top-[300px] h-[calc(100vh-200px)] sm:h-[calc(100vh-300px)] w-[100vw] ${className}`}
    />
  );
}

export default ThemedBackground;
