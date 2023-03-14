import React from "react";
import { View, Text, StyleSheet, Image,TextInput, SafeAreaView, ScrollView,  TouchableOpacity } from "react-native";
import Dior from "../project-pics/photos/Dior.jpg";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons"
import Component from "./components";
import Featured from "./featured";
import Entypo from "react-native-vector-icons/Entypo"


export default function App() {

    const btnaction = ()=>{
        return(
            <View>
                <Icon name="chevron-up" size={25} color={'skyblue'} />
            </View>
        )
    }

    return(
        <SafeAreaView>
            
        <View style={styles.container}>
                <View style={styles.design}>
            <View style={styles.leftheader}>
                <View>
            <Image
            style={styles.logo}
            source={Dior}
            />
            </View>
            <View >
                <Text style={[styles.txt,styles.txt1]} >Deliver Now,</Text>
                <Text style={[styles.txt,styles.txt2]}>Current Location
                <Icon name="chevron-down" size={25} color={'skyblue'} onPress={()=>btnaction()}/>

                </Text>
            </View>
            </View>

            <View>
            <Icon name={'account'} size={40} color={'skyblue'} onPress={()=>console.warn("Account is opened")}/>
            </View>

        </View>

        <View style={styles.design1}>
            <View  style={styles.search}>
           
               
                <EvilIcons name="search" size={30} color={'black'} style={styles.search1}/>
            

            <TextInput
            placeholder="Search...."
            placeholderTextColor='black'
            style={{color:'black', width:280}}
            />
            </View>
            <View style={{marginTop:12, marginRight:4}}>
            <Entypo name="sound-mix" size={30} color={'skyblue'} onPress={()=>console.warn("Filter your product")}/>
            </View>
        </View>
        </View>

<ScrollView style={{marginBottom:112}}>
   

    <View >
<Component/>
<Featured/>

</View>
</ScrollView>

       
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    container :{
        backgroundColor:'white',

    },
design :{
    flexDirection:'row',
    margin:10,
    justifyContent:'space-between'

},
design1:{
    flexDirection:'row',
    marginHorizontal:10,
    justifyContent:'space-between',
    marginBottom:8,
},
leftheader :{
    flexDirection:'row',
},
txt3 :{
    color:'skyblue',
    margin:2,
    marginTop:6
},
logo: {
    width:40,
    height:40,
    borderRadius:20,
    marginRight:8
    
},
search : {
    borderWidth:0,
    
    padding:0,
    margin:4,
    paddingLeft:9,
    backgroundColor:'lightgrey',
    flexDirection:'row',
    
},
txt2 :{
    fontSize:20,
    color:'black'
},
txt1 :{
    color:'grey'
},
search1:{
    paddingVertical:10,
    paddingHorizontal:0
}

})