import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const RestaurantMain = ({ navigation }) => {
  const navOrder = () => {
    navigation.navigate("OrderManagement");
  };
  const navFeedback = () => {
    navigation.navigate("CheckCustomerReview");
  };
  const navRevenue = () => {
    navigation.navigate("GenerateReport");
  };
  const navProfile = () => {
    navigation.navigate("RestaurantProfile");
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: "https://links.papareact.com/wru" }} // Replace with your image path
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navOrder}>
          <Text style={styles.buttonText}>Order Management</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navFeedback}>
          <Text style={styles.buttonText}>
            Check Customers Reviews and Ratings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navRevenue}>
          <Text style={styles.buttonText}>Revenue Report</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navProfile}>
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    width: "100%",
    height: 150, // Adjust the size as needed
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "#F2BE22", // Gold color
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 15,
    alignItems: "center",
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  homeButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    // Add styles for your home icon button
  },
});

export default RestaurantMain;
