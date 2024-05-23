import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SearchRestaurant } from "../../../../database";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const search = async () => {
      if (searchQuery.trim() === "") {
        setSearchResults([]);
        return;
      }
      console.log("Searching for:", searchQuery);
      const results = await SearchRestaurant(searchQuery); // 검색어로 시작하는 식당 검색
      setSearchResults(results);
    };

    // 검색어가 변경될 때마다 검색 수행
    search();
  }, [searchQuery]); // searchQuery가 변경될 때만 useEffect 실행

  const handleFilterPress = () => {
    navigation.navigate("Filter"); // Filter 화면으로 이동합니다.
  };

  const handleSearch = async (query) => {
    console.log("Searching for:", query);
    const results = await SearchRestaurant(query);
    setSearchResults(results);

    // 검색 결과가 Hanok이면 Menu 이동
    if (query === "Hanok") {
      navigation.navigate("Menu");
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.searchItem}
      onPress={() => handleSearch(item.name)}
    >
      <Ionicons name="search" size={24} style={styles.searchIcon} />
      <Text style={styles.searchText}>{item.name}</Text>
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
        />
        <TouchableOpacity onPress={handleFilterPress}>
          <Ionicons name="filter" size={24} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.subheader}>Search results</Text>
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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
