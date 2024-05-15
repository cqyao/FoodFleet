import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { UserContext } from "../../../../context/UserContext";
import {AddToCart} from "../../../../database";

const HanokOrder = ({navigation}) => {
  const [selectedSauce, setSelectedSauce] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(89); // Initial price for 1 item
  const route = useRoute();
  const { item } = route.params; // Extracting the item from route params
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    // Update the total price whenever quantity changes
    const price = parseFloat(item.price); // Parse the price string to float
    setTotalPrice(price * quantity);
  }, [quantity, item]);

  const sauces = [
    "Korean BBQ sauce",
    "Korean chicken sauce",
    "Spicy sauce",
    "Sweet sauce",
    "Salt & Sesame oil",
  ];

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
  const addToBasket = async () => {
    await AddToCart(item.id, user.cartId, quantity)
    navigation.navigate("HanokCart", {
      item: item,
      sauce: selectedSauce,
      quantity: quantity, // Ensure that quantity is passed correctly
      totalPrice: totalPrice.toFixed(2),
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../EveryImages/HanokLogo.png")} // Replace with actual logo path
        style={styles.logo}
      />
      <Text style={styles.title}>Hanok</Text>
      <Text style={styles.rating}>★ 4.6 (200+ ratings) Korean BBQ $$</Text>
      <Text style={styles.openingHours}>Open until 10:00 PM</Text>

      <Text style={styles.sectionTitle}>Choose your sauce (Required)</Text>
      {sauces.map((sauce, index) => (
        <TouchableOpacity
          key={index}
          style={styles.radioContainer}
          onPress={() => setSelectedSauce(sauce)}
        >
          <View style={styles.radio}>
            {selectedSauce === sauce && <View style={styles.selectedRadio} />}
          </View>
          <Text style={styles.sauce}>{sauce}</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.quantityContainer}>
        <TouchableOpacity
          onPress={decrementQuantity}
          style={styles.quantityButton}
        >
          <Text style={styles.quantityButtonText}>−</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity
          onPress={incrementQuantity}
          style={styles.quantityButton}
        >
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.addToBasketButton} onPress={addToBasket}>
        <Text style={styles.addToBasketText}>
          Add {quantity} to basket AU${totalPrice.toFixed(2)}{" "}
          {/* Fixed to 2 decimal places */}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  rating: {
    textAlign: "center",
    color: "grey",
  },
  openingHours: {
    textAlign: "center",
    color: "grey",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginLeft: 20,
  },
  radio: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  selectedRadio: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#000",
  },
  sauce: {
    fontSize: 16,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  quantityButton: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
  },
  quantityButtonText: {
    fontSize: 18,
    color: "#000",
  },
  quantity: {
    marginHorizontal: 20,
    fontSize: 18,
  },
  addToBasketButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: "center",
    marginHorizontal: 50,
    marginBottom: 20,
  },
  addToBasketText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export default HanokOrder;
