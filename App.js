import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold, Montserrat_900Black } from '@expo-google-fonts/montserrat';
import NonoCharacteristic from './src/components/NonoCharacteristic';
import NonoSize from './src/components/NonoSize';
import GameSaved from './src/views/GameSaved';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_700Bold,
        Inter_900Black,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,
        Montserrat_900Black
  })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <StatusBar style="auto" />
            <GameSaved/>
            <NonoCharacteristic
                name={"Nivel"}
                characteristic={"Difícil"}
                fontsName={"Montserrat_700Bold"}
                fontsCharacteristic={"Inter_500Medium"}
            />
            <NonoCharacteristic
                name={"Categoría"}
                characteristic={"Paisajes"}
                fontsName={"Montserrat_700Bold"}
                fontsCharacteristic={"Inter_500Medium"}
            />
            <NonoCharacteristic
                name={"Tiempo"}
                characteristic={"00:25:37"}
                fontsName={"Montserrat_700Bold"}
                fontsCharacteristic={"Inter_500Medium"}
            />
            <NonoSize
                name={"Tamaño"}
                nonoWidth={"10"}
                nonoHeight={"15"}
                fontsName={"Montserrat_700Bold"}
                fontsSize={"Inter_500Medium"}
            />
            <LinearGradient
                style={styles.background}
                colors={['rgb(71,129,126)', 'rgb(192,252,249)']}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -10
    },
});
