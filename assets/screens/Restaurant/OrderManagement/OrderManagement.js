// Current implementation has a bit of lag when switching between tabs

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import OrderCard from "../../../Components/OrderCard";
import IncomingOrder from "../../../Components/IncomingOrder";
import { GetRestaurantOrders } from "../../../../database";
import { UserContext } from "../../../../context/UserContext";

const OrderManagement = () => {
  const [activeCategory, setActiveCategory] = useState("In Preparation");
  const [orders, setOrders] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const [refreshing, setRefreshing] = useState(false);

  // Changes the category to filter by
  const changeCategory = (category) => {
    setActiveCategory(category);
  };

  const fetchOrder = async () => {
    const order = await GetRestaurantOrders(user.id);
    if (order !== null) {
      setOrders(order);
    }
  };

  // Gets restaurant orders equal to parameter
  // Needs to change to active restaurant instead of hard coded
  useEffect(() => {
    fetchOrder();
  });

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchOrder();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  // Filter orders by active category only
  const filteredOrders = orders.filter(
    (order) => order.status === activeCategory
  );

  const incomingOrders = orders.filter(
    (order) => order.status === "Incoming"
  );

  return (
    <ScrollView 
      style={[styles.container, { flexDirection: "column" }]}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={{ alignItems: "center" }}>
        <ScrollView horizontal={true}>
          {incomingOrders !== 0 &&
            incomingOrders.map((order) => (
              <IncomingOrder key={order.id} order={order} />
          ))}
        </ScrollView>
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
        {filteredOrders !== 0 &&
          filteredOrders.map((order) => (
            //<Text>{order.total}</Text>
            <OrderCard key={order.id} order={order} />
          ))}
      </ScrollView>
    </ScrollView>
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
