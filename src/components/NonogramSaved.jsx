import { StyleSheet, Text, View } from "react-native";
import NonogramPreview from "./NonogramPreview";
import NonoCharacteristic from "./NonoCharacteristic";
import NonoSize from "./NonoSize";
import { fonts } from "../../Fonts";

export default function NonogramSaved({nonogram_data: {name, width: nono_width, height: nono_height, colors, data, category: {name: category_name}, difficulty: {name: difficulty_name}}, img_width, img_height, fontName, fontChar}){

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
                    blurry={true}
                    blurLevel={5}
                    width={img_width ?? img_height}
                    height={img_height ?? img_width}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{name}</Text>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: 'row',
        padding: 10,
        alignItems: "stretch",
        backgroundColor: "#fff",
        borderRadius: 15,
    },
    characteristicsContainer: {
        paddingHorizontal: 5,
        rowGap: 6,
        columnGap: 25,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    title: {
        fontFamily: fonts.Montserrat_900Black,
        fontSize: 18,
        color: "#F05593"
    },
    infoContainer: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        gap: 10
    }
});