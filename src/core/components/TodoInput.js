import React from "react";
import { useOutletContext } from "react-router-dom";
import { nanoid } from "nanoid";
import { saveTodo } from "../../firebase/app";
import { getDatabase, ref, set } from "firebase/database";

export default function TodoInput(props) {
  const { edit } = props;

  const user = JSON.parse(localStorage.getItem("todoUser"));

  const [input, setInput] = React.useState({
    uid: "",
    id: "",
    text: "",
    completed: false,
  });

  function handleChange(e) {
    setInput((prev) => {
      return {
        uid: user,
        id: nanoid(),
        text: e.target.value,
        completed: false,
      };
    });
  }

  function resetForm() {
    setInput(
      (prev) =>
        (prev = {
          uid: "",
          id: "",
          text: "",
          completed: false,
        })
    );
  }

  function addTodo() {
    saveTodo(input);
    resetForm();
  }

  return (
    <div className="flex flex-col my-2 space-y-4 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
      <input
        id="new_todo"
        type="text"
        value={input.text}
        className="px-4 py-1 text-gray-700 bg-white border border-slate-400 rounded-md sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
        placeholder="New todo"
        onChange={handleChange}
      ></input>

      <button
        className="px-4 py-1 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        onClick={addTodo}
      >
        Add todo
      </button>
    </div>
  );
}
