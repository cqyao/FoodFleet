// Current implementation has a bit of lag when switching between tabs

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import OrderCard from "../../../Components/OrderCard";
import IncomingOrder from "../../../Components/IncomingOrder";
import { GetRestaurantOrders } from "../../../../database";
import { UserContext } from "../../../../context/UserContext";

const OrderManagement = () => {
  const [activeCategory, setActiveCategory] = useState("In Preparation");
  const [orders, setOrders] = useState([]);
  const { userId, setUserId } = useContext(UserContext);

  // Changes the category to filter by
  const changeCategory = (category) => {
    setActiveCategory(category);
  };

  // Gets restaurant orders equal to parameter
  // Needs to change to active restaurant instead of hard coded
  useEffect(() => {
    const fetchOrder = async () => {
      const order = await GetRestaurantOrders(userId);
      if (order !== null) {
        setOrders(order);
      }
    };
    fetchOrder();
  });

  // Filter orders by active category only
  const filteredOrders = orders.filter(
    (order) => order.status === activeCategory
  );

  return (
    <View style={[styles.container, { flexDirection: "column" }]}>
      <View style={{ alignItems: "center" }}>
        {/* <ScrollView horizontal={true}>
                    <IncomingOrder key={1} id={1}></IncomingOrder>
                </ScrollView> */}
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => changeCategory("In Preparation")}
          >
            <Text style={styles.navButtonText}>In Preparation</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => changeCategory("Delivered")}
          >
            <Text style={styles.navButtonText}>Delivered</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => changeCategory("Cancelled")}
          >
            <Text style={styles.navButtonText}>Cancelled</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        {/*Create new array with filtered orders only and create new component for each */}

        {filteredOrders !== 0 &&
          filteredOrders.map((order) => (
            //<Text>{order.total}</Text>
            <OrderCard key={order.id} id={order.id} />
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F2F2F2",
  },
  navButton: {
    backgroundColor: "#FFCF70",
    borderRadius: 10,
    width: "33%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    marginVertical: 20,
  },
  navButtonText: {
    fontSize: 14,
  },
});

export default OrderManagement;
