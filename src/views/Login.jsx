import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import Label from "../components/Label";
import Input from "../components/Input";
import Btn from "../components/Btn";

export default function Login(){

    return (
        <>
            <ScrollView style={styles.container}>
                <View>
                    <Text style={{color: "rgb(71, 129, 126)", fontWeight: "bold", fontSize: 30, textAlign: "center"}}>
                        Iniciar Sesión
                    </Text>
                    <Text style={{color: "rgb(71, 129, 126)", fontWeight: "300", fontSize: 15, textAlign: "center"}}>
                        Inicia sesion pra empezar a usar NonoGrams Pro
                    </Text>
                </View>
                <View style={styles.inputsContainer}>
                   <Label text={"Nombre de usuario"}/>
                    <Input
                        placeholderText={"Ingresa tu nombre de usuario"}
                        font={"Roboto_900Black"}
                    />
                    <Label text={"Contraseña"}/>
                    <Input
                        placeholderText={"Ingresa tu contraseña"}
                        font={"Roboto_900Black"}
                    />
                </View>
                <View style={{width: "100%"}}>
                    <Btn
                        style={{ }} 
                        text={"Iniciar Sesión"}
                        font={"Roboto_900Black"}
                    />
                    <Text style={{color: "rgb(71, 129, 126)", fontWeight: "300", fontSize: 15, textAlign: "center", paddingTop: 12}}>
                        ¿No tienes una cuenta?
                    </Text>
                    <Text style={{color: "rgb(71, 129, 126)", fontWeight: "600", fontSize: 15, textAlign: "center"}}>
                        Crear Cuenta
                    </Text>
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