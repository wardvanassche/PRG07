import {SafeAreaView, Text, Alert} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import useLocation from '../hooks/useLocation';
import {useFocusEffect} from '@react-navigation/native';
import React from 'react';

export default function MapScreen() {
    const {latitude, longitude, errorMsg} = useLocation();

    useFocusEffect(
        React.useCallback(() => {
            if (errorMsg) {
                Alert.alert(
                    'Error',
                    errorMsg,
                    [
                        {
                            text: 'OK',
                            onPress: () => console.log('OK pressed'),
                            style: 'default',
                        },
                    ]
                );
            }
        }, [errorMsg])
    );

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