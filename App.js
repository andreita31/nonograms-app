import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

import { useFonts } from 'expo-font';
import NonoCharacteristic from './src/components/NonoCharacteristic';
import NonoSize from './src/components/NonoSize';
import GameSaved from './src/views/GameSaved';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/views/Login'
import Register from './src/views/Register'
import Home from './src/views/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { imported_fonts } from './Fonts';
import Ionicons from '@expo/vector-icons/Ionicons';
import TestRoom from './src/views/TestRoom';
SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
    return (
        <Tab.Navigator initialRouteName="Test" screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen 
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Ionicons name="md-checkmark-circle" size={32} color="green" />;
                    },
                }}
                name="Home" component={Home}  
            />
            
            <Tab.Screen 
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Ionicons name="md-checkmark-circle" size={32} color="green" />;
                    },
                }}
                name="Test" 
                component={TestRoom}  
            />
        </Tab.Navigator>
    );
}

export default function App() {
    const [fontsLoaded] = useFonts(imported_fonts)

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <NavigationContainer onReady={onLayoutRootView}>
            <Stack.Navigator initialRouteName="App" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="App" component={HomeTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

