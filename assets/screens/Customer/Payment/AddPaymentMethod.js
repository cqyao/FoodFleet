import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

const AddPaymentMethod = () => {
  const navigation = useNavigation();

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [country, setCountry] = useState("Australia"); // default value

  const handleSave = () => {
    navigation.navigate("PaymentMethod");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Add Payment Method</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Card Number</Text>
        <TextInput
          style={styles.input}
          value={cardNumber}
          onChangeText={setCardNumber}
          placeholder="0000 0000 0000 0000"
          keyboardType="numeric"
        />
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.inputLabel}>Expired Date</Text>
            <TextInput
              style={[styles.input, styles.smallInput]}
              value={expiryDate}
              onChangeText={setExpiryDate}
              placeholder="mm/year"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.column}>
            <Text style={styles.inputLabel}>CVV</Text>
            <TextInput
              style={[styles.input, styles.smallInput]}
              value={cvv}
              onChangeText={setCvv}
              placeholder="000"
              keyboardType="numeric"
              secureTextEntry
            />
          </View>
        </View>
        <Text style={styles.inputLabel}>Card issuing country</Text>
        <Picker
          selectedValue={country}
          onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}
          style={styles.picker}
        >
          {/* Populate the Picker with country options */}
          <Picker.Item label="Australia" value="Australia" />
          <Picker.Item label="United States" value="United States" />
          <Picker.Item label="Korea" value="Korea" />
          <Picker.Item label="Malaysia" value="Malaysia" />
          {/* Add more countries as needed */}
        </Picker>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  inputContainer: {
    paddingHorizontal: 20,
  },
  inputLabel: {
    fontSize: 16,
    color: "black",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flexDirection: "column",
    width: "48%",
  },
  smallInput: {
    marginBottom: 0,
  },
  picker: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    marginBottom: 30,
  },
  saveButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    margin: 20,
    alignItems: "center",
  },
  saveButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export default AddPaymentMethod;
