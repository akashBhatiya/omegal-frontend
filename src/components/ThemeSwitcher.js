import React, { useEffect, useState } from "react";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { Usecustem } from "../context/chat";

const ThemeSwitcher = () => {
  const { isDarkMode, setIsDarkMode } = Usecustem();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    localStorage.setItem("mode", isDarkMode);
  }, [isDarkMode, setIsDarkMode]);

  useEffect(() => {
    const storedMode = localStorage.getItem("mode");
    if (storedMode !== null) {
      setIsDarkMode(storedMode === "true");
    }
  }, [setIsDarkMode]);


  return (
    <button
      onClick={toggleDarkMode}
      className={`px-2 py-2 w-10 h-10 grid place-content-center rounded-full ${isDarkMode ? "bg-white text-gray-900 shadow-[0px_0px_42px_#fff]" : "bg-black text-white shadow-[0px_0px_31px_#fff] focus:outline-none"
        }  transition-colors duration-200`}
    >
      {isDarkMode ? (
        <CiLight style={{ fontSize: "25px" }} />
      ) : (
        <CiDark style={{ fontSize: "25px" }} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
