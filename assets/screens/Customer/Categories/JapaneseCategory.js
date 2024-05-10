import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const JapaneseRestaurantData = [
  {
    id: "1",
    name: "TORO",
    address: "9/129 Corrimal St, Wollongong NSW 2500",
    rating: "4.7",
    deliveryFee: "Free",
    deliveryTime: "20 min",
    logoUri: require("../../../../assets/screens/EveryImages/Toro.png"),

  },
  {
    id: "2",
    name: "SAKURA",
    address: "8/121-125 Corrimal St, Wollongong NSW 2500",
    rating: "4.7",
    deliveryFee: "Free",
    deliveryTime: "20 min",
    logoUri: require("../../../../assets/screens/EveryImages/Sakura.png"),

  },
  // ... Add more restaurants here
];

const RestaurantItem = ({
  name,
  address,
  rating,
  deliveryFee,
  deliveryTime,
  logoUri,
}) => (
  <View style={styles.restaurantItem}>
    <Image source={logoUri} style={styles.image} />
    <View style={styles.infoContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.address}>{address}</Text>
      <View style={styles.details}>
        <Text style={styles.rating}>{`${rating} ★`}</Text>
        <Text style={styles.deliveryFee}>{deliveryFee}</Text>
        <Text style={styles.deliveryTime}>{deliveryTime}</Text>
      </View>
    </View>
  </View>
);

const JapaneseCategory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Japanese</Text>
      <FlatList
        data={JapaneseRestaurantData}
        renderItem={({ item }) => <RestaurantItem {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 20,
    paddingLeft: 20,
    backgroundColor: "#f0f0f0",
  },
  restaurantItem: {
    flexDirection: "row",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20,
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
    color: "gray",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
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
    color: "green",
  },
  deliveryTime: {
    color: "#ff6600",
  },
});

export default JapaneseCategory;
