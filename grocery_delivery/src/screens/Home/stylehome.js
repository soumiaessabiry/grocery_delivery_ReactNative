import { StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    vieuhome: {
        flex: 1,
    },
      image: {
        flex: 1,
        justifyContent: 'center',
      
      },
      text: {
        width:299,
        color: 'white',
        fontSize: 48,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal:50
      },
      btnContainerStyle: {
        width:265,
        backgroundColor: '#6b8e23',
        paddingVertical: 15,
        borderRadius: 30,
        marginHorizontal:75,
        display:'flex',
        marginTop:520,
        

      },
      btnTextStyle: {
        fontWeight:'bold',
        color: '#ffffff',
        fontSize: 37,
        textAlign: 'center',
        fontFamily: 'Quicksand-Medium',
        fontStyle:'italic'

      }
})
export default styles