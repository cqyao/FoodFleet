import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HanokCart from "./assets/screens/Customer/Basket/HanokCart";
import MainCart from "./assets/screens/Customer/Basket/MainCart";

import BurgersCategory from "./assets/screens/Customer/Categories/BurgersCategory";
import CafesCategory from "./assets/screens/Customer/Categories/CafesCategory";
import CategoriesMain from "./assets/screens/Customer/Categories/CategoriesMain";
import JapaneseCategory from "./assets/screens/Customer/Categories/JapaneseCategory";
import KoreanCategory from "./assets/screens/Customer/Categories/KoreanCategory";
import PizzasCategory from "./assets/screens/Customer/Categories/PizzasCategory";
import ThaiCategory from "./assets/screens/Customer/Categories/ThaiCategory";

import CustomerHome from "./assets/screens/Customer/CustomerHome/CustomerHome";
import Filter from "./assets/screens/Customer/CustomerHome/Filter";
import FilteredRestaurant from "./assets/screens/Customer/CustomerHome/FilteredRestaurant";
import Search from "./assets/screens/Customer/CustomerHome/Search";

import AlmostThere from "./assets/screens/Customer/Order/AlmostThere";
import Delivered from "./assets/screens/Customer/Order/Delivered";
import GiveFeedback from "./assets/screens/Customer/Order/GiveFeedback";
import HanokMenu from "./assets/screens/Customer/Order/HanokMenu";
import HanokOrder from "./assets/screens/Customer/Order/HanokOrder";
import PreparingOrder from "./assets/screens/Customer/Order/PreparingOrder";
import Receipt from "./assets/screens/Customer/Order/Receipt";

import AddPaymentMethod from "./assets/screens/Customer/Payment/AddPaymentMethod";
import Payment from "./assets/screens/Customer/Payment/Payment";
import PaymentMethod from "./assets/screens/Customer/Payment/PaymentMethod";

import MembershipPayment from "./assets/screens/Customer/Profile/MembershipPayment";
import MembershipPlan from "./assets/screens/Customer/Profile/MembershipPlan";
import Profile from "./assets/screens/Customer/Profile/Profile";

import CreateCustomerAccount from "./assets/screens/Customer/SignUp/CreateCustomerAccount";

import Login from "./assets/screens/Login/Login";
import ForgotPassword from "./assets/screens/Login/ForgotPassword";
import SignUpOption from "./assets/screens/Login/SignUpOption";

import CheckCustomerReview from "./assets/screens/Restaurant/CheckCustomerReview/CheckCustomerReview";
import GenerateReport from "./assets/screens/Restaurant/GenerateReport/GenerateReport";
import RestaurantMain from "./assets/screens/Restaurant/Main/RestaurantMain";
import OrderManagement from "./assets/screens/Restaurant/OrderManagement/OrderManagement";
import RestaurantProfile from "./assets/screens/Restaurant/Profile/RestaurantProfile";
import CreateRestaurantAccount from "./assets/screens/Restaurant/Signup/CreateRestaurantAccount";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Restaurant Main"
          component={RestaurantMain}
        />
        {/* <Stack.Screen
        <Stack.Screen
          name="SignUpOption"
          component={SignUpOption}
          options={{ title: "SignUpOption" }}
        />
        {/* Add more screens here */}
        <Stack.Screen
          name="HanokCart"
          component={HanokCart}
          options={{ title: "Hanok Cart" }}
        />
        <Stack.Screen
          name="MainCart"
          component={MainCart}
          options={{ title: "Main Cart" }}
        />
        <Stack.Screen
          name="BurgersCategory"
          component={BurgersCategory}
          options={{ title: "Burgers Category" }}
        />
        <Stack.Screen
          name="CafesCategory"
          component={CafesCategory}
          options={{ title: "Cafes Category" }}
        />
        <Stack.Screen
          name="CategoriesMain"
          component={CategoriesMain}
          options={{ title: "Categories Main" }}
        />
        <Stack.Screen
          name="JapaneseCategory"
          component={JapaneseCategory}
          options={{ title: "Japanese Category" }}
        />
        <Stack.Screen
          name="KoreanCategory"
          component={KoreanCategory}
          options={{ title: "Korean Category" }}
        />
        <Stack.Screen
          name="PizzasCategory"
          component={PizzasCategory}
          options={{ title: "Pizzas Category" }}
        />
        <Stack.Screen
          name="ThaiCategory"
          component={ThaiCategory}
          options={{ title: "Thai Category" }}
        />
        <Stack.Screen
          name="CustomerHome"
          component={CustomerHome}
          options={{ title: "Customer Home" }}
        />
        <Stack.Screen
          name="Filter"
          component={Filter}
          options={{ title: "Filter" }}
        />
        <Stack.Screen
          name="FilteredRestaurant"
          component={FilteredRestaurant}
          options={{ title: "Filtered Restaurant" }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ title: "Search" }}
        />
        <Stack.Screen
          name="AlmostThere"
          component={AlmostThere}
          options={{ title: "Almost There" }}
        />
        <Stack.Screen
          name="Delivered"
          component={Delivered}
          options={{ title: "Delivered" }}
        />
        <Stack.Screen
          name="GiveFeedback"
          component={GiveFeedback}
          options={{ title: "Give Feedback" }}
        />
        <Stack.Screen
          name="HanokMenu"
          component={HanokMenu}
          options={{ title: "Hanok Menu" }}
        />
        <Stack.Screen
          name="HanokOrder"
          component={HanokOrder}
          options={{ title: "Hanok Order" }}
        />
        <Stack.Screen
          name="PreparingOrder"
          component={PreparingOrder}
          options={{ title: "Preparing Order" }}
        />
        <Stack.Screen
          name="Receipt"
          component={Receipt}
          options={{ title: "Receipt" }}
        />
        <Stack.Screen
          name="AddPaymentMethod"
          component={AddPaymentMethod}
          options={{ title: "Add Payment Method" }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ title: "Payment" }}
        />
        <Stack.Screen
          name="PaymentMethod"
          component={PaymentMethod}
          options={{ title: "Payment Method" }}
        />
        <Stack.Screen
          name="MembershipPayment"
          component={MembershipPayment}
          options={{ title: "Membership Payment" }}
        />
        <Stack.Screen
          name="MembershipPlan"
          component={MembershipPlan}
          options={{ title: "Membership Plan" }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Profile" }}
        />
        <Stack.Screen
          name="CheckCustomerReview"
          component={CheckCustomerReview}
          options={{ title: "Check Customer Review" }}
        />
        <Stack.Screen
          name="GenerateReport"
          component={GenerateReport}
          options={{ title: "Generate Report" }}
        />
        <Stack.Screen
          name="RestaurantMain"
          component={RestaurantMain}
          options={{ title: "Restaurant Main" }}
        />
        <Stack.Screen
          name="OrderManagement"
          component={OrderManagement}
          options={{ title: "Order Management" }}
        />
        <Stack.Screen
          name="RestaurantProfile"
          component={RestaurantProfile}
          options={{ title: "Restaurant Profile" }}
        />
        <Stack.Screen
          name="CreateRestaurantAccount"
          component={CreateRestaurantAccount}
          options={{ title: "Create Restaurant Account" }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ title: "Forgot Password" }}
        />
        <Stack.Screen
          name="CreateCustomerAccount"
          component={CreateCustomerAccount}
          options={{ title: "CreateCustomerAccount" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
