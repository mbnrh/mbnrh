import { createContext, useEffect, useState } from "react";
import profileimage from "../assets/pexels-suliman-sallehi-1704488.jpg";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null);

    const login = () =>{
        //To Do
        setCurrentUser({id:1,name:"Mbn Rh", profilePic:"https://pixabay.com/illustrations/ai-generated-girl-student-happy-8652209/"})
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser])


    return(
        <AuthContext.Provider value={{currentUser, login}}>
            {children}</AuthContext.Provider>
    );
}