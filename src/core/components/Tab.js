import React from "react";
import { NavLink } from "react-router-dom";
import { TodoIcon, AddIcon } from "./Icons";

export default function Tab() {
  return (
    <div className="flex justify-center mt-6">
      <NavLink
        to="/todos"
        className={({ isActive }) =>
          isActive
            ? "flex items-center h-6 px-2 py-1 text-center text-gray-700 border border-b-0 border-slate-400 sm:px-4 dark:border-gray-500 rounded-t-md dark:text-white whitespace-nowrap focus:outline-none"
            : "flex items-center h-6 px-2 py-1 text-center text-gray-700 bg-transparent border-b border-slate-400 sm:px-4 dark:border-gray-500 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 dark:hover:border-slate-400"
        }
      >
        <TodoIcon></TodoIcon>
        <span className="mx-1 text-sm">Todos</span>
      </NavLink>
    </div>
  );
}
