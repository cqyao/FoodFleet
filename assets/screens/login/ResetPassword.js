import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const ResetPassword = ({ navigation }) => {
  const submit = () => {
    console.log("E-mail sent!");
  };

  return (
    <View style={[styles.container, { flexDirection: "column" }]}>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 2 }}>
        <Text style={styles.header}>Reset Password</Text>
        <Text style={styles.subHeader}>Please enter your new password</Text>
        <TextInput
          style={styles.input}
          placeholder="Please type new password"
        ></TextInput>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Reset Password</Text>
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
});

export default ResetPassword;
