import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import Label from "../components/Label";
import Input from "../components/Input";
import Btn from "../components/Btn";
import LabelsInputs from "../components/LabelsInputs";

export default function Register({titleFont, inputsFont}){

    return (
        <>
            <ScrollView style={styles.container}>
                <View>
                    <Text style={{color: "rgb(71, 129, 126)", fontSize: 30, textAlign: "center", fontFamily: titleFont}}>
                        Crear cuenta
                    </Text>
                    <Text style={{color: "rgb(71, 129, 126)", fontSize: 15, textAlign: "center", fontFamily: inputsFont}}>
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
                    />
                </View>
                <View style={{width: "100%"}}>
                    <Btn
                        style={{ }} 
                        text={"Registrar"}
                        font={titleFont}
                    />
                    <Text style={{color: "rgb(71, 129, 126)", fontSize: 15, textAlign: "center", paddingTop: 12, fontFamily:inputsFont}}>
                        ¿Ya tienes cuenta?
                    </Text>
                    <Text style={{color: "rgb(71, 129, 126)", fontSize: 15, textAlign: "center", fontFamily:inputsFont}}>
                        Iniciar Sesión
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