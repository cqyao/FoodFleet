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
  const [name, setName] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [postcode, setPostcode] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async () => {
    // Submit the data or navigate to next screen
    await CreateRestaurant(
      restaurantName,
      email,
      number,
      postcode,
      password,
      category
    );
    // Navigate to Login page
    navigation.navigate("Login");
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
        placeholder="Contact number"
        onChangeText={setNumber}
        value={number}
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
        secureTextEntry
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Category"
        onChangeText={setCategory}
        value={category}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          handleSubmit(
            name,
            restaurantName,
            email,
            number,
            postcode,
            password,
            category
          )
        }
      >
        <Text style={styles.buttonText}>Create Account</Text>
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
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    color: "grey",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 30,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#FFD700", // Adjust the color to match the design
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
