import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import CreateRestaurantAccount from "../assets/screens/Restaurant/Signup/CreateRestaurantAccount";
import { CreateRestaurant } from "../database"; //add

jest.mock("../database", () => ({
  CreateRestaurant: jest.fn(),
}));

const navigation = {
  navigate: jest.fn(),
};

describe("CreateRestaurantAccount", () => {
  it("renders correctly", () => {
    const { getByPlaceholderText, getByText } = render(
      <NavigationContainer>
        <CreateRestaurantAccount navigation={navigation} />
      </NavigationContainer>
    );

    expect(getByText("Create new account")).toBeTruthy();
    expect(getByText("Restaurant")).toBeTruthy();
    expect(getByPlaceholderText("Full Name")).toBeTruthy();
    expect(getByPlaceholderText("Restaurant Name")).toBeTruthy();
    expect(getByPlaceholderText("Email")).toBeTruthy();
    expect(getByPlaceholderText("Contact number")).toBeTruthy();
    expect(getByPlaceholderText("Postcode")).toBeTruthy();
    expect(getByPlaceholderText("Password")).toBeTruthy();
    expect(getByPlaceholderText("Category")).toBeTruthy();
  });

  it("calls CreateRestaurant with correct parameters and navigates to Login", async () => {
    const { getByPlaceholderText, getByText } = render(
      <NavigationContainer>
        <CreateRestaurantAccount navigation={navigation} />
      </NavigationContainer>
    );

    fireEvent.changeText(getByPlaceholderText("Full Name"), "John Doe");
    fireEvent.changeText(
      getByPlaceholderText("Restaurant Name"),
      "Doe's Diner"
    );
    fireEvent.changeText(getByPlaceholderText("Email"), "john.doe@example.com");
    fireEvent.changeText(getByPlaceholderText("Contact number"), "1234567890");
    fireEvent.changeText(getByPlaceholderText("Postcode"), "12345");
    fireEvent.changeText(getByPlaceholderText("Password"), "password123");
    fireEvent.changeText(getByPlaceholderText("Category"), "Fast Food");

    fireEvent.press(getByText("Next"));

    await waitFor(() => {
      expect(CreateRestaurant).toHaveBeenCalledWith(
        "Doe's Diner",
        "john.doe@example.com",
        "1234567890",
        "12345",
        "password123",
        "Fast Food"
      );

      expect(navigation.navigate).toHaveBeenCalledWith("LoginScreen");
    });
  });
});
