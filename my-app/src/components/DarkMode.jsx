"use client";
import React, { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bs";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && localStorage.getItem
        ("theme") 
      ?localStorage.getItem("theme")
      :"light"
    );
        
    
    const element =
    typeof window !== "undefined" ? document.
    documentElement:null;
    

    useEffect(() => {
        localStorage.setItem("theme", theme);
        if (theme !== "dark"){
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
            element.classList.remove("dark");
        }

        });
        return <div>DarkMode</div>;
    };
  
        export default DarkMode;
