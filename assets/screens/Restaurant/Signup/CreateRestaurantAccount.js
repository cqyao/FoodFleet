import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { CreateRestaurant } from "../../../../database";

const CreateRestaurantAccount = ({ navigation }) => {
  // 1. Receive navigation prop
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [email, setEmail] = useState("");
  const [postcode, setPostcode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    // Submit the data or navigate to next screen
    navigation.navigate("Login"); // 2. Navigate to "Login" screen
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: "900", textAlign: "center" }}>
        Create new account
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "600",
          marginBottom: 40,
        }}
      >
        Restaurant
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={setName}
        value={name}
      />

      <TextInput
        style={styles.input}
        placeholder="Date of birth"
        onChangeText={setDateOfBirth}
        value={dateOfBirth}
      />

      <TextInput
        style={styles.input}
        placeholder="Restaurant Name"
        onChangeText={setRestaurantName}
        value={restaurantName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Postcode"
        onChangeText={setPostcode}
        value={postcode}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 30,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#FFD700",
    borderRadius: 30,
    padding: 15,
    alignItems: "center",
    marginTop: 0,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CreateRestaurantAccount;
