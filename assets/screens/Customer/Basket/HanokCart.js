import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const HanokCart = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <View style={styles.container}>
      <Image
        source={require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/HanokLogo.png")}
        style={styles.logo}
      />

      <Image
        source={require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/HanokCoupleSet.png")}
        style={styles.productImage}
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Hanok</Text>
        <Text style={styles.description}>Couple Set</Text>
        <Text style={styles.description}>Sauce: Salt & Sesame oil</Text>
        <Text style={styles.price}>AU$89</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={decreaseQuantity}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity
            onPress={increaseQuantity}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payText}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
    backgroundColor: "white",
  },
  logo: {
    width: 150,
    height: 80,
    resizeMode: "contain",
  },
  productImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginVertical: 20,
  },
  detailsContainer: {
    width: "90%",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 18,
    color: "gray",
  },
  price: {
    fontSize: 22,
    color: "black",
    marginVertical: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 20,
    color: "black",
  },
  quantity: {
    fontSize: 20,
    color: "black",
    marginHorizontal: 15,
  },
  payButton: {
    backgroundColor: "#FFD700", // A placeholder color for the Pay button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    position: "absolute",
    bottom: 50,
  },
  payText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default HanokCart;
