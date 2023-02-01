import {StyleSheet,Text,View,ScrollView,ImageBackground,Image,TouchableOpacity,
} from 'react-native';
import React from 'react';
import Menu from '../../compoments/Menu';
import Header from '../../compoments/Header';
import styles from './style';
import dataProducts from './DataProduct';
const Product = ({navigation}) => {
return (
    <View style={{flex: 1}}>
      <View style={{marginVertical: 20}}>
        <Header />
        <ScrollView>
          <View
            style={styles.viewAllcategorie}>
            <View style={styles.viewcategorie}>
              <Text>azertyui</Text>
            </View>
         
          </View>
        </ScrollView>
      </View>
      <ScrollView>
        <View style={styles.viewProduct}>
        {dataProducts.map((e, i) =>
          <View style={styles.viewproduit} key={i}>
             <View
              style={styles.produit}> 
              <Image
                source={e.image}
                style={styles.imageproduit}>
              </Image>
              <View style={{paddingVertical: 6}}>
                <Text
                  style={[styles.titleproduit,{color:'black'}]}>
                      {e.name}
                </Text>
              
                <TouchableOpacity
                  style={[styles.TouchableOpacity,{backgroundColor:e.bgColor}]}>
                  <Text
                    style={styles.textTouchableOpacity}
                    onPress={() => navigation.navigate('Register')}>
                    Add
                  </Text>
                </TouchableOpacity>
              </View>
            </View> 
          </View>
            )}
        </View>
      </ScrollView>
      <View
        style={{flex: 1, justifyContent: 'flex-end', alignContent: 'flex-end'}}>
        <Menu />
      </View>
    </View>
  );
};

export default Product;
