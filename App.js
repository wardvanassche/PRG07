import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import MapScreen from "./screens/MapScreen";
import "./global.css";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Map" component={MapScreen}/>
                <Tab.Screen name="List" component={ListScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}