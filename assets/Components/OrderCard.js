import { View, Text, StyleSheet } from "react-native";
import React from "react";

const OrderCard = ({ name, items, price, address }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>Name: {name}</Text>
      <Text style={styles.cardText}>Items: {items}</Text>
      <Text style={styles.cardText}>Total Price: {price}</Text>
      <Text style={styles.cardText}>Address: {address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFCF70",
    borderRadius: 15,
    marginBottom: 10,
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  cardText: {
    fontSize: 20,
  },
});

export default OrderCard;
