// src/views/Details.js
import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Card, Button, withTheme } from "react-native-elements";

class DetailsScreen extends React.Component {
  render() {
    return (
      <Card>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ textAlign: "center" }} h2>
            Levanse Synthetic Leather Matte Blue Corporate Casual Shoes/Sneakers
            for Men/Boys.
          </Text>
          <Image
            style={{
              marginTop: 20,
              height: 200,
              width: "100%",
              resizeMode: "stretch"
            }}
            source={{
              uri:
                "https://images-na.ssl-images-amazon.com/images/I/91tNJ-oQFQL._UX575_.jpg"
            }}
          />
          <Text
            style={{
              textAlign: "left",
              paddingTop: 10,
              paddingBottom: 10,
              fontSize: 20
            }}
            h2
          >
            Product Description:
          </Text>
          <Text
            style={{
              paddingBottom: 10
            }}
          >
            Levanse unbelievable comfort Corporate Casual Shoes. This Casual
            Shoes is luxurious faux shearling for a warm, soft feeling and
            treated with Ultra-Fresh to keep your foot fresh and comfortable.
          </Text>

          <Button
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              fontSize: 20
            }}
            title="Buy"
            onPress={() => alert("Item Added to Cart")}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              marginTop: 50,
              justifyContent: "space-between"
            }}
          >
            <View
              style={{ width: 300, height: 200, backgroundColor: "powderblue" }}
            />
            <View
              style={{ width: 300, height: 200, backgroundColor: "skyblue" }}
            />
            <View
              style={{ width: 300, height: 200, backgroundColor: "steelblue" }}
            />
          </View>
        </ScrollView>
      </Card>
    );
  }
}

export default DetailsScreen;
