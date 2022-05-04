import { LightIcon, DarkIcon } from "./Icons";

export function DarkModeToggle(props) {
  return (
    <div className="flex items-center mt-4 md:mt-0">
      <button
        aria-label="dark mode button"
        className="transition-colors duration-200 ease-in-out p-1 mr-4 text-gray-200 bg-slate-900 dark:bg-gray-200 dark:text-slate-900 rounded-md hover:text-gray-200 hover:bg-slate-700 dark:hover:text-slate-900 dark:hover:bg-gray-400 focus:outline-none"
        onClick={props.toggleDarkMode}
      >
        {props.theme === "dark" && <LightIcon></LightIcon>}
        {props.theme === "light" && <DarkIcon></DarkIcon>}
      </button>
    </div>
  );
}
