import { center } from "@shopify/react-native-skia";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function DatumDisplay({ label, value, fontValue, fontLabel, style }){
const styles = styles_fn(fontLabel, fontValue);
    return (
        <View style={[styles.container, style ]}>
            <Text style={styles.value}>{ value }</Text>
            <Text style={styles.label}>{ label }</Text>
        </View>
    );
}


const styles_fn = (fontLabelInformation, fontValueInformation) => StyleSheet.create({
    container: { 
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
    }, 
    label: {
        fontSize: 16,
        color: "rgb(71,129,126)",
        fontWeight: "600",
        fontFamily: fontLabelInformation,
        paddingLeft: 5
    },
    value: {
        fontSize: 16,
        color: "rgb(71,129,126)",
        fontWeight: "600",
        fontFamily: fontValueInformation,
        paddingLeft: 5
    },
  });