// ForgotPassword.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const ForgotPassword = ({ navigation }) => {
  const submit = () => {
    console.log("E-mail sent!");
  };

  return (
    <View style={[styles.container, { flexDirection: "column" }]}>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 2 }}>
        <Text style={styles.header}>Forgot Password</Text>
        <Text style={styles.subHeader}>Please enter your e-mail</Text>
        <TextInput style={styles.input} placeholder="E-mail"></TextInput>
        <TouchableOpacity style={styles.button} onPress={submit}>
          <Text style={styles.buttonText}>Send E-mail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.altButton}>
          <Text style={styles.altButtonText}>Resend</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ResetPassword")}
        >
          <Text style={styles.buttonText}>Temporarily reset password</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#F2BE22",
    borderRadius: 30,
    alignItems: "center",
    padding: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
  altButtonText: {
    fontSize: 18,
  },
  altButton: {
    alignItems: "center",
    margin: 10,
  },
});

export default ForgotPassword;
