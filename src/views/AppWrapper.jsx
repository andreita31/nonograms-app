import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppWrapper({children, showGradient, centerContent}){
    return (
        <View style={[styles.container, centerContent && styles.centerContent]}>
            { showGradient && <LinearGradient style={styles.background} colors={['rgb(71,129,126)', 'rgb(192,252,249)']} /> }
            <SafeAreaView>
                <View style={[styles.safeAreaChild, centerContent && styles.centerContent]}>
                    {children}
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    centerContent: {
        justifyContent: "center",
        alignItems: 'center'
    },
    safeAreaChild:{
        height: '100%',
        width: '100%',
        display: "flex",
        flexDirection: 'column'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -10
    },
});