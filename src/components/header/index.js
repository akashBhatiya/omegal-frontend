import { Menu, MenuButton, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import { PiListBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher";
import { Usecustem } from "../../context/chat";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Header() {
  const [show, setShow] = useState(false);
  const { isDarkMode } = Usecustem();
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 70) {
      setVisible(true);
    } else if (scrolled <= 70) {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);
  const storage = localStorage.getItem("user");
  

  const navigate = useNavigate();
  const handleClick = async () => {
    localStorage.removeItem("persist:root");
    localStorage.removeItem("user");
    navigate("/");
  };

  const userNavigation = [
    { name: "Profile", href: "/profile" },
    { name: "Sign out", href: "#", onClick: handleClick },
  ];

  return (
    <div
      className={`${
        visible ? "fixed" : "absolute"
      } mt-5 w-full top-0 z-30 bg-transparent`}
    >
      <div className="relative">
        <div
          className={`flex justify-between xl:mx-[150px] w-auto items-center duration-500  
          ${
            visible
              ? `p-[25px_50px] gap-3  sm:p-[25px_100px]  rounded-[30px] shadow-lg  ${
                isDarkMode ? "bg-[#12232D]" : "bg-[#278BFF]"
                } `
              : "p-[15px] bg-transparent"
          }   `}
        >
          <div>
            <img src="/images/logo.png" alt="" width={50} height={50} />
          </div>
          <div className="hidden lg:flex items-center gap-10 text-white font-bold text-[17px] capitalize text-nowrap ">
            <h4 className="hover:text-[#1c6ee9] cursor-pointer">Home</h4>
            <h4 className="hover:text-[#1c6ee9] cursor-pointer">Features</h4>
            <h4 className="hover:text-[#1c6ee9] cursor-pointer">Support</h4>
            <h4 className="hover:text-[#1c6ee9] cursor-pointer">Document</h4>
            <h4 className="hover:text-[#1c6ee9] cursor-pointer">Report</h4>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <ThemeSwitcher />
              {storage ? (
                <>
                  <Menu as="div" className="relative">
                    <div className="hidden lg:block">
                      <Menu.Button className="relative flex max-w-xs w-full items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <img
                          className="h-12 w-12 rounded-full"
                          src="/images/profile.jpeg"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link
                                to={item.href}
                                onClick={item.onClick}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </>
              ) : (
                <Link
                  to={"/login"}
                  className={` hidden lg:flex capitalize  rounded-[5px] w-[max-contein] font-bold p-[15px_40px]  ${isDarkMode ? 'bg-[#0f100f] text-white':' text-[#212529c7] bg-white '} `}
                >
                  Login/Signup
                </Link>
              )}
              <button
                onClick={() => setShow(!show)}
                className="bg-white p-2 rounded-lg block lg:hidden"
              >
                <PiListBold />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`absolute bg-white w-[90%] left-[25%] translate-x-[-25%] top-[90%] rounded-lg ${
            show ? "flex" : "hidden"
          } flex-col lg:hidden gap-5  py-2`}
        >
          <h4 className=" px-10 mx-1 py-2 rounded-md hover:bg-blue-300">
            Home
          </h4>
          <h4 className=" px-10 mx-1 py-2 rounded-md hover:bg-blue-300">
            Features
          </h4>
          <h4 className=" px-10 mx-1 py-2 rounded-md hover:bg-blue-300">
            Support
          </h4>
          <h4 className=" px-10 mx-1 py-2 rounded-md hover:bg-blue-300">
            Document
          </h4>
          <h4 className=" px-10 mx-1 py-2 rounded-md hover:bg-blue-300">
            Report
          </h4>
          {storage ? (
            <div className=" ">
              <Menu>
                <MenuButton className="">
                  <div className="pl-[40px] flex gap-2 items-center">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="/images/profile.jpeg"
                      alt=""
                    />
                  </div>
                </MenuButton>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute left-[30%] bottom-[5%] z-10 mt-2 w-48 origin-top-right rounded-md bg-blue-500  py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-1">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <Link
                            to={item.href}
                            onClick={item.onClick}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-white hover:text-black"
                            )}
                          >
                            {item.name}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          ) : (
            <Link
              to={"/login"}
              
              className=" px-10 mx-1 py-2 rounded-md hover:bg-blue-300 bg-blue-500 max-w-max text-white"
            >
              Login /signup
            </Link>
          )}

          <button  className="bg-white hidden lg:flex text-[#212529c7] capitalize  rounded-[5px] w-[max-contein] p-[15px_40px]">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
