import React from "react";
import ThemedBanner from "./components/ThemedBanner";
import ThemedBackground from "./components/ThemedBackground";
import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <ThemedBanner className={"-z-1"} />
      <ThemedBackground className={"-z-1"} />
      <MainContent className={"z-0"} />
    </>
  );
}

export default App;
