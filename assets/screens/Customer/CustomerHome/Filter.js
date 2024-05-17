import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import Slider from "@react-native-community/slider";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { UserContext } from "../../../../context/UserContext"; // Import UserContext
import { GetNearbyRestaurants } from "../../../../database"; // Import GetNearbyRestaurants function

const Filter = () => {
  const [distance, setDistance] = useState(3);
  const [rating, setRating] = useState(0);
  const { user } = useContext(UserContext); // Use UserContext to get user information
  const navigation = useNavigation(); // Use useNavigation

  const handleSave = async () => {
    try {
      const postcode = user.postcode; // Get the user's postcode from UserContext
      const data = await GetNearbyRestaurants(postcode, distance, rating);
      console.log("Nearby Restaurants:", data);
      navigation.navigate("CustomerHome", { nearbyRestaurants: data }); // Pass data to CustomerHome
    } catch (error) {
      console.error("Error getting nearby restaurants:", error.message);
      Alert.alert(
        "Error",
        "Failed to get nearby restaurants. Please try again later."
      );
    }
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  const StarRating = ({ rate }) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleRating(i)}>
          <Ionicons
            name={i <= rating ? "star" : "star-outline"}
            size={24}
            color="gold"
            style={styles.star}
          />
        </TouchableOpacity>
      );
    }
    return <View style={styles.starRating}>{stars}</View>;
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Ionicons name="search" size={24} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for lunch"
          // 이 부분에 검색 로직을 연결하세요.
        />
        <Ionicons name="filter" size={24} style={styles.filterIcon} />
      </View>

      <View style={styles.filterSection}>
        <Text style={styles.filterTitle}>Filter your search</Text>
        <Ionicons name="close" size={24} style={styles.closeIcon} />

        <Text style={styles.filterLabel}>DISTANCE</Text>
        <Text style={styles.filterValue}>{distance} KM</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={distance}
          onValueChange={(val) => setDistance(val)}
          minimumTrackTintColor="#1fb28a"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#1fb28a"
        />

        <Text style={styles.filterLabel}>RATING</Text>
        <StarRating rate={rating} />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>SAVE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  qrIcon: {
    marginLeft: "auto",
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
  },
  filterSection: {
    padding: 20,
  },
  filterTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  closeIcon: {
    position: "absolute",
    right: 20,
    top: 20,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
  filterValue: {
    fontSize: 16,
    marginBottom: 10,
  },
  slider: {
    marginTop: 10,
  },
  starRating: {
    flexDirection: "row",
    marginTop: 10,
  },
  star: {
    marginHorizontal: 2,
  },
  saveButton: {
    backgroundColor: "#ffd700",
    borderRadius: 20,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default Filter;
