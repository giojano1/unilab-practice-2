import React, { createContext, useState, useEffect } from "react";
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });
  const [isUser, setIsUser] = useState(() => {
    const storedIsUser = localStorage.getItem("isUser");
    return storedIsUser ? JSON.parse(storedIsUser) : null;
  });
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("isUser", JSON.stringify(isUser));
    if (isUser !== null) {
      const loggedInUser = users.find((user) => user.id === isUser);
      setUserData(loggedInUser);
    }
  }, [users, isUser]);
  const handleLogOut = () => {
    setIsUser(null);
    window.location.reload();
  };
  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        isUser,
        setIsUser,
        userData,
        handleLogOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
