import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { useProductStore } from "../hooks/useProductStore";


export const dataStorage = () => {

    const { startUpdateStorage } = useProductStore();

    const saveDataStorage = async( cart, total ) => {
        console.log('envio a storage', {cart, total} );
        try {

            await AsyncStorage.setItem('cart', JSON.stringify(cart));
            await AsyncStorage.setItem('total', JSON.stringify(total));
            
        } catch (error) {
            console.log(error);
        }
    }

    const getDataStorage = async() => {

    //   await AsyncStorage.clear();


        try {
                
            console.log('entro en getStorage');

            const cartStorage = await AsyncStorage.getItem('cart') ?? [];
            const totalStorage = await AsyncStorage.getItem('total') ?? 0;
            console.log('cartStorage', cartStorage);
            console.log('totalStorage', totalStorage);

            if(cartStorage.length > 0){
                startUpdateStorage(JSON.parse(cartStorage), JSON.parse(totalStorage))
                console.log('entro en if');
            }

        } catch (error) {
            console.log(error);
        }

    }


    return {
        saveDataStorage,
        getDataStorage
    }

}