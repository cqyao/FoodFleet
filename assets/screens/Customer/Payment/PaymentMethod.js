import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { UserContext } from "../../../../context/UserContext";

const PaymentMethod = () => {
  const { user } = useContext(UserContext);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0); // Default to the first card

  const navigation = useNavigation();

  const handleSelectCard = (index) => {
    setSelectedCardIndex(index);
    console.log(user.paymentMethods[index]?.cardNumber); // Log the selected card number
    moveCardToTop(index); // Move the selected card to the top
  };

  const handleAddPaymentMethod = () => {
    navigation.navigate("AddPaymentMethod");
  };

  const moveCardToTop = (index) => {
    const temp = user.paymentMethods[index];
    const updatedPaymentMethods = [
      temp,
      ...user.paymentMethods.slice(0, index),
      ...user.paymentMethods.slice(index + 1),
    ];
    // Update the context with the new payment methods order
    // setUser({...user, paymentMethods: updatedPaymentMethods});
  };

  const renderCard = (card, index) => {
    const isSelected = selectedCardIndex === index;
    return (
      <TouchableOpacity
        key={index}
        style={[styles.cardContainer, isSelected && styles.selectedCard]}
        onPress={() => handleSelectCard(index)}
      >
        <Image
          source={require("../../../../assets/screens/EveryImages/MasterCard.png")} // Replace with your actual card icon path
          style={styles.cardIcon}
        />
        <Text style={styles.cardText}>MasterCard {card.cardNumber}</Text>
        {isSelected && <Text style={styles.defaultText}>Default</Text>}
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Payment Method</Text>
      {user.paymentMethods.map(renderCard)}
      <TouchableOpacity
        style={styles.addCardButton}
        onPress={handleAddPaymentMethod}
      >
        <Text style={styles.addCardText}>Add Payment Method</Text>
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
  selectedCard: {
    backgroundColor: "#f0f0f0", // Color for selected card
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
});

export default PaymentMethod;
