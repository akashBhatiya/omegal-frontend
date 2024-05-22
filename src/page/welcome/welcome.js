import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPinterestP,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Welcome = () => {
  const selector = useSelector((state) => state?.user?.user?.userData);
  return (
    <>
      <div className="bg-[#f6f7fb] h-screen">
        <div className="max-w-[650px] mx-auto pt-10">
          <div className="flex justify-between items-center pb-7 px-2">
            <img src="/images/logo.png" alt="" width={60} />
            <p className="text-[14px] text-[#999999]">Some Description</p>
          </div>
          <div className="bg-white flex justify-center  border border-[#e5e5e5] border-t-transparent">
            <div>
              <div className="mt-10 mx-4">
                <img
                  src="/images/start-up.png"
                  alt=""
                  className="max-w-[240px] w-full pb-5 mx-auto"
                />
                <div className="text-center pb-10">
                  <p className="text-[28px] font-medium">Welcome!</p>
                  <span>{selector}</span>
                  <p className="text-[16px] text-[#999999]">
                    Getting Start with new journy
                  </p>
                </div>
                <div className="flex justify-center gap-2 mb-6">
                  <div className="border border-black rounded-full w-[40px] h-[40px] flex justify-center items-center">
                    <FaWhatsapp />
                  </div>
                  <div className="border border-black rounded-full w-[40px] h-[40px] flex justify-center items-center">
                    <FaTwitter />
                  </div>
                  <div className="border border-black rounded-full w-[40px] h-[40px] flex justify-center items-center">
                    <FaFacebookF />
                  </div>
                  <div className="border border-black rounded-full w-[40px] h-[40px] flex justify-center items-center">
                    <FaInstagram />
                  </div>
                </div>
                <p className="text-center text-[14px] text-[#666666] mb-2">
                  Thank you for joining with Notify, We have more than a 6
                  million Readers Each Month, keeping you up to date with what’s
                  going on in the world.
                </p>
                <div className="flex justify-center">
                  <Link
                    to={"/login"}
                    className="bg-[#1c9dea] text-base rounded-lg text-white  text-[13px] p-[15px_35px] m-[20px_0px_40px]"
                  >
                    Continue
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-[#e5e5e5] pb-7 bg-white">
            <div className="flex justify-center gap-2 mt-7 mb-6">
              <div className="group">
                <div className="bg-[#eff1f2] rounded-full w-[40px] h-[40px] flex justify-center items-center  group-hover:bg-[#1c9dea]">
                  <FaFacebookF className="text-[#1c9dea] group-hover:text-white" />
                </div>
              </div>
              <div className="group">
                <div className="bg-[#eff1f2] rounded-full w-[40px] h-[40px] flex justify-center items-center group-hover:bg-[#1c9dea]">
                  <FaTwitter className="text-[#1c9dea] group-hover:text-white" />
                </div>
              </div>
              <div className="group">
                <div className="bg-[#eff1f2] rounded-full w-[40px] h-[40px] flex justify-center items-center group-hover:bg-[#1c9dea]">
                  <FaPinterestP className="text-[#1c9dea] group-hover:text-white" />
                </div>
              </div>
              <div className="group">
                <div className="bg-[#eff1f2] rounded-full w-[40px] h-[40px] flex justify-center items-center group-hover:bg-[#1c9dea]">
                  <FaInstagram className="text-[#1c9dea] group-hover:text-white" />
                </div>
              </div>
              <div className="group">
                <div className="bg-[#eff1f2] rounded-full w-[40px] h-[40px] flex justify-center items-center group-hover:bg-[#1c9dea]">
                  <FaLinkedin className="text-[#1c9dea] group-hover:text-white" />
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-[12px] text-[#777777] pb-2">
                © chitcaht. | 800 Broadway, Suite 1500 | New York, NY 000123,
                USA.
              </p>
              <p className="text-[12px] text-[#777777] pb-5">
                View Web Version | Email Preferences | Privacy Policy
              </p>
              <p className="text-[12px] text-[#777777] pb-5 ">
                If you have any quetions please contact us support@mail.com.{" "}
                <br />
                Unsubscribe from our mailing lists
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
