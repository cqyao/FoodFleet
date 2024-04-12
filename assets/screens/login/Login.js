import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logo = require("../images/FoodFleetsLogo.png");

  const handleSignIn = () => {
    // Implement your sign-in logic here
    console.log("Sign in with:", email, password);
  };

  const handleForgotPassword = () => {
    // Navigate to your forgot password screen or handle password reset
    console.log("Navigate to forgot password screen");
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View> */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SignUpOption")}>
        <Text style={styles.createAccount}>Create An Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    // Add your logo text styles here
  },
  input: {
    width: "100%",
    marginVertical: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
  button: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#9BA5B7",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    // Add your button text styles here
  },
  forgotPassword: {
    color: "gray",
    // Add your forgot password text styles here
  },
  createAccount: {
    color: "gray",
    marginTop: 10,
    // Add your create account text styles here
  },
});

export default Login;
