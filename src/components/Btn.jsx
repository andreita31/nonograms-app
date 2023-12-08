import { useState } from "react";
import { Pressable, Text, Touchable, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Button, StyleSheet } from "react-native";

export default function Btn({ text, font, onPress }){
    const styles = styles_fn(font);
    return (
        <TouchableOpacity activeOpacity={.8} onPress={onPress}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles_fn = (font) => StyleSheet.create({
    touchable:{
        borderRadius: 15,
        backgroundColor: "rgb(240,85,147)",
    },
    btn: {
        backgroundColor: "rgb(240,85,147)",
        flex: 1,
        justifyContent: 'center',
        padding: 15,
        borderRadius: 15,
    },
    btnText: {
        fontSize: 18,
        fontFamily: font,
        color: "#fff",
        textAlign: "center",
    }
  });