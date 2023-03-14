import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import EvilIcons from "react-native-vector-icons/EvilIcons"


export default function Restaurent({ imgUrl, title,Rating, Type, Address }) {
    return (
        <View>
            <TouchableOpacity style={styles.design}>
                <Image source={{ uri: imgUrl }}
                    style={{ width: 250, height: 250, borderRadius: 10, }}
                />
                <View>
                    <Text style={[styles.title, styles.txt]}>{title}</Text>

                    <View style={styles.descrip}>
                        <MaterialIcons name="star" size={20} color={'#8bbc8e'} style={{opacity:0.5}}/>
                        <Text style={styles.txt1}>{Rating} . {Type}</Text>
                    </View>

                    <View style={styles.descrip}>
                            <EvilIcons name="location" size={20} color={'grey'} style={{opacity:0.5}}/>
                            <Text style={styles.txt1}>Nearby . {Address}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        color: 'black'

    },
    design: {
        width: 250,
        height: 350,
        marginVertical: 20,
        margin: 10,
        borderRadius: 10,
        backgroundColor:'white'
        

    },
    title: {
        color: 'black',
        fontSize: 20,
        marginHorizontal:12,
        marginTop:12,
    },
    descrip:{
        flexDirection:'row',
        marginHorizontal:12,
    },
    txt1:{
        color:'grey',

    }

})