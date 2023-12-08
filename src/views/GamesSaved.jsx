import { FlatList, ScrollView, Text, View } from "react-native";
import NonogramSaved from "../components/NonogramSaved";

export default function GamesSaved(){
    const nonograms_array =
    [
        {
            id: 1,
            width: 5,
            height: 5,
            colors: [
                "#fff",
                "rgb(0, 0, 0)"
            ],
            data: [
                [ 0, 0, 1, 0, 0 ],
                [ 1, 1, 1, 1, 1 ],
                [ 1, 1, 1, 1, 1 ],
                [ 0, 0, 1, 0, 0 ],
                [ 0, 1, 1, 1, 0 ]
            ],
            category: {
                name: "Flores"
            },
            difficulty: {
                name: "Difícil"
            }
        },
        {
            id: 2,
            width: 5,
            height: 5,
            colors: [
                "#fff",
                "rgb(0, 0, 0)"
            ],
            data: [
                [ 0, 0, 1, 0, 0 ],
                [ 1, 1, 1, 1, 1 ],
                [ 1, 1, 1, 1, 1 ],
                [ 0, 0, 1, 0, 0 ],
                [ 0, 1, 1, 1, 0 ]
            ],
            category: {
                name: "Flores"
            },
            difficulty: {
                name: "Difícil"
            }
        }
    ];
    return(
        <FlatList
            data={nonograms_array}
            style={{
                width: "100%"
            }}
            renderItem={({item}) => 
            <View 
                style={{marginVertical: 8}}
                key={item.id}
            >
                <NonogramSaved 
                    nonogram_data={item}
                    img_width={150}
                    img_height={150}
                    fontName={"Montserrat_700Bold"}
                    fontChar={"Inter_400Regular"}
                />
            </View>
            }
            keyExtractor={item => item.id}
        />
    );
}