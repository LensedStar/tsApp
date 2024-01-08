import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {useAppSelector,} from "../store/hooks";


export default function Balance(){
    const store = useAppSelector(state => state.balance.value)
    return(
        <View style={styles.circle}>
            <Text style={styles.text}>{store}$</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        circle:{
            display:"flex",
            alignItems:"flex-end",
            justifyContent:"flex-start",
            width:"100%",
            height:200,
            marginTop:50,
            backgroundColor:"#1B5583"
        },
        text:{
            fontSize:40,
            fontWeight:"bold",
            color:"white",
            marginTop:15,
            marginRight:10
        }
    }
)