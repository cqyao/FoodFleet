import React, { useState, useContext, useEffect } from "react";
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
import { UserContext } from "../../../../context/UserContext";
import SelectedItem from "../../../Components/SelectedItem";

import {
  MakeOrder,
  GetPaymentMethods,
  GetCartItems,
  GetDish,
} from "../../../../database";

const Payment = () => {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);
  const [cartItems, setCartItems] = useState([]);
  var subtotal = 0;
  var deliveryFee = "5";
  var serviceFee = "3";

  useEffect(() => {
    const fetchItems = async () => {
      const items = await GetCartItems(user.cartId);
      setCartItems(items);
      console.log("Cart items: ", items[0].dish.price)
    };
    fetchItems();
  }, []);

  for (var i = 0; i < cartItems.length; i++) {
    subtotal += cartItems[i].dish.price * cartItems[i].quantity;
  }

  if (user.membership) {
    var totalPrice = subtotal;
    var deliveryFee = "0";
    var serviceFee = "0";
  } else {
    var totalPrice = subtotal + parseInt(serviceFee) + parseInt(deliveryFee);
  }

  const handlePay = async () => {
    // handlePay 함수 구현
  };

  const goToPaymentMethod = () => {
    navigation.navigate("PaymentMethod");
  };

  const selectedCardNumber =
    user.paymentMethods[user.selectedCardIndex]?.cardNumber || "";

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <View style={styles.locationContainer}>
          <Image
            source={require("../../../../assets/screens/EveryImages/Location.png")}
            style={styles.icon}
          />
          <Text style={styles.userPostCode}>Postcode</Text>
        </View>
      </View>
      <View style={styles.itemSection}>

        {cartItems !== 0 &&
          cartItems.map((item) => (
            <SelectedItem
              key={item.id}
              itemName={item.dish.name}
              price={item.dish.price}
              quantity={item.quantity}
              description={item.dish.description}
            />
          ))}
      </View>
      <View style={styles.section}>
        <Fee isMember={user.isMember} />
      </View>
      <TouchableOpacity style={styles.section} onPress={goToPaymentMethod}>
        <View style={styles.cardContainer}>
          <Image
            source={require("../../../../assets/screens/EveryImages/MasterCard.png")}
            style={styles.icon}
          />
          <Text style={styles.textPrimary}>{selectedCardNumber}</Text>
        </View>
        <Image
          source={require("../../../../assets/screens/EveryImages/RightChevron.png")}
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
    flexWrap: "wrap",
  },
  itemSection: {
    flexDirection: "column",
    alignItems: "left",
    paddingLeft: 10,
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
    flex: 1,
  },
  description: {
    fontSize: 16,
    color: "grey",
    marginBottom: 5,
    flex: 1,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  subtotal: {
    fontSize: 16,
    fontWeight: "600",
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
