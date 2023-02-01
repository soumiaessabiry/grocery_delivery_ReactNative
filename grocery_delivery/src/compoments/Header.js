import { StyleSheet, Text, TextInput, View,ScrollView } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../screens/Allstyle';
import React from 'react'

  const Header = () => {
  return (
    <ScrollView >
        <View style={{flexDirection:'row',width:'80%',height:45,backgroundColor:"#dcdcdc",alignSelf:'center',borderRadius:10}}>
            <FontAwesome name="search" style={{paddingTop:12,fontSize:18,paddingHorizontal:10}}>
            </FontAwesome>
            <TextInput placeholder='search' style={{fontSize:18,paddingHorizontal:5}}>
            </TextInput>
        </View>
    </ScrollView>

  )
}


export default Header