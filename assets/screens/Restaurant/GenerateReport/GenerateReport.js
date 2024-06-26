import React, { useState, useContext, useEffect } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { GetRestaurantOrdersWithDate } from "../../../../database";
import { UserContext } from "../../../../context/UserContext"
import ReportCard from "../../../Components/ReportCard";

const GenerateReport = () => {
  const [from, setFrom] = useState(new Date('2001-05-15T00:00:00'));
  const [to, setTo] = useState(new Date('2024-05-20T12:00:00'));
  const [show, setShow] = useState(false);
  const [report, setReport] = useState([]);
  const { user, setUser } = useContext(UserContext);
  var totalProfit = 0;
  
  
  const fetchReport = async() => {
    console.log("Report Generated!")
    const entry = await GetRestaurantOrdersWithDate(user.id, from.toISOString().split('T')[0], to.toISOString().split('T')[0])
    setReport(entry);
    console.log(entry)
  }

  for (let i = 0; i < report.length; i++) {
    totalProfit += report[i].total;
  }

  const onChangeFrom = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setFrom(currentDate);
  };

  const onChangeTo = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setTo(currentDate);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Revenue Report</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.rangeText}>From</Text>
        <DateTimePicker
          value={from}
          testID="dateTimePicker"
          mode="date"
          onChange={onChangeFrom}
        />
        <Text style={styles.rangeText}>To</Text>
        <DateTimePicker
          value={to}
          testID="dateTimePicker"
          mode="date"
          onChange={onChangeTo}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={fetchReport}>
        <Text style={styles.buttonText}>Generate report</Text>
      </TouchableOpacity>
      <View>
        {
          report !== 0 &&
          report.map((entry) => (
            <ReportCard 
              key={entry.id}
              total={entry.total}
              date={entry.transactionTime.split('T')[0]}
            />
          ))
        }
        
      </View>
      <Text style={styles.profitText}>Total profit for selected period: ${totalProfit}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  header: {
    marginTop: 50,
    marginHorizontal: 20,
  },
  headerText: {
    fontSize: 35,
    fontWeight: "bold",
  },
  inputContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  input: {
    backgroundColor: "#fff1c1", // You might need to adjust the color to match exactly
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    fontSize: 18,
  },
  button: {
    backgroundColor: "#ffcd3c", // You might need to adjust the color to match exactly
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 20,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  rangeText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  profitText: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
  }
});

export default GenerateReport;
