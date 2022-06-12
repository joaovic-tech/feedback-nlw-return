import { Warning, X } from "phosphor-react";

function showMessage(value: any, element: any) {
  document.getElementById(element)?.classList.add('hidden');
}

export function Message() {
  return (
    <section id="message" className="fixed top-0 right-0 z-50 w-screen h-screen flex justify-center items-center text-center backdrop-blur-sm bg-zinc-900/70">
      <div className="p-1 overflow-hidden text-xl font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 flex gap-2 items-center justify-center ml-96 mr-96">
        <div className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md">
          <header className="relative w-full h-20 p-8 divide-zinc-200 text-center">
            <h1 className="text-3xl font-bold flex gap-6 justify-center text-center">Warnings <Warning size={32} weight="fill" className="text-yellow-400 animate-ping" /></h1>
          </header>
          <div className="relative p-6 space-y-6">
            <p className="text-xl leading-relaxed text-zinc-300">
              This web application was built at the <a className="underline hover:text-purple-600 focus:text-purple-600 outline-none" href="https://rocketseat.com.br/">Rocketseat NLW RETURN</a> event, to learn more about how it was made, visit the repository.
            </p>
            <p className="text-xl leading-relaxed text-zinc-300">
              In this application, the html2canvas API is being used to create an HTML representation of the web application. However, in some cases, they do not work in some browsers. <a className="underline hover:text-purple-600 focus:text-purple-600 outline-none" href="https://github.com/niklasvh/html2canvas">Read more</a>
            </p>
          </div>
          <footer className="relative">
            <button
              className="text-white bg-transparent border-2 border-purple-600 focus:ring-4 outline-none hover:bg-gradient-to-r hover:from-purple-600 hover:via-purple-500 hover:to-purple-500 focus:bg-gradient-to-r focus:from-purple-400 focus:via-purple-400 focus:to-purple-600 focus:ring-purple-300 shadow-lg hover:shadow-purple-500/50 focus:shadow-purple-500/50 font-bold rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
              onClick={() => showMessage(false, 'message')}
            >
              continue
            </button>
          </footer>
        </div>
      </div>
    </section>
  )
}