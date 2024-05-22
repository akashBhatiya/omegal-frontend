import React from "react";
import { useEffect } from "react";
import { Usecustem } from "../../context/chat";
import MessegeMenu from "./message";
import { useSocket } from "../../context/socketContext";

function ChatBody() {
  const index = [1];
  const { usemsg, setUsemsg, isDarkMode } = Usecustem();
  const img = [];
  const video = [];

  const { socket, roomId } = useSocket();
  console.log("room Id here", roomId);

  useEffect(() => {
    const handleMessage = (message) => {
      setUsemsg((prevMessages) => [
        ...prevMessages,
        { msgValue: message, fromServer: true },
      ]);
    };
    socket.on("receive-message", handleMessage);
    return () => {
      socket.off("receive-message", handleMessage);
    };
  }, [socket]);

  return (
    <div className="mt-5 h-[calc(100vh-215px)] md:h-[calc(100vh-255px)] overflow-y-auto ">
      <div className="flex gap-[24px] justify-start  ">
        <div
          className="flex flex-col items-start gap-2 chatfastchilder-left"
          style={{ width: "100%" }}
        >
          {usemsg?.map((msg, key) => {
            return (
              <div
                key={key}
                style={{ marginLeft: msg.fromServer === true ? "0" : "auto" }}
              >
                <div>
                  <h5

                    className={` flex relative gap-2  ${isDarkMode ? "bg-[#356532] text-white" : 'bg-[#e5edf5]'} text-[#223645] ${msg.fromServer === false ? 'rounded-tr-none' : 'rounded-tl-none'} rounded-lg  font-[600] p-[16px_20px] w-[max-content] group`}
                  >
                    <div className="absolute opacity-0 -left-11 top-2 group-hover:opacity-100">
                      <div className="w-[42px]  relative h-[42px] rounded-full bg-[#eff1f2] text-black flex justify-center items-center  hover:scale-90 ">
                        <MessegeMenu />
                      </div>
                    </div>
                    {msg.msgValue}
                  </h5>
                </div>
                <div>
                  {img.length || video.length > 0 ? (
                    <div className="flex flex-col items-end gap-2">
                      {img?.length === 1 ? (
                        <div className="rounded-[30px_25px_0_30px] bg-[#e5edf5] p-[16px_20px] w-[max-content] flex gap-2">
                          <img className="w-[300px] h-[300px] rounded-[20px] bg-gray-500" />
                        </div>
                      ) : (
                        <div>
                          <div
                            className={` ${index.length === 1
                              ? "rounded-[30px_25px_0_30px]"
                              : "rounded-[50px_0_50px_50px]"
                              }  bg-[#e5edf5] p-[16px_20px] w-[max-content]  gap-2 grid ${img.length === 2 ? "grid-cols-2" : "grid-cols-3"
                              }   `}
                          >
                            {img?.map(() => {
                              return (
                                <img
                                  src="https://themes.pixelstrap.com/chitchat/assets/images/avtar/girls.jpg"
                                  className="w-[85px] h-[85px] rounded-[20px] bg-gray-500"
                                />
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ChatBody;
