import { useState } from "react";
import { StyleSheet, Text } from "react-native";

export default function Label({ text, font }){

    return (
        <>
            <Text style={styles(font).text}>{ text }</Text>
        </>
    );
}

const styles = (font) => StyleSheet.create({
    text: {
        fontSize: 16,
        color: "rgb(71,129,126)",
        fontWeight: "600",
        fontFamily: font,
        paddingLeft: 5,
        width: "100%"
    },
  });