import { View, Image, StyleSheet, TouchableOpacity, Text, LogBox } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useProductStore } from "../hooks/useProductStore";
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

export const Header = () => {

    LogBox.ignoreLogs(['ReactImageView']);

    const navigation = useNavigation()

    const { 
        total, 
        startActiveShoppingCart, 
    } = useProductStore();

  return (
        <View style={ styles.containerHeader }>
            <Image 
                source={ require('../assets/logo.jpg')}
                style={ styles.imgLogo }
            />
          
            <TouchableOpacity
                style={ styles.btnCart }
                onPress={ () => {
                    startActiveShoppingCart()
                    navigation.navigate('ItemsScreen')
                }}
            >
                <Icon 
                    name="cart-variant"
                    size={ 25 }
                    color="#FFFFFF"
                />
                <Text style={ styles.total }>${total}</Text>
            </TouchableOpacity>
                     
        </View>
  )
}

const styles = StyleSheet.create({
    containerHeader: {
        height: 80,
        justifyContent: 'space-between',
        alignItems:'flex-end',
        flexDirection: 'row'
    },
    imgLogo: {
        width: 60,
        height: 60
    },
    btnCart: {
        backgroundColor: '#A41BB9',
        height: 42,
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    total:{
        color:'#FFF',
        fontSize: 20
    },
});
