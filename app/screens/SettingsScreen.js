import {View, Text, Switch} from 'react-native';
import useTheme from "../hooks/useTheme";

export default function SettingsScreen() {
    const theme = useTheme();

    const toggleSwitch = () => {
        console.log("change theme")
    }

    return (
        <View className="flex-1 flex-col justify-center items-center gap-4"
              style={{backgroundColor: theme.backgroundColor}}>
            <Text className="text-sm text-gray-500 dark:text-gray-400">
                Appearance is set to follow the system preference by default.
            </Text>
            <View className="flex-row gap-4 items-center">
                <Text className="text-lg font-medium dark:text-white">
                    Dark Mode
                </Text>
                <Switch
                    value={false}
                    onValueChange={toggleSwitch}
                />
            </View>
        </View>
    );
}