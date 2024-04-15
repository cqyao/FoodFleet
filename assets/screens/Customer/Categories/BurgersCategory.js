import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const BurgersData = [
  {
    id: "1",
    name: "McDonald's",
    address: "Cnr Burelli, Stewart, Corrimal St, Wollongong NSW 2500",
    rating: 4.7,
    deliveryFee: "Free",
    deliveryTime: "20 min",
    logoUri: require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/Macdonald.png"), // 경로 수정
  },
  {
    id: "2",
    name: "HUNGRY JACK'S",
    address: "212 Princes Hwy, Fairy Meadow NSW 2519",
    rating: 4.7,
    deliveryFee: "Free",
    deliveryTime: "20 min",
    logoUri: require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/HungryJacks.png"), // 경로 수정
  },
  // ...다른 레스토랑들
];

const RestaurantItem = ({
  name,
  address,
  rating,
  deliveryFee,
  deliveryTime,
  logoUri,
}) => (
  <View style={styles.itemContainer}>
    <Image source={logoUri} style={styles.logo} resizeMode="contain" />
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.address}>{address}</Text>
    <View style={styles.infoContainer}>
      <Text style={styles.rating}>{rating} ★</Text>
      <Text style={styles.deliveryFee}>{deliveryFee}</Text>
      <Text style={styles.deliveryTime}>{deliveryTime}</Text>
    </View>
  </View>
);

const BugersCategory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Burgers</Text>
      <FlatList
        data={BurgersData}
        renderItem={({ item }) => <RestaurantItem {...item} />}
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
    fontSize: 20,
    fontWeight: "bold",
    padding: 16,
    backgroundColor: "white",
  },
  itemContainer: {
    backgroundColor: "white",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  logo: {
    width: 100,
    height: 50,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  address: {
    fontSize: 14,
    color: "gray",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  rating: {
    fontSize: 14,
    color: "#000",
  },
  deliveryFee: {
    fontSize: 14,
    color: "green",
  },
  deliveryTime: {
    fontSize: 14,
    color: "orange",
  },
});

export default BugersCategory;
