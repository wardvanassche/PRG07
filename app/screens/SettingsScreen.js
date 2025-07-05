import {View, Text, Switch} from 'react-native';
import useTheme from "../hooks/useTheme";
import {ThemeContext} from "../context/ThemeContext";
import {useContext} from "react";

export default function SettingsScreen() {
    const theme = useTheme()
    const {themeName, toggleTheme} = useContext(ThemeContext)

    return (
        <View className="flex-1 flex-col justify-center items-center gap-4"
              style={{backgroundColor: theme.backgroundColor}}>
            <View className="flex-row gap-4 items-center">
                <Text className="text-lg font-medium"
                      style={{color: theme.textPrimary}}>
                    Donkere modus
                </Text>
                <Switch
                    value={themeName === 'dark'}
                    onValueChange={toggleTheme}
                />
            </View>
        </View>
    );
}