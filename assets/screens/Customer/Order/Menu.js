import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native"; // Import useRoute
import { UserContext } from "../../../../context/UserContext";

const Menu = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Use useRoute to get route params
  const { user } = useContext(UserContext);

  const { restaurantLogo, restaurantName } = route.params;

  const handleMenuItemPress = (item) => {
    // Navigate to Order screen with the item and restaurant details as parameters
    navigation.navigate("Order", { item, restaurantLogo, restaurantName });
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: restaurantLogo }} // Use the dynamic logo URL
        style={styles.logo}
      />
      <Text style={styles.restaurantName}>{restaurantName}</Text>
      <Text style={styles.restaurantName}>{user.restaurantId}</Text>
      {user.menus.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.menuItem}
          onPress={() => handleMenuItemPress(item)}
        >
          <Image source={{ uri: item.image_url }} style={styles.itemImage} />
          <Text style={styles.itemTitle}>{item.name}</Text>
          <Text style={styles.itemPrice}>${item.price}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
          <Text style={styles.itemDescription}>{item.menuName}</Text>
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

export default Menu;
