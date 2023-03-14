import {View, Text, Image, StyleSheet, TouchableOpacity, LogBox} from 'react-native'
import { useProductStore } from '../hooks/useProductStore';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { Stock } from '../components';



export const DetailScreen = ({ navigation }) => {

  LogBox.ignoreLogs(['ReactImageView']);

  const { 
    counter,
    product, 
    startCounter,
    startAddToCart, 
    startCancelProduct, 
    startTotal 
} = useProductStore();

const { id, name, price} = product;


const handleClickCancel = () => {
  startCounter(1);
  startCancelProduct();
}

const handleAddCart = () => {
    startAddToCart({
        id,
        name,
        unit: counter,
        price
    });
    const total = price * counter;
    startTotal(total)
    startCounter(1);
    startCancelProduct();
}

const handleClick = (unit) => {
  startCounter(unit)
}


  return (
          <View style={ styles.containerImg }>

            <Stock unit={ counter } />

            <TouchableOpacity 
              style={ styles.close}
              onPress={() => {
                handleClickCancel()
                navigation.goBack()
              }}
            >
              <Text style={ styles.textClose}>X</Text>
            </TouchableOpacity>

            <View style={ styles.containerTitle}>
              <Text style={ styles.title}>Product</Text>
              <View style={styles.separator} />
            </View>

            <Image 
              source={product.route} 
              resizeMode='contain'
            />
            <View style={ styles.seccionPop}>

              <View style={ styles.containerInfo}>
                <Text style={ styles.name }>{product.name}</Text>
                <Text style={ styles.value }>${product.price * counter}</Text>
              </View>

              <View style={ styles.containerBtns}>

                <TouchableOpacity
                  onPress={ () => {
                    handleAddCart()
                    navigation.goBack()
                  }} 
                  style={ styles.btnAddCart}
                >
                  <Icon 
                      name="cart-plus"
                      size={ 30 }
                      color="#FFFFFF"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={ () => handleClick(counter - 1)}
                  style={ styles.btnSub}>
                  <Text style={ styles.sub}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  onPress={ () => handleClick(counter + 1)}
                  style={ styles.btnAdd}>
                  <Text style={ styles.add }>+</Text>
                </TouchableOpacity>

              </View>
            </View>

            <View style={ styles.description }>
              <View style={styles.separator} />

              <Text style={ styles.textDecription}>{product.description}</Text>

              <View style={styles.separator} />
            </View>

          </View>
  )
}

const styles = StyleSheet.create({
  containerImg: {
    backgroundColor: '#FFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerTitle: {
    width: 350,
    position: 'absolute',
    top: 10
  },
  title:{
    color: '#A41BB9',
    fontSize: 25,
    fontWeight: 600
  },
  seccionPop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    width: 360,
  },
  containerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 190
  },
  name: {
    fontSize: 20,
    fontWeight: 600,
    color: '#000'
  },
  value: {
    fontSize: 22,
    color: '#A41BB9'
  },
  containerBtns:{
    width: 145,
    flexDirection: 'row'
  },
  btnAddCart:{
    backgroundColor: '#A41BB9',
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45
  },
  btnAdd:{
    backgroundColor: '#A41BB9',
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSub:{
    backgroundColor: '#DCDCDC',
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  add:{
    fontSize: 25,
    color: '#FFF'
  },
  sub:{
    fontSize: 25,
  },
  separator: {
    backgroundColor: '#C2C2C2',
    height: 1.5,
    opacity: 0.6,
    marginVertical: 15,
},
  description:{
    marginHorizontal: 20,
    marginTop: 20,
    
  },
  textDecription: {
    fontSize: 18,
    color: '#909090',
    marginVertical: 10
  },
  close:{
    backgroundColor: '#909090',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 80,
    right: 25
  },
  textClose:{
    color: '#FFF',
    fontSize: 30,
    fontWeight: 600
  }


});