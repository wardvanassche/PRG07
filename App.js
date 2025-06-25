import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MapScreen from "./app/screens/MapScreen";
import ListScreen from './app/screens/ListScreen';
import SettingsScreen from './app/screens/SettingsScreen';
import "./global.css";
import Icon from 'react-native-vector-icons/Ionicons';
import useTheme from "./app/hooks/useTheme";
import {ThemeProvider} from "./app/context/ThemeContext";
import {StatusBar} from "react-native";

const Tab = createBottomTabNavigator();

function AppContent() {
    const theme = useTheme();

    return (
        <NavigationContainer>
            <StatusBar
                barStyle={theme.name === 'dark' ? 'light-content' : 'dark-content'}
            />
            <Tab.Navigator
                screenOptions={{
                    animation: "shift",
                    tabBarStyle: {
                        backgroundColor: theme.backgroundColor,
                        borderTopWidth: 1,
                        borderTopColor: theme.tabBarBorderColor,
                    },
                    tabBarActiveTintColor: theme.tabBarActiveTintColor,
                    tabBarInactiveTintColor: theme.tabBarInactiveTintColor,
                    headerStyle: {
                        backgroundColor: theme.headerBackgroundColor,
                        borderBottomWidth: 1,
                        borderBottomColor: theme.headerBorderColor,
                        elevation: 0,
                        shadowOpacity: 0,
                    },
                    headerTitleStyle: {
                        color: theme.headerTextColor,
                    },
                    headerTintColor: theme.headerIconColor,
                }}
            >
                <Tab.Screen
                    name="Map"
                    component={MapScreen}
                    options={{
                        tabBarIcon: ({color}) => <Icon name="map-outline" size={22} color={color}/>,
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="List"
                    component={ListScreen}
                    options={{
                        tabBarIcon: ({color}) => <Icon name="list-outline" size={22} color={color}/>,
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        tabBarIcon: ({color}) => <Icon name="settings-outline" size={22} color={color}/>,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <AppContent/>
        </ThemeProvider>
    );
}