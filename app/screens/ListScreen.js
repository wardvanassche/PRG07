import {View, Text, FlatList, ActivityIndicator, TouchableOpacity, SafeAreaView} from 'react-native';
import useTheme from "../hooks/useTheme";
import useHotspots from "../hooks/useHotspots";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";

export default function ListScreen({navigation}) {
    const {hotspots, loading} = useHotspots();
    const theme = useTheme();

    if (loading) {
        return (
            <SafeAreaView className="flex-1 gap-4 justify-center items-center">
                <ActivityIndicator/>
                <Text className="text-sm"
                      style={{color: theme.textPrimary}}>
                    Loading...
                </Text>
            </SafeAreaView>
        )
    }

    return (
        <View className="flex-1 items-center"
              style={{backgroundColor: theme.backgroundColor}}>
            <View className="w-full">
                <FlatList
                    data={hotspots}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <View className="py-6 px-4 rounded-lg my-2 shadow-sm w-[88%] self-center"
                              style={{backgroundColor: theme.cardBackground}}>

                            <Text className="text-base font-semibold mb-1"
                                  style={{color: theme.textPrimary}}>
                                {item.properties.beschrijvi}
                            </Text>

                            <View className="flex-row justify-between items-end mt-4">
                                <View>
                                    <Text className="text-sm font-medium mt-1"
                                          style={{color: theme.textSecondary}}>
                                        Plaats: {item.properties.plaats}
                                    </Text>
                                    <Text className="text-sm text-gray-500 dark:text-gray-400 mt-1"
                                          style={{color: theme.textSecondary}}>
                                        Datum: {item.properties.datum}
                                    </Text>
                                </View>

                                <View className="flex-row gap-4 items-center">
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Kaart', {selectedHotspot: item.geometry})}>
                                        <Icon name="map-outline" size={26} color={theme.buttonMap}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Icon name="heart-outline" size={30} color={theme.buttonFavorite}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}