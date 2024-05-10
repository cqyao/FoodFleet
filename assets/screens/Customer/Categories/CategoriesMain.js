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

const categories = [
  {
    id: "1",
    name: "Cafes",
    imageUri: require("../../../../assets/screens/EveryImages/Coffee.png"),
  },
  {
    id: "2",
    name: "Pizzas",
    imageUri: require("../../../../assets/screens/EveryImages/Pizza.png"),
  },
  {
    id: "3",
    name: "Korean",
    imageUri: require("../../../../assets/screens/EveryImages/Korean.png"),
  },
  {
    id: "4",
    name: "Thai",
    imageUri: require("../../../../assets/screens/EveryImages/Thai.png"),
  },
  {
    id: "5",
    name: "Japanese",
    imageUri: require("../../../../assets/screens/EveryImages/Japanese.png"),
  },
  {
    id: "6",
    name: "Burgers",
    imageUri: require("../../../../assets/screens/EveryImages/Burgers.png"),
  },
];

const CategoriesMain = () => {
  const navigation = useNavigation();

  const handleCategoryPress = (categoryName) => {
    navigation.navigate(`${categoryName}Category`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => handleCategoryPress(item.name)}
          >
            <Image source={item.imageUri} style={styles.itemImage} />
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
    marginLeft: 16,
  },
  row: {
    flex: 1,
    justifyContent: "space-around",
    marginBottom: 16,
  },
  itemContainer: {
    flex: 1,
    marginHorizontal: 8,
    alignItems: "center",
  },
  itemImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  itemText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CategoriesMain;
