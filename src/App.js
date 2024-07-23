import React from "react";
import ThemedBanner from "./components/ThemedBanner";
import ThemedBackground from "./components/ThemedBackground";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <ThemedBanner className={"-z-1"} />
      <ThemedBackground className={"-z-1"} />
      <TodoList className={"z-0"} />
    </>
  );
}

export default App;
