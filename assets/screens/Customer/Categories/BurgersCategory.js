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
    logoUri: require("../../../../assets/screens/EveryImages/Macdonald.png"), // 경로 수정

  },
  {
    id: "2",
    name: "HUNGRY JACK'S",
    address: "212 Princes Hwy, Fairy Meadow NSW 2519",
    rating: 4.7,
    deliveryFee: "Free",
    deliveryTime: "20 min",
    logoUri: require("../../../../assets/screens/EveryImages/HungryJacks.png"), // 경로 수정

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
  <TouchableOpacity
    style={styles.restaurantItem}
    onPress={() => console.log(`${name} selected`)}
  >
    <Image source={logoUri} style={styles.restaurantImage} />
    <View style={styles.restaurantInfo}>
      <Text style={styles.restaurantName}>{name}</Text>
      <Text style={styles.restaurantAddress}>{address}</Text>
      <View style={styles.restaurantDetails}>
        <Text style={styles.restaurantRating}>{rating} ★</Text>
        <Text style={styles.deliveryInfo}>{deliveryFee}</Text>
        <Text style={styles.deliveryInfo}>{deliveryTime}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const BurgersCategory = () => {
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
    backgroundColor: "white",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  restaurantItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  restaurantImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  restaurantInfo: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  restaurantAddress: {
    color: "gray",
  },
  restaurantDetails: {
    flexDirection: "row",
    marginTop: 10,
  },
  restaurantRating: {
    backgroundColor: "#ffdd00",
    color: "white",
    fontWeight: "bold",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: "hidden",
    marginRight: 10,
  },
  deliveryInfo: {
    color: "gray",
    marginRight: 10,
  },
});

export default BurgersCategory;
