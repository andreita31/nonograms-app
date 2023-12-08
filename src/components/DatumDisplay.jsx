import { center } from "@shopify/react-native-skia";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";

export default function DatumDisplay({ label, value, fontValue, fontLabel }){
const styles = styles_fn(fontLabel, fontValue);
    return (
        <>
            <Text style={styles.value}>{ value }</Text>
            <Text style={styles.label}>{ label }</Text>
        </>
    );
}

const styles_fn = (fontLabel, fontValue) => StyleSheet.create({
    label: {
        fontSize: 16,
        color: "rgb(71,129,126)",
        fontWeight: "600",
        fontFamily: fontLabel,
        textAlign: "center",
        paddingLeft: 5,
        width: "100%"
    },
    value: {
        fontSize: 16,
        color: "rgb(71,129,126)",
        fontWeight: "600",
        fontFamily: fontValue,
        textAlign: "center",
        paddingLeft: 5,
        width: "100%"
    },
  });