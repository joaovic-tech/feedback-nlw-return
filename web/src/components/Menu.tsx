import { ArrowClockwise } from "phosphor-react";

function refresh() {
  const spin = document.getElementById('spin')!;
  spin.classList.add('animate-spin');
  location.reload()
}

export function Menu() {
  return (
    <header className="relative flex items-center text-center w-full z-20">
      <nav className="response bg-zinc-900 w-full h-16 2xl:h-44 flex justify-between items-center p-2">
        <div className="flex items-center gap-4 w-full h-full">
          <div className="w-6 h-6 2xl:h-32 2xl:w-32">
            <img src="https://avatars.githubusercontent.com/u/79641024?v=4" className="mr-3 w-full h-full shadow-md shadow-brand-500 rounded-full" alt="Developer icon" />
          </div>
          <span className="self-center text-xl 2xl:text-6xl font-semibold whitespace-nowrap dark:text-white">Feedback by <a href="https://github.com/joaovic-tech/" className="underline hover:text-purple-600">joaovic-tech</a></span>
        </div>
        <button
          className="p-1 2xl:p-3 overflow-hidden text-xl 2xl:text-6xl font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:shadow-md hover:shadow-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          onClick={() => refresh()}
        >
          <span className="relative flex gap-4 items-center justify-center px-5 2xl:px-7 py-2.5 2xl:py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Refresh <ArrowClockwise id="spin" size={28}/>
          </span>
        </button>
      </nav>
    </header>
  )
}