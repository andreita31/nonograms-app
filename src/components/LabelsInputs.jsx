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
});