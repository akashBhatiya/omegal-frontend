import React from "react";
import { Link } from "react-router-dom";

function PageNotfound({ data }) {
  return (
    <>
      <div>
        <div className="bg-[rgba(28,157,234,.025)] pt-[88px] relative ">
          <div className="flex justify-center items-center max-w-[600px] w-full mx-auto mt-[50px] h-[400px] sm:h-[600px] relative">
            <div className="flex flex-col mx-2">
              <p className="text-[calc(80px+70*(100vw-320px)/1600)] font-black text-[#1c9dea] [text-shadow:5px_5px_10px_#1c9dea] text-center">
                {data[0].value}
              </p>
              <p className="text-center text-[#223645] text-[calc(20px+8*(100vw-320px)/1600)] font-black pb-3">
                {data[0].text}
              </p>
              <p className="text-center text-[calc(14px+2*(100vw-320px)/1600)] text-[#647589] pb-2">
                The Page You Are Attempting To Reach Is Not Available.
              </p>
              <p className="text-center text-[calc(14px+2*(100vw-320px)/1600)] text-[#647589]">
                This May Be Because The Page Does Not Exist Or Has Been Moved.
              </p>
              <div className="flex justify-center mt-3 ">
                <Link
                  to={"/"}
                  className="p-[15px_40px] !cursor-pointer bg-[#1c9dea] text-white rounded-lg text-[16px] font-semibold"
                >
                  Back To Home
                </Link>
              </div>
            </div>
            <div className="hidden  absolute text-center mx-auto sm:flex justify-center items-center -z-10">
              <div className="bg-[#399adf] w-[100px] h-[100px] opacity-5 rounded-full animate-bg absolute"></div>
              <div className="bg-[#399adf] w-[100px] h-[100px] opacity-5 rounded-full animate-bg1 absolute"></div>
              <div className="bg-[#399adf] w-[100px] h-[100px] opacity-5 rounded-full animate-bg2 absolute"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNotfound;
