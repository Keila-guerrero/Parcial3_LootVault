import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProductCard from "../components/ProductCard";

export default function HomeScreen() {
  const navigation = useNavigation();

  const featuredProducts = [
    {
      id: "1",
      name: "Mortal Kombat 11 Ultimate",
      price: 400,
      oldPrice: 800,
      image: require("../../assets/produ1.jpeg"),
      description: "La experiencia definitiva de MK11. Toma el control de los protectores de la Tierra en las DOS campañas de historia del juego."
    },
    {
      id: "2",
      name: "HALO 5",
      price: 980,
      image: require("../../assets/produ2.jpeg"),
      description: "Una fuerza imparable amenaza la galaxia y el Jefe Maestro ha desaparecido. Una saga épica te espera."
    },
  ];

  return (
    <View style={styles.baseContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.brandName}>LootVault</Text>

        <Image source={require("../../assets/fondo.jpg")} style={styles.bannerTop} />

        <Text style={styles.sectionTitle}>LOOT DESTACADO</Text>
        
        <View style={styles.productsPreview}>
          {featuredProducts.map((product) => (
            <View key={product.id} style={styles.featuredProductWrapper}>
              <ProductCard
                name={product.name}
                price={product.price}
                oldPrice={product.oldPrice}
                image={product.image}
                description={product.description}
                navigation={navigation}
              />
            </View>
          ))}
        </View>

        <Image source={require("../../assets/fondo2.jpg")} style={styles.bannerBottom} />

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("ProductList")}
        >
          <Text style={styles.navButtonText}>VER TODO EL ARSENAL</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    backgroundColor: "#000000",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  logo: {
    width: 140,
    height: 140,
    alignSelf: 'center',
    marginTop: 60,
    resizeMode: 'contain',
  },
  brandName: {
    fontSize: 34,
    fontWeight: '700',
    color: '#00d0ff',
    textAlign: 'center',
    marginTop: 10,
    textShadowColor: 'rgba(0, 208, 255, 0.7)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  bannerTop: {
    width: "92%",
    height: 190,
    alignSelf: "center",
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: '#00d0ff',
    marginTop: 35,
    resizeMode: 'cover',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: '#ffffff',
    marginLeft: 20,
    marginTop: 35,
    letterSpacing: 1,
  },
  productsPreview: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: "4%",
  },
  featuredProductWrapper: {
    width: '48%',
  },
  bannerBottom: {
    width: "92%",
    height: 150,
    alignSelf: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#BF5AF2',
    marginTop: 30,
    resizeMode: 'cover',
  },
  navButton: {
    backgroundColor: '#00d0ff',
    marginHorizontal: 30,
    marginTop: 35,
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
  },
  navButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "900",
    textTransform: 'uppercase',
  },
});