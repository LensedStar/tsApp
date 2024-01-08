import React from "react";
import {View,Text,StyleSheet,ScrollView} from "react-native";
import {useAppSelector} from "../store/hooks";

export default function History () {
    const store = useAppSelector(store=>store.history)
    return(
        <View style={styles.container}>
            { store.value.length > 0
                ?
                <ScrollView style={{height:"100%", width:"100%"}}>
                <View style={styles.historyBlock}>
                    {store.value.map(trans=>{
                        return(
                            <View key={trans.id} style={[styles.history, styles.elevation]} >
                                <Text style={styles.historyText}>{trans.date}</Text>
                                <Text style={styles.historyText}>{trans.type === "income" ? `+${trans.quantity}$`:`-${trans.quantity}$`}</Text>
                            </View>
                        )
                    })}
                </View>
                </ScrollView>
                :
                <View>
                    <Text style={styles.emptyText}>You dont have any transaction yet!</Text>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:5,
        marginTop:20,
        height:"40%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
    },
    emptyText:{
        fontSize: 20,
        color:"black"
    },
    history:{
        minWidth:"95%",
        maxWidth:"95%",
        height:40,
        marginTop:10,
        marginLeft:1,
        marginRight:1,
        marginBottom:10,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:"white",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },

    historyBlock:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"flex-start"
    },
    historyText:{
        fontSize:10,
        color:"black"
    },
    elevation:{
        elevation:5,
        shadowColor:"rgb(0,0,0)"
    }
})