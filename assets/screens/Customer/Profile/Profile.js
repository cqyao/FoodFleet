import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Profile = ({ navigation }) => {
  const handleSignUp = () => {
    navigation.navigate("MembershipPlan");
  };

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Profile</Text>
        <TouchableOpacity>
          <Image
            source={require("../../EveryImages/Edit.png")} // Replace with actual edit icon path
            style={styles.editIcon}
          />
        </TouchableOpacity>
      </View>

      <Image
        source={require("../../EveryImages/Avatar1.png")} // Replace with actual profile picture path
        style={styles.profilePic}
      />

      <Text style={styles.name}>Myunggyun Yu</Text>
      <Text style={styles.age}>26</Text>

      <View style={styles.membershipContainer}>
        <Text style={styles.membershipTitle}>Membership</Text>
        <Text style={styles.membershipStatus}>Currently no membership</Text>
        <Text style={styles.membershipDetail}>
          Join today for Free delivery and 0 Service Fee!
        </Text>
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
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
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
  },
  editIcon: {
    width: 20,
    height: 20,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginTop: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  age: {
    fontSize: 18,
    textAlign: "center",
    color: "grey",
    marginBottom: 20,
  },
  membershipContainer: {
    padding: 20,
    alignItems: "center",
  },
  membershipTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  membershipStatus: {
    fontSize: 16,
    color: "grey",
    marginBottom: 5,
  },
  membershipDetail: {
    fontSize: 14,
    color: "grey",
    marginBottom: 20,
    textAlign: "center",
  },
  signUpButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginVertical: 10,
    width: "100%",
    alignItems: "center",
  },
  signUpText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  logoutButton: {
    marginTop: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    borderColor: "#FFD700",
    borderWidth: 1,
    width: "100%",
    alignItems: "center",
  },
  logoutText: {
    fontSize: 18,
    color: "#FFD700",
    fontWeight: "bold",
  },
});

export default Profile;
