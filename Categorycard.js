import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity,Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"



export default function Categorycard({imgUrl,title}) {

    


        return (
            <View style={styles.container}>
                <TouchableOpacity >
                    <View  style={styles.design}>
                <Image source={{ uri:imgUrl }}
                style={{width:100, height:100, borderRadius:10, position:'absolute', }}
                />
                    <Text style={styles.txt}>{title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        
    },
    txt: {
        color: 'black',
    
   
    },

    
    design :{
        padding:12,
        margin:5,
        marginVertical:15,
        width:100,
        height:100,
        justifyContent:'flex-end'
    }
    
})