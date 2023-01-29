import { Image, StyleSheet, Text, View ,ImageBackground,TouchableOpacity,SafeAreaView, Dimensions} from 'react-native'
import React from 'react'
import styles from './stylehome'
const { height }=Dimensions.get('screen')

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor:'#ffe4b5',flex:1}}>
    <View>
        <ImageBackground style={{
            height:height/1.5
        }} 
        resizeMode="contain"
        source={require('../../images/Grocery.png')}
        />
        <View style={{paddingHorizontal:10}}>
            <Text style={{
                color:'#008000',
                fontSize:30,
                fontWeight:'bold',
                textAlign:'center'
                }}>
                Welcom Easy Grocery
            </Text>
        </View>
        <View style={{paddingHorizontal:10, 
            flexDirection:'row',
            justifyContent:'space-evenly',
            marginVertical:20

        
        }}>
           <TouchableOpacity style={{
            backgroundColor:'#6b8e23',
            paddingVertical:20,
            width:'44%',
            borderRadius:20
            }}>
            <Text style={{
                fontSize:25,
                fontWeight:'bold',
                textAlign:'center',
                color:'white',
             
            }}>
                login
            </Text>
           </TouchableOpacity>
           <TouchableOpacity style={{
            // backgroundColor:'#6b8e23',
            paddingVertical:20,
            width:'44%',
            borderRadius:20
            }}>
            <Text style={{
                fontSize:25,
                fontWeight:'bold',
                textAlign:'center',
                color:'black'
            }}>
                Register
            </Text>
           </TouchableOpacity>
        </View>

    </View>
</SafeAreaView>
  )
  
}

export default Home
