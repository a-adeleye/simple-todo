import React from "react";
import { getDatabase, ref, update } from "firebase/database";
import { EditIcon, TrashIcon } from "./Icons";

function TodoActions(props) {
  const { todo, edit } = props;

  const user = JSON.parse(localStorage.getItem("todoUser"));

  function deleteTodo(id) {
    const db = getDatabase();
    const todoRef = ref(db, "todos/" + user + "/" + id);
    const updates = {};
    updates["/todos/" + user + "/" + id] = null;
    return update(ref(db), updates);
  }

  return (
    <div className="flex gap-2">
      <button
        className="text-sm text-gray-600 dark:text-gray-300 dark:hover:text-white"
        onClick={edit}
      >
        <EditIcon></EditIcon>
      </button>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-sm text-gray-600 dark:text-gray-300   dark:hover:text-white"
      >
        <TrashIcon></TrashIcon>
      </button>
    </div>
  );
}

export default TodoActions;
