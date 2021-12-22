import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/view/screens/HomeScreen';
import DetailsSceeen from './src/view/screens/DetailsScreens';
import cart from './src/view/screens/cart';
import login from './src/view/screens/login';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator screenOptions={{header: () => null}}>
     
        <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="login" component={login} />
        <Stack.Screen name="Details" component={DetailsSceeen} />
        <Stack.Screen name="cart" component={cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
