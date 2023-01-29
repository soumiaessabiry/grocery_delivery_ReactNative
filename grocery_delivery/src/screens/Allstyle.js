import {StyleSheet} from 'react-native'
const styles=StyleSheet.create({
    viewregisterlogin:{
        flex: 6,
        backgroundColor: '#f8f8ff',
        borderTopStartRadius:50,
        borderTopEndRadius:50
    },
    text:{
        fontSize:25,
        color:'#2e8b57',
        textAlign:'center',
        fontWeight:'bold',
        marginVertical:25
    },
    viewinputs:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor:'#d9f2e4',
        width:"80%",
        borderRadius:10,
        marginVertical:10,
        alignSelf:'center',
        fontWeight:'bold',
    },
    viewicon:{
        fontSize:35,
        borderRadius:10,
        marginVertical:20,
        alignSelf:'center',
        fontWeight:'bold',
    },
    inputform:{
        fontSize:20,
        width:"80%",
        fontWeight:'bold',
    },
    touchableopacity:{
        width:"60%",
        alignSelf:'center',
        padding:15,
        marginVertical:8,
        borderRadius:20,
        backgroundColor:'#2e8b57',
    },
    texttouchable:{
        color:'white',
        textAlign:"center",
        fontSize:25,
        fontWeight:'bold'
    },
    textdesciption1:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    textdesciption2:{
        paddingVertical:15,
        fontSize:19,
        color:"#2e8b57",
        fontWeight:'bold'
    }

    

})
export default styles