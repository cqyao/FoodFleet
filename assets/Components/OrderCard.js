import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { GetRestaurantOrders, GetCustomer, GetRestaurantCarts, GetRestOrdersById } from "../../database";

const OrderCard = ({ id }) => {
  const [total, setTotal] = useState('');
  const [message, setMessage] = useState('');
  const [cust, setCust] = useState('');
  const [status, setStatus] = useState('');
  useEffect(() => {
    const fetchOrder = async () => {
      const order = await GetRestOrdersById(id)
      console.log(order.cartId)
      const cart = await GetRestaurantCarts(order.cartId)
      const cust = await GetCustomer(cart.customerId)
      
      setTotal(order.total)
      setMessage(order.message)
      setCust(cust.firstName + ' ' + cust.lastName)
      setStatus(order.status)
    };
    fetchOrder();
  }, [id])



  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{id}</Text>
      <Text style={styles.cardText}>Customer: {cust}</Text>
      <Text style={styles.cardText}>Status: {status}</Text>
      <Text style={styles.cardText}>Total: ${total}</Text>
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
    shadowColor: '#000', // Shadow properties for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardText: {
    fontSize: 15,
  },
});

export default OrderCard;
