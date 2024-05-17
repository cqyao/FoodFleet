import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import {
  GetRestaurantOrders,
  GetCustomer,
  GetRestaurantCarts,
  GetRestOrdersById,
  GetCartById,
} from "../../database";

const OrderCard = ({ order }) => {
  const [customer, setCustomer] = useState('');
  
  var cartId = order.cartId

  useEffect(() => {
    const fetchCart = async() => {
      var cart = await GetCartById(cartId)
      var customer = await GetCustomer(cart[0].customerId)
      setCustomer(customer[0])
    }
    fetchCart()
  })
 


  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{order.id}</Text>
      <Text style={styles.cardText}>Customer: {customer.firstName} {customer.lastName}</Text>
      <Text style={styles.cardText}>Status: {order.status}</Text>
      <Text style={styles.cardText}>Total: ${order.total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    elevation: 3, // Added for shadow on Android
    shadowColor: "#000", // Shadow properties for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardText: {
    fontSize: 15,
  },
});

export default OrderCard;
