import {ActivityIndicator, SafeAreaView, Text, View} from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';
import useLocation from '../hooks/useLocation';
import React from 'react';
import useHotspots from "../hooks/useHotspots";
import Icon from 'react-native-vector-icons/Ionicons';
import useTheme from "../hooks/useTheme";
import {useRoute} from "@react-navigation/native";

export default function MapScreen() {
    const {latitude, longitude} = useLocation();
    const {hotspots, loading} = useHotspots();
    const theme = useTheme();
    const route = useRoute();
    const {selectedHotspot} = route.params || {};

    if (latitude === null || longitude === null || loading) {
        return (
            <SafeAreaView className="flex-1 gap-4 justify-center items-center">
                <ActivityIndicator/>
                <Text className="text-sm"
                      style={{color: theme.textPrimary}}>
                    Loading...
                </Text>
            </SafeAreaView>
        );
    }

    const mapRegion = () => {
        if (selectedHotspot) {
            console.log("selected hotspot geolocation is:", {selectedHotspot});
            return {
                latitude: selectedHotspot.y,
                longitude: selectedHotspot.x,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }
        } else {
            return (
                {
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }
            )
        }
    }

    return (
        <View className="flex-1 justify-center items-center">
            <MapView
                style={{
                    height: '100%',
                    width: '100%'
                }}
                region={mapRegion()}
            >
                <Marker
                    coordinate={{latitude: latitude, longitude: longitude}}
                >
                    <Icon name="navigate-circle" size={30} color="green"/>
                </Marker>
                {hotspots.map((hotspots, index) => (
                    <Marker
                        key={index}
                        coordinate={{longitude: hotspots.properties.longitude, latitude: hotspots.properties.latitude}}
                    >
                        <View className="items-center">
                            <Icon name="water" size={30} color="#004570" />
                        </View>
                        <Callout tooltip>
                            <View className="w-80 p-6 rounded-lg"
                                  style={{backgroundColor: theme.backgroundColor}}>
                                <Text className="text-base font-semibold mb-1"
                                      style={{color: theme.textPrimary}}>
                                    {hotspots.properties.beschrijvi}
                                </Text>
                                <Text className="text-sm font-medium mt-1"
                                      style={{color: theme.textSecondary}}>
                                    Plaats: {hotspots.properties.plaats}
                                </Text>
                                <Text className="text-sm text-gray-500 dark:text-gray-400 mt-1"
                                      style={{color: theme.textSecondary}}>
                                    Datum: {hotspots.properties.datum}
                                </Text>
                            </View>
                        </Callout>
                    </Marker>
                ))}
            </MapView>
        </View>
    );
}