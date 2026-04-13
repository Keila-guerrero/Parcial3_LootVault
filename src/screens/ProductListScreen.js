import { View, Text, StyleSheet, FlatList } from "react-native";
import ProductCard from "../components/ProductCard";

export default function ProductListScreen({ navigation }) {
  const products = [
    { 
      id: "1", 
      name: "Mortal Kombat 11 Ultimate", 
      price: 400, 
      oldPrice: 800, // Aquí está la magia: esto activará el precio tachado
      image: require("../../assets/produ1.jpeg"),
      description: "La experiencia definitiva de MK11. Toma el control de los protectores de la Tierra en las DOS campañas de historia del juego para impedir que Kronika retroceda en el tiempo y reinicie la historia."
    },
    { 
      id: "2", 
      name: "HALO 5", 
      price: 980, 
      image: require("../../assets/produ2.jpeg"),
      description: "Una fuerza imparable amenaza la galaxia y el Jefe Maestro ha desaparecido. Una saga épica y un nuevo modo multijugador masivo te esperan en Halo 5: Guardians."
    },
    { 
      id: "3", 
      name: "Def Jam", 
      price: 500, 
      image: require("../../assets/produ3.jpeg"),
      description: "Combates callejeros despiadados en el mundo del hip-hop. Crea tu propio luchador y ábrete camino hasta la cima de la escena del rap neoyorquino enfrentándote a las estrellas más grandes."
    },
    { 
      id: "4", 
      name: "Sims 4", 
      price: 50, 
      image: require("../../assets/produ4.jpeg"),
      description: "Da rienda suelta a tu imaginación y crea un mundo de Sims único que sea una expresión de ti mismo. Explora y personaliza cada detalle, desde los Sims hasta sus hogares."
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LootVault Catálogo</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard 
            name={item.name} 
            price={item.price}
            oldPrice={item.oldPrice} // Pasamos la nueva propiedad
            image={item.image} 
            description={item.description}
            navigation={navigation} 
          />
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#000000", 
    paddingHorizontal: 16, 
    paddingTop: 40 
  },
  title: { 
    fontSize: 28, 
    fontWeight: "800", 
    color: "#00d0ff", 
    marginBottom: 25, 
    textAlign: 'center', 
    textTransform: 'uppercase', 
    letterSpacing: 2 
  },
  listContainer: { 
    paddingBottom: 30 
  }
});