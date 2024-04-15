import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const AlmostThere = () => {
  const handleMessage = () => {
    // Logic to send a message to the delivery person
  };

  const handleTip = () => {
    // Logic to tip the delivery person
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Almost there...</Text>
      <Text style={styles.subHeader}>Arriving at 10:15</Text>
      <Text style={styles.latestArrival}>Latest arrival by 10:40</Text>
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar} />
      </View>
      <Image
        source={require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/Delivery.png")} // Replace with your actual delivery person image path
        style={styles.deliveryImage}
      />

      <View style={styles.deliveryPersonInfo}>
        <Image
          source={require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/Avatar1.png")} // Replace with the actual avatar path
          style={styles.avatar}
        />
        <View style={styles.info}>
          <Text style={styles.name}>Jonathan • White Honda Civic</Text>
          <Text style={styles.rating}>95% • TEL005</Text>
        </View>
        <TouchableOpacity style={styles.messageButton} onPress={handleMessage}>
          <Text>Send a message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tipButton} onPress={handleTip}>
          <Text>Tip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.deliveryDetails}>
        <Text style={styles.deliveryHeader}>Delivery details</Text>
        <Text style={styles.address}>Address</Text>
        <Text style={styles.addressDetails}>Fairy Meadow, Wollongong</Text>
        <Text style={styles.instructions}>Instructions</Text>
        <Text style={styles.instructionsDetails}>
          Meet at door! Please contact to me!
        </Text>
      </View>

      <View style={styles.orderSummary}>
        <Text style={styles.summaryHeader}>Order summary</Text>
        <Text style={styles.restaurantName}>Hanok</Text>
        <Text style={styles.itemName}>Couple Set</Text>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.price}>AU$97</Text>
        <TouchableOpacity>
          <Text style={styles.viewReceipt}>view receipt</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  subHeader: {
    fontSize: 18,
    textAlign: "center",
    color: "grey",
  },
  latestArrival: {
    fontSize: 16,
    textAlign: "center",
    color: "grey",
    marginBottom: 20,
  },
  progressBarContainer: {
    paddingHorizontal: 50,
    marginBottom: 20,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "lightgrey",
    width: "100%",
  },
  deliveryImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  deliveryPersonInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontWeight: "bold",
  },
  rating: {
    color: "grey",
  },
  messageButton: {
    // Add styles for the message button
  },
  tipButton: {
    // Add styles for the tip button
  },
  deliveryDetails: {
    padding: 20,
  },
  deliveryHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  address: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  addressDetails: {
    fontSize: 16,
    marginBottom: 15,
  },
  instructions: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  instructionsDetails: {
    fontSize: 16,
  },
  orderSummary: {
    padding: 20,
  },
  summaryHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  itemName: {
    fontSize: 16,
    marginBottom: 15,
  },
  total: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  viewReceipt: {
    fontSize: 16,
    color: "#007bff",
  },
});

export default AlmostThere;
