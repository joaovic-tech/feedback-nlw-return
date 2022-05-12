import { ChatsCircle  } from "phosphor-react";

import { ChatBox } from "./ChatBox";
import { TextBox } from "./TextBox";

export function Inboxes() {
  return (
    <section className="flex flex-col h-screen relative">
      <div className="m-auto w-full h-full">
        <div className="relative z-10 flex flex-col m-5 px-3 h-4/5 backdrop-blur-sm bg-color-200/40 rounded-2xl border-dotted border-2 border-brand-500">
          <span className="z-20 absolute top-0 left-0 w-full h-12 p-3 text-xl gap-2 flex items-center border-dashed border-b-2 border-brand-300 backdrop-blur-md bg-color-200/30">
            <ChatsCircle weight="fill" />
            Live chat
          </span>

          <ChatBox />          
          <TextBox />
          <ChatsCircle weight="duotone" className="z-0 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-8xl  text-brand-500 animate-pulse" />
        </div>
      </div>
    </section>
  )
}