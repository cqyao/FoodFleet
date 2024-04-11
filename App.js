import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./assets/screens/login/Login";
import SignUpOption from "./assets/screens/login/SignUpOption";
import CreateRestaurant from "./assets/screens/Restaurant/CreateRestaurant";
import RestaurantMain from "./assets/screens/Restaurant/RestaurantMain";
import GenerateReport from "./assets/screens/Restaurant/GenerateReport";
import RestaurantProfile from "./assets/screens/Restaurant/RestaurantProfile";
import OrderManagement from "./assets/screens/Restaurant/OrderManagement";
import ForgotPassword from "./assets/screens/login/ForgotPassword";


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        /> */}
        {/* <Stack.Screen
          name="SignUpOption"
          component={SignUpOption}
          options={{ title: "SignUpOption" }}
        /> */}
        {/* <Stack.Screen
          name="Create Restaurant Account"
          component={CreateRestaurant}
        /> */}
        {/* <Stack.Screen
          name="Restaurant Main"
          component={RestaurantMain}
        /> */}
        {/* <Stack.Screen
          name="Revenue Report"
          component={GenerateReport}
        /> */}
        {/* <Stack.Screen
          name="Restaurant Profile"
          component={RestaurantProfile}
        /> */}
        {/* <Stack.Screen
          name="Order Management"
          component={OrderManagement}
        /> */}
        <Stack.Screen
          name="Forgot Password"
          component={ForgotPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
