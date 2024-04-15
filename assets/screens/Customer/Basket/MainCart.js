import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>CART</Text>

      <View style={styles.card}>
        <Image
          source={{ uri: "./assets/screens/EveryImages/HanokLogo.png" }}
          style={styles.logo}
        />
        <View style={styles.details}>
          <Text style={styles.title}>Hanok</Text>
          <Text>1 Item</Text>
          <Text>Address: 2/6 Daisy St</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Check Cart</Text>
      </TouchableOpacity>

      {/* Bottom tab navigation placeholders */}
      <View style={styles.bottomNav}>
        <View style={styles.navIcon}></View>
        <View style={styles.navIcon}></View>
        <View style={styles.navIcon}></View>
      </View>
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
    marginTop: 50,
    marginBottom: 20,
    marginLeft: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#F0E68C",
    borderRadius: 10,
    padding: 20,
    margin: 20,
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  editButton: {
    // Styling for edit button
  },
  checkoutButton: {
    backgroundColor: "#FFD700",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    marginHorizontal: 20,
  },
  checkoutButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    borderTopColor: "#ddd",
    borderTopWidth: 1,
  },
  navIcon: {
    // Placeholder style for navigation icons
  },
});

export default Cart;
