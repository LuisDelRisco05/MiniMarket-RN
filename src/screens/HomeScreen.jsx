import { View, Image, StyleSheet, Text } from "react-native";
import { useEffect, useState } from 'react';
import { Header, Products } from "../components";
import { useProductStore } from "../hooks/useProductStore";
import { dataStorage } from "../helpers/dataStorage";


export const HomeScreen = () => {


    const { cart, total } = useProductStore();
    const { saveDataStorage, getDataStorage } = dataStorage();
  
    useEffect( () => {
      getDataStorage()
    }, []);
  
    useEffect( () => {
      
      if(cart.length > 0){
        saveDataStorage(cart, total) 
        return
      }
  
    }, [cart]);

  return (
    <View style={ styles.container }>
        <Header />

        <View style={ styles.ContainerProducts }>
            <Text style={ styles.titleStore }>Store</Text>
            <View style={styles.separator} />
            <Products />       
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    ContainerProducts:{
        marginTop: 20
    },
    titleStore:{
        fontSize: 22,
        color: '#A41BB9',
        fontWeight: "500"
    },
    separator: {
        backgroundColor: '#C2C2C2',
        height: 1,
        opacity: 0.4,
        marginVertical: 15,
    },

});
