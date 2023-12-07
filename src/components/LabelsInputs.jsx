import { StyleSheet, View } from "react-native";
import Label from "./Label";
import Input from "./Input";

export default function LabelsInputs({ setPlaceholder, setFont, setTitle }){

    return (
        <>
            <View style={styles.container}>
                <Label text={setTitle}/>
                <Input
                    placeholderText={setPlaceholder}
                    font={setFont}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        gap: 4,
        paddingBottom: 8
    }
    // input: {
    //     width: "100%",
    //     paddingVertical: 10,
    //     paddingHorizontal: 15,
    //     backgroundColor: "rgba(192,252,249, .6)",
    //     fontSize: 18,
    //     color: "rgb(71, 129, 126)",
    //     borderRadius: 15,
    //     fontFamily: font,
    //     marginBottom: 8
    // },
  });