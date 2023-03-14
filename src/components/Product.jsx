import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"

export const Product = ({item, product, startAddProduct }) => {

    const uri = item.id

    const navigation = useNavigation()

    const handleClick = item => {
        startAddProduct(item)
        navigation.navigate('DetailScreen')
    }

  return (
            <TouchableOpacity 
              key={item.id} 
              style={product.id === item.id ? {...styles.active} : {...styles.inactive} }
              onPress={() => handleClick(item)}
            >
                    <Image 
                        source={uri} 
                        alt={item.name}
                        Style={ styles.pop }
                        resizeMode='contain'
                    />

            </TouchableOpacity> 
  )
}


const styles = StyleSheet.create({
    active:{
        height: 230
    },
    inactive: {
        height: 260,
        justifyContent: 'center',
        alignItems: 'center'
    },
});