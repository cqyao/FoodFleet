import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const filteredRestaurants = [
  {
    id: "1",
    name: "McDonald's",
    type: "Fast Food",
    address: "Cnr Burelli St, Corrimal St, Wollongong NSW",
    rating: 4.7,
    deliveryTime: "20 min",
    isFreeDelivery: true,
    logoUri: require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/Macdonald.png"), // Macdonald's 로고 이미지 경로를 적절히 수정하세요
  },
  {
    id: "2",
    name: "Hanok",
    type: "Korean BBQ",
    address: "Some address in Wollongong, NSW",
    rating: 4.7,
    deliveryTime: "20 min",
    isFreeDelivery: true,
    logoUri: require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/HanokLogo.png"), // Hanok 로고 이미지 경로를 적절히 수정하세요
  },
  // 더 많은 레스토랑 데이터 추가...
];

const RestaurantItem = ({
  name,
  type,
  address,
  rating,
  deliveryTime,
  isFreeDelivery,
  logoUri,
}) => (
  <View style={styles.restaurantItem}>
    <Image source={logoUri} style={styles.restaurantLogo} />
    <Text style={styles.restaurantName}>{name}</Text>
    <Text style={styles.restaurantType}>{type}</Text>
    <Text style={styles.restaurantAddress}>{address}</Text>
    <View style={styles.restaurantInfo}>
      <Ionicons name="star" size={16} color="gold" />
      <Text style={styles.restaurantRating}>{rating}</Text>
      {isFreeDelivery && <Text style={styles.deliveryTag}>Free</Text>}
      <Ionicons name="time-outline" size={16} style={styles.timeIcon} />
      <Text style={styles.deliveryTime}>{deliveryTime}</Text>
    </View>
  </View>
);

const FilteredRestaurant = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={filteredRestaurants}
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
  restaurantItem: {
    flexDirection: "column",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  restaurantLogo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
    alignSelf: "center",
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  restaurantType: {
    fontSize: 14,
    color: "grey",
  },
  restaurantAddress: {
    fontSize: 12,
    color: "grey",
    marginBottom: 4,
  },
  restaurantInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  restaurantRating: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  deliveryTag: {
    backgroundColor: "#dedede",
    borderRadius: 5,
    padding: 4,
    marginLeft: 8,
    fontSize: 12,
  },
  timeIcon: {
    marginLeft: 8,
  },
  deliveryTime: {
    marginLeft: 4,
    fontSize: 14,
  },
});

export default FilteredRestaurant;
