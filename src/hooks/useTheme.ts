import { useContext } from "react";
import { ThemeContext } from "../contexts";

function useTheme() {
    const context = useContext(ThemeContext);
    return context;
}

export default useTheme;