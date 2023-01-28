import { Image, StyleSheet, Text, View ,ImageBackground,TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './stylehome'


const home = () => {
  return (
    <View style={[styles.vieuhome,{flexDirection: 'column'}]}>
    <ImageBackground source={require('../../images/Grocery.png')} resizeMode="cover" style={styles.image}>
      <TouchableOpacity >
      <View style={styles.btnContainerStyle}>
        <Text style={styles.btnTextStyle}>Get start </Text>
        
      </View>
    </TouchableOpacity> 
    </ImageBackground>
    </View>
  )
  
}

export default home
