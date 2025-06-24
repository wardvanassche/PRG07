import {View, Text, FlatList} from 'react-native';
import useTheme from "../hooks/useTheme";

export default function ListScreen() {
    const DATA = [
        {id: 1, model: "Mustang GT", brand: "Ford"},
        {id: 2, model: "Civic Type R", brand: "Honda"},
        {id: 3, model: "Camry XSE", brand: "Toyota"},
        {id: 4, model: "Model S", brand: "Tesla"},
        {id: 5, model: "Challenger R/T", brand: "Dodge"},
        {id: 6, model: "M3", brand: "BMW"},
        {id: 7, model: "911 Carrera", brand: "Porsche"},
        {id: 8, model: "F-150", brand: "Ford"},
        {id: 9, model: "Altima SR", brand: "Nissan"},
        {id: 10, model: "S-Class", brand: "Mercedes-Benz"}
    ]

    const theme = useTheme();

    return (
        <View className="flex-1 items-center dark:bg-gray-900">
            <View className="w-[96%]">
                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <View className="py-6 px-4 rounded-lg my-2" style={{backgroundColor: theme.cardBackground}}>
                            <Text className="text-lg font-semibold text-gray-800 dark:text-white">
                                {item.model}
                            </Text>
                            <Text className="text-base font-medium text-gray-600 dark:text-gray-300">
                                {item.brand}
                            </Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}