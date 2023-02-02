import { Image, StyleSheet, Text, View,ImageBackground ,TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import styles from '../screens/Allstyle'
import { useState,useEffect } from 'react'

const Product = () => {
    const [Quantiter,setQuantiter]=useState(0)
    const [err,seterror]=useState(false)
    const plusquantiter = () => {
        setQuantiter(Quantiter + 1)
    }
    const moinQuantiter = () => {
        if(Quantiter>0){
            setQuantiter(Quantiter - 1)
        }else{
            Alert.alert("Impossible d'affecter cette action car quatiter et inferieur de 0 ")
        }
    }
 
  return (
    <View style={{flex: 1}}>
        <ImageBackground  source={require('../images/Apple.png')}style={{flex: 0.5,width:'100%',height:'100%'}}>
        </ImageBackground>
        <View style={{flex: 0.5,marginVertical:20}}>
            <Text style={{fontSize:35,color:'#6b8e23',fontWeight:'bold',alignSelf:'center'}}>Title</Text>
           
              
            <View style={{marginVertical:10}}>
                <View style={{alignSelf:'center'}}>
                        <Text style={[styles.product,{color:'#6b8e23',}]}>$23:30</Text>
                    </View>
                    <View>
                                
                    <View style={{flexDirection:'row',justifyContent:'center',marginVertical:10}}>
                    <TouchableOpacity
                            style={[
                            styles.Touchablebtnmp,
                            {backgroundColor: "#6b8e23"},
                            ]}>
                            <Text
                            style={styles.textTouchableOpacity}
                            onPress={moinQuantiter}
                              >
                            -
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.product}>{Quantiter}</Text>
                        <TouchableOpacity
                            style={[
                            styles.Touchablebtnmp,
                            {backgroundColor: "#6b8e23"},
                            ]}>
                            <Text
                            style={styles.textTouchableOpacity}
                            onPress={plusquantiter} >
                            +
                            </Text>
                        </TouchableOpacity>
                 </View>
                 </View>

                </View>
           
           <View style={{marginVertical:10}}>
            <Text style={styles.product}>About the Product</Text>
           </View>
           <View style={{marginVertical:10}}>
           <Text style={[styles.product,{fontSize:16}]}>Description</Text>
           </View>
           <View>
           <TouchableOpacity
                    style={[
                      styles.TouchableOpacity,
                      {backgroundColor: "#6b8e23"},
                    ]}>
                    <Text
                      style={styles.textTouchableOpacity}
                      onPress={() => navigation.navigate('Product')}>
                      Add To Basket
                    </Text>
            </TouchableOpacity>
           </View>
        </View>

    </View>
  )
}

export default Product
