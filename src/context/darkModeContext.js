import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({children}) => {
    const [darkMode,setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

    //if it's false it's gonna be true and reverse
    const toggle = () =>{
        setDarkMode(!darkMode)
    }

    //whenever darkMode changes set our local storage again
    useEffect(() => {
        localStorage.setItem("darkMode", darkMode)
    }, [darkMode])


    return(
        <DarkModeContext.Provider value={{darkMode,toggle}}>{children}</DarkModeContext.Provider>
    );
}