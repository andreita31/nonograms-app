import { useState } from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import Btn from "../components/Btn";
import LabelsInputs from "../components/LabelsInputs";
import AppWrapper from "./AppWrapper";
import LabelLink from "../components/LabelLink";
import { fonts } from "../../Fonts";

export default function Register({navigation}){
    const titleFont = fonts.Montserrat_700Bold;
    const inputsFont = fonts.Inter_400Regular;
    return (
        <AppWrapper centerContent={true} showGradient={true}>
            <ScrollView style={styles.container}>
                <View style={{
                    padding: 20
                }}>

                    <View style={{width: "100%"}}>
                        <Text style={{width: "100%", color: "rgb(71, 129, 126)", fontSize: 30, textAlign: "center", fontFamily: titleFont}}>
                            Crear cuenta
                        </Text>
                        <Text style={{width: "100%", color: "rgb(71, 129, 126)", fontSize: 15, textAlign: "center", fontFamily: inputsFont}}>
                            Crear cuenta para empezar a usar NonoGrams Pros
                        </Text>
                    </View>
                    <View style={styles.inputsContainer}>
                        <LabelsInputs
                            setPlaceholder={"Ingresa tu nombre"}
                            setTitle={"Nombre"}
                            setFont={inputsFont}
                        />
                        <LabelsInputs
                            setPlaceholder={"Ingresa tu apellido"}
                            setTitle={"Apellido"}
                            setFont={inputsFont}
                        />
                        <LabelsInputs
                            setPlaceholder={""}
                            setTitle={"Fecha de nacimiento"}
                            setFont={inputsFont}
                        />
                        <LabelsInputs
                            setPlaceholder={"Ingresa tu nombre de usuario"}
                            setTitle={"Nombre de usuario"}
                            setFont={inputsFont}
                        />
                        <LabelsInputs
                            setPlaceholder={"Ingresa tu correo"}
                            setTitle={"Correo"}
                            setFont={inputsFont}
                        />
                        <LabelsInputs
                            setPlaceholder={"Ingresa tu contraseña"}
                            setTitle={"Contraseña"}
                            setFont={inputsFont}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={{width: "100%"}}>
                        <Btn
                            style={{ }} 
                            text={"Registrar"}
                            font={titleFont}
                        />
                        <Text style={{width: "100%", color: "rgb(71, 129, 126)", fontSize: 15, textAlign: "center", paddingTop: 12, fontFamily:inputsFont}}>
                            ¿Ya tienes cuenta?
                        </Text>
                        <LabelLink onPress={() => navigation.replace('Login')} style={{ width: "100%", color: "rgb(71, 129, 126)" }} font={inputsFont}>
                            Inicia sesión
                        </LabelLink>
                    </View>
                </View>
            </ScrollView>
        </AppWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        maxWidth:'80%',
        backgroundColor: '#fff',
        borderRadius: 15,
        flexGrow: 0
    },
    inputsContainer: {
        width:'100%',
        paddingVertical: 20,
    }
});