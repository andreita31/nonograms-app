import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import Btn from "../components/Btn";
import LabelsInputs from "../components/LabelsInputs";
import AppWrapper from "./AppWrapper";
import LabelLink from "../components/LabelLink";
import { fonts } from "../../Fonts";

export default function Login({navigation}){
    const titleFont = fonts.Montserrat_700Bold;
    const inputsFont = fonts.Inter_400Regular;
    return (
        <AppWrapper centerContent={true} showGradient={true}>
            <ScrollView style={styles.container}>
                <View style={{
                    padding: 20
                }}>
                    <View style={{width: "100%", paddingBottom: 8}}>
                        <Text style={{width: "100%", color: "rgb(71, 129, 126)", fontSize: 30, textAlign: "center", fontFamily: titleFont}}>
                            Iniciar sesión
                        </Text>
                        <Text style={{width: "100%", color: "rgb(71, 129, 126)", fontSize: 15, textAlign: "center", fontFamily: inputsFont}}>
                            Inicia sesión para empezar a usar NonoGrams Pros
                        </Text>
                    </View>
                    <View style={styles.inputsContainer}>
                        <LabelsInputs
                            setPlaceholder={"Ingresa tu nombre de usuario"}
                            setTitle={"Nombre de usuario"}
                            setFont={inputsFont}
                        />
                        <LabelsInputs
                            secureTextEntry={true}
                            setPlaceholder={"Ingresa tu contraseña"}
                            setTitle={"Contraseña"}
                            setFont={inputsFont}
                        />
                    </View>
                    <View style={{width: "100%"}}>
                        <Btn
                            style={{ }} 
                            text={"Iniciar sesión"}
                            font={titleFont}
                        />
                        <Text style={{width: "100%", color: "rgb(71, 129, 126)", fontSize: 15, textAlign: "center", paddingTop: 12, fontFamily:inputsFont}}>
                            ¿No tienes cuenta?
                        </Text>
                        <LabelLink onPress={() => navigation.replace('Register')} style={{ width: "100%", color: "rgb(71, 129, 126)" }} font={inputsFont}>
                            Crear cuenta
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
        paddingVertical: 25,
    }
});