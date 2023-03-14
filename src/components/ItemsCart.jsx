import { View, FlatList, StyleSheet, Image, LogBox } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useProductStore } from '../hooks/useProductStore';
import { Stock } from './Stock';
import Icon  from 'react-native-vector-icons/FontAwesome5';


export const ItemsCart = () => {

    LogBox.ignoreLogs(['ReactImageView']);

    const { 
        cart,
        startDeleteItem
    } = useProductStore();

    const handleClickTrash = (product) => {
        const newCart = cart.filter( item => item.id !== product.id );
        startDeleteItem(newCart, product.unit * product.price)  
    }

  return (
    <View>
        <FlatList 
            data={ cart }
            keyExtractor={ item => item.id }
            renderItem={ ({ item }) => (
                <View style={ styles.container}>
                    <View style={ styles.containerList }>

                        <Stock unit={ item.unit } top={100} left={10} />

                        <View style={ styles.containerImg }>
                            <Image 
                                source={item.id} 
                                alt={item.name}
                                Style={ styles.pop }
                                resizeMode='contain'

                            />
                        </View>
                    </View>
                    <TouchableOpacity
                        style={ styles.btnTrash }
                        onPress={ () => handleClickTrash(item) }
                    >
                        <Icon 
                            name="trash-alt"
                            size={ 30 }
                            color="#bebebe"
                        />
                    </TouchableOpacity>
                    <View style={styles.separator} />

                </View>
            )}
        />    
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerList:{
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        width: 380,
    },
    containerImg:{
        height: 250,
        justifyContent: 'center',
        alignItems: 'center'
    },
    separator: {
        backgroundColor: '#C2C2C2',
        height: 1,
        opacity: 0.4,
        marginVertical: 15,
        marginHorizontal: 20
    },
    btnTrash:{
        alignItems: 'flex-end',
        marginHorizontal: 20
    }

});