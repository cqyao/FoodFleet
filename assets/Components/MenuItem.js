import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const MenuItem = ({ name, price, description, imageUrl }) => {
  return (
    <View style={styles.menuItemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.menuItemTitle}>{name}</Text>
        <Text style={styles.menuItemPrice}>${price}</Text>
        <Text style={styles.menuItemDescription}>{description}</Text>
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
  menuItemTitle: {
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
