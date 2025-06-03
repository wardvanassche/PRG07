import { StyleSheet, View, Text } from 'react-native';

export default function ListScreen() {
    return (
        <View style={styles.container}>
            <Text>List Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});