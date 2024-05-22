import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useSocket } from "../../context/socketContext";
import { Link } from "react-router-dom";
import { Usecustem } from "../../context/chat";

function Landing() {
  const { joinRandomRoom } = useSocket();
  const { isDarkMode } = Usecustem();

  return (
    <>
      <Header />
      <div className={`${isDarkMode ? 'bg-dark bg-[#0f100f]' : 'bg'}    pt-[88px] flex flex-col relative overflow-hidden h-[auto]`}>
        <img
          src="./images/sky.png"
          className=" object-fill absolute w-[auto] h-[auto] left-[-40px] top-[225px] sky1"
          alt="img"
        />
        <img
          src="./images/sky.png"
          className=" object-fill absolute w-[auto] h-[auto] right-[40px] bottom-[705px] sky2"
          alt="img"
        />
        <div className="mx-auto mt-10 text-center z-10">
          <h4 className="text-[25px] text-white font-bold">
            Easy To Use Our Chat App
          </h4>
          <h6 className="text-[20px] text-white font-[500] px-5">
            Desktop App– Easy to use our chat app, Attractive and clean design,
            with many <br />
            Features:- Dark & light, Recent Chat And many more.......
          </h6>
          <div className="flex flex-col mx-2 sm:mx-0  sm:flex-row gap-2 justify-center py-2">
            <Link
              to={"/video"}
              className={`px-4 py-3  ${isDarkMode ? 'bg-[#0f100f]' : 'bg-[#1c6ee9]'}   rounded-md text-white text-lg font-bold hover:bg-white hover:text-black`}
            >
              Video call with random
            </Link>
            <Link
              to={"/chat"}
              onClick={joinRandomRoom}
              className={`px-4 py-3 ${isDarkMode ? 'bg-[#0f100f]' : 'bg-[#1c6ee9]'}  rounded-md text-white text-lg font-bold hover:bg-white hover:text-black`}
            >
              Message chat with random
            </Link>
          </div>

          <div className="mt-5 relative overflow-hidden md:overflow-visible">
            <img
              src="./images/Landingpage.png"
              className="h-full z-10 relative object-fill"
              alt="img"
            />
            <img
              src="./images/11.png"
              className=" object-fill absolute w-[250px] h-[auto] top-[-14px]   left-[-40px] sm:top-[218px]"
              alt="img"
            />
            <img
              src="./images/21.png"
              className=" object-fill absolute w-[500px] h-[auto] top-[-22px] right-[-40px] sm:top-[150px]"
              alt="img"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
