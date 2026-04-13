import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";

export default function ProductDetailScreen({ route, cart, setCart }) {
  const { name, price, oldPrice, image, description } = route.params || {};

  return (
    <ScrollView style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        
        <View style={styles.priceContainer}>
          {oldPrice && <Text style={styles.oldPrice}>${oldPrice}</Text>}
          <Text style={styles.price}>${price}</Text>
        </View>

        <Text style={styles.description}>{description}</Text>
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => {
            setCart([...cart, { name, price, image }]);
            Alert.alert("Éxito", "Agregado al carrito");
          }}
        >
          <Text style={styles.buttonText}>AGREGAR AL CARRITO</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#000" 
  },
  image: { 
    width: "100%", 
    height: 300, 
    resizeMode: 'contain' 
  },
  infoContainer: { 
    padding: 25 
  },
  name: { 
    fontSize: 28, 
    color: "#00d0ff", 
    fontWeight: "bold" 
  },
  priceContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginVertical: 10 
  },
  price: { 
    fontSize: 24, 
    color: "#BF5AF2", 
    fontWeight: "800" 
  },
  oldPrice: {
    fontSize: 18,
    color: "#888",
    textDecorationLine: "line-through",
    marginRight: 15,
  },
  description: { 
    color: "#fff", 
    fontSize: 16,
    marginTop: 10 
  },
  button: { 
    backgroundColor: "#00d0ff", 
    padding: 20, 
    borderRadius: 12, 
    marginTop: 30, 
    alignItems: "center" 
  },
  buttonText: { 
    fontWeight: "bold",
    fontSize: 16 
  }
});