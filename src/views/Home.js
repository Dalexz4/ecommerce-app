// src/views/Home.js
import React from "react";
import { Image, View, Text, StyleSheet, ScrollView } from "react-native";
import { withNavigation } from "react-navigation";
import Product from "../components/Product";

// const BASE_URL =
//   "https://raw.githubusercontent.com/sdras/sample-vue-shop/master/dist";

const products = [
  {
    name: "Levanse Synthetic Leather Matte Blue",
    price: 149.99,
    img: `https://images-na.ssl-images-amazon.com/images/I/91tNJ-oQFQL._UX575_.jpg`
  },
  {
    name: "Camo Fang Auctioned Shoe",
    price: 39.99,
    img: `https://images-na.ssl-images-amazon.com/images/I/81KIRWY%2BkJL._UL1500_.jpg`
  },
  {
    name: "AUSERIO Men's Leather Derby Shoes",
    price: 49.99,
    img: `https://images-na.ssl-images-amazon.com/images/I/913Y9grqS7L._UL1500_.jpg`
  },
  {
    name: "BERKINS Men's Synthetic Leather Formal Shoes Ethnic Shoes",
    price: 12.99,
    img: `https://images-na.ssl-images-amazon.com/images/I/61bZEPd9RZL._UL1500_.jpg`
  }
];

class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView
        style={{
          flexGrow: 0,
          width: "100%",
          height: "100%"
        }}
        showsVerticalScrollIndicator={false}
      >
        <Image
          style={{
            height: 150,
            width: "100%",
            resizeMode: "cover"
          }}
          source={{
            uri:
              "https://m.media-amazon.com/images/G/31/img20/Shoes/January/MS/EOSS/Header/PC/EOSS-Footwear-PC-1._CB427291853_.jpg"
          }}
        />
        <Text style={{ textAlign: "center", paddingTop: 10, fontSize: 20 }} h2>
          Available Products:
        </Text>
        {products.map((product, index) => {
          return (
            <View style={styles.row} key={index}>
              <View style={styles.col}>
                <Product product={product} />
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  col: {
    flex: 1
  }
});

export default withNavigation(HomeScreen);
