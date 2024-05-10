import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import {
  GetRestaurantOrders,
  GetCustomer,
  GetRestaurantCarts,
  GetRestOrdersById,
} from "../../database";
import { TouchableOpacity } from "react-native-gesture-handler";

const IncomingOrder = ({ id }) => {
  const [total, setTotal] = useState("");
  const [message, setMessage] = useState("");
  const [cust, setCust] = useState("");
  const [status, setStatus] = useState("");
  useEffect(() => {
    const fetchOrder = async () => {
      const order = await GetRestOrdersById(id);
      const cart = await GetRestaurantCarts(order.cartId);
      const cust = await GetCustomer(cart.customerId);

      setTotal(order.total);
      setMessage(order.message);
      setCust(cust.firstName + " " + cust.lastName);
      setStatus(order.status);
    };
    fetchOrder();
  }, [id]);

  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{id}</Text>
      <Text style={styles.cardText}>Customer: {cust}</Text>
      <Text style={styles.cardText}>Status: {status}</Text>
      <Text style={styles.cardText}>Total: ${total}</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={[styles.accept]}>
            <Text>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reject}>
            <Text>Reject</Text>
        </TouchableOpacity>
      </View>
    </View>
      
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    alignItems: "center",
    elevation: 3, // Added for shadow on Android
    shadowColor: "#000", // Shadow properties for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginHorizontal: 10,
  },
  cardText: {
    fontSize: 15,
  },
  accept: {
    backgroundColor: "#74D673",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
  },
  reject: {
    backgroundColor: "#DC4233",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
  },
});

export default IncomingOrder;
