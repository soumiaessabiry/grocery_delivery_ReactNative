import { Image, StyleSheet, Text, View ,ImageBackground,TouchableOpacity,TextInput, SafeAreaView, Dimensions} from 'react-native'
import React from 'react'
import styles from './styleregister'
const {height}=Dimensions.get('screen')
const Register = () => {
  return (
   <SafeAreaView style={{backgroundColor:'#ffe4b5',flex:1}}>
        <View>
            <ImageBackground style={{
                height:200
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

export default Register
{/* <Text style={styles.btnTextStyle}>Get start </Text> */}
{/* <View style={[styles.vieuhome,{flexDirection: 'column'}]}>
<ImageBackground source={require('../../images/Grocery.png')} resizeMode="cover" style={styles.image}>
  <View style={{flex: 1}}  >
      <Text>Welcom </Text>
      <Text>Sign in to continue </Text>
  </View>
  <View style={{flex: 5,display:'flex'}}  >
      <View style={{ flex: 5,marginHorizontal:40,alignSelf:'center'}}>
          <View style={{width:300}}>
              <Text style={styles.textregister}>Register</Text>
              <View style={styles.formregister}>
                  <TextInput style={styles.input} placeholder="Username" />                        
                  <TextInput style={styles.input} placeholder="Email" />                        
                  <TextInput style={styles.input}  secureTextEntry={true}
                      placeholder="Enter Password"/>      
              </View>
              <TextInput style={styles.btnTextStyle}>Register</TextInput>
          </View>              
      </View>          
  </View>            
</ImageBackground>
</View> */}

