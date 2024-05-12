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
  GetDish
} from "../../../../database";

const Payment = ({ route }) => {
  const navigation = useNavigation();
  const { user, setUser } = useContext(UserContext);
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const fetchItems = async() => {
      const items = await GetCartItems(user.cartId);
      setCartItems(items);
      //console.log(items)
    };
    fetchItems();
  }), [];
    
  

  const handlePay = async () => {
    // handlePay 함수 구현
  };

  const goToPaymentMethod = () => {
    navigation.navigate("PaymentMethod");
  };

  const { itemName, sauceName, quantity, totalPrice } = route.params;
  
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
      <View style={styles.section}>
        {cartItems !== 0 &&
        cartItems.map((item) => (
          <SelectedItem
            itemName = {item.dish[0].name}
            // sauceName = {sauceName}
            // totalPrice = {totalPrice}
          />
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.subtotal}>Subtotal: AU${totalPrice}</Text>
        <Text>{"\n"}</Text>
        <Text style={styles.fee}>Delivery fee: AU$5</Text>
        <Text>{"\n"}</Text>
        <Text style={styles.fee}>Service fee: AU$3</Text>
        <Text>{"\n"}</Text>
        <Text style={styles.total}>Total {totalPrice}</Text>
      </View>
      <TouchableOpacity style={styles.section} onPress={goToPaymentMethod}>
        <View style={styles.cardContainer}>
          <Image
            source={require("../../../../assets/screens/EveryImages/MasterCard.png")}
            style={styles.icon}
          />
          <Text style={styles.textPrimary}>MasterCard 1234</Text>
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
  )
}

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
    flexWrap: "wrap", // Allow text to wrap to next line
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
    flex: 1, // Allow text to take full width
  },
  description: {
    fontSize: 16,
    color: "grey",
    marginBottom: 5,
    flex: 1, // Allow text to take full width
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1, // Allow text to take full width
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
