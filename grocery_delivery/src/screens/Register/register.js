import { Image, StyleSheet, Text, View ,ImageBackground,TouchableOpacity,TextInput, SafeAreaView, Dimensions} from 'react-native'
import React from 'react'
import styles from '../Allstyle'
import Icon from "react-native-vector-icons/FontAwesome5";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Register = () => {
  return (
   <SafeAreaView style={{backgroundColor:'#2e8b57',flex:1, flexDirection: 'column',}}>
        <View style={{flex: 1}}></View>
        <View style={styles.viewregisterlogin} >
            <View>
                <Text style={styles.text}>
                    Create Account
                </Text>
            </View>
            <View>
                <View style={styles.viewinputs}>
                    <Icon name="user"   
                    style={styles.viewicon}>
                    </Icon> 
                    <TextInput 
                    placeholder='Username'
                    placeholderTextColor={'#808080'}
                        style={styles.inputform}
                    />
                </View>
                <View style={styles.viewinputs}>
                <AntDesign name="mail"   
                  style={styles.viewicon}>
                </AntDesign> 
                <TextInput 
                    placeholder='Email'
                    placeholderTextColor={'#808080'}
                    style={styles.inputform}
                />
                </View>
                <View style={styles.viewinputs}>
                    <Icon name="user-lock"  
                    style={styles.viewicon}>
                    </Icon>         
                    <TextInput 
                        placeholder='Password'
                        placeholderTextColor={'#808080'}
                        style={styles.inputform}
                    />
                </View>
                <View style={styles.viewinputs}>
                    <MaterialIcons name="verified-user"  
                    style={styles.viewicon}>
                    </MaterialIcons>         
                    <TextInput 
                         placeholder='Confirm Password'
                        placeholderTextColor={'#808080'}
                        style={styles.inputform}
                    />
                </View>
        
                <TouchableOpacity style={styles.touchableopacity}>
                    <Text style={styles.texttouchable}>
                        Sign up
                    </Text>    
                </TouchableOpacity>
                <View style={styles.textdesciption1}>
                    <Text style={styles.textdesciption2}>
                        Already heve an account ?
                    </Text>
                    <Text style={[styles.textdesciption2,{color:'black'}]}>
                        sign in
                    </Text>
                </View>
            </View>
        </View>
   </SafeAreaView>
  )
}

export default Register
