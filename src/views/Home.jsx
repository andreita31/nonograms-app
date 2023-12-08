import { FlatList, Text, View } from "react-native";
import AppWrapper from "./AppWrapper";
import NonogramSaved from "../components/NonogramSaved";
import { fonts } from "../../Fonts";

export default function Home ({}){
    const titleFont = fonts.Montserrat_700Bold;
    const inputsFont = fonts.Inter_400Regular;
    const nonograms_array =
    [
        {
            "id": 1,
            "slug": "airplane",
            "name": "Airplane",
            "width": 5,
            "height": 5,
            "colors": [
                "#fff",
                "rgb(0, 0, 0)"
            ],
            "data": [
                [ 0, 0, 1, 0, 0 ],
                [ 1, 1, 1, 1, 1 ],
                [ 1, 1, 1, 1, 1 ],
                [ 0, 0, 1, 0, 0 ],
                [ 0, 1, 1, 1, 0 ]
            ],
            "category": {
                "id": 1,
                "slug": "flores",
                "name": "Flores"
            },
            "difficulty": {
                "id": 1,
                "slug": "dificil",
                "name": "Difícil"
            },
            "tags": []
        },
        {
            "id": 2,
            "slug": "airplane",
            "name": "Airplane",
            "width": 5,
            "height": 5,
            "colors": [
                "#fff",
                "rgb(0, 0, 0)"
            ],
            "data": [
                [ 0, 0, 1, 0, 0 ],
                [ 1, 1, 1, 1, 1 ],
                [ 1, 1, 1, 1, 1 ],
                [ 0, 0, 1, 0, 0 ],
                [ 0, 1, 1, 1, 0 ]
            ],
            "category": {
                "id": 1,
                "slug": "flores",
                "name": "Flores"
            },
            "difficulty": {
                "id": 1,
                "slug": "dificil",
                "name": "Difícil"
            },
            "tags": []
        }
    ];
    return (
        <AppWrapper title={"Explorar"}>
            <FlatList
                data={nonograms_array}
                style={{
                    
                }}
                renderItem={({item}) => 
                <View 
                    style={{marginVertical: 8, marginHorizontal: 8}}
                    key={item.id}
                >
                <NonogramSaved 
                    nonogram_data={item}
                    img_width={150}
                    fontName={titleFont}
                    fontChar={inputsFont}
                />
                </View>
                }
                keyExtractor={item => item.id}
            />
        </AppWrapper>
    );
}