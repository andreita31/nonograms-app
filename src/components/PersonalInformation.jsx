import { center } from "@shopify/react-native-skia";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";

export default function DatumDisplay({ label, value, fontValueInformation, fontLabelInformation }){
const styles = styles_fn(fontLabelInformation, fontValueInformation);
    return (
        <>
            <Text style={styles.label}>{ label }</Text>
            <Text style={styles.value}>{ value }</Text>
            
        </>
    );
}

const styles_fn = (fontLabelInformation, fontValueInformation) => StyleSheet.create({
    label: {
        fontSize: 16,
        color: "rgb(71,129,126)",
        fontWeight: "600",
        fontFamily: fontLabelInformation,
        textAlign: "center",
        paddingLeft: 5,
        width: "100%"
    },
    value: {
        fontSize: 16,
        color: "rgb(71,129,126)",
        fontWeight: "600",
        fontFamily: fontValueInformation,
        textAlign: "center",
        paddingLeft: 5,
        width: "100%"
    },
  });