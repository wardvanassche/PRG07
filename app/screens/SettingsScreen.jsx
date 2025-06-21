import { View, Text, Switch } from 'react-native';
import { useColorScheme } from "nativewind";

export default function SettingsScreen() {
    const { colorScheme, toggleColorScheme } = useColorScheme();

    return (
        <View className="flex-1 flex-col justify-center items-center gap-4 dark:bg-gray-900">
            <Text className="text-sm text-gray-500 dark:text-gray-400">
                Appearance is set to follow the system preference by default.
            </Text>
            <View className="flex-row gap-4 items-center">
                <Text className="text-lg font-medium dark:text-white">
                    Dark Mode
                </Text>
                <Switch
                    value={colorScheme === 'dark'}  // Set the value based on current color scheme
                    onValueChange={toggleColorScheme}  // Toggle the color scheme when the switch is toggled
                />
            </View>
        </View>
    );
}
