import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const GenerateReport = () => {
  const Generate = () => {
    console.log("Report Generated!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Revenue Report</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Start Date"
          // You can add more properties for handling dates here
        />
        <TextInput
          style={styles.input}
          placeholder="End Date"
          // You can add more properties for handling dates here
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={Generate}>
        <Text style={styles.buttonText}>Generate report</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    marginTop: 50,
    marginHorizontal: 20,
  },
  headerText: {
    fontSize: 35,
    fontWeight: "bold",
  },
  inputContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  input: {
    backgroundColor: "#fff1c1", // You might need to adjust the color to match exactly
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    fontSize: 18,
  },
  button: {
    backgroundColor: "#ffcd3c", // You might need to adjust the color to match exactly
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 20,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

export default GenerateReport;
