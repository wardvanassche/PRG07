import {View, Text, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';
import useTheme from "../hooks/useTheme";
import useHotspots from "../hooks/useHotspots";
import Icon from "react-native-vector-icons/Ionicons";

export default function ListScreen() {
    const {hotspots, loading} = useHotspots();
    const theme = useTheme();

    if (loading) return <ActivityIndicator />;

    return (
        <View className="flex-1 items-center dark:bg-gray-900">
            <View className="w-[96%]">
                <FlatList
                    data={hotspots}
                    keyExtractor={(item) => item.attributes.systeem_id}
                    renderItem={({item}) => (
                        <View className="flex-1 flex-row py-6 px-4 rounded-lg my-2 shadow-sm" style={{backgroundColor: theme.cardBackground}}>
                            <View>
                                <Text className="text-base font-semibold text-gray-900 dark:text-white">
                                    {item.attributes.BEMALINGSGEBIED}
                                </Text>
                                <Text className="text-sm font-medium text-gray-600 dark:text-gray-300 mt-1">
                                    Knoopnummer: {item.attributes.KNOOPNUMMER}
                                </Text>
                                <Text className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    Aanlegjaar: {item.attributes.AANLEGJAAR}
                                </Text>
                            </View>
                            <TouchableOpacity className="flex-1 justify-center items-end">
                                <Icon name="heart-outline" size={28} color="red" />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}