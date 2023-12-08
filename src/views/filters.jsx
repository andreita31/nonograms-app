import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import Label from "../components/Label";
import Input from "../components/Input";
import Btn from "../components/Btn";
import { Image } from 'react-native';
import DatumDisplay from "../components/DatumDisplay";
import PersonalInformation from "../components/PersonalInformation";


export default function Profile({}){

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={{width: "100%", height: "100%"}}>
                    
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
    },
    inputsContainer: {
        width:'100%',
        paddingVertical: 12,
    }
});