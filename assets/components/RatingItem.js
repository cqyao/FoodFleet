import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const RatingItem = ({ name, rating, message }) => {
  const starArray = [];

  for (let i = 0; i < rating; i++) {
    starArray.push(
      <Image
        key={`star-${i}`}
        style={styles.star}
        source={require("../screens/images/star.png")}
      />
    );
  }

  for (let i = rating; i < 5; i++) {
    starArray.push(
      <Image
        key={`star-${i}`}
        style={styles.star}
        source={require("../screens/images/empty_star.png")}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://links.papareact.com/wru" }}
        />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>{starArray}</View>
      <Text style={styles.message}>"{message}"</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 30,
    width: 30,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 20,
  },
  message: {
    fontSize: 20,
    fontWeight: "400",
    marginTop: 10,
  },
  container: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
  },
  star: {
    height: 25,
    width: 25,
  },
});

export default RatingItem;
