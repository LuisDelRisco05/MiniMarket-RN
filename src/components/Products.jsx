import { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from "react-native"
import { useProductStore } from "../hooks/useProductStore";
import { Product } from "./Product";

export const Products = () => {

    const [ newList, setNewList ] = useState([])

    const { products, product, cart, startAddProduct } = useProductStore();

    
  

  return (
    <View style={ styles.products}>
        <FlatList
            data={products}
            keyExtractor={ (item) => item.id}
            renderItem={ ({ item }) => (
                <Product 
                    item={ item } 
                    product={ product } 
                    startAddProduct={ startAddProduct }
                /> 
            )
            }
            showsVerticalScrollIndicator={ false }
        />
    </View>
  )
}

const styles = StyleSheet.create({
    products:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 250
    },
});



