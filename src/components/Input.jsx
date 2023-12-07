import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export default function Input({ placeholderText, font }){
    const [text, setText] = useState('');

    return (
        <>
            <TextInput
                style={styles(font).input}
                onChangeText={setText}
                placeholder = {placeholderText}
                placeholderTextColor={"rgba(71, 129, 126, .6)"}
            />
        </>
    );
}

const styles = (font) => StyleSheet.create({
    input: {
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: "rgba(192,252,249, .6)",
        fontSize: 18,
        color: "rgb(71, 129, 126)",
        borderRadius: 15,
        fontFamily: font,
    },
  });