import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import Login from "../assets/screens/Login/Login"; // 경로를 실제 파일 위치로 변경하세요.

import { UserContext } from "../context/UserContext";
import {
  CustomerLogin,
  RestaurantLogin,
  GetPaymentMethods,
  GetRestaurants,
  CreateCart,
} from "../database"; //  경로를 실제 파일 위치로 변경하세요.

jest.mock("../database", () => ({
  CustomerLogin: jest.fn(),
  RestaurantLogin: jest.fn(),
  GetPaymentMethods: jest.fn(),
  GetRestaurants: jest.fn(),
  CreateCart: jest.fn(),
}));

const navigation = {
  navigate: jest.fn(),
};

const mockSetUser = jest.fn();

describe("Login", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const { getByPlaceholderText, getByText } = render(
      <UserContext.Provider value={{ user: null, setUser: mockSetUser }}>
        <Login navigation={navigation} />
      </UserContext.Provider>
    );

    expect(getByPlaceholderText("Email")).toBeTruthy();
    expect(getByPlaceholderText("Password")).toBeTruthy();
    expect(getByText("Sign In Customer")).toBeTruthy();
    expect(getByText("Sign In Restaurant")).toBeTruthy();
    expect(getByText("Forgot Password")).toBeTruthy();
    expect(getByText("Create An Account")).toBeTruthy();
  });

  it("calls CustomerLogin and navigates to CustomerHome on successful login", async () => {
    CustomerLogin.mockResolvedValue({
      id: 1,
      name: "Test Customer",
      membership: true,
    });
    CreateCart.mockResolvedValue([{ id: 1 }]);
    GetPaymentMethods.mockResolvedValue([]);
    GetRestaurants.mockResolvedValue([]);

    const { getByPlaceholderText, getByText } = render(
      <UserContext.Provider value={{ user: null, setUser: mockSetUser }}>
        <Login navigation={navigation} />
      </UserContext.Provider>
    );

    fireEvent.changeText(getByPlaceholderText("Email"), "test@example.com");
    fireEvent.changeText(getByPlaceholderText("Password"), "password123");
    fireEvent.press(getByText("Sign In Customer"));

    await waitFor(() => {
      expect(CustomerLogin).toHaveBeenCalledWith(
        "test@example.com",
        "password123"
      );
      expect(CreateCart).toHaveBeenCalledWith(1);
      expect(GetPaymentMethods).toHaveBeenCalledWith(1);
      expect(GetRestaurants).toHaveBeenCalled();
      expect(mockSetUser).toHaveBeenCalledWith(
        expect.objectContaining({
          id: 1,
          name: "Test Customer",
        })
      );
      expect(navigation.navigate).toHaveBeenCalledWith("CustomerHome");
    });
  });

  it("calls RestaurantLogin and navigates to RestaurantMain on successful login", async () => {
    RestaurantLogin.mockResolvedValue({ id: 1, name: "Test Restaurant" });

    const { getByPlaceholderText, getByText } = render(
      <UserContext.Provider value={{ user: null, setUser: mockSetUser }}>
        <Login navigation={navigation} />
      </UserContext.Provider>
    );

    fireEvent.changeText(getByPlaceholderText("Email"), "test@example.com");
    fireEvent.changeText(getByPlaceholderText("Password"), "password123");
    fireEvent.press(getByText("Sign In Restaurant"));

    await waitFor(() => {
      expect(RestaurantLogin).toHaveBeenCalledWith(
        "test@example.com",
        "password123"
      );
      expect(mockSetUser).toHaveBeenCalledWith(
        expect.objectContaining({
          id: 1,
          name: "Test Restaurant",
        })
      );
      expect(navigation.navigate).toHaveBeenCalledWith("RestaurantMain");
    });
  });
});
