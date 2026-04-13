import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ProductCard from "../components/ProductCard";

export default function OffersScreen({ navigation }) {
  const offerGame = {
    id: "1",
    name: "Mortal Kombat 11 Ultimate",
    price: 400,
    oldPrice: 800,
    image: require("../../assets/produ1.jpeg"),
    description: "¡OFERTA FLASH! La experiencia definitiva de MK11 a mitad de precio por tiempo limitado."
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>ZONA DE OFERTAS</Text>
      
      <View style={styles.promoCard}>
        <Text style={styles.promoText}>BOTÍN CON 50% DE DESCUENTO</Text>
      </View>

      <ProductCard 
        name={offerGame.name}
        price={offerGame.price}
        oldPrice={offerGame.oldPrice}
        image={offerGame.image}
        description={offerGame.description}
        navigation={navigation}
      />
    </ScrollView>
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
    letterSpacing: 2,
  },
  promoCard: {
    backgroundColor: "rgba(191, 90, 242, 0.15)",
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#BF5AF2",
    marginBottom: 25,
    alignItems: "center",
  },
  promoText: {
    color: "#BF5AF2",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});