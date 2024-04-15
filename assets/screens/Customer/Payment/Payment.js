import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

const Payment = () => {
  const handlePay = () => {
    // Logic to handle the payment process
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Image
          source={require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/Location.png")} // Replace with actual location icon path
          style={styles.icon}
        />
        <Text style={styles.textPrimary}>
          66 Princes Hwy, Fairy Meadow NSW 2519
        </Text>
        <Image
          source={require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/RightChevron.png")} // Replace with actual chevron icon path
          style={styles.icon}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Selected item</Text>
        <Text style={styles.itemName}>Hanok - Couple Set</Text>
        <Text style={styles.description}>Sauce: Salt & Sesame oil</Text>
        <Text style={styles.price}>AU$89</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtotal}>Subtotal</Text>
        <Text style={styles.price}>AU$89</Text>
        <Text style={styles.fee}>Delivery fee</Text>
        <Text style={styles.price}>AU$5</Text>
        <Text style={styles.fee}>Service fee</Text>
        <Text style={styles.price}>AU$3</Text>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.price}>AU$97</Text>
      </View>

      <View style={styles.section}>
        <Image
          source={require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/MasterCard.png")} // Replace with actual MasterCard icon path
          style={styles.icon}
        />
        <Text style={styles.textPrimary}>MasterCard 1234</Text>
        <Image
          source={require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/RightChevron.png")} // Replace with actual chevron icon path
          style={styles.icon}
        />
      </View>

      <TouchableOpacity style={styles.payButton} onPress={handlePay}>
        <Text style={styles.payButtonText}>Pay</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  textPrimary: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  header: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: "grey",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
  },
  subtotal: {
    textAlign: "left",
    fontSize: 16,
  },
  fee: {
    textAlign: "left",
    fontSize: 16,
    color: "grey",
  },
  total: {
    textAlign: "left",
    fontSize: 16,
    fontWeight: "bold",
  },
  payButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    margin: 20,
    alignItems: "center",
  },
  payButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export default Payment;
