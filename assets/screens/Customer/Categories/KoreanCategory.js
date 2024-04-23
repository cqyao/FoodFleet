import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Dummy data array for Korean restaurants
const koreanRestaurantsData = [
  {
    id: "1",
    name: "Chicken V",
    address: "Shop 104/53-61 Crown St, Wollongong NSW 2500",
    rating: 4.7,
    deliveryFee: "Free",
    deliveryTime: "20 min",
    logoUri: require("../../../../assets/screens/EveryImages/ChickenV.png"),
  },
  {
    id: "2",
    name: "Hanok",
    address: "W119/200 Keira St, Wollongong NSW 2500",
    rating: 4.7,
    deliveryFee: "Free",
    deliveryTime: "20 min",
    logoUri: require("../../../../assets/screens/EveryImages/HanokLogo.png"),
  },
  // ... add more restaurants here
];

const KoreanRestaurantItem = ({
  name,
  address,
  rating,
  deliveryFee,
  deliveryTime,
  logoUri,
}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("HanokMenu");
  };

  return (
    <TouchableOpacity style={styles.restaurantItem} onPress={handlePress}>
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
    </TouchableOpacity>
  );
};

const KoreanCategory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Korean</Text>
      <FlatList
        data={koreanRestaurantsData}
        renderItem={({ item }) => <KoreanRestaurantItem {...item} />}
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

export default KoreanCategory;