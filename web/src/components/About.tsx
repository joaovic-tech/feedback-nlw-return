import { WarningOctagon } from "phosphor-react";

export function showAbout(element: any) {
  document.getElementById(element)?.classList.toggle('hidden');
}

export function About() {
  return (
    <section id="about" className="fixed top-0 right-0 z-50 w-full h-full flex justify-center items-center backdrop-blur-sm bg-zinc-900/70 transition-all">
      <div className="relative sm:w-4/5 w-full p-1 overflow-hidden text-xl font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 flex gap-2 items-center justify-center shadow-md shadow-blue-500">
        <div className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gradient-to-bl from-zinc-800 to-zinc-900 rounded-md">
          <header className="relative w-full h-20 2xl:h-40 p-8 divide-zinc-200 text-center">
            <h1 className="text-about text-4xl font-bold flex gap-6 justify-center text-center 2xl:text-6xl 2xl:gap-6">About</h1>
          </header>
          <div>
            <h3 className="py-2 text-red-600 flex gap-2 text-2xl 2xl:text-4xl"><WarningOctagon className="text-4xl 2xl:text-6xl" /> Google Chrome browser is recommended</h3>
            <ul className="p-6 flex flex-col space-y-6 2xl:space-y-8 2xl:mx-4 list-disc">
              <li className="text-xl leading-relaxed text-zinc-300 2xl:text-4xl">
                The feedback table was inspired by the <a className="underline hover:text-purple-600 focus:text-purple-600 outline-none" href="https://rocketseat.com.br/" target="blank">Rocketseat</a> event called NLW RETURN, to learn more about how it was done, visit the <a className="underline hover:text-purple-600 focus:text-purple-600 outline-none" href="https://github.com/joaovic-tech/feedback-nlw-return" target="blank">repository</a>.
              </li>
              <li className="text-xl leading-relaxed text-zinc-300 2xl:text-4xl">
                The html2canvas API is being used to create an HTML representation of the web application. However, in some cases, they do not work in some browsers. <a className="underline hover:text-purple-600 focus:text-purple-600 outline-none" href="https://github.com/niklasvh/html2canvas" target="blank">Read more.</a>
              </li>
            </ul>
          </div>
          <footer className="text-center">
            <button
              className="2xl:text-5xl 2xl:px-16 2xl:py-8 2xl:border-4 2xl:focus:ring-4 2xl:shadow-2xl text-white bg-transparent border-2 border-purple-600 focus:ring-4 outline-none hover:bg-gradient-to-r hover:from-purple-600 hover:via-purple-500 hover:to-purple-500 focus:bg-gradient-to-r focus:from-purple-400 focus:via-purple-400 focus:to-purple-600 focus:ring-purple-300 shadow-lg hover:shadow-purple-500/50 focus:shadow-purple-500/50 font-bold rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
              onClick={() => showAbout('about')}
            >
              continue
            </button>
          </footer>
        </div>
      </div>
    </section>
  )
}