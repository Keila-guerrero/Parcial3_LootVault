import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ProductListScreen from "../screens/ProductListScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import OffersScreen from "../screens/OffersScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack({ cart, setCart }) {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#000" }, headerTintColor: "#00d0ff" }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "INICIO" }} />
      <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: "CATÁLOGO" }} />
      <Stack.Screen name="ProductDetail" options={{ title: "DETALLE" }}>
        {(props) => <ProductDetailScreen {...props} cart={cart} setCart={setCart} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  const [cart, setCart] = useState([]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { backgroundColor: "#000", borderTopColor: "#00d0ff", height: 60 },
          tabBarActiveTintColor: "#00d0ff",
          tabBarInactiveTintColor: "#555",
          tabBarIcon: ({ color, size }) => {
            let iconName = route.name === "Inicio" ? "home" : route.name === "Ofertas" ? "pricetag" : route.name === "Carrito" ? "cart" : "person";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Inicio">{() => <HomeStack cart={cart} setCart={setCart} />}</Tab.Screen>
        <Tab.Screen name="Ofertas" component={OffersScreen} />
        <Tab.Screen name="Carrito">{() => <CartScreen cart={cart} setCart={setCart} />}</Tab.Screen>
        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}