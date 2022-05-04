import logo from "../../images/logo.png";

function Logo() {
  return (
    <a
      className="flex items-center text-xl font-bold text-gray-800 dark:text-white"
      href="#"
    >
      <img className="w-10 mr-2" src={logo}></img> Simple Todo App
    </a>
  );
}

export default Logo;
