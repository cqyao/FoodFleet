import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const pizzaPlacesData = [
  {
    id: "1",
    name: "Pizza Hut",
    address: "12-16 Princes Hwy, Fairy Meadow NSW 2519",
    rating: 4.7,
    deliveryFee: "Free",
    deliveryTime: "20 min",
    logoUri: require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/PizzaHut.png"), // 실제 이미지 파일 경로로 교체하세요
  },
  {
    id: "2",
    name: "Domino",
    address: "Cnr Smith And, Keira St, Wollongong NSW 2500",
    rating: 4.7,
    deliveryFee: "Free",
    deliveryTime: "20 min",
    logoUri: require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/Domino.png"), // 실제 이미지 파일 경로로 교체하세요
  },
  // ... 다른 피자 가게 추가
];

const PizzaPlaceItem = ({
  name,
  address,
  rating,
  deliveryFee,
  deliveryTime,
  logoUri,
}) => (
  <View style={styles.pizzaPlaceItem}>
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

const PizzasCategory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pizzas</Text>
      <FlatList
        data={pizzaPlacesData}
        renderItem={({ item }) => <PizzaPlaceItem {...item} />}
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
  pizzaPlaceItem: {
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

export default PizzasCategory;
