import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View, } from "react-native";

export function Triangulo()
{
    //const [side, setside] = useState("");
    let teste;
    function Calculator(){}

    return(
        <View>
            <View>
                <Text>Digite o lado</Text>
                <TextInput placeholder="Ex:21" onChange={teste}/>
                <Pressable onPress={()=>Calculator()}>
                    
                </Pressable>
            </View>
        </View>
    )
}