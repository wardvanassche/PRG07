import React, {createContext, useEffect, useState} from 'react';
import {Themes} from '../constants/Themes';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [themeName, setThemeName] = useState('light');
    const theme = Themes[themeName] || Themes.light;

    const getSavedTheme = async () => {
        try {
            const savedTheme = await AsyncStorage.getItem('savedTheme')
            console.log("Saved theme:", savedTheme)
            if (savedTheme) {
                setThemeName(savedTheme)
            }
        } catch (error) {
            console.log("Failed to load saved theme", error.message)
        }
    }

    useEffect(() => {
        getSavedTheme()
    }, []);

    const toggleTheme = async () => {
        const newTheme = themeName === 'light' ? 'dark' : 'light';
        setThemeName(newTheme);

        try {
            await AsyncStorage.setItem('savedTheme', newTheme)
            console.log("Saved new theme:", newTheme)
        } catch (error) {
            console.log("Error saving theme", error.message)
        }

    };

    return (
        <ThemeContext.Provider value={{themeName, theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};