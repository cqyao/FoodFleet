import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../../../context/UserContext";

const HanokMenu = () => {
  const navigation = useNavigation();
  const { user, setUser } = useContext(UserContext);

  const handleMenuItemPress = (item) => {
    // Navigate to HanokOrder screen with the item as a parameter
    navigation.navigate("HanokOrder", { item });
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

      {user.menus.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.menuItem}
          onPress={() => handleMenuItemPress(item)}
        >
          <Image source={{uri : item.image_url}} style={styles.itemImage} />
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
