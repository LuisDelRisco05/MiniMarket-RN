import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { ItemsCart } from '../components/ItemsCart';
import { useProductStore } from '../hooks/useProductStore';
import React from 'react'


export const ItemsScreen = ({ navigation }) => {

    const { 
        total, 
        startDesactiveShoppingCart,
    } = useProductStore();

    return (
            <View style={ styles.container }>

                <View style={ styles.containerAddCart}>
                    <Text style={ styles.title }>Shopping Cart</Text>
                    <View style={ styles.cartActive }>
                        <Icon
                            name="cart-variant"
                            size={ 25 }
                            color='#A41BB9'
                            style={ styles.iconCart }
                        />
                        <Text style={ styles.numberCartActive }>${total}</Text>
                        <TouchableOpacity
                            style={ styles.closeCart }
                            onPress={ () => {
                                startDesactiveShoppingCart()
                                navigation.goBack();
                            }}
                        >
                            <Text style={ styles.textClose }>x</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.separator} />

                <View style={ styles.containerList }>
                    <ItemsCart />
                </View>
                
               <View style={ styles.footer }>
                    <TouchableOpacity style={ styles.btnWompi }>
                        <Icon
                            name="shield-check"
                            size={ 15 }
                            color='#FFF'
                            style={ styles.iconShield }
                        />
                        <Text style={ styles.textWom }>Paga con Wompi</Text>
                    </TouchableOpacity>
                    <View style={ styles.containerTotal }>
                            <Text style={styles.textTotal}>Total:</Text>
                            <Text style={ styles.numberTotal}>${total}</Text>
                    </View>

               </View>

            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF',
    },
    containerAddCart: {
        height: 80,
        justifyContent: 'space-between',
        alignItems:'flex-end',
        flexDirection: 'row',
        marginHorizontal: 20
    },
    title:{
        color: '#A41BB9',
        fontSize: 22,
        fontWeight: 500
    },
    cartActive: {
        backgroundColor: '#F5EBF7',
        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(164, 27, 185, 0.4)',
        height: 42,
    },
    iconCart:{
        marginLeft: 8
    },
    numberCartActive: {
        fontSize: 22,
        color: '#A41BB9',
        fontWeight: 500
    },
    closeCart:{
        backgroundColor: '#A41BB9',
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: 45,
        marginLeft: 5,
        height: 42
    },
    textClose:{
        fontSize: 30,
        color:'#FFF',
    },
    separator: {
        backgroundColor: '#C2C2C2',
        height: 1,
        opacity: 0.4,
        marginVertical: 15,
        marginHorizontal: 20
    },
    containerList : {
        height: 600,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        marginHorizontal: 10,
    },
    footer:{
     flexDirection: 'row',
     justifyContent: 'space-around',
    },
    containerTotal:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 10,
        marginBottom: 10   
    },
    textTotal:{
        fontSize: 25,
        color: '#bebebe',
        fontWeight: 600
    },
    numberTotal:{
        fontSize: 25,
        color: '#A41BB9',
        marginLeft: 2,
        fontWeight: '500'
    },
    btnWompi: {
        backgroundColor: '#1A4594',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        borderRadius: 5
    },
    textWom:{
        color: '#FFF',
        fontSize: 20
    }
});
