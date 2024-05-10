import React, { useState, useContext } from "react";
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
import {
  AddCustomerPaymentMethod,
  GetPaymentMethods,
} from "../../../../database";
import { UserContext } from "../../../../context/UserContext";

const AddPaymentMethod = () => {
  const navigation = useNavigation();
  const { user, setUser } = useContext(UserContext);

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [country, setCountry] = useState("Australia");
  const [isLoading, setIsLoading] = useState(false); // 추가

  const handleSave = async () => {
    setIsLoading(true); // 추가
    try {
      const data = await AddCustomerPaymentMethod(
        user.id,
        cardNumber,
        cvv,
        expiryDate,
        country
      );

      if (data) {
        const newPaymentMethods = await GetPaymentMethods(user.id);
        setUser({ ...user, paymentMethods: newPaymentMethods }); // 상태 업데이트만 수행
        navigation.navigate("PaymentMethod");
      } else {
        console.log("Failed to add payment method");
      }
    } catch (error) {
      console.error("Error adding payment method:", error.message);
    } finally {
      setIsLoading(false); // 추가
    }
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
        />
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.inputLabel}>Expiration Date</Text>
            <TextInput
              style={[styles.input, styles.smallInput]}
              value={expiryDate}
              onChangeText={setExpiryDate}
              placeholder="mm/year"
            />
          </View>
          <View style={styles.column}>
            <Text style={styles.inputLabel}>CVV</Text>
            <TextInput
              style={[styles.input, styles.smallInput]}
              value={cvv}
              onChangeText={setCvv}
              placeholder="000"
              secureTextEntry
            />
          </View>
        </View>
        <Text style={styles.inputLabel}>Card Issuing Country</Text>
        <Picker
          selectedValue={country}
          onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Australia" value="Australia" />
          <Picker.Item label="United States" value="United States" />
          <Picker.Item label="Korea" value="Korea" />
          <Picker.Item label="Malaysia" value="Malaysia" />
        </Picker>
      </View>
      <TouchableOpacity
        style={styles.saveButton}
        onPress={handleSave}
        disabled={isLoading} // 추가
      >
        <Text style={styles.saveButtonText}>
          {isLoading ? "Adding..." : "Save"}
        </Text>
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
