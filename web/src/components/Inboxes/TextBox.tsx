import { Cube, PaperPlaneTilt, Pencil } from "phosphor-react";

export function TextBox() {
  return (
    <form className="z-20 absolute bottom-0 left-0 flex gap-4 bg-color-200 w-full h-20 p-4 rounded-2xl">
      <div className="relative flex items-center w-full">
        <input type="text" id="inputText" placeholder="Write a message..." className=" bg-color-100 w-full h-full pl-4 text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none"/>
      </div>
      <button type="submit" className="w-16 h-full flex  justify-center items-center text-center rounded-md bg-brand-500 hover:bg-brand-300 focus:bg-brand-300"><PaperPlaneTilt size={20}/></button>
    </form>
  )
}