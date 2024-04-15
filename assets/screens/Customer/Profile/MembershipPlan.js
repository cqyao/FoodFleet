import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const MembershipPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  // Sample data for the plans
  const plans = {
    monthly: {
      price: "$10 Per month",
      startDate: "04/04/2024",
    },
    annual: {
      price: "$100 Per year",
      startDate: "04/04/2024",
    },
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePayment = () => {
    // Payment logic goes here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Membership</Text>
      <View style={styles.planContainer}>
        <TouchableOpacity
          style={[
            styles.planButton,
            selectedPlan === "monthly" && styles.selectedButton,
          ]}
          onPress={() => handleSelectPlan("monthly")}
        >
          <Text style={styles.planText}>Monthly</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.planButton,
            selectedPlan === "annual" && styles.selectedButton,
          ]}
          onPress={() => handleSelectPlan("annual")}
        >
          <Text style={styles.planText}>Annual</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.price}>
        {selectedPlan === "monthly" ? plans.monthly.price : plans.annual.price}
      </Text>
      <Text style={styles.startDate}>
        Start Date: {plans[selectedPlan].startDate}
      </Text>
      <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
        <Text style={styles.paymentText}>Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  planContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  planButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  selectedButton: {
    backgroundColor: "#FFA500", // Slightly darker color to indicate selection
  },
  planText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  startDate: {
    fontSize: 16,
    color: "grey",
    marginBottom: 20,
  },
  paymentButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    width: "80%",
    alignItems: "center",
    marginBottom: 20,
  },
  paymentText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export default MembershipPlan;
