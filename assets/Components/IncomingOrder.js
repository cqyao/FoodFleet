// Todo: Click "Accept" => Create new order with same details but change status to "In Preparation"
// then, delete old order.

import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import {
  GetCustomer,
  GetCartById,
  UpdateOrder,
} from "../../database";
import { TouchableOpacity } from "react-native-gesture-handler";

const IncomingOrder = ({ order }) => {
  const [customer, setCustomer] = useState("");

  useEffect(() => {
    const fetchOrder = async () => {
      var cart = await GetCartById(order.cartId)
      var customer = await GetCustomer(cart[0].customerId)
      setCustomer(customer[0])
    };
    fetchOrder();
  }, []);

  const acceptPress = async() => {
    await UpdateOrder(order.id, "In Preparation");
  };

  const rejectPress = async() => {
    await UpdateOrder(order.id, "Cancelled");
  };

  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>Customer: {customer.firstName} {customer.lastName}</Text>
      <Text>Address: {customer.address}</Text>
      <Text>Phone: {customer.phoneNumber}</Text>
      <Text style={styles.cardText}>Total: ${order.total}</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={[styles.accept]} onPress={acceptPress}>
            <Text>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reject} onPress={rejectPress}>
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
