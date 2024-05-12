import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const HanokCart = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { item, sauce, totalPrice, quantity } = route.params; // Extracting the item, sauce, totalPrice, and quantity from route params

  const handlePayment = () => {
    navigation.navigate("Payment", {
      // Pass data to Payment screen
      itemName: item.name,
      sauceName: sauce,
      quantity: quantity,
      itemPrice: totalPrice,
    });
    console.log(item.name, sauce, quantity, totalPrice);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/screens/EveryImages/HanokLogo.png")}
        style={styles.logo}
      />

      {/* <Image source={item.imageUrl} style={styles.productImage} /> */}

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Hanok</Text>
        <Text style={styles.description}>{item.name}</Text>
        <Text style={styles.description}>Sauce: {sauce}</Text>
        <Text style={styles.description}>Quantity: {quantity}</Text>
        {/* Modified */}
        <Text style={styles.price}>AU${totalPrice}</Text>
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
