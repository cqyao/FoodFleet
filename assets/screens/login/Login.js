import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { RestaurantLogin, CustomerLogin, GetMenus, GetPaymentMethods } from "../../../database";
import { UserContext } from "../../../context/UserContext";

const LoginScreen = ({ navigation }) => {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCustomerLogin = async () => {
    // TODO: Implement actual login logic
    tempCust = await CustomerLogin(email, password);
    if (!tempCust) {
      console.log("No such user");
    } else {
      tempCust.paymentMethods = await GetPaymentMethods(tempCust.id)
      console.log(tempCust)
      setUser(tempCust);
      navigation.navigate("CustomerHome");
    }
  };

  const handleRestaurantLogin = async () => {
    // TODO: Implement actual login logic
    //console.log(email, password)
    tempRest = await RestaurantLogin(email, password);
    if (!tempRest) {
      console.log("No such user");
    } else {
      console.log(tempRest)
      setUser(tempRest);
      navigation.navigate("RestaurantMain");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../screens/EveryImages/FoodFleetsLogo.png")}
          style={styles.logo}
        />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        placeholderTextColor="black" // Ensure placeholder text is black
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        placeholderTextColor="black" // Ensure placeholder text is black
        secureTextEntry
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleCustomerLogin(email, password)}
      >
        <Text style={styles.buttonText}>Sign In Customer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleRestaurantLogin(email, password)}
      >
        <Text style={styles.buttonText}>Sign In Restaurant</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.textButton}>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SignUpOption")}>
        <Text style={styles.textButton}>Create An Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  logoContainer: {
    marginBottom: 50,
    // Add additional styling for logo container if needed
  },
  logo: {
    height: 200, // Adjust your logo height as needed
    width: 200, // Adjust your logo width as needed
    resizeMode: "contain", // 'contain' or 'cover' based on your logo's aspect ratio
  },
  input: {
    width: "100%",
    height: 60,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "gray",
    paddingLeft: 30,
    padding: 10,
    color: "black", // Set text color to black
    borderRadius: 30,
  },
  button: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFD700", // Gold color for the button
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 30,
  },
  buttonText: {
    color: "black", // Set button text color to black
  },
  textButton: {
    color: "black", // Set text button color to black
    marginBottom: 10,
  },
});

export default LoginScreen;
