import React from "react";
import { useOutletContext } from "react-router-dom";
import TodoItem from "../components/TodoItem";
import { nanoid } from "nanoid";

export default function NewTodo() {
  const [todos, setTodos] = useOutletContext();
  const [todoInput, setTodoInput] = React.useState({
    userId: 1,
    id: "",
    text: "",
    completed: false,
  });

  function handleChange(e) {
    setTodoInput((prev) => {
      return {
        ...prev,
        id: nanoid(),
        text: e.target.value,
        completed: false,
      };
    });
  }

  function addTodo() {
    setTodos((prevTodo) => [...prevTodo, todoInput]);
    setTodoInput(
      (prev) =>
        (prev = {
          userId: 1,
          id: "",
          text: "",
          completed: false,
        })
    );
  }

  const todoList = todos.map((todoItem) => {
    return <TodoItem todo={todoItem} key={todoItem.id} />;
  });

  return (
    <div className="bg-white dark:bg-slate-900 mt-6 pb-4 overflow-y-scroll">
      <div className="container px-6 pb-4 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 dark:text-white">
          Add new todo
        </h1>
        <div className="flex flex-col my-4 space-y-4 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
          <input
            id="new_todo"
            type="text"
            value={todoInput.text}
            className="px-4 py-2 text-gray-700 bg-white border border-slate-400 rounded-md sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            placeholder="New todo"
            onChange={handleChange}
          ></input>

          <button
            className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={addTodo}
          >
            Add todo
          </button>
        </div>

        <div className="mt-2 space-y-2">{todoList}</div>
      </div>
    </div>
  );
}
