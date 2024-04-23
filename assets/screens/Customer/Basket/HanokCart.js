import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const HanokCart = ({ navigation }) => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(89);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    setPrice(89 * (quantity + 1));
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setPrice(89 * (quantity - 1));
    }
  };

  const handlePayment = () => {
    navigation.navigate("Payment"); // Navigate to Payment screen
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/screens/EveryImages/HanokLogo.png")}
        style={styles.logo}
      />

      <Image
        source={require("../../../../assets/screens/EveryImages/HanokCoupleSet.png")}
        style={styles.productImage}
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Hanok</Text>
        <Text style={styles.description}>Couple Set</Text>
        <Text style={styles.description}>Sauce: Salt & Sesame oil</Text>
        <Text style={styles.price}>AU${price}</Text>
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
      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payText}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: "#F5F5F5", // Light gray background color
  },
  logo: {
    width: 150,
    height: 100,
    resizeMode: "contain",
    marginBottom: 20,
  },
  productImage: {
    width: 250,
    height: 150,
    resizeMode: "contain",
    marginVertical: 20,
  },
  detailsContainer: {
    width: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333333", // Dark gray text color
  },
  description: {
    fontSize: 18,
    color: "#666666", // Medium gray text color
  },
  price: {
    fontSize: 22,
    color: "#FFA500", // Orange text color
    marginVertical: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  quantityButton: {
    backgroundColor: "#FFFFFF", // White background color for quantity buttons
    borderWidth: 1,
    borderColor: "#CCCCCC", // Light gray border color
    padding: 10,
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 20,
    color: "#333333", // Dark gray text color
  },
  quantity: {
    fontSize: 20,
    color: "#333333", // Dark gray text color
    marginHorizontal: 15,
  },
  payButton: {
    backgroundColor: "#FFD700", // Gold background color for Pay button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  payText: {
    fontSize: 20,
    color: "#FFFFFF", // White text color
    fontWeight: "bold",
  },
});

export default HanokCart;
