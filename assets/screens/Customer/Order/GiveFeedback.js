import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

const GiveFeedback = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmitFeedback = () => {
    // Submit feedback logic goes here
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Feedback & Rating</Text>
      <View style={styles.feedbackCard}>
        <Text style={styles.question}>How was your food?</Text>
        <Text style={styles.response}>GOOD!</Text>
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
    flex: 1,
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
    marginHorizontal: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  response: {
    fontSize: 16,
    color: "black",
    marginBottom: 20,
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
