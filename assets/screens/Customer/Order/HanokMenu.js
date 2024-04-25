import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const menuItems = [
  {
    id: "1",
    title: "Couple Set",
    description:
      "Wagyu scotch fillet, pork belly, Bean paste soup or kimchi soup, deep-fried vegetable dumpling",
    price: "AU$89.00",
    imageUrl: require("../../EveryImages/HanokCoupleSet.png"), // Replace with the actual image file path
  },
  {
    id: "2",
    title: "Wagyu Tester",
    description:
      "Wagyu scotch fillet, wagyu short-rib meat, wagyu intercostal, wagyu brisket and deep-fried king prawn/drop or soft shell crab",
    price: "AU$119.00",
    imageUrl: require("../../EveryImages/WagyuTester.png"), // Replace with the actual image file path
  },
  {
    id: "3",
    title: "Hanok Platter",
    description:
      "Wagyu scotch fillet, pork belly, Bean paste soup or kimchi soup, deep-fried vegetable dumpling",
    price: "AU$249.00",
    imageUrl: require("../../EveryImages/HanokPlatter.png"), // Replace with the actual image file path
  },
  // ... other menu items
];

const HanokMenu = () => {
  const navigation = useNavigation();

  const handleMenuItemPress = (itemId) => {
    // Navigate to HanokOrder screen with the itemId as a parameter
    navigation.navigate("HanokOrder", { itemId });
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../EveryImages/HanokLogo.png")} // Replace with the actual Hanok logo path
        style={styles.logo}
      />
      <Text style={styles.restaurantName}>Hanok</Text>
      <Text style={styles.rating}>★ 4.6 (200+ ratings) Korean BBQ $$</Text>
      <Text style={styles.timing}>Open until 10:00 PM</Text>
      <Text style={styles.sectionTitle}>Most Popular</Text>

      {menuItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.menuItem}
          onPress={() => handleMenuItemPress(item.id)}
        >
          <Image source={item.imageUrl} style={styles.itemImage} />
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 20,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
  },
  rating: {
    textAlign: "center",
    color: "grey",
  },
  timing: {
    textAlign: "center",
    color: "grey",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 20,
    marginBottom: 10,
  },
  menuItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  itemImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    color: "grey",
  },
  itemDescription: {
    fontSize: 14,
    color: "grey",
  },
});

export default HanokMenu;
