import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const categoriesData = [
  {
    id: "1",
    title: "Cafes",
    image: require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/Cafe.png"),
  },
  {
    id: "2",
    title: "Clubs",
    image: require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/Clubs.png"),
  },
  {
    id: "3",
    title: "Asian food",
    image: require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/AsianFood.png"),
  },
  {
    id: "4",
    title: "Asian food",
    image: require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/AsianFood.png"),
  },
  {
    id: "5",
    title: "Asian food",
    image: require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/AsianFood.png"),
  },
  // 더 많은 카테고리 데이터를 추가하세요.
];

const restaurantsData = [
  {
    id: "1",
    name: "Rose Garden Restaurant",
    type: "Burger - Chicken - Riche - Wings",
    rating: 4.7,
    isFreeDelivery: true,
    deliveryTime: "20 min",
    image: require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/RoseGarden.png"),
  },
  {
    id: "2",
    name: "Rose Garden Restaurant",
    type: "Burger - Chicken - Riche - Wings",
    rating: 4.7,
    isFreeDelivery: true,
    deliveryTime: "20 min",
    image: require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/RoseGarden.png"),
  },
  {
    id: "3",
    name: "Rose Garden Restaurant",
    type: "Burger - Chicken - Riche - Wings",
    rating: 4.7,
    isFreeDelivery: true,
    deliveryTime: "20 min",
    image: require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/RoseGarden.png"),
  },
  // 더 많은 레스토랑 데이터를 추가하세요.
];

const CategoryItem = ({ title, image }) => (
  <View style={styles.categoryItem}>
    <Image source={image} style={styles.categoryImage} />
    <Text style={styles.categoryTitle} numberOfLines={1} ellipsizeMode="tail">
      {title}
    </Text>
  </View>
);

const RestaurantItem = ({
  name,
  type,
  rating,
  isFreeDelivery,
  deliveryTime,
  image,
}) => (
  <View style={styles.restaurantItem}>
    <Image source={image} style={styles.restaurantImage} />
    <Text style={styles.restaurantName}>{name}</Text>
    <Text style={styles.restaurantType}>{type}</Text>
    <View style={styles.restaurantInfo}>
      <Text style={styles.restaurantRating}>⭐ {rating}</Text>
      {isFreeDelivery && <Text style={styles.deliveryText}>Free</Text>}
      <Text style={styles.deliveryTime}>{deliveryTime}</Text>
    </View>
  </View>
);

const CustomerHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Ionicons name="location-outline" size={24} color="black" />
        <Text style={styles.locationText}>Wollongong</Text>
      </View>

      <Text style={styles.greetingText}>Good Morning, Jacob</Text>

      <View style={styles.searchContainer}>
        <TextInput placeholder="Search for lunch" style={styles.searchInput} />
        <Ionicons name="search" size={24} color="grey" />
      </View>

      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        horizontal
        data={categoriesData}
        renderItem={({ item }) => <CategoryItem {...item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }} // 여백을 조정해보세요
      />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Nearby Restaurants</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={restaurantsData}
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
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  locationText: {
    marginLeft: 5,
    fontWeight: "bold",
  },
  greetingText: {
    fontSize: 26,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    margin: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 10,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  seeAllText: {
    color: "green",
  },
  categoryItem: {
    alignItems: "center",
    marginRight: 15,
  },
  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  categoryTitle: {
    marginTop: 10, // 값을 조정해보세요
    flex: 1, // 필요하다면 추가
    textAlign: "center",
  },
  restaurantItem: {
    marginBottom: 15,
  },
  restaurantImage: {
    width: "100%",
    height: 180,
  },
  restaurantName: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 5,
  },
  restaurantType: {
    color: "grey",
  },
  restaurantInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  restaurantRating: {
    marginRight: 10,
  },
  deliveryText: {
    backgroundColor: "#dedede",
    borderRadius: 5,
    marginRight: 10,
    padding: 5,
  },
  deliveryTime: {
    color: "grey",
  },
});

export default CustomerHome;
