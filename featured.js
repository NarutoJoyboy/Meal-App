import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Featuredcard from "./headingcard";
import Restaurent from "./Restaurentcard";


export default function Featured() {
    return (
        <View style={styles.container}>


            <View>

                <Featuredcard
                    title={'Offers near you!'}
                    About={'Why not support your local restaurents tonight!'}
                />


                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Restaurent
                        imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXHEhTWaJv-cWg6nu0Gdt-z4ghGv506XKCg&usqp=CAU"}
                        title={"Nandoo's"}
                        Rating={'4.8'}
                        Type={'Offers'}
                        Address={'Clink Street'}

                    />
                    <Restaurent
                        imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXHEhTWaJv-cWg6nu0Gdt-z4ghGv506XKCg&usqp=CAU"}
                        title={"Yo! Sushi"}
                        Rating={'5'}
                        Type={'Sushi'}
                        Address={'Tottenhalm court street'}
                    />
                    <Restaurent
                        imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXHEhTWaJv-cWg6nu0Gdt-z4ghGv506XKCg&usqp=CAU"}
                        title={"Wagamama"}
                        Rating={'4.8'}
                        Type={'Asian'}
                        Address={'Southbank'}
                    />
                    <Restaurent
                        imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXHEhTWaJv-cWg6nu0Gdt-z4ghGv506XKCg&usqp=CAU"}
                        title={"Rk's"}
                        Rating={'4.2'}
                        Type={'Indian'}
                        Address={'Street 32'}
                    />
                </ScrollView>


            </View>

            <View>

                <Featuredcard
                    title={'Featured'}
                    About={'Paid placements from our partners'}
                />

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Restaurent
                        imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXHEhTWaJv-cWg6nu0Gdt-z4ghGv506XKCg&usqp=CAU"}
                        title={'KFC'}
                        Rating={'4.8'}
                        Type={'Offers'}
                        Address={'Waterloo'}
                    />
                    <Restaurent
                        imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXHEhTWaJv-cWg6nu0Gdt-z4ghGv506XKCg&usqp=CAU"}
                        title={'Wagamama'}
                        Rating={'4.8'}
                        Type={'Asian'}
                        Address={'Southbank'}
                    />
                    <Restaurent
                        imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXHEhTWaJv-cWg6nu0Gdt-z4ghGv506XKCg&usqp=CAU"}
                        title={'Five Guys'}
                        Rating={'4.8'}
                        Type={'Burgers'}
                        Address={'Oxfored Circus'}
                    />
                    <Restaurent
                        imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXHEhTWaJv-cWg6nu0Gdt-z4ghGv506XKCg&usqp=CAU"}
                        title={"Mc'Donald"}
                        Rating={'5'}
                        Type={'Offers'}
                        Address={'Elizabeth Circle'}
                    />
                </ScrollView>


            </View>






            <View>


                <Featuredcard
                    title={'Tasty Discounts'}
                    About={"Everyone's been enjoying this juicy discounts!"}
                />

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Restaurent
                        imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXHEhTWaJv-cWg6nu0Gdt-z4ghGv506XKCg&usqp=CAU"}
                        title={"Mc'Donald"}
                        Rating={'5'}
                        Type={'Offers'}
                        Address={'Elizabeth Circle'}
                    />
                    <Restaurent
                        imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXHEhTWaJv-cWg6nu0Gdt-z4ghGv506XKCg&usqp=CAU"}
                        title={'Five Guys'}
                        Rating={'4.8'}
                        Type={'Offers'}
                        Address={'Oxfored Circus'}
                    />
                    <Restaurent
                        imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXHEhTWaJv-cWg6nu0Gdt-z4ghGv506XKCg&usqp=CAU"}
                        title={'KFC'}
                        Rating={'5'}
                        Type={'Offers'}
                        Address={'Waterloo'}
                    />
                    <Restaurent
                        imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXHEhTWaJv-cWg6nu0Gdt-z4ghGv506XKCg&usqp=CAU"}
                        title={'Subway'}
                        Rating={'4.8'}
                        Type={'Offers'}
                        Address={'Street 32'}
                    />
                </ScrollView>


            </View>

           

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    txt1: {
        color: 'black'
    },
    txt2: {
        color: 'grey'
    }
})