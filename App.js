import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./assets/screens/login/Login";
import SignUpOption from "./assets/screens/login/signUpOption";

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
          name="SignUpOption"
          component={SignUpOption}
          options={{ title: "SignUpOption" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
