import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import { Subscribe } from "../../../../database";
import { UserContext } from "../../../../context/UserContext";

const MembershipPlan = ({ navigation }) => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  const {user, setUser} = useContext(UserContext)
  var monthlyDate = new Date();
  var yearlyDate = new Date();
  let addMonthly = 1;
  let addAnnually = 12;
  monthlyDate.setMonth(monthlyDate.getMonth() + addMonthly)
  yearlyDate.setMonth(yearlyDate.getMonth() + addAnnually)
  let monthDate = monthlyDate.toISOString().split('T')[0]
  let annualDate = yearlyDate.toISOString().split('T')[0]

  // Sample data for the plans
  const plans = {
    monthly: {
      price: "$10 Per month",
      startDate: monthDate,
      type: "monthly",
    },
    annual: {
      price: "$100 Per year",
      startDate: annualDate,
      type: "annually",
    },
  };

  const handleCardPress = () => {
    navigation.navigate("PaymentMethod");
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    console.log(plan)
  };

  const handlePay = () => {
    //CreateMembership(user.id)
    Subscribe(user.id, plans[selectedPlan].type)
    user.isMember = true
    console.log(user)
    Alert.alert(
      "Membership Started!",
      "Your membership has been successfully started!",
      [
        {
          text: "OK",
          onPress: () => navigation.navigate("Profile"),
        },
      ],
      { cancelable: false }
    );
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
        Next billing: {plans[selectedPlan].startDate}
      </Text>
      {/* Payment Methods */}
      <TouchableOpacity style={styles.paymentMethod} onPress={handleCardPress}>
        <Image
          source={require("../../EveryImages/MasterCard.png")}
          style={styles.cardIcon}
        />
        <Text style={styles.cardText}>MasterCard 1234</Text>
        <Image
          source={require("../../EveryImages/RightChevron.png")}
          style={styles.chevronIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.paymentButton} onPress={handlePay}>
        <Text style={styles.paymentText}>Pay</Text>
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
    marginVertical: 20,
  },
  paymentText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  paymentMethod: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  cardIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  cardText: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
  },
  chevronIcon: {
    width: 15,
    height: 15,
    resizeMode: "contain",
  },
});

export default MembershipPlan;
