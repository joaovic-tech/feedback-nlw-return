import { ArrowClockwise, List } from "phosphor-react";
import { showAbout } from "./About";

export function refresh() {
  const spin = document.getElementById('spin')!;
  spin.classList.add('animate-spin');
  location.reload();
}

export function Menu() {
  return (
    <header className="relative flex items-center text-center w-full z-20">
      <nav className="bg-zinc-900 border-b-2 border-solid border-zinc-800 w-full h-20 2xl:h-44 flex justify-between items-center p-2">
        <div className="flex items-center gap-4">
          <h1 className="self-center text-xl 2xl:text-6xl font-semibold whitespace-nowrap dark:text-white">Feedback Table</h1>
        </div>
        <button type="button" onClick={() => showAbout(true, 'about')} className="text-xl 2xl:text-6xl text-gray-500 hover:text-brand-500 focus:text-brand-500">About</button>
        <div className="flex justify-center items-center gap-2">
          <button
            className="p-1 2xl:p-3 overflow-hidden text-sm 2xl:text-6xl font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:shadow-md hover:shadow-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            onClick={() => refresh()}
          >
            <span className="relative flex gap-4 items-center justify-center px-3 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Refresh <ArrowClockwise id="spin" className="text-4xl 2xl:text-9xl" />
            </span>
          </button>
          <div className="w-12 h-12 2xl:h-32 2xl:w-32">
            <img src="https://avatars.githubusercontent.com/u/79641024?v=4" className="w-full h-full shadow-md shadow-brand-500 rounded-full" alt="Developer icon" />
          </div>
        </div>
      </nav>
    </header>
  )
}