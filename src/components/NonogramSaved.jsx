import { StyleSheet, View } from "react-native";
import NonogramPreview from "./NonogramPreview";
import NonoCharacteristic from "./NonoCharacteristic";
import NonoSize from "./NonoSize";

export default function NonogramSaved({nonogram_data: {width: nono_width, height: nono_height, colors, data, category: {name: category_name}, difficulty: {name: difficulty_name}}, img_width, img_height, fontName, fontChar}){

    return (
        <View style={styles.container}>
            <View style={{borderWidth: 2, borderColor: "rgba(71,129,126, .5)", borderRadius: 15, overflow: "hidden"}}>
                <NonogramPreview
                    nonogram={
                        {
                            width: nono_width,
                            height: nono_height,
                            colors,
                            data
                        }
                    }
                    width={img_width}
                    height={img_height}
                />
            </View>
            <View style={styles.characteristicsContainer}>
                <NonoCharacteristic
                    name={"Nivel"}
                    characteristic={difficulty_name}
                    fontsName={fontName}
                    fontsCharacteristic={fontChar}
                    />
                <NonoCharacteristic
                    name={"Categoría"}
                    characteristic={category_name}
                    fontsName={fontName}
                    fontsCharacteristic={fontChar}
                />
                <NonoCharacteristic
                    name={"Tiempo"}
                    characteristic={"00:25:37"}
                    fontsName={fontName}
                    fontsCharacteristic={fontChar}
                />
                <NonoSize
                    name={"Tamaño"}
                    nonoWidth={nono_width}
                    nonoHeight={nono_height}
                    fontsName={fontName}
                    fontsSize={fontChar}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: 'row',
        padding: 18,
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 15,
    },
    characteristicsContainer: {
        flex: 1,
        paddingHorizontal: 5,
        gap: 8,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
});