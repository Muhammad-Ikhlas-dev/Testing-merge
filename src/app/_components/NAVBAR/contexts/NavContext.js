import { createContext } from "react";

export const NavContext=createContext({
    toogleDarkLight:()=>{console.log("default")},
    darkModeClicked:false
})