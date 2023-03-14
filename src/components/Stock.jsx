import { StyleSheet, Text, View } from "react-native"
import { useProductStore } from "../hooks/useProductStore";


export const Stock = ({ unit = '', top = 110, left = 30 }) => {

  const { counter } = useProductStore()

  console.log('unit', unit);
  
  return (
    <View style={{ ...styles.containerStock, top, left }}>
      <Text style={ styles.number }>{unit ? unit : counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStock:{ 
    backgroundColor: '#A41BB9',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    position: 'absolute',
    zIndex: 50
  },
  number:{
    fontSize: 25,
    color: '#FFF'
  }
});
