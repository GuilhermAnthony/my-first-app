import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View, } from "react-native";

export function Form() {
    const [height, setHeight] = useState('');
    const[weight, setWeight] = useState('');
    const[imc, setImc] = useState('');

    const [imcList, setImcList] = useState([]);

    function validatorImc ()
    {
        
        if (height !== undefined && weight !== undefined) {
            let totalImc = (weight/(height*height)).toFixed(2)
            
           imcList.push(totalImc)
           setImc(totalImc)
           console.log(imcList) 
           
            setHeight('')
            setWeight('')
        }
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura:</Text>
                <TextInput 
                    onChangeText={setHeight}
                    inputMode="numeric"
                    placeholder="Ex. 1.75"
                    value={height}
                    style={styles.formInput}
                />

                <Text style={styles.formLabel}>Peso:</Text>
                <TextInput
                    onChangeText={setWeight}
                    inputMode="numeric"
                    placeholder="Ex. 67.5"
                    value={weight}
                    style={styles.formInput}
                />

                <Pressable
                    onPress={() => validatorImc()}
                    style={styles.formButton}
                >
                    <Text style={styles.formButtonText}>Calcular</Text>
                </Pressable>

                <Text style={styles.formResult}>{imc}</Text>


            </View>
        </View>
            
    )
}

const styles = StyleSheet.create({

    formContext:{
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#fff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30

    },
    form: {
        width: "100%",
        height: "100%",
        marginTop: 30,
        padding: 10
    },

    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20
    },

    formInput: {
        width: "90%",
        height: 40,
        borderRadius: 30,
        backgroundColor: "#f6f6f6",
        margin: 12,
        paddingLeft: 10
    },

    formButton: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 12,
        margin: 30
    },

    formButtonText: {
        fontSize: 20,
        color: "#fff",
    },

    formResult: {
        flex: 1,
        marginTop: 15,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: "center",
        width: "100%"
    },
});