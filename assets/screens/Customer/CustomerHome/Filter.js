import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Slider,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Filter = () => {
  const [distance, setDistance] = useState(3);
  const [rating, setRating] = useState(0);

  const handleSave = () => {
    // 여기에 필터 저장 로직을 구현하세요.
    console.log(
      "Filters saved with distance:",
      distance,
      "and rating:",
      rating
    );
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
        <Ionicons name="qr-code" size={24} style={styles.qrIcon} />
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
    width: "100%",
    height: 40,
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
