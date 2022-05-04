import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./core/pages/App";
import NewTodo from "./core/pages/NewTodo";
import Todos from "./core/pages/Todos";
import LoginPage from "./core/pages/LoginPage";

function RouteSwitch() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/login" element={<LoginPage />} />
          <Route index path="/" element={<Todos />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/new-todo" element={<NewTodo />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default RouteSwitch;

