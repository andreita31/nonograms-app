import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import Btn from "../components/Btn";
import LabelsInputs from "../components/LabelsInputs";

export default function Login({titleFont, inputsFont}){

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={{width: "100%", height: "100%"}}>
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
                            setPlaceholder={"Ingresa tu contraseña"}
                            setTitle={"Contraseña"}
                            setFont={inputsFont}
                        />
                    </View>
                    <View style={{width: "100%"}}>
                        <Btn
                            style={{ }} 
                            text={"Registrar"}
                            font={titleFont}
                        />
                        <Text style={{width: "100%", color: "rgb(71, 129, 126)", fontSize: 15, textAlign: "center", paddingTop: 12, fontFamily:inputsFont}}>
                            ¿No tienes cuenta?
                        </Text>
                        <Text style={{width: "100%", color: "rgb(71, 129, 126)", fontSize: 15, textAlign: "center", fontFamily:inputsFont}}>
                            Crear cuenta
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width:'80%',
        maxHeight:"90%",
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 30,
        flexGrow: 0
    },
    inputsContainer: {
        width:'100%',
        paddingVertical: 25,
    }
});