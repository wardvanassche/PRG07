import {SafeAreaView, Text, View} from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';
import useLocation from '../hooks/useLocation';
import React from 'react';
import useHotspots from "../hooks/useHotspots";
import Icon from 'react-native-vector-icons/Ionicons';

export default function MapScreen() {
    const {latitude, longitude} = useLocation();
    const {hotspots, loading} = useHotspots();

    if (latitude === null || longitude === null || loading) {
        return (
            <SafeAreaView className="flex-1 justify-center items-center">
                <Text>Loading location...</Text>
            </SafeAreaView>
        );
    }

    return (
        <View className="flex-1 justify-center items-center">
            <MapView
                style={{
                    height: '100%',
                    width: '100%'
                }}
                region={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{latitude: latitude, longitude: longitude}}
                >
                    <Callout>
                        <View>
                            <Text>Je bent hier</Text>
                        </View>
                    </Callout>
                </Marker>
                {hotspots.map((hotspots, index) => (
                    <Marker
                        key={index}
                        coordinate={{longitude: hotspots.geometry.x, latitude: hotspots.geometry.y}}
                    >
                        <View className="items-center">
                            <Icon name="water" size={30} color="blue"/>
                        </View>
                    </Marker>
                ))}
            </MapView>
        </View>
    );
}