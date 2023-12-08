import { useState } from "react";
import { Pressable, Text } from "react-native";
import { Button, StyleSheet } from "react-native";

export default function Btn({ text, font }){

    return (
        <>
            <Pressable style={styles.btn}>
                <Text style={styles(font).btnText}>
                    {text}
                </Text>
            </Pressable>
        </>
    );
}

const styles = (font) => StyleSheet.create({
    btn: {
    },
    btnText: {
        padding: 15,
        borderRadius: 15,
        backgroundColor: "rgb(240,85,147)",
        fontSize: 18,
        fontFamily: font,
        color: "#fff",
        textAlign: "center",
    }
  });