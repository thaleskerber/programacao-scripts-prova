import { createContext, useState } from "react";
import { ThemeContextProps } from "../types";
import { tema } from "../styles/theme";

const ThemeContext = createContext({} as ThemeContextProps)

function ThemeProvider({ children }: any) {
    const [theme] = useState(tema)

    return (
      <ThemeContext.Provider value={{ theme }}>
        {children}
      </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider }