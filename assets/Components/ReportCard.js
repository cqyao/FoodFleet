import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ReportCard = ( {total, date} ) => {
  return (
    <View style={styles.reportContainer}>
      <Text>Transaction date: {date}</Text>
      <Text>Total bill: ${total}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  reportContainer: {
    flexDirection: "column",
    marginTop: 20,
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 8, // You can adjust this as needed
    justifyContent: "space-between",
    backgroundColor: "white",
  },

});

export default ReportCard