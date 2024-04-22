import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

// Dummy data array for cafes, replace with your actual data source
const cafesData = [
  {
    id: "1",
    name: "Diggies",
    address: "1 Cliff Rd, North Wollongong NSW 2500",
    rating: 4.7,
    deliveryFee: "Free",
    deliveryTime: "20 min",
    logoUri: require("../../EveryImages/DiggiesLogo.png"), // Replace with the actual image file path for Diggies
  },
  {
    id: "2",
    name: "RUH",
    address:
      "200 Crown St West Building, Wollongong Central Mall, Wollongong NSW 2500",
    rating: 4.7,
    deliveryFee: "Free",
    deliveryTime: "20 min",
    logoUri: require("../../EveryImages/RUH.png"), // Replace with the actual image file path for RUH
  },
  // ... more cafes
];

const CafeItem = ({
  name,
  address,
  rating,
  deliveryFee,
  deliveryTime,
  logoUri,
}) => (
  <View style={styles.cafeItem}>
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

const CafesCategory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cafes</Text>
      <FlatList
        data={cafesData}
        renderItem={({ item }) => <CafeItem {...item} />}
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
  cafeItem: {
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

export default CafesCategory;
