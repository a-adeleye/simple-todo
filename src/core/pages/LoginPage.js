import React from "react";
import { login } from "../../firebase/app";
import Logo from "../components/Logo";
import { useNavigate, useOutletContext } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Spinner from "../components/Spinner";

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, SetLoading] = React.useState(false);

  const user = JSON.parse(localStorage.getItem("todoUser"));

  function Login() {
    SetLoading(true);
    login();
  }

  React.useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        return;
      } else {
        navigate("/todos");
      }
    });
  }, []);

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-slate-900">
      <div className="flex flex-col gap-8 items-center justify-center dark:bg-slate-800 bg-white py-20 px-14 rounded-2xl">
        <Logo></Logo>
        {loading && <Spinner />}
        <button
          onClick={Login}
          className="flex gap-2 h-12 px-6 py-2 border-2 bg-white border-gray-300 rounded-full"
        >
          <img
            src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
            className="w-5"
            alt="google logo"
          ></img>
          <span className="font-semibold text-gray-700 text-sm">
            Sign in with Google
          </span>
        </button>
      </div>
    </div>
  );
}
