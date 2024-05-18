import React, {useContext, useEffect, useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { UserContext } from "../../../../context/UserContext";
import { GetCartItems } from "../../../../database";
import SelectedItem from "../../../Components/SelectedItem";

const MainCart = () => {
  const navigation = useNavigation();
  const {user, setUser} = useContext(UserContext);
  const [cartItems, setCartItems] = useState([]);
  const restId = 30;

  const handlePayment = () => {
    navigation.navigate("Payment");
  };

  useEffect(() => {
    const fetchCart = async() => {
      const items = await GetCartItems(user.cartId);
      setCartItems(items);
    }
    fetchCart();
  })

  return (
    <View style={styles.container}>
      

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Cart</Text>
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
      </View>
      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payText}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: "#F5F5F5", // Light gray background color
  },
  logo: {
    width: 150,
    height: 100,
    resizeMode: "contain",
    marginBottom: 20,
  },
  productImage: {
    width: 250,
    height: 150,
    resizeMode: "contain",
    marginVertical: 20,
  },
  detailsContainer: {
    width: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333333", // Dark gray text color
  },
  description: {
    fontSize: 18,
    color: "#666666", // Medium gray text color
  },
  price: {
    fontSize: 22,
    color: "#FFA500", // Orange text color
    marginVertical: 10,
  },
  payButton: {
    backgroundColor: "#FFD700", // Gold background color for Pay button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  payText: {
    fontSize: 20,
    color: "#FFFFFF", // White text color
    fontWeight: "bold",
  },
});

export default MainCart;
