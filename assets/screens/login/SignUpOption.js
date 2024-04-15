import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const SignUpOption = ({ navigation }) => {
  const handleCustomerSignup = () => {
    // Navigate to the Customer Signup Screen
    navigation.navigate("CreateCustomerAccount");
  };

  const handleOwnerSignup = () => {
    // Navigate to the Restaurant Owner Signup Screen
    navigation.navigate("CreateRestaurantAccount");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/FoodFleetsLogo.png")}
        style={styles.logo}
      />
      <TouchableOpacity style={styles.button} onPress={handleCustomerSignup}>
        <Text style={styles.buttonText}>Customer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleOwnerSignup}>
        <Text style={styles.buttonText}>Restaurant Owner</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  logo: {
    width: 250, // Adjust to fit your logo's aspect ratio
    height: 250, // Adjust to fit your logo's aspect ratio
    resizeMode: "contain",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#FFD700", // Golden yellow color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#000", // Black color text
    fontSize: 18,
  },
});

export default SignUpOption;
