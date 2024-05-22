import { createContext, useContext, useEffect, useState } from "react";

const custem = createContext();

export const Usecustem = () => {
  return useContext(custem);
};
 
export default function Contextfn({ children }) {
  const [inputvalue, setInputvalue] = useState();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [usemsg, setUsemsg] = useState([]);
  useEffect(() => {
    localStorage.getItem("mode")
  },[isDarkMode])
  return (
    <custem.Provider value={{ inputvalue, setInputvalue, usemsg, setUsemsg, isDarkMode, setIsDarkMode }}>
      {children}
    </custem.Provider>
  );
}
