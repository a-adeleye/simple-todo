import React from "react";
import { getDatabase, ref, update } from "firebase/database";
import { CheckIcon } from "./Icons";
import TodoActions from "./TodoActions";

export default function TodoItem(props) {
  const { todo, edit } = props;

  const todoItemStyle = `flex items-center justify-between max-w-2xl pl-4 pr-1 py-1 mt-2 mx-auto border cursor-pointer rounded-xl ${
    todo.completed ? "border-blue-500" : "border-slate-400 dark:border-gray-700"
  }`;

  const user = JSON.parse(localStorage.getItem("todoUser"));

  function toggleCompleted(data) {
    const db = getDatabase();
    const newData = { ...data, completed: !data.completed };
    const updates = {};
    updates["/todos/" + user + "/" + data.id] = newData;
    return update(ref(db), updates);
  }

  return (
    <div id={todo.id} className={todoItemStyle}>
      <div className="flex items-center">
        <CheckIcon
          completed={todo.completed}
          handleClick={() => toggleCompleted(todo)}
        ></CheckIcon>
        <h2 className="text-md font-medium mx-5 text-gray-700 dark:text-gray-200">
          {todo.text}
        </h2>
      </div>
      <TodoActions todo={todo} edit={edit}></TodoActions>
    </div>
  );
}
