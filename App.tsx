import React, {useState} from "react";
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from "react-redux";
import {store} from "./store/store";
import Balance from "./Components/Balance";
import Transaction from "./Components/Transaction";
import History from "./Components/History";

const App=()=>{
     const [balance,setBalance]=useState<number|0>(0)
  return (
      <>
    <Provider store={store}>
    <View style={styles.container}>
        <Balance />
        <History />
        <Transaction />
    </View>
      </Provider>
     </>
  );
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flexDirection:"column",
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    height:"100%",
    width:"100%"
  }
});

export default App