import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PreparingOrder = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Delivered");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.statusHeader}>Preparing your order...</Text>
      <Text style={styles.arrivalTime}>Arriving at 10:15</Text>
      <Text style={styles.latestArrival}>Latest arrival by 10:40</Text>
      <Image
        source={require("../../../../assets/screens/EveryImages/Cooking.png")} // Replace with your actual cooking icon path
        style={styles.cookingIcon}
      />

      <View style={styles.deliveryDetails}>
        <Text style={styles.deliveryHeader}>Delivery details</Text>
        <Text style={styles.address}>Address</Text>
        <Text style={styles.addressDetails}>Fairy Meadow, Wollongong</Text>
        <Text style={styles.instructions}>Instructions</Text>
        <Text style={styles.instructionsDetails}>
          Meet at door! Please contact to me!
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  statusHeader: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  arrivalTime: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
  latestArrival: {
    fontSize: 16,
    textAlign: "center",
    color: "grey",
    marginBottom: 20,
  },
  cookingIcon: {
    width: 100,
    height: 100,
    alignSelf: "center",
    resizeMode: "contain",
  },
  deliveryDetails: {
    marginTop: 20,
    padding: 20,
  },
  deliveryHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  address: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  addressDetails: {
    fontSize: 16,
    marginBottom: 15,
  },
  instructions: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  instructionsDetails: {
    fontSize: 16,
  },
});

export default PreparingOrder;
