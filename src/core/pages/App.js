import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ThemeContext } from "../contexts/Theme";
import Tab from "../components/Tab";
import Footer from "../components/Footer";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [theme, setTheme] = React.useState("light");
  const [noLogin, setNoLogin] = React.useState(true);

  const user = JSON.parse(localStorage.getItem("todoUser"));

  function toggleDarkMode() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }

  React.useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  let navigate = useNavigate();

  React.useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      } else {
        setNoLogin(false);
        navigate("/todos");
      }
    });
  }, []);

  return (
    <div className="flex flex-col max-h-screen">
      <ThemeContext.Provider value={theme}>
        {!noLogin && <Navbar toggleDarkMode={toggleDarkMode}></Navbar>}
      </ThemeContext.Provider>
      {!noLogin && <Tab></Tab>}
      <Outlet />
      {!noLogin && <Footer></Footer>}
    </div>
  );
}

export default App;

