import { useState } from "react";
import { Pressable, Text, Touchable, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Button, StyleSheet } from "react-native";

export default function LabelLink({ font, onPress, style, children }){
    const styles = styles_fn(font);
    return (
        <Pressable onPress={onPress}>
            <Text style={[styles.label, style]}>
                {children}
            </Text>
        </Pressable>
    );
}

const styles_fn = (font) => StyleSheet.create({
    label: {
        fontSize: 15,
        fontFamily: font,
        textAlign: "center",
        textDecorationLine: 'underline'
    }
  });