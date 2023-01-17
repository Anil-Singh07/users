import React, { createContext, useState } from "react";
import data from "../userData.json";

export const UserDataContext = createContext();

export const UserDataContextProvider = ({ children }) => {
  const userData = data.users;
  const [selectedUser, setSelectedUser] = useState({});

  return (
    <UserDataContext.Provider
      value={{
        userData,
        selectedUser,
        setSelectedUser,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
