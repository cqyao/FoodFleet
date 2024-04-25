import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const GiveFeedback = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const navigation = useNavigation();

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmitFeedback = () => {
    // Submit feedback logic goes here
    Alert.alert(
      "Thank you for your feedback!",
      "",
      [{ text: "OK", onPress: () => navigation.navigate("CustomerHome") }],
      { cancelable: false }
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Feedback & Rating</Text>
      <View style={styles.feedbackCard}>
        <Text style={styles.question}>How was your food?</Text>
        <TextInput
          style={styles.input}
          placeholder="Type your feedback here..."
          onChangeText={(text) => setFeedback(text)}
          value={feedback}
        />
        <View style={styles.stars}>
          {[...Array(5)].map((_, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleRating(index + 1)}
              >
                <Text
                  style={[
                    styles.star,
                    rating > index ? styles.filledStar : styles.emptyStar,
                  ]}
                >
                  ★
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmitFeedback}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  feedbackCard: {
    backgroundColor: "#FFD700",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    width: "80%",
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  stars: {
    flexDirection: "row",
    marginBottom: 20,
  },
  star: {
    fontSize: 30,
    color: "#ccc",
  },
  filledStar: {
    color: "black",
  },
  emptyStar: {
    color: "#ccc",
  },
  submitButton: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default GiveFeedback;
