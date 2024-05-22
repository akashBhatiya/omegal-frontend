import React from "react";
import ChatHeader from "./chat_header";
import ChatBody from "./chat_body";
import ChatFooter from "./chat_footer";
import { useSocket } from "../../context/socketContext";
import Waiting from "./waiting";
import { Usecustem } from "../../context/chat";

function Chat() {
  const { isWaiting } = useSocket();
  const { isDarkMode } = Usecustem();

  return (
    <>
      {isWaiting ? (
        <Waiting />
      ) : (
        <div className={` ${isDarkMode ? 'wallpaper' : 'bg-[#eff7fe]'}  md:pt-10`}>
          <div className="block md:hidden">
            <ChatHeader />
          </div>
          <div className="px-10  flex flex-col">
            <div className="hidden md:block">
              <ChatHeader />
            </div>
            <ChatBody />
          </div>
          <ChatFooter />
        </div>
      )}
    </>
  );
}

export default Chat;
