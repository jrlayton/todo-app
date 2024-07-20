import React, { useEffect, useState } from "react";
import Icon from "./Icon";

function ThemeToggle() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className={"sm:w-8 sm:h-8 w-6 h-6"}>
      <Icon
        name={theme === "light" ? "moon" : "sun"}
        onClick={toggleTheme}
        className={"fill-white w-full h-full cursor-pointer"}
      />
    </div>
  );
}

export default ThemeToggle;
