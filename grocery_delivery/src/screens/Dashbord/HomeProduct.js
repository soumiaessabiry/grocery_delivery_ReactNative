import {StyleSheet,Text,View,ScrollView,ImageBackground,Image,TouchableOpacity,
} from 'react-native';
import React from 'react';
import Menu from '../../compoments/Menu';
import Header from '../../compoments/Header';
import styles from './style';
import dataProducts from './DataProduct';
import dataCategorie from './DataCategorie';
const Product = ({navigation}) => {
  return (
    <View style={{flex: 1,backgroundColor:'#f7fbf0'}} >
      <View style={{flex: 0.3}}>
        <Header />
        <ScrollView horizontal>
          <View style={styles.viewAllcategorie}>
            {dataCategorie.map((e, i) => (
              <View source={e.image} key={i} style={[styles.viewcategorie,{backgroundColor: e.bgColor}]}  >
                <Text style={styles.textBackground}>{e.name}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={styles.viewProduct}>
          {dataProducts.map((e, i) => (
            <View style={styles.viewproduit} key={i}>
              <View style={styles.produit}>
                <Image source={e.image} style={styles.imageproduit}></Image>
                <View>
                  <Text style={[styles.titleproduit, {color: 'black'}]}>
                    {e.name}
                  </Text>

                  <TouchableOpacity
                    style={[
                      styles.TouchableOpacity,
                      {backgroundColor: e.bgColor},
                    ]}>
                    <Text
                      style={styles.textTouchableOpacity}
                      onPress={() => navigation.navigate('Product')}>
                      Add
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={{flex: 0.1}}>
      <Menu />
      </View>
     </View>
  );
};

export default Product;
