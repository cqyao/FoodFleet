import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


const RestaurantItem = ({
    name,
    type,
    rating,
    isFreeDelivery,
    deliveryTime,
    imageUrl
  }) => {
  
    return (
      <TouchableOpacity style={styles.restaurantItem} >
        <Image style={styles.restaurantImage} source={{ uri: imageUrl }} />
        <Text style={styles.restaurantName}>{name}</Text>
        <Text style={styles.restaurantType}>{type}</Text>
        <View style={styles.restaurantInfo}>
          <Text style={styles.restaurantRating}>⭐ {rating}</Text>
          {isFreeDelivery && <Text style={styles.deliveryText}>Free</Text>}
          <Text style={styles.deliveryTime}>{deliveryTime}</Text>
        </View>
      </TouchableOpacity>
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
    sectionTitleContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 15,
      marginTop: 10,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: "bold",
    },
    moreText: {
      color: "green",
      fontWeight: "bold",
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
      marginTop: 10,
      flex: 1,
      textAlign: "center",
    },
    restaurantItem: {
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#e0e0e0",
    },
    restaurantImage: {
      width: "100",
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
    iconContainer: {
      paddingHorizontal: 20,
    },
    motorcycleImage: {
      width: 50,
      height: 50,
      resizeMode: "contain",
    },
    menuBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderTopWidth: 1,
      borderTopColor: "#e0e0e0",
    },
  });
  export default RestaurantItem;