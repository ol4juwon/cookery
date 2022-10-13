import React from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({children}) => {

    return (
        <ThemeContext.Provider value={{color: "red",}} >
            {children}
        </ThemeContext.Provider>);
};