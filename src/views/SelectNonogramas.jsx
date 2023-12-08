import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import Btn from "../components/Btn";
import LabelsInputs from "../components/LabelsInputs";
import dropdown from "../components/dropdown";

export default function Register({titleFont, inputsFont, titleFiltros}){

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={{width: "100%", height: "100%"}}>
                    
                            
                        <View style={{width: "100%", paddingVertical: "2%" }}>
                            <Text style={{color: "rgb(71, 129, 126)", fontWeight: "bold", fontSize: 30, textAlign: "center"}}>
                                Nonogramas
                            </Text>
                        </View>
                        <View style={{width: "50%", paddingVertical: "2%", justifyContent: "right", display: "flex" }}>
                            <Btn
                                style={{ }} 
                                text={"Filtros"}
                                font={titleFiltros}
                            />
                        </View>
                        
                    
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width:'80%',
        maxHeight:'90%',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        flexGrow: 0
    },
    inputsContainer: {
        width:'100%',
        paddingVertical: 20,
    }
});