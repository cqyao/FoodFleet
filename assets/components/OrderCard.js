import { View, Text, StyleSheet } from "react-native";
import React from "react";

const OrderCard = ({ name, items, price, address }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{name}</Text>
      <Text style={styles.cardText}>{items}</Text>
      <Text style={styles.cardText}>{price}</Text>
      <Text style={styles.cardText}>{address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: "#FFCF70",
    borderRadius: 20,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 20,
  },
});

export default OrderCard;
