import React, { createContext, useState, useEffect } from "react";
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });
  const [isUser, setIsUser] = useState(() => {
    const storedIsUser = localStorage.getItem("isUser");
    return storedIsUser ? JSON.parse(storedIsUser) : false;
  });
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("isUser", JSON.stringify(isUser));
  }, [users, isUser]);
  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        isUser,
        setIsUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
