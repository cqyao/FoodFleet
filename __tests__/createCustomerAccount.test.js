import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import CreateCustomerAccount from "../assets/screens/Customer/SignUp/CreateCustomerAccount";
import { CreateCustomer } from "../database"; //test

jest.mock("../database", () => ({
  CreateCustomer: jest.fn(),
}));

const navigation = {
  navigate: jest.fn(),
};

describe("CreateCustomerAccount", () => {
  it("renders correctly", () => {
    const { getByPlaceholderText, getByText } = render(
      <CreateCustomerAccount navigation={navigation} />
    );

    expect(getByText("Create new account")).toBeTruthy();
    expect(getByText("Customer")).toBeTruthy();
    expect(getByPlaceholderText("First Name")).toBeTruthy();
    expect(getByPlaceholderText("Last Name")).toBeTruthy();
    expect(getByPlaceholderText("Address")).toBeTruthy();
    expect(getByPlaceholderText("State")).toBeTruthy();
    expect(getByPlaceholderText("Postcode")).toBeTruthy();
    expect(getByPlaceholderText("City")).toBeTruthy();
    expect(getByPlaceholderText("Email")).toBeTruthy();
    expect(getByPlaceholderText("Phone number")).toBeTruthy();
    expect(getByPlaceholderText("Password")).toBeTruthy();
  });

  it("calls CreateCustomer with correct parameters and navigates to Login", async () => {
    const { getByPlaceholderText, getByText } = render(
      <CreateCustomerAccount navigation={navigation} />
    );

    fireEvent.changeText(getByPlaceholderText("First Name"), "John");
    fireEvent.changeText(getByPlaceholderText("Last Name"), "Doe");
    fireEvent.changeText(getByPlaceholderText("Address"), "123 Main St");
    fireEvent.changeText(getByPlaceholderText("State"), "NY");
    fireEvent.changeText(getByPlaceholderText("Postcode"), "12345");
    fireEvent.changeText(getByPlaceholderText("City"), "New York");
    fireEvent.changeText(getByPlaceholderText("Email"), "john.doe@example.com");
    fireEvent.changeText(getByPlaceholderText("Phone number"), "1234567890");
    fireEvent.changeText(getByPlaceholderText("Password"), "password123");

    fireEvent.press(getByText("Next"));

    await waitFor(() => {
      expect(CreateCustomer).toHaveBeenCalledWith(
        "John",
        "Doe",
        "123 Main St",
        "NY",
        "12345",
        "New York",
        "john.doe@example.com",
        "1234567890",
        "password123"
      );

      expect(navigation.navigate).toHaveBeenCalledWith("LoginScreen");
    });
  });
});
