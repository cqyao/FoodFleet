import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const CustomerReviews = [
  // CheckCustomerReview 대신에 CustomerReviews로 수정
  {
    id: "1",
    name: "Myunggyun Yu",
    review: "It was really good! Recommend!",
    rating: 4,
    avatar: require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/Avatar1.png"),
  },
  {
    id: "2",
    name: "Tim",
    review: "So so...",
    rating: 3,
    avatar: require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/Avatar2.png"),
  },
  {
    id: "3",
    name: "Peter",
    review: "What is this?",
    rating: 1,
    avatar: require("C:/Users/hp/FoodFleet/assets/screens/EveryImages/Avatar3.png"),
  },
];

const ReviewItem = ({ name, review, rating, avatar }) => {
  return (
    <View style={styles.reviewItem}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.reviewText}>
        <Text style={styles.name}>{name}</Text>
        <Text>{"★".repeat(rating) + "☆".repeat(5 - rating)}</Text>
        <Text>{review}</Text>
      </View>
    </View>
  );
};

const CheckCustomersReview = () => {
  // CheckCustomerReview 대신에 CheckCustomersReview로 수정
  const averageRating =
    CustomerReviews.reduce((acc, { rating }) => acc + rating, 0) /
    CustomerReviews.length;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Check Customers Review and ratings</Text>
      <Text style={styles.title}>Hanok</Text>
      <Text style={styles.rating}>
        {averageRating.toFixed(1)}{" "}
        {"★".repeat(Math.round(averageRating)) +
          "☆".repeat(5 - Math.round(averageRating))}
      </Text>
      <FlatList
        data={CustomerReviews}
        renderItem={({ item }) => <ReviewItem {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    textAlign: "center",
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 10,
  },
  rating: {
    textAlign: "center",
    fontSize: 24,
    marginBottom: 20,
  },
  reviewItem: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  reviewText: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
  },
});

export default CheckCustomersReview;
