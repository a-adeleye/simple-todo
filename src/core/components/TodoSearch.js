import { SearchIcon } from "./Icons";

export default function TodoSearch(props) {
  const { search } = props;

  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <SearchIcon></SearchIcon>
      </span>

      <input
        type="text"
        className="w-full py-1 pl-10 pr-4 text-gray-700 bg-white border border-slate-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
        placeholder="Search todo list"
        onChange={search}
      ></input>
    </div>
  );
}
