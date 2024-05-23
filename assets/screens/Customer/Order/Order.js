import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { UserContext } from "../../../../context/UserContext";
import { AddToCart } from "../../../../database";

const Order = () => {
  const [selectedSauce, setSelectedSauce] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(89); // Initial price for 1 item
  const route = useRoute();
  const { item, restaurantLogo, restaurantName } = route.params; // Extracting the item and restaurant details from route params
  const { user, setUser } = useContext(UserContext);
  const navigation = useNavigation();

  useEffect(() => {
    // Update the total price whenever quantity changes
    const price = parseFloat(item.price); // Parse the price string to float
    setTotalPrice(price * quantity);
  }, [quantity, item]);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
  const addToBasket = async () => {
    await AddToCart(item.id, user.cartId, quantity);
    navigation.navigate("MainCart");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: restaurantLogo }} // Use the dynamic logo URL
        style={styles.logo}
      />
      <Text style={styles.title}>{restaurantName}</Text>
     
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          onPress={decrementQuantity}
          style={styles.quantityButton}
        >
          <Text style={styles.quantityButtonText}>−</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity
          onPress={incrementQuantity}
          style={styles.quantityButton}
        >
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.addToBasketButton} onPress={addToBasket}>
        <Text style={styles.addToBasketText}>
          Add {quantity} to basket AU${totalPrice.toFixed(2)}{" "}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  quantityButton: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
  },
  quantityButtonText: {
    fontSize: 18,
    color: "#000",
  },
  quantity: {
    marginHorizontal: 20,
    fontSize: 18,
  },
  addToBasketButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: "center",
    marginHorizontal: 50,
    marginTop: 20,
  },
  addToBasketText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export default Order;
