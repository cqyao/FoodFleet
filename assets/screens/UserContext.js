// UserContext.js

import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState({
    paymentMethods: [
      { cardNumber: "1234 5678 9012 3456" },
      { cardNumber: "9876 5432 1098 7654" },
    ],
    selectedCardIndex: 0, // Add selectedCardIndex to user state
  });

  return (
    <UserContext.Provider value={{ userId, setUserId, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
