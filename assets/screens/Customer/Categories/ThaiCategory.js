import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const thaiRestaurantsData = [
  {
    id: "1",
    name: "Kinn THAI",
    address: "Shop GDW 117 Wollongong Central, Wollongong NSW 2500",
    rating: 4.7,
    deliveryFee: "Free",
    deliveryTime: "20 min",
    logoUri: require("../../../../assets/screens/EveryImages/KinThai.png"), // Replace with the actual image file path

  },
  {
    id: "2",
    name: "Jasmine Rice",
    address: "131 Corrimal St, Wollongong NSW 2500",
    rating: 4.7,
    deliveryFee: "Free",
    deliveryTime: "20 min",
    logoUri: require("../../../../assets/screens/EveryImages/JasminRice.png"), // Replace with the actual image file path

  },
  // ... more Thai restaurants
];

const ThaiRestaurantItem = ({
  name,
  address,
  rating,
  deliveryFee,
  deliveryTime,
  logoUri,
}) => (
  <View style={styles.restaurantItem}>
    <Image source={logoUri} style={styles.logo} />
    <View style={styles.infoContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.address}>{address}</Text>
      <View style={styles.details}>
        <Text style={styles.rating}>{rating} ★</Text>
        <Text style={styles.deliveryFee}>{deliveryFee}</Text>
        <Text style={styles.deliveryTime}>{deliveryTime}</Text>
      </View>
    </View>
  </View>
);

const ThaiCategory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thai</Text>
      <FlatList
        data={thaiRestaurantsData}
        renderItem={({ item }) => <ThaiRestaurantItem {...item} />}
        keyExtractor={(item) => item.id}
      />
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
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  restaurantItem: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  address: {
    fontSize: 14,
    color: "gray",
    marginTop: 4,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  rating: {
    backgroundColor: "#ffdd00",
    color: "white",
    fontWeight: "bold",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: "hidden",
    marginRight: 10,
  },
  deliveryFee: {
    fontSize: 14,
    color: "green",
  },
  deliveryTime: {
    fontSize: 14,
    color: "#ff6600",
  },
});

export default ThaiCategory;
