import React,{useState,useRef} from "react";
import {View,Text,StyleSheet,Modal,TextInput} from "react-native";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import{income,outcome} from "../store/slice";
import {addTransaction} from "../store/historySlice";
import {BlurView} from "@react-native-community/blur";

export default function Transaction(){
    const [modalVisible,setModalVisible] = useState<boolean>(false)
    const [type,setType] = useState<"income"|"outcome">("outcome")
    const [inputValue,changeInputValue] = useState<string>("")
    const dispatch = useAppDispatch()

    const [openCategory,setOpenCategory] = useState<boolean>(false)
    const [category,setCategory] =
        useState<"Select category"|{emoji:string,name:string}>("Select category")


 const handleDispatch = (count:string) =>{
     const date = new Date().toDateString().split(" ").slice(1,3).join(" ")
     if(inputValue) {
         if (type === "income") {
             dispatch(income(parseFloat(count)))
         } else {
             dispatch(outcome(parseFloat(count)))
         }
         dispatch(addTransaction({id:Date.now(), date:date, type:type, quantity:count}))
         setModalVisible(false)
     }
 }
    return(
    <View style={styles.container}>
        <Modal
            animationType="slide"
            visible={modalVisible}
            transparent={true}
        >
            <View style={styles.modal}>
            <Text style={styles.close} onPress={()=>setModalVisible(!modalVisible)}>X</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    inputMode="decimal"
                    placeholder="0"
                    placeholderTextColor="black"
                    value={inputValue}
                    onChangeText={changeInputValue}
                />
            <Text style={styles.dollar}>$</Text>
            </View>
                <View style={styles.buttonContainer} >
                 <View style={type === "income" && styles.buttonActive}>
                    <Text onPress={()=>setType("income")} style={styles.button}>Income</Text>
                 </View>
                    <View style={type === "outcome" && styles.buttonActive}>
                        <Text onPress={()=>setType("outcome")} style={styles.button}>Expense</Text>
                    </View>

                    </View>
                <View>
                    <View>
                        <Text onPress={()=>setOpenCategory(true)}>Select category</Text>
                    </View>
                    <Modal
                        transparent={true}
                        visible={openCategory}
                        animationType="fade"
                    >
                        <BlurView
                            style={styles.categoryStyle}
                            blurType="light"
                            
                        >
                        <View>
                        </View>
                        </BlurView>
                    </Modal>
                </View>

                <Text
                    style={styles.ok}
                    onPress={()=>handleDispatch(inputValue)}
                >Ok</Text>
            </View>
        </Modal>
        <Text onPress={()=>setModalVisible(!modalVisible)} style={styles.plus}>+</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white",
        borderRadius:25,
        width:50,
        height:50,
        alignSelf:"flex-end"
    },
    plus:{
        fontSize:25,
        fontWeight:"bold",
    },
    close:{
        fontSize:20,
        margin:20,
        alignSelf:"flex-start",
    },
    modal:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        backgroundColor:"rgb(255,255,255)",
        marginTop:100,
        height:"100%"
    },
    inputContainer:{
        display:"flex",
        flexDirection:"row",
        marginBottom:20
    },
    input:{
        width:"auto",
        height:50,
        fontSize:35,
        textAlign:"center",
        marginLeft:10,
        marginRight:10
    },
    dollar:{
        fontSize:35,
    },
    buttonContainer:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:100
    },
    buttonActive:{
        borderBottomColor:"black",
        borderBottomWidth:1,
    },
    button:{
        fontSize:30,
        marginLeft:20,
        marginRight:20
    },
    ok:{
        fontSize:40,
    },
    categoryStyle:{
        width:"100%",
        height:"100%",
    },
    elevation:{
        elevation:5,
        shadowColor:"rgb(0,0,0)"
    }
})