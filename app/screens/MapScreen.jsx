import {SafeAreaView, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import useLocation from '../hooks/useLocation';
import React from 'react';

export default function MapScreen() {
    const {latitude, longitude, errorMsg} = useLocation();

    if (latitude === null || longitude === null) {
        return (
            <SafeAreaView className="flex-1 justify-center items-center">
                <Text>Loading location...</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView className="flex-1 justify-center items-center">
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
                    description='je bent hier'
                    pinColor={'red'}
                />
            </MapView>
        </SafeAreaView>
    );
}