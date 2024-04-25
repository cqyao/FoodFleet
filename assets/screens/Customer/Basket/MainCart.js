import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const MainCart = ({ navigation }) => {
  const [restaurants, setRestaurants] = useState([
    {
      id: "1",
      name: "Hanok",
      itemQuantity: 1,
      address: "2/6 Daisy St",
      image: require("../../../../assets/screens/EveryImages/HanokLogo.png"),
    },
    {
      id: "2",
      name: "Hungry Jacks",
      itemQuantity: 1,
      address: "2/6 Daisy St",
      image: require("../../../../assets/screens/EveryImages/HanokLogo.png"),
    },
    {
      id: "3",
      name: "Burger King",
      itemQuantity: 1,
      address: "2/6 Daisy St",
      image: require("../../../../assets/screens/EveryImages/HanokLogo.png"),
    },
    // Add more restaurant data here
  ]);

  const handleDelete = (id) => {
    const updatedRestaurants = restaurants.filter(
      (restaurant) => restaurant.id !== id
    );
    setRestaurants(updatedRestaurants);
  };

  const handleNavigation = () => {
    navigation.navigate("HanokCart");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>CART</Text>

      {restaurants.map((restaurant) => (
        <TouchableOpacity
          key={restaurant.id}
          style={styles.card}
          onPress={handleNavigation}
        >
          <Image source={restaurant.image} style={styles.logo} />
          <View style={styles.details}>
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text>{restaurant.itemQuantity} Item</Text>
            <Text>Address: {restaurant.address}</Text>
          </View>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => handleDelete(restaurant.id)}
          >
            <Image
              source={require("../../../../assets/screens/EveryImages/trash.png")} // Replace with your trash icon
              style={styles.trashIcon}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      ))}

      {/* Bottom tab navigation placeholders */}
      <View style={styles.bottomNav}>
        <View style={styles.navIcon}></View>
        <View style={styles.navIcon}></View>
        <View style={styles.navIcon}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
    marginLeft: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#F0E68C",
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  deleteButton: {
    // Style for delete button
  },
  trashIcon: {
    width: 24,
    height: 24,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    borderTopColor: "#ddd",
    borderTopWidth: 1,
  },
  navIcon: {
    // Placeholder style for navigation icons
  },
});

export default MainCart;
