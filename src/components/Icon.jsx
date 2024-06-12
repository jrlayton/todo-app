import React from "react";
import { ReactComponent as CheckIcon } from "../images/icon-check.svg";
import { ReactComponent as CrossIcon } from "../images/icon-cross.svg";
import { ReactComponent as MoonIcon } from "../images/icon-moon.svg";
import { ReactComponent as SunIcon } from "../images/icon-sun.svg";

const iconPaths = {
  check: CheckIcon,
  cross: CrossIcon,
  moon: MoonIcon,
  sun: SunIcon,
};

function Icon({ name, className, onClick }) {
  const IconPath = iconPaths[name];

  if (!IconPath) {
    console.error(`Icon '${name}' not found.`);
    return null;
  }

  return <IconPath className={className} onClick={onClick} />;
}

export default Icon;
