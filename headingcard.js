import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"

export default function Featuredcard({title, About, navigation, screenname}){
    return(
        <View>
            <View style={styles.design}>
            <Text style={styles.txt}>{title}</Text>
            <AntDesign name={'arrowright'} size={30} color={'skyblue'} />
            </View>
            <Text style={styles.txt1}>{About}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    design: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:13,
    },
    txt: {
        color:'black',
        fontSize:20,
    },
    txt1:{
        color:'grey',
        marginHorizontal:13,
    }
})