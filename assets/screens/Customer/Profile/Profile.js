import React, { useState, useEffect, useContext, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { UserContext } from "../../../../context/UserContext";
import { RefreshControl } from "react-native-gesture-handler";

const Profile = ({ navigation }) => {
  const {user, setUser} = useContext(UserContext);
  const [refreshing, setRefreshing] = useState(false);

  const handleSignUp = () => {
    navigation.navigate("MembershipPlan");
  };

  const handleLogout = () => {
    navigation.navigate("Login");
    console.log(user.id)
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    Member({ isMember: user.isMember });
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
    }, []);

  const Member = ({ isMember }) => {
    let content

    if (isMember) {
      content = <Text style={{textAlign: "center"}}>Thanks for being a member. {"\n"}You're currently enjoying zero delivery and service fees!</Text>
    } else {
      content =
        <View style={{alignItems:"center"}}>
          <Text style={{textAlign:"center"}}>Currently not a member{"\n"}Join today for free delivery and zero service fees!</Text>
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      
    }
    return <View>{content}</View>
  }

  return (
    <ScrollView 
      style={styles.container}
      refreshControl={
        <RefreshControl 
          refreshing={refreshing} 
          onRefresh={onRefresh}
        />
      }
    >
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Profile</Text>
      </View>
      {/* Profile picture */}
      <Image
        source={{uri: user.profile_picture}}
        style={styles.profilePic}
      />

      <Text style={styles.name}>{user.firstName} {user.lastName}</Text>
      <Text style={styles.email}>{user.emailAddress}</Text>

      <View style={styles.PostCodeContainer}>
        <Text style={styles.PostCodeTitle}>Post Code</Text>
        <Text style={styles.PostCodeText}>{user.postcode}</Text>
      </View>

      <View style={styles.membershipContainer}>
        <Text style={styles.membershipTitle}>Membership</Text>
        <Member isMember={user.isMember} />
        
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
  email: {
    fontSize: 18,
    textAlign: "center",
    color: "grey",
    marginBottom: 20,
  },
  PostCodeContainer: {
    padding: 20,
    alignItems: "center",
  },
  PostCodeTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  PostCodeText: {
    fontSize: 16,
    color: "grey",
    textAlign: "center",
  },
  editPostCodeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  PostCodeInput: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    flex: 1,
  },
  saveButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginLeft: 10,
    color: "white",
    fontWeight: "bold",
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
    width: "50%",
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
