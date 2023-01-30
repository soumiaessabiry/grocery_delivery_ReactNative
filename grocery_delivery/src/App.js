import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home/home';
import Login from './screens/Login/login';
import Register from './screens/Register/register';
import Menu from './compoments/Menu';
import Product from './screens/Dashbord/Product';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
       <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name='Login' component={Login}></Stack.Screen>
        <Stack.Screen name='Register' component={Register}></Stack.Screen>
        <Stack.Screen name='Menu' component={Menu}></Stack.Screen>
        <Stack.Screen name='Product' component={Product}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({})