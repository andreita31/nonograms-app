import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import Label from "../components/Label";
import Input from "../components/Input";
import Btn from "../components/Btn";
import { Image } from 'react-native';
import DatumDisplay from "../components/DatumDisplay";
import PersonalInformation from "../components/PersonalInformation";


export default function Profile({name,level, font, fontLabel, fontValue, fontSubtitulo, fontLabelInformation, fontValueInformation}){

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={{width: "100%", height: "100%"}}>
                    <View style={{width: "100%"}}>
                        
                        <View style={{width: "100%", paddingVertical: "2%" }}>
                            <Text style={{color: "rgb(71, 129, 126)", fontWeight: "bold", fontSize: 30, textAlign: "center"}}>
                                Mi perfil
                            </Text>
                        </View>
                        <View style={{width: "100%", paddingVertical: "2%" }}>
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
                        <View style={{width: "100%", paddingVertical: "5%" }}>
                            <DatumDisplay fontLabel={fontLabel} fontValue={fontValue} label={"Partidas Guardadas"} value={"25"} />
                        </View>
                        <View style={{width: "100%", paddingVertical: "1%" }}>
                            <DatumDisplay fontLabel={fontLabel} fontValue={fontValue} label={"Partidas Completadas"} value={"10"} />
                        </View>
                    </View>
                    
                    <View style={{width: "100%", paddingVertical: "5%" }}>
                        <Text style={{color: "rgb(240,85,147)", fontFamily:fontSubtitulo, fontSize: 22, textAlign: "center"}}>
                            Datos Personales
                        </Text>
                        
                        <View style={{width: "100%",paddingVertical: "3%", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <View style={{width: "50%", paddingVertical: "3%" }}>
                                <PersonalInformation fontLabelInformation={fontLabelInformation} fontValueInformation={fontValueInformation} label={"Nombre"} value={"Alberto"} />  
                            </View>
                            <View style={{width: "50%", paddingVertical: "3%" }}>
                                <PersonalInformation fontLabelInformation={fontLabelInformation} fontValueInformation={fontValueInformation} label={"Apellido"} value={"Flores"} /> 
                            </View>
                        </View>
                        
                        <View style={{width: "100%", paddingVertical: "3%" }}>
                            <PersonalInformation fontLabelInformation={fontLabelInformation} fontValueInformation={fontValueInformation} label={"Fecha de nacimiento"} value={"25/11/1998"} />
                        </View>
                        <View style={{width: "100%", paddingVertical: "3%" }}>
                            <PersonalInformation fontLabelInformation={fontLabelInformation} fontValueInformation={fontValueInformation} label={"Nombre de usuario"} value={"albert_f"} />
                        </View>
                        <View style={{width: "100%", paddingVertical: "3%" }}>
                            <PersonalInformation fontLabelInformation={fontLabelInformation} fontValueInformation={fontValueInformation} label={"Cuenta creada"} value={"14/06/2022"} />  
                        </View>
                        <View style={{width: "100%", paddingVertical: "3%" }}>
                            <PersonalInformation fontLabelInformation={fontLabelInformation} fontValueInformation={fontValueInformation} label={"Correo"} value={"a_flores@gmail.com"} /> 
                        </View>
                        
                    </View>
                    <View style={{width: "100%", paddingVertical: "2%" }}>
                        <Text style={{color: "rgb(240,85,147)", fontFamily:fontSubtitulo, fontSize: 22, textAlign: "center"}}>
                            Preferencias
                        </Text>
                        
                        <View style={{width: "100%",paddingVertical: "3%", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <View style={{width: "50%", paddingVertical: "3%" }}>
                                <PersonalInformation fontLabelInformation={fontLabelInformation} fontValueInformation={fontValueInformation} label={"Idioma"} value={"Español"} />  
                            </View>
                            <View style={{width: "50%", paddingVertical: "3%" }}>
                                <PersonalInformation fontLabelInformation={fontLabelInformation} fontValueInformation={fontValueInformation} label={"Modo"} value={"Claro"} /> 
                            </View>
                        </View>
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
    },
    inputsContainer: {
        width:'100%',
        paddingVertical: 12,
    }
});