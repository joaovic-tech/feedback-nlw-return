import { ArrowClockwise } from "phosphor-react";

function refresh() {
  const spin = document.getElementById('spin')!;
  spin.classList.add('animate-spin');
  location.reload()
}

export function Menu() {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-zinc-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center">
          <img src="https://avatars.githubusercontent.com/u/79641024?v=4" className="mr-3 h-6 sm:h-9 shadow-md shadow-brand-500 rounded-full" alt="Feedback Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Feedback by <a href="https://github.com/joaovic-tech/" className="underline hover:text-purple-600">joaovic-tech</a></span>
        </div>
        <button
          className="p-1 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:shadow-md hover:shadow-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          onClick={() => refresh()}
        >
          <span className="relative flex gap-2 items-center justify-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Refresh <ArrowClockwise id="spin" size={24} />
          </span>
        </button>
      </div>
    </nav>
  )
}