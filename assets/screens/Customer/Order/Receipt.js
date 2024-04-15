import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Receipt = () => {
  const handleClose = () => {
    // Logic to close the receipt screen
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Receipt</Text>
      <Text style={styles.description}>Here's your receipt for your food,</Text>
      <Image
        source={require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/Food.png")} // Replace with your actual food receipt image path
        style={styles.foodIcon}
      />
      <View style={styles.receiptDetails}>
        <Text style={styles.totalTitle}>Total</Text>
        <Text style={styles.amount}>AU$97</Text>
        <Text style={styles.subtotalTitle}>Subtotal</Text>
        <Text style={styles.amount}>AU$89</Text>
        <Text style={styles.feeTitle}>Delivery fee</Text>
        <Text style={styles.amount}>AU$5</Text>
        <Text style={styles.feeTitle}>Service fee</Text>
        <Text style={styles.amount}>AU$3</Text>
      </View>
      <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: "white",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  foodIcon: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 20,
  },
  receiptDetails: {
    width: "80%",
    alignItems: "center",
    marginBottom: 20,
  },
  totalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  amount: {
    fontSize: 16,
    alignSelf: "flex-start",
    marginBottom: 4,
  },
  subtotalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  feeTitle: {
    fontSize: 18,
    alignSelf: "flex-start",
  },
  closeButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    width: "80%",
    alignItems: "center",
  },
  closeButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export default Receipt;
