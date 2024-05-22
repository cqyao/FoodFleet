import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { UserProvider } from "./context/UserContext";

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

import MembershipPlan from "./assets/screens/Customer/Profile/MembershipPlan";
import Profile from "./assets/screens/Customer/Profile/Profile";

import CreateCustomerAccount from "./assets/screens/Customer/SignUp/CreateCustomerAccount";
import CreateRestaurantAccount from "./assets/screens/Restaurant/SignUp/CreateRestaurantAccount";

import LoginScreen from "./assets/screens/Login/LoginScreen";
import ForgotPassword from "./assets/screens/Login/ForgotPassword";
import ResetPassword from "./assets/screens/Login/ResetPassword";
import SignUpOption from "./assets/screens/Login/SignUpOption";

import GenerateReport from "./assets/screens/Restaurant/GenerateReport/GenerateReport";
import RestaurantMain from "./assets/screens/Restaurant/Main/RestaurantMain";
import OrderManagement from "./assets/screens/Restaurant/OrderManagement/OrderManagement";
import RestaurantProfile from "./assets/screens/Restaurant/Profile/RestaurantProfile";

import CheckCustomerReview from "./assets/screens/Restaurant/CheckCustomerReview/CheckCustomerReview";
import EditProfile from "./assets/screens/Restaurant/Profile/EditProfile";
import AddDishPage from "./assets/screens/Restaurant/Profile/AddDishPage";

const Stack = createStackNavigator();

const App = () => (
  <UserProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: "LoginScreen" }}
        />
        <Stack.Screen
          name="RestaurantMain"
          component={RestaurantMain}
          options={{ title: "RestaurantMain" }}
        />

        <Stack.Screen
          name="SignUpOption"
          component={SignUpOption}
          options={{ title: "SignUpOption" }}
        />
        <Stack.Screen
          name="GenerateReport"
          component={GenerateReport}
          options={{ title: "GenerateReport" }}
        />
        <Stack.Screen name="Restaurant Profile" component={RestaurantProfile} />
        <Stack.Screen name="Order Management" component={OrderManagement} />
        <Stack.Screen name="Forgot Password" component={ForgotPassword} />

        <Stack.Screen
          name="MainCart"
          component={MainCart}
          options={{ title: "MainCart" }}
        />
        <Stack.Screen
          name="BurgersCategory"
          component={BurgersCategory}
          options={{ title: "BurgersCategory" }}
        />
        <Stack.Screen
          name="CafesCategory"
          component={CafesCategory}
          options={{ title: "CafesCategory" }}
        />
        <Stack.Screen
          name="CategoriesMain"
          component={CategoriesMain}
          options={{ title: "CategoriesMain" }}
        />
        <Stack.Screen
          name="JapaneseCategory"
          component={JapaneseCategory}
          options={{ title: "JapaneseCategory" }}
        />
        <Stack.Screen
          name="KoreanCategory"
          component={KoreanCategory}
          options={{ title: "KoreanCategory" }}
        />
        <Stack.Screen
          name="PizzasCategory"
          component={PizzasCategory}
          options={{ title: "PizzasCategory" }}
        />
        <Stack.Screen
          name="ThaiCategory"
          component={ThaiCategory}
          options={{ title: "ThaiCategory" }}
        />

        <Stack.Screen
          name="CustomerHome"
          component={CustomerHome}
          options={{ title: "CustomerHome" }}
        />

        <Stack.Screen
          name="Filter"
          component={Filter}
          options={{ title: "Filter" }}
        />
        <Stack.Screen
          name="FilteredRestaurant"
          component={FilteredRestaurant}
          options={{ title: "FilteredRestaurant" }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ title: "Search" }}
        />
        <Stack.Screen
          name="AlmostThere"
          component={AlmostThere}
          options={{ title: "AlmostThere" }}
        />
        <Stack.Screen
          name="Delivered"
          component={Delivered}
          options={{ title: "Delivered" }}
        />
        <Stack.Screen
          name="GiveFeedback"
          component={GiveFeedback}
          options={{ title: "GiveFeedback" }}
        />
        <Stack.Screen
          name="HanokMenu"
          component={HanokMenu}
          options={{ title: "HanokMenu" }}
        />
        <Stack.Screen
          name="HanokOrder"
          component={HanokOrder}
          options={{ title: "HanokOrder" }}
        />
        <Stack.Screen
          name="PreparingOrder"
          component={PreparingOrder}
          options={{ title: "PreparingOrder" }}
        />
        <Stack.Screen
          name="Receipt"
          component={Receipt}
          options={{ title: "Receipt" }}
        />
        <Stack.Screen
          name="AddPaymentMethod"
          component={AddPaymentMethod}
          options={{ title: "AddPaymentMethod" }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ title: "Payment" }}
        />
        <Stack.Screen
          name="PaymentMethod"
          component={PaymentMethod}
          options={{ title: "PaymentMethod" }}
        />
        <Stack.Screen
          name="MembershipPlan"
          component={MembershipPlan}
          options={{ title: "MembershipPlan" }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Profile" }}
        />

        <Stack.Screen
          name="CheckCustomerReview"
          component={CheckCustomerReview}
          options={{ title: "CheckCustomerReview" }}
        />
        <Stack.Screen
          name="OrderManagement"
          component={OrderManagement}
          options={{ title: "OrderManagement" }}
        />
        <Stack.Screen
          name="RestaurantProfile"
          component={RestaurantProfile}
          options={{ title: "RestaurantProfile" }}
        />
        <Stack.Screen
          name="AddDish"
          component={AddDishPage}
          options={{ title: "AddDishPage" }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ title: "EditProfile" }}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ title: "ForgotPassword" }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ title: "ResetPassword" }}
        />
        <Stack.Screen
          name="CreateCustomerAccount"
          component={CreateCustomerAccount}
          options={{ title: "CreateCustomerAccount" }}
        />
        <Stack.Screen
          name="CreateRestaurantAccount"
          component={CreateRestaurantAccount}
          options={{ title: "CreateRestaurantAccount" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </UserProvider>
);

export default App;
