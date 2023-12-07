import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from "expo";
import { LinearGradient } from "expo-linear-gradient";
import Register from './src/views/Register';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold, Montserrat_900Black } from '@expo-google-fonts/montserrat';
export default function App() {
    let [fontLoaded, error] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_700Bold,
        Inter_900Black,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,
        Montserrat_900Black
  })

  if(fontLoaded){
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Register
                titleFont={"Inter_700Bold"}
                inputsFont={"Montserrat_500Medium"}
            />
            <LinearGradient
                style={styles.background}
                colors={['rgb(71,129,126)', 'rgb(192,252,249)']}
            />
        </View>
    );
  }
  return (<View></View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
