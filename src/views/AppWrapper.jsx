import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fonts } from "../../Fonts";

export default function AppWrapper({children, showGradient, centerContent, title}){
    return (
        <View style={[styles.container, centerContent && styles.centerContent]}>
            { showGradient && <LinearGradient style={styles.background} colors={['rgb(71,129,126)', 'rgb(192,252,249)']} /> }
            <SafeAreaView>
                <View style={[styles.safeAreaChild, centerContent && styles.centerContent]}>
                    {title && <Text style={styles.titleStyle}>{title}</Text>}
                    {children}
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    titleStyle: {
        marginVertical: 18,
        fontSize: 22,
        fontFamily: fonts.Montserrat_700Bold,
        color: "rgb(71,129,126)",
        alignSelf: "center"
    },
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
    },
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -10
    },
});