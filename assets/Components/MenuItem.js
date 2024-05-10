import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RemoveDish } from "../../database";


const MenuItem = ({ id, name, price, description, imageUrl }) => {

  // Function for removing the item from the menu
  const deleteItem = async() => {
    await RemoveDish(id)
  }

  return (
    <View style={styles.menuItemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.menuItemName}>{name}</Text>
        <Text style={styles.menuItemPrice}>Price: ${price}</Text>
        <Text style={styles.menuItemDescription}>{description}</Text>
        <TouchableOpacity onPress={deleteItem}>
          <Text style={{color:"red"}}>Delete</Text>
        </TouchableOpacity>
      </View>
      <Image source={{ uri: imageUrl }} style={styles.menuItemImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  menuItemContainer: {
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: 16,
    borderRadius: 8, // You can adjust this as needed
    alignItems: "center",
    justifyContent: "space-between",
  },

  textContainer: {
    flex: 1,
  },
  menuItemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 4,
  },
  menuItemDescription: {
    fontSize: 16,
    marginTop: 4,
    marginBottom: 8, // Add space before the image
    color: "grey",
  },
  menuItemImage: {
    height: 100, // Set this to match your design
    width: 100, // Make image width 100% of the container
    borderRadius: 8, // If you want rounded corners
    marginLeft: 16,
  },
});

export default MenuItem;
