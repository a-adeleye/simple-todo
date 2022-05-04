import TodoInput from "../components/TodoInput";

export default function Modal(props) {
  const { close } = props;

  return (
    <div>
      <div
        id="authentication-modal"
        tabIndex="-1"
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 justify-center items-center"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={close}
            >
              close
            </button>
            <div className="py-8 px-6 lg:px-8">
              <h3 className="mb-8 text-xl font-medium text-gray-900 dark:text-white">
                Edit todo
              </h3>
              <TodoInput />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
