import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.image}
      />
      <Text style={styles.name}>Usuario Demo</Text>
      <Text style={styles.email}>usuario@correo.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: "#00d0ff",
    marginBottom: 25,
    resizeMode: "cover",
  },
  name: {
    fontSize: 28,
    fontWeight: "800",
    color: "#ffffff",
    letterSpacing: 1,
  },
  email: {
    fontSize: 16,
    color: "#00d0ff",
    marginTop: 10,
    fontWeight: "500",
  },
});