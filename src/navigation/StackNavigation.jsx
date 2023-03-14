import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, DetailScreen, ItemsScreen } from '../screens';

const stack = createStackNavigator()

export const StackNavigation = () => {

    return (

        <NavigationContainer>
            <stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <stack.Screen name="HomeScreen" component={ HomeScreen } /> 
                <stack.Screen name="DetailScreen" component={ DetailScreen } /> 
                <stack.Screen name="ItemsScreen" component={ ItemsScreen } /> 

            </stack.Navigator>
        </NavigationContainer>
    )

}