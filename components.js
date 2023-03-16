import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Categorycard from "./Categorycard";
import Featured from "./featured";


export default function Component() {

    // const [names,setname]=useState([
    //     {name:'Offers', Key:1},
    //     {name:'Pizza', Key:2},
    //     {name:'Thai', Key:3},
    //     {name:'Sushi', Key:4},
    //     {name:'Italian', Key:5},
    //     {name:'Indian', Key:6},
    //     {name:'Chinese', Key:7},
    //     {name:'French', Key:8},
    //     {name:'Asian', Key:9},
    //     {name:'Vegetarian', Key:10},
    // ]);
    

    // return(
    //     <View style={styles.container}>
            
    //         <ScrollView horizontal={true}>
    //             {
                     
    //                 names.map((item)=>(
    //                         <TouchableOpacity onPress={()=>console.warn("prem")}>
    //                     <View key={item.Key} style={styles.categoriescard}>
    //                         <Text style={styles.txt}>{item.name}</Text>
    //                     </View>
    //                         </TouchableOpacity>
    //                 ))
    //             }
    //         </ScrollView>

    //         <ScrollView>
    //             <Featured/>
    //         </ScrollView>
    //     </View>
    // )
    return (
        <View>
            <ScrollView>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            
                <Categorycard 
                imgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXHEhTWaJv-cWg6nu0Gdt-z4ghGv506XKCg&usqp=CAU'}
                title={'Offers'}
                onPress={''}
                Key={1}
                />
                <Categorycard 
                imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXHEhTWaJv-cWg6nu0Gdt-z4ghGv506XKCg&usqp=CAU"}
                title={'Pizza'}
                onPress={''}
                Key={2}
                />
                <Categorycard 
                imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXHEhTWaJv-cWg6nu0Gdt-z4ghGv506XKCg&usqp=CAU"}
                title={'Thai'}
                onPress={''}
                Key={3}
                />
                <Categorycard 
                imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXHEhTWaJv-cWg6nu0Gdt-z4ghGv506XKCg&usqp=CAU"}
                title={'Sushi'}
                onPress={''}
                Key={4}
                />
                <Categorycard 
                imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXHEhTWaJv-cWg6nu0Gdt-z4ghGv506XKCg&usqp=CAU"}
                title={'Italian'}
                onPress={''}
                Key={5}
                />
                <Categorycard 
                imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXHEhTWaJv-cWg6nu0Gdt-z4ghGv506XKCg&usqp=CAU"}
                title={'Chinese'}
                onPress={''}
                Key={6}
                />
                <Categorycard 
                imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXHEhTWaJv-cWg6nu0Gdt-z4ghGv506XKCg&usqp=CAU"}
                title={'Indian'}
                onPress={''}
                Key={7}
                
                />
            
        </ScrollView>

        

        </ScrollView>
        </View>
    )
}

const styles= StyleSheet.create({
    // container :{
    //     flex:1
    // },
    //     categoriescard: {
    //         padding:10,
    //         borderWidth:1,
    //         justifyContent:'flex-end',
    //         width:100,
    //         height:100,
    //         margin:12,
    //         borderRadius:20,
            
            

    //     },
    //     txt :{
    //         color:'black',
    //         fontSize:15
    //     },


})