import React, { createContext, useState } from "react";
import { darkMode, lightMode } from './ColorTheme';
const customTheme = {
    isDark: false,
    theme: lightMode,
    toggle: () => { }
}

const ThemeContext = createContext(customTheme);

function ThemeProvider({ children }) {
    const [isDark, setDark] = useState(false);
    const toggle = () => {
        setDark(!isDark);
    }

    const theme = isDark ? darkMode : lightMode;
    return (
        <ThemeContext.Provider value={{ theme, isDark, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider };