import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getPostCode } from "../../ClientStorage";
import { MakeOrder, GetPaymentMethods, GetMenus } from "../../../../database";

const Payment = ({ route }) => {
  const navigation = useNavigation();
  const [userPostCode, setUserPostCode] = useState("");
  const [paymentMethods, setPaymentMethods] = useState([]);

  useEffect(() => {
    fetchPostCode();
    fetchPaymentMethods(); // 고객의 결제 방법을 가져옵니다.
  }, []);

  const fetchPostCode = async () => {
    try {
      const postCode = await getPostCode();
      setUserPostCode(postCode);
    } catch (error) {
      console.error("Error fetching post code: ", error);
    }
  };

  const fetchPaymentMethods = async () => {
    try {
      const customerId = "15"; // 사용자의 고객 ID를 여기에 넣으세요.
      const paymentMethods = await GetPaymentMethods(customerId);
      setPaymentMethods(paymentMethods);
    } catch (error) {
      console.error("Error fetching payment methods: ", error);
    }
  };

  const handlePay = async () => {
    // handlePay 함수 구현
  };

  const goToPaymentMethod = () => {
    navigation.navigate("PaymentMethod");
  };

  const { itemName, sauceName, quantity, totalPrice } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <View style={styles.locationContainer}>
          <Image
            source={require("../../../../assets/screens/EveryImages/Location.png")}
            style={styles.icon}
          />
          <Text style={styles.userPostCode}>{userPostCode}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View>
          <Text style={styles.header}>Selected item: {itemName}</Text>
          <Text style={styles.description}>
            Sauce: {sauceName} AU${totalPrice}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtotal}>Subtotal: AU${totalPrice}</Text>
        <Text>{"\n"}</Text>
        <Text style={styles.fee}>Delivery fee: AU$5</Text>
        <Text>{"\n"}</Text>
        <Text style={styles.fee}>Service fee: AU$3</Text>
        <Text>{"\n"}</Text>
        <Text style={styles.total}>Total {totalPrice}</Text>
      </View>

      <TouchableOpacity style={styles.section} onPress={goToPaymentMethod}>
        <View style={styles.cardContainer}>
          <Image
            source={require("../../../../assets/screens/EveryImages/MasterCard.png")}
            style={styles.icon}
          />
          <Text style={styles.textPrimary}>MasterCard 1234</Text>
        </View>
        <Image
          source={require("../../../../assets/screens/EveryImages/RightChevron.png")}
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.payButton} onPress={handlePay}>
        <Text style={styles.payButtonText}>Pay</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    flexWrap: "wrap", // Allow text to wrap to next line
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 10,
  },
  textPrimary: {
    fontSize: 16,
  },
  header: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    flex: 1, // Allow text to take full width
  },
  description: {
    fontSize: 16,
    color: "grey",
    marginBottom: 5,
    flex: 1, // Allow text to take full width
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1, // Allow text to take full width
  },
  subtotal: {
    fontSize: 16,
  },
  fee: {
    fontSize: 16,
    color: "grey",
  },
  total: {
    fontSize: 16,
    fontWeight: "bold",
  },
  payButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    margin: 20,
    alignItems: "center",
  },
  payButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export default Payment;
