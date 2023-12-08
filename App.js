import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/views/Login'
import Register from './src/views/Register'
import Home from './src/views/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { imported_fonts } from './Fonts';
import Icon from '@expo/vector-icons/FontAwesome';
import TestRoom from './src/views/TestRoom';
import Profile from './src/views/Profile';
import GamesSaved from './src/views/GamesSaved';

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
                        return <Icon name="home" size={size} color={color} />;
                    },
                }}
                name="Home" component={Home}  
            />
            
            <Tab.Screen 
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Icon name="bug" size={size} color={color} />;
                    },
                }}
                name="Test" 
                component={TestRoom}  
            />
            <Tab.Screen 
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Icon name="save" size={size} color={color} />;
                    },
                }}
                name="Juegos Guardados" 
                component={GamesSaved}  
            />
            <Tab.Screen 
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Icon name="user" size={size} color={color} />;
                    },
                }}
                name="Perfil" 
                component={Profile}  
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

