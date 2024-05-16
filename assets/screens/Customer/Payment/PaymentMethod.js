import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../../../context/UserContext";

const PaymentMethod = () => {
  const { user, setUser } = useContext(UserContext);
  const [selectedCardIndex, setSelectedCardIndex] = useState(
    user.selectedCardIndex
  ); // Initialize from user context

  const navigation = useNavigation();

  const handleSelectCard = (index) => {
    setSelectedCardIndex(index);
    moveCardToTop(index);
  };

  const moveCardToTop = (index) => {
    const temp = user.paymentMethods[index];
    const updatedPaymentMethods = [
      temp,
      ...user.paymentMethods.slice(0, index),
      ...user.paymentMethods.slice(index + 1),
    ];
    setUser({
      ...user,
      paymentMethods: updatedPaymentMethods,
      selectedCardIndex: 0,
    });
  };

  const renderCard = (card, index) => {
    const isSelected = index === 0;
    return (
      <TouchableOpacity
        key={index}
        style={[styles.cardContainer, isSelected && styles.selectedCard]}
        onPress={() => handleSelectCard(index)}
      >
        <Image
          source={require("../../../../assets/screens/EveryImages/MasterCard.png")}
          style={styles.cardIcon}
        />
        <View style={styles.cardInfo}>
          <Text style={styles.cardText}>MasterCard {card.cardNumber}</Text>
          {isSelected && <Text style={styles.defaultText}>Default</Text>}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Payment Method</Text>
      {user.paymentMethods.map(renderCard)}
      <TouchableOpacity
        style={styles.addCardButton}
        onPress={() => navigation.navigate("AddPaymentMethod")}
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
    backgroundColor: "#e0e0f8",
    borderColor: "#007bff",
    borderWidth: 2,
    borderRadius: 5,
  },
  cardIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: 10,
  },
  cardInfo: {
    flexDirection: "column",
    flex: 1,
  },
  cardText: {
    fontSize: 18,
  },
  defaultText: {
    fontSize: 16,
    color: "green",
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
