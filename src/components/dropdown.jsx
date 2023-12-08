import { center } from "@shopify/react-native-skia";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";

export default function DatumDisplay({ option}){
const styles = styles_fn(fontLabel, fontValue);
    return (
        <>
            <Picker.Item label="{option}" value="opcion1" />
            <Picker.Item label="{option}" value="opcion2" />
            <Picker.Item label="{option}" value="opcion3" />
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
