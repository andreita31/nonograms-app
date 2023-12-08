import { StyleSheet, Text, View } from "react-native";

export default function NonoCharacteristic({name, characteristic, fontsName, fontsCharacteristic}){
    return (
        <>
            <View style={styles.container}>
                <Text style={{color: "rgb(71,129,126)", fontFamily: fontsName, textAlign:"center"}}>{name}</Text>
                <Text style={{color: "rgb(71,129,126)", fontFamily: fontsCharacteristic, textAlign:"center"}}>{characteristic}</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "auto",
        padding: 6,
        gap: 3,
        paddingBottom: 8,
    }
});