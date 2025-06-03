import {StyleSheet, SafeAreaView} from 'react-native';
import MapView from "react-native-maps";

export default function MapScreen() {
    const region = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    return (
        <SafeAreaView style={styles.container}>
            <MapView style={styles.map} region={region} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    map: {
        width: '100%',
        height: '100%',
    }
});