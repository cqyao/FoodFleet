import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Slider } from "@react-native-community/slider";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();

  const recentSearches = [
    "Cafe",
    "Irish",
    "Korean",
    "Chinese",
    "Japanese",
    "Asian",
    "Burger",
    "Chicken",
  ];

  const handleSearch = (query) => {
    console.log("Searching for:", query);
    // 검색 실행 로직을 구현할 수 있습니다.
  };

  const handleFilterPress = () => {
    navigation.navigate("Filter"); // Filter 화면으로 이동합니다.
  };

  const SearchItem = ({ title }) => (
    <TouchableOpacity
      style={styles.searchItem}
      onPress={() => handleSearch(title)}
    >
      <Ionicons name="search" size={24} style={styles.searchIcon} />
      <Text style={styles.searchText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Ionicons name="search" size={24} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for lunch"
          value={searchQuery}
          onChangeText={setSearchQuery}
          returnKeyType="search"
          onSubmitEditing={() => handleSearch(searchQuery)}
        />
        <TouchableOpacity onPress={handleFilterPress}>
          <Ionicons name="filter" size={24} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.subheader}>Recent searches</Text>
      <FlatList
        data={recentSearches}
        renderItem={({ item }) => <SearchItem title={item} />}
        keyExtractor={(item, index) => item + index}
      />
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
  filterIcon: {
    marginLeft: "auto",
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
  },
  subheader: {
    fontSize: 18,
    padding: 10,
    paddingTop: 20,
    fontWeight: "bold",
  },
  searchItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingLeft: 20,
  },
  searchText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default Search;
