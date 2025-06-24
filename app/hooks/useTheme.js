import { useColorScheme } from 'react-native';
import {Themes} from "../constants/Themes";

export default function useTheme() {
    return Themes[useColorScheme()] ?? Themes.light;
}