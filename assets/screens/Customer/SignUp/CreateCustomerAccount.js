import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { CreateCustomer } from "../../../../database";

const CreateCustomerAccount = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccount = async () => {
    await CreateCustomer(
      firstName,
      lastName,
      address,
      state,
      postcode,
      city,
      email,
      phoneNumber,
      password
    );
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create new account</Text>
      <Text style={styles.subHeader}>Customer</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />

      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />

      <TextInput
        style={styles.input}
        placeholder="State"
        value={state}
        onChangeText={setState}
      />

      <TextInput
        style={styles.input}
        placeholder="Postcode"
        value={postcode}
        onChangeText={setPostcode}
      />

      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          handleCreateAccount(
            firstName,
            lastName,
            address,
            state,
            postcode,
            city,
            email,
            phoneNumber,
            password
          )
        }
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  subHeader: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    marginVertical: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    borderColor: "#cccccc",
  },
  button: {
    backgroundColor: "#FFD700",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default CreateCustomerAccount;
