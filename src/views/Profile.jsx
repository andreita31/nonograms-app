import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import Label from "../components/Label";
import Input from "../components/Input";
import Btn from "../components/Btn";
import { Image } from 'react-native';
import DatumDisplay from "../components/DatumDisplay";
import PersonalInformation from "../components/PersonalInformation";
import AppWrapper from "./AppWrapper";


export default function Profile(){
    const name="Alberto Flores";
    const level="level 8";
    const font="Inter_400Regular";
    const fontLabel="Inter_400Regular";
    const fontValue="Inter_700Bold";
    const fontSubtitulo="Inter_700Bold";
    const fontLabelInformation="Inter_700Bold";
    const fontValueInformation="Inter_400Regular";
    return (
        <AppWrapper centerContent={true}>
            <ScrollView style={styles.container}>
                <View style={{
                    padding: 20
                }}>
                    <View style={{width: "100%"}}>
                        
                        <View style={{width: "100%", paddingVertical: "2%" }}>
                            <Text style={{color: "rgb(71, 129, 126)", fontWeight: "bold", fontSize: 30, textAlign: "center"}}>
                                Mi perfil
                            </Text>
                        </View>
                        <View style={styles.dataContainer}>
                            <Text style={{color: "rgb(71, 129, 126)", fontFamily:font, fontSize: 15, textAlign: "center"}}>
                                {name}
                            </Text>
                            <Text style={{color: "rgb(71, 129, 126)", fontWeight: "bold", fontSize: 15, textAlign: "center"}}>
                                {level}
                            </Text>
                            
                        </View>
                    </View>
                    <View style={{width: "100%", paddingVertical: "3%" }}>
                    
                        <Text style={{color: "rgb(240,85,147)", fontFamily:fontSubtitulo, fontSize: 22, textAlign: "center"}}>
                            Nonogramas
                        </Text>
                        <View style={{width: "100%", gap: 15, paddingVertical: "3%", display: "flex", flexDirection: "row", flexWrap: 'wrap', justifyContent: "center"}}>
                            <DatumDisplay fontLabel={fontLabel} fontValue={fontValue} label={"Partidas Guardadas"} value={"25"} />
                            <DatumDisplay fontLabel={fontLabel} fontValue={fontValue} label={"Partidas Completadas"} value={"10"} />
                        </View>
                    </View>
                    
                    <View style={{width: "100%", paddingVertical: "5%" }}>
                        <Text style={{color: "rgb(240,85,147)", fontFamily:fontSubtitulo, fontSize: 22, textAlign: "center"}}>
                            Datos Personales
                        </Text>
                        
                        <View style={{width: "100%", columnGap: 35, rowGap: 15, paddingVertical: "3%", display: "flex", flexDirection: "row", flexWrap: 'wrap', justifyContent: "center"}}>
                            <PersonalInformation fontLabelInformation={fontLabelInformation} fontValueInformation={fontValueInformation} label={"Nombre"} value={"Alberto"} />  
                            <PersonalInformation fontLabelInformation={fontLabelInformation} fontValueInformation={fontValueInformation} label={"Apellido"} value={"Flores"} /> 
                            <PersonalInformation fontLabelInformation={fontLabelInformation} fontValueInformation={fontValueInformation} label={"Fecha de nacimiento"} value={"25/11/1998"} />
                            <PersonalInformation fontLabelInformation={fontLabelInformation} fontValueInformation={fontValueInformation} label={"Nombre de usuario"} value={"albert_f"} />
                            <PersonalInformation fontLabelInformation={fontLabelInformation} fontValueInformation={fontValueInformation} label={"Cuenta creada"} value={"14/06/2022"} />  
                            <PersonalInformation fontLabelInformation={fontLabelInformation} fontValueInformation={fontValueInformation} label={"Correo"} value={"a_flores@gmail.com"} /> 
                        </View>
                        
                    </View>
                    <View style={{width: "100%", paddingVertical: "2%" }}>
                        <Text style={{color: "rgb(240,85,147)", fontFamily:fontSubtitulo, fontSize: 22, textAlign: "center"}}>
                            Preferencias
                        </Text>
                        
                        <View style={{width: "100%", gap: 15, paddingVertical: "3%", display: "flex", flexDirection: "row", flexWrap: 'wrap', justifyContent: "center"}}>
                            <PersonalInformation fontLabelInformation={fontLabelInformation} fontValueInformation={fontValueInformation} label={"Idioma"} value={"Español"} />  
                            <PersonalInformation fontLabelInformation={fontLabelInformation} fontValueInformation={fontValueInformation} label={"Modo"} value={"Claro"} /> 
                        </View>
                    </View>
                </View>
                
            </ScrollView>
        </AppWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 0,
    },
    inputsContainer: {
        width:'100%',
        paddingVertical: 12,
    },
    dataContainer: {
        display: "flex",
        
    }
});