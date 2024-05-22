import React, { useRef, useState } from "react";
import { BsEmojiSmile, BsSend } from "react-icons/bs";
import { useSocket } from "../../context/socketContext";
import { Usecustem } from "../../context/chat";
import { EmojiPickerData } from "./emoji";

function ChatFooter() {
  const [showemojis, setShowemojis] = useState(false);
  const [message, setMessage] = useState("");
  const { usemsg, setUsemsg, isDarkMode } = Usecustem();
  const { socket, roomId } = useSocket();
  const textarea = useRef();

  const handleEmojiClick = (emoji) => {
    setMessage((prevMessage) => prevMessage + emoji.emoji);
    setShowemojis(false)
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (message.trim().length > 0) {
      setUsemsg((messages) => [
        ...messages,
        { msgValue: message.trim(), fromServer: false },
      ]);
      socket.emit("message", { room: roomId, message: message.trim() });
      setMessage("");
      textarea.current.value = "";
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className={` p-[26px_45px] h-[95px] flex ${isDarkMode ? "bg-[#12232d]" : "bg-white"} relative`}>
      <div className="flex gap-2">
        <div
          onClick={() => setShowemojis(!showemojis)}
          className="w-[42px] h-[42px] cursor-pointer relative rounded-full bg-[#1c9dea26] flex justify-center items-center"
        >
          <BsEmojiSmile className={`text-[20px]  ${isDarkMode ? "text-yellow-500" : "text-blue"}`} />
        </div>
        {showemojis && <EmojiPickerData onEmojiClick={handleEmojiClick} />}
      </div>

      <div className="flex-1 mx-5">
        <textarea
          onChange={handleMessageChange}
          ref={textarea}
          onKeyDown={handleKeyDown}
          value={message}
          className={`w-full p-3 focus:outline-none resize-none text-[#647589] text-[16px] ${isDarkMode ? "bg-[#12232d] text-white" : "bg-white"}`}
          rows={1}
          placeholder="Write your message..."
        />
      </div>
      <div className="flex gap-2">
        <div className="w-[42px] h-[42px] rounded-full bg-[#1c9dea26] flex justify-center items-center">
          <BsSend
            onClick={handleSubmit}
            className={`text-[20px] 
            ${isDarkMode ? "text-white" : "text-blue"}
            ${message.trim().length === 0
                ? "cursor-not-allowed"
                : "cursor-pointer"
              }`}
          />
        </div>
      </div>
    </div>
  );

}

export default ChatFooter;
