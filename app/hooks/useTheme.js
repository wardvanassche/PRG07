import {ThemeContext} from "../context/ThemeContext";
import {useContext} from "react";

export default function useTheme() {
    const {theme} = useContext(ThemeContext)
    return theme
}