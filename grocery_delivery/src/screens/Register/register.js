import { Image, StyleSheet, Text, View ,ImageBackground,TouchableOpacity,TextInput, SafeAreaView, Dimensions} from 'react-native'
import React from 'react'
import styles from './styleregister'
const {height}=Dimensions.get('screen')
const Register = () => {
  return (
   <SafeAreaView style={{backgroundColor:'#2e8b57',flex:1, flexDirection: 'column',}}>
    <View style={{flex: 1}}></View>
        <View style={{
            flex: 6,
            backgroundColor: '#f8f8ff',
            borderTopStartRadius:50,
            borderTopEndRadius:50
            }} >
            <View>
            <Text style={{fontSize:25,
                color:'#2e8b57',
                textAlign:'center',
                fontWeight:'bold',
                marginVertical:30
                }}>Create Account</Text>
            </View>
        <View>
            <TextInput 
                placeholder='Username'
                placeholderTextColor={'#808080'}
                style={{
                    fontSize:20,
                    padding:18,
                    backgroundColor:'#d9f2e4',
                    borderRadius:10,
                    marginVertical:10,
                    width:"80%",
                    alignSelf:'center',
                    fontWeight:'bold',
                }}
            
            />
            <TextInput 
                placeholder='Email'
                placeholderTextColor={'#808080'}
                style={{
                    fontSize:20,
                    padding:18,
                    backgroundColor:'#d9f2e4',
                    borderRadius:10,
                    marginVertical:10,
                    width:"80%",
                    alignSelf:'center',
                    fontWeight:'bold',
                
                    
                }}
            />
            <TextInput 
                placeholder='Password'
                placeholderTextColor={'#808080'}
                style={{
                    fontSize:20,
                    padding:18,
                    backgroundColor:'#d9f2e4',
                    borderRadius:10,
                    marginVertical:10,
                    width:"80%",
                    alignSelf:'center',
                    fontWeight:'bold',
                
                    
                }}
            />
            <TextInput 
                placeholder='Confirm Password'
                placeholderTextColor={'#808080'}
                style={{
                    fontSize:20,
                    padding:18,
                    backgroundColor:'#d9f2e4',
                    borderRadius:10,
                    marginVertical:10,
                    width:"80%",
                    alignSelf:'center',
                    fontWeight:'bold',
                }}
            />
             <TouchableOpacity style={{
                width:"60%",
                alignSelf:'center',
                padding:15,
                marginVertical:10,
                borderRadius:20,
                backgroundColor:'#2e8b57',

            }}>
            <Text style={{
                color:'white',
                textAlign:"center",
                fontSize:25,
                fontWeight:'bold'
            }}>
                Sign up
            </Text>    
            </TouchableOpacity>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <Text style={{
                    fontSize:18,
                    color:"#696969",
                    fontWeight:'bold'
                    }}>
                    Already heve an account ?
                </Text>
                <Text style={{
                    fontSize:19,
                    color:"#2e8b57",
                    fontWeight:'bold'
                    }}>
                    sign in
                </Text>
              
            </View>
        </View>
</View>
   </SafeAreaView>
  )
}

export default Register
