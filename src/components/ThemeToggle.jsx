import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import Card from "./Card";

function ThemeToggle({ className }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check the user's theme preference
    console.log(localStorage.theme);
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
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
    <div className={className}>
      <Icon
        name={theme === "light" ? "moon" : "sun"}
        onClick={toggleTheme}
        className={"fill-white w-full h-full cursor-pointer"}
      />
    </div>
  );
}

export default ThemeToggle;
