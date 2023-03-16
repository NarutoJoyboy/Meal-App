import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Dishes({Dishname, Dishitem, Dishcost, imgUrl}){
    return(
        <View style={styles.container}> 
            
            <TouchableOpacity>
                <View style={styles.data}>
            <Text style={styles.txt}>{Dishname}</Text>
            <Text style={styles.txt2}>{Dishitem}</Text>
            <Text style={styles.txt1}>{Dishcost}</Text>
            </View>
            </TouchableOpacity>
            
            <View>
            <Image source={{ uri: imgUrl }}
                style={{ width: 100, height: 100, borderRadius: 10, }}
                />
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal:20,
        borderBottomWidth:0.2,
        flexDirection:'row',
        marginVertical:10,
    },
    txt:{
        color:'black',
        
        fontSize:20,
        opacity:0.65
    },
    txt1:{
        color:'grey',
        opacity:0.5, 
        marginTop:5,  
    },
    data:{
        marginBottom:30  
    },
    txt2:{
        width:270,
        color:'grey',
        opacity:0.5,
        marginTop:5,
    }
})