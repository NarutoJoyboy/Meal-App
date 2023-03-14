import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Dimensions } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import EvilIcons from "react-native-vector-icons/EvilIcons"
import Dishes from "./dishes";


export default function Menu({ title, Rating, Type, Address, Descrption }) {


    

    return (
        <View>

            
                <View style={styles.data}>
                    <View style={{ marginHorizontal: 20 }}>
                        <Text style={[styles.title, styles.txt]}>{title}</Text>

                        <View style={styles.descrip}>
                            <MaterialIcons name="star" size={20} color={'#8bbc8e'} style={{ opacity: 0.5 }} />
                            <Text style={styles.txt1}>{Rating} . {Type}</Text>

                            <EvilIcons name="location" size={20} color={'grey'} style={{ opacity: 0.5 }} />
                            <Text style={styles.txt1}>Nearby . {Address}</Text>
                        </View>
                        <View>
                            <Text style={styles.txt1}>{Descrption}</Text>
                        </View>
                        <View style={styles.query1}>
                            <View style={[styles.query2]}>
                                <EvilIcons name="question" size={30} color={'grey'} style={{ opacity: 0.5 }} />
                                <Text style={[styles.txt, styles.query3]}>Have a food allergy?</Text>
                            </View>
                            <EvilIcons name="chevron-right" size={40} color={'skyblue'} />
                        </View>
                    </View>
                </View>
                <Text style={{ color: 'black', fontSize: 21, marginLeft: 20, marginTop: 30, marginBottom: 15 }}>Menu</Text>

                <View style={{ backgroundColor: 'white' }}>
                    <Dishes
                        Dishname={'Chole Bhature'}
                        Dishitem={'It consist of chole and maida roti which will be fried in ghee.'}
                        Dishcost={'$5.20'}
                        imgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXHEhTWaJv-cWg6nu0Gdt-z4ghGv506XKCg&usqp=CAU'}
                    />
                    <Dishes
                        Dishname={'Veg-Biryani'}
                        Dishitem={'This dish has rice and vegetables mix in it and have a great taste'}
                        Dishcost={'$4.8'}
                        imgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXHEhTWaJv-cWg6nu0Gdt-z4ghGv506XKCg&usqp=CAU'}
                    />
                    <Dishes
                        Dishname={'Matar-Paneer'}
                        Dishitem={'This dish is a mixture of Peas and Indian cottage cheese which has a great masala'}
                        Dishcost={'$10'}
                        imgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXHEhTWaJv-cWg6nu0Gdt-z4ghGv506XKCg&usqp=CAU'}
                    />
                    <Dishes
                        Dishname={'Palak-Paneer'}
                        Dishitem={'This dish is a mixture of Spinach and Indian cottage cheese which has a great masala'}
                        Dishcost={'$12'}
                        imgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXHEhTWaJv-cWg6nu0Gdt-z4ghGv506XKCg&usqp=CAU'}
                    />
                    <Dishes
                        Dishname={'Paav-Bhaji'}
                        Dishitem={'This dish contain bread which fried with butter and Bhaji is a mixture of grinded vegetables which served with onion and lemon.'}
                        Dishcost={'$10'}
                        imgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXHEhTWaJv-cWg6nu0Gdt-z4ghGv506XKCg&usqp=CAU'}
                    />
                </View>
            {/* </ScrollView> */}
        </View>
    )
}

const styles = StyleSheet.create({
    data: {
        backgroundColor: 'white',

    },
    txt: {
        color: 'black'
    },
    query1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        borderTopWidth: 0.2,
        paddingTop: 20,
        borderColor: 'grey',


    },
    query2: {
        flexDirection: 'row'
    },
    query3: {
        fontSize: 18,
        paddingLeft: 20
    },
    descrip: {
        flexDirection: 'row',
        marginTop: 1,
        marginBottom: 7
    },
    txt1: {
        color: "grey",
        opacity: 0.5,
        fontSize: 14
    },
    title: {
        fontSize: 27,
        marginTop: 12,
    }

})