import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SelectedItem = ( {itemName, price, quantity, description} ) => {
  return (
    <View style={styles.section}>
        <View>
          <Text style={styles.header}>{itemName}</Text>
          <Text>Price: ${price}</Text>
          <Text>Quantity: {quantity}</Text>
          {/* <Text>{description}</Text> */}
        </View>
    </View> 
  )
}

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

  

export default SelectedItem