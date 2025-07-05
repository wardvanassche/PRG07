import {View, Text, FlatList, ActivityIndicator, TouchableOpacity, SafeAreaView} from 'react-native';
import useTheme from "../hooks/useTheme";
import useHotspots from "../hooks/useHotspots";
import Icon from "react-native-vector-icons/Ionicons";
import React, {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ListScreen({navigation}) {
    const {hotspots, loading} = useHotspots();
    const theme = useTheme();
    const [favorites, setFavorites] = useState([]);
    const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

    useEffect(() => {
        const getFavorites = async () => {
            try {
                const favList = await AsyncStorage.getItem("favorites")
                if (favList) {
                    setFavorites(JSON.parse(favList))
                }
                console.log("Favorites List:", favorites)
            } catch (error) {
                console.log("Error loading favorites:", error)
            }
        }
        getFavorites()
    }, []);

    const setIsFav = async (item) => {
        try {
            let updatedFavorites = [...favorites]
            if (favorites.includes(item.id)) {
                updatedFavorites = favorites.filter(id => id !== item.id)
                console.log("Removed from favorites")
            } else {
                updatedFavorites.push(item.id)
                console.log("Added to favorites")
            }
            setFavorites(updatedFavorites)
            await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites))
        } catch (error) {
            console.log("Can't update favorites:", error)
        }
    }

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

    const filteredData = showOnlyFavorites
        ? hotspots.filter(h => favorites.includes(h.id)) : hotspots

    return (
        <View className="flex-1 items-center"
              style={{backgroundColor: theme.backgroundColor}}>

            <TouchableOpacity
                className="my-4 py-2 px-4 rounded-md"
                style={{backgroundColor: theme.buttonFilter}}
                onPress={() => setShowOnlyFavorites(prev => !prev)}
            >
                <Text className="font-bold text-white text-base">
                    {showOnlyFavorites ? "Toon alles" : "Toon favorieten"}
                </Text>
            </TouchableOpacity>

            <View className="w-full">
                <FlatList
                    data={filteredData}
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
                                        {item.properties.plaats}
                                    </Text>
                                    <Text className="text-sm mt-1"
                                          style={{color: theme.textSecondary}}>
                                        {item.properties.type}
                                    </Text>
                                </View>

                                <View className="flex-row gap-4 items-center">
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Kaart', {selectedHotspot: item.geometry})}>
                                        <Icon name="map-outline" size={26} color={theme.buttonMap}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => setIsFav(item)}>
                                        <Icon name={favorites.includes(item.id) ? "heart" : "heart-outline"}
                                              size={28}
                                              color={theme.buttonFavorite}/>
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