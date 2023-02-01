import { StyleSheet} from 'react-native'
const styles=StyleSheet.create({
       viewAllcategorie:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 15,
        gap: 50,
    },
    viewcategorie:{
        backgroundColor: 'red', 
        width: 100, 
        height: 60,
        borderRadius:10
    },
    viewProduct:{
        flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            gap: 10,
    },
    viewproduit:{
        flexDirection: 'row', justifyContent: 'space-evenly'
    },
    produit:{
        width: 170,
        height: 220,
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 15,
    },
    imageproduit:{
        width: '100%', height: 120
    },
    titleproduit:{
        paddingVertical:10,
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    TouchableOpacity:{
        backgroundColor: '#6b8e23',
        width: '50%',
        paddingVertical: 6,
        alignSelf: 'center',
        borderRadius: 5,
    },
    textTouchableOpacity:{
        color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize:19,
    },

})
export default styles