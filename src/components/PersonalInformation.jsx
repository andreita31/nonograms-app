import { center } from "@shopify/react-native-skia";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PersonalInformation({ style, label, value, fontValueInformation, fontLabelInformation }){
    const styles = styles_fn(fontLabelInformation, fontValueInformation);
    return (
        <View style={[styles.container, style ]}>
            <Text style={styles.label}>{ label }</Text>
            <Text style={styles.value}>{ value }</Text>
            
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