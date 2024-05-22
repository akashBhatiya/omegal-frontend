import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useSocket } from "../../context/socketContext";
import { Usecustem } from "../../context/chat";

function ChatHeader() {
  const [serachbar, setSerachbar] = useState(false);
  const { handleExitChat } = useSocket();
  const { isDarkMode } = Usecustem();

  return (
    <div className={` ${isDarkMode ? "bg-[#12232d]" : 'bg-[#FFFFFF]'}  h-[100px] rounded-md p-[20px_30px] flex justify-between items-center relative`}>
      <div className="flex items-center">
        <img
          src="/images/avtar.avif"
          className={`w-[60px] h-[60px] object-cover bg-slate-400 rounded-[20px] ${isDarkMode ? "bgshedow" : ''}`}
          alt=""
        />
        <div className="ml-4 border-r-2 pr-10">
          <h4 className={`  ${isDarkMode ? "text-[#fff]" : 'text-[#223645]'} text-[18px] font-[500]`}>user</h4>
          <button className="bg-[#3fcc35] p-[3px_10px] rounded-[10px] text-[12px] text-white">
            Active
          </button>
        </div>
        <div
          onClick={() => setSerachbar(true)}
          className="w-[42px] cursor-pointer h-[42px]  rounded-full bg-[#eff1f2] flex justify-center items-center ml-4 hover:bg-blue"
        >
          <IoSearch className=" text-[20px]" />
        </div>
      </div>

      <div className="flex gap-3 cursor-pointer">
        <div
          className="w-[84px] h-[42px] bg-red-600 rounded-lg flex justify-center items-center hover:bg-blue hover:scale-90"
        >
          <div
            className="bg-red-600 font-bold text-white"
            onClick={handleExitChat}
          >
            Exit chat
          </div>
        </div>
      </div>

      <div
        className={`w-full h-full ${isDarkMode ? "bg-[#182f3b]" : 'bg-white'}   absolute left-0 flex items-center gap-5 px-10 ${serachbar ? "block" : "hidden"
          }`}
      >
        <div className="flex gap-3 items-center flex-1">
          <IoSearch className={`text-[18px] ${isDarkMode ? "text-white" : 'text-[rgb(34_54_69)]'} `} />
          <input
            placeholder="Search......"
            className={`px-3 py-2 flex-1 focus:outline-none ${isDarkMode ? "bg-[#182f3b] text-white" : 'bg-white'}`}
          />
        </div>
        <div>
          <IoClose
            onClick={() => setSerachbar(false)}
            className={`text-[25px] cursor-pointer  ${isDarkMode ? "text-white" : 'text-[rgb(34_54_69)]'}`}
          />
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;
