import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CartScreen({ cart, setCart }) {
  // Aseguramos que price sea un número antes de sumar
  const total = cart.reduce((sum, item) => sum + (Number(item.price) || 0), 0);

  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MI CARRITO</Text>
      <FlatList
        data={cart}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => removeItem(index)} style={styles.deleteButton}>
              <Ionicons name="trash" size={24} color="#ff4444" />
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.footer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>TOTAL</Text>
          <Text style={styles.totalAmount}>${total}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => setCart([])}>
          <Text style={styles.buttonText}>VACIAR CARRITO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "900",
    color: "#00d0ff",
    marginTop: 40,
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#111",
    borderRadius: 12,
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#333",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
  price: {
    fontSize: 18,
    color: "#00d0ff",
    marginTop: 4,
    fontWeight: "800",
  },
  deleteButton: {
    padding: 10,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#333",
    paddingTop: 20,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  totalText: {
    fontSize: 20,
    color: "#fff",
  },
  totalAmount: {
    fontSize: 24,
    color: "#00d0ff",
    fontWeight: "900",
  },
  button: {
    backgroundColor: "#BF5AF2",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
  },
});