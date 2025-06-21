import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MapScreen from "./app/screens/MapScreen";
import ListScreen from './app/screens/ListScreen';
import SettingsScreen from './app/screens/SettingsScreen';
import "./global.css";
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    animation: "shift",
                }}
            >
                <Tab.Screen
                    name="Map"
                    component={MapScreen}
                    options={{
                        tabBarIcon: () => <Icon name="map-outline" size={24} color="black" />,
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="List"
                    component={ListScreen}
                    options={{
                        tabBarIcon: () => <Icon name="list-outline" size={24} color="black" />,
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        tabBarIcon: () => <Icon name="settings-outline" size={24} color="black" />,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}