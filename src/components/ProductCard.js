import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProductCard({ name, price, oldPrice, image, description, navigation }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("ProductDetail", {
          name,
          price,
          oldPrice,
          image,
          description,
        })
      }
    >
      <Image source={image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{name}</Text>
        <View style={styles.priceContainer}>
          {oldPrice && (
            <Text style={styles.oldPrice}>
              ${oldPrice}
            </Text>
          )}
          <Text style={styles.productPrice}>
            ${price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    marginBottom: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#333",
  },
  image: {
    width: "100%",
    height: 160,
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 15,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  oldPrice: {
    fontSize: 15,
    color: "#888",
    textDecorationLine: "line-through",
    marginRight: 10,
    fontWeight: "400",
  },
  productPrice: {
    fontSize: 18,
    color: "#00d0ff",
    fontWeight: "800",
  },
});