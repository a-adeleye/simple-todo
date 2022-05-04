import React from "react";
import { ThemeContext } from "../contexts/Theme";
import Logo from "./Logo";
import { DarkModeToggle } from "./DarkModeToggle";
import { Logout } from "../../firebase/app";

export default function Navbar(props) {
  const theme = React.useContext(ThemeContext);

  return (
    <nav className="bg-white px-4 shadow dark:bg-gray-800 flex items-center justify-between h-10v">
      <Logo></Logo>
      <div className="flex">
        <DarkModeToggle
          toggleDarkMode={props.toggleDarkMode}
          theme={theme}
        ></DarkModeToggle>
        <button
          onClick={Logout}
          className="py-1 px-2 dark:bg-white dark:text-slate-900 bg-slate-900 text-gray-200 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
