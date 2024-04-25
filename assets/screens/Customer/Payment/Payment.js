import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Payment = () => {
  const navigation = useNavigation();

  const handlePay = () => {
    // Logic to handle the payment process
    Alert.alert(
      "Payment Successful",
      "Your payment is Successful",
      [
        {
          text: "OK",
          onPress: () => navigation.navigate("PreparingOrder"),
        },
      ],
      { cancelable: false }
    );
  };

  const goToPaymentMethod = () => {
    navigation.navigate("PaymentMethod");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <View style={styles.locationContainer}>
          <Image
            source={require("../../../../assets/screens/EveryImages/Location.png")}
            style={styles.icon}
          />
          <Text style={styles.textPrimary}>
            66 Princes Hwy, Fairy Meadow NSW 2519
          </Text>
        </View>
        <Image
          source={require("../../../../assets/screens/EveryImages/RightChevron.png")}
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

      <TouchableOpacity style={styles.section} onPress={goToPaymentMethod}>
        <View style={styles.cardContainer}>
          <Image
            source={require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/MasterCard.png")}
            style={styles.icon}
          />
          <Text style={styles.textPrimary}>MasterCard 1234</Text>
        </View>
        <Image
          source={require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/RightChevron.png")}
          style={styles.icon}
        />
      </TouchableOpacity>

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
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 10,
  },
  textPrimary: {
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
  },
  subtotal: {
    fontSize: 16,
  },
  fee: {
    fontSize: 16,
    color: "grey",
  },
  total: {
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
