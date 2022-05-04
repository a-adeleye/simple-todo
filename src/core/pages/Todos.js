import React from "react";
import TodoItem from "../components/TodoItem";
import TodoInput from "../components/TodoInput";
import TodoSearch from "../components/TodoSearch";
import Modal from "./EditTodo";
import Spinner from "../components/Spinner";
import { getDatabase, ref, onValue, onChildRemoved } from "firebase/database";

export default function Todos() {
  const [todos, setTodos] = React.useState([]);
  const [todosToDisplay, SetTodosToDisplay] = React.useState([]);
  const [edit, setEdit] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const user = JSON.parse(localStorage.getItem("todoUser"));

  React.useEffect(() => {
    SetTodosToDisplay((prev) => (prev = todos));
  }, [todos]);

  function getTodos() {
    const db = getDatabase();
    const todosRef = ref(db, "todos/" + user);
    onValue(todosRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        setLoading((prev) => (prev = false));
        return;
      }
      setLoading((prev) => (prev = false));
      setTodos((prev) => (prev = Object.values(snapshot.val())));
    });
    onChildRemoved(todosRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        setLoading((prev) => (prev = false));
        return;
      }
      setLoading((prev) => (prev = false));
      setTodos((prev) => (prev = []));
    });
  }

  React.useEffect(() => {
    getTodos();
  }, [user]);

  function search(e) {
    const { value } = e.target;
    if (value === "") {
      SetTodosToDisplay((prev) => (prev = todos));
    }
    SetTodosToDisplay(
      (prevTodos) =>
        (prevTodos = todos.filter((prev) => prev.text.includes(value)))
    );
  }

  const todoList = todos
    ? todosToDisplay.map((todoItem) => {
        return <TodoItem todo={todoItem} key={todoItem.id} edit={editTodo} />;
      })
    : null;

  function editTodo() {
    setEdit((prev) => (prev = !prev));
  }

  return (
    <div className="bg-white dark:bg-slate-900 mt-6 h-70v pb-4 overflow-y-scroll">
      <div className="container px-6 pb-2 mx-auto">
        {false && (
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize dark:text-white">
            Todos
          </h1>
        )}

        <section className="relative w-full max-w-md px-5 py-2 mx-auto rounded-md">
          <TodoInput></TodoInput>
          <TodoSearch search={(e) => search(e)}></TodoSearch>
          {!todosToDisplay[0] && (
            <h2 className="mt-2 text-center dark:text-white text-gray-700">
              You have no todo item on your list
            </h2>
          )}
        </section>
        {loading && (
          <div className="flex justify-center">
            <Spinner />
          </div>
        )}
        <div>{todoList}</div>
        {edit && <Modal close={editTodo} />}
      </div>
    </div>
  );
}
