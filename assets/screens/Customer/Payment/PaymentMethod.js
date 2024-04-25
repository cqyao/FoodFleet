import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const PaymentMethod = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0); // Default to the first card
  const navigation = useNavigation();

  const cards = [
    { lastFourDigits: "1234", default: true },
    { lastFourDigits: "4567", default: false },
    { lastFourDigits: "8901", default: false },
    // Add more cards here
  ];

  const handleSelectCard = (index) => {
    setSelectedCardIndex(index);
  };

  const handlePay = () => {
    // Payment logic goes here
  };

  const handleAddPaymentMethod = () => {
    navigation.navigate("AddPaymentMethod");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Payment Method</Text>
      {cards.map((card, index) => (
        <TouchableOpacity
          key={index}
          style={styles.cardContainer}
          onPress={() => handleSelectCard(index)}
        >
          <Image
            source={require("../../../../assets/screens/EveryImages/MasterCard.png")} // Replace with your actual card icon path
            style={styles.cardIcon}
          />
          <Text style={styles.cardText}>
            MasterCard **** {card.lastFourDigits}
          </Text>
          {selectedCardIndex === index && (
            <Text style={styles.defaultText}>Default</Text>
          )}
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.addCardButton}
        onPress={handleAddPaymentMethod}
      >
        <Text style={styles.addCardText}>Add Payment Method</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.payButton} onPress={handlePay}>
        <Text style={styles.payButtonText}>Pay</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 20,
    textAlign: "center",
    backgroundColor: "#f0f0f0",
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  cardIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: 10,
  },
  cardText: {
    fontSize: 18,
    flex: 1,
  },
  defaultText: {
    fontSize: 16,
    color: "green",
    marginLeft: 10,
  },
  addCardButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  addCardText: {
    fontSize: 18,
    color: "#007bff",
  },
  payButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    margin: 20,
    alignItems: "center",
  },
  payButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export default PaymentMethod;
