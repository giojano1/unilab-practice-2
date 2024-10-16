import React, { createContext, useState, useEffect } from "react";
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [showUserNav, setShowUserNav] = useState(false);
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });
  const [isUser, setIsUser] = useState(() => {
    const storedIsUser = localStorage.getItem("isUser");
    return storedIsUser ? JSON.parse(storedIsUser) : null;
  });
  const [userData, setUserData] = useState(() => {
    const loggedInUser = users.find((user) => user.id === isUser);
    return loggedInUser || {};
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("isUser", JSON.stringify(isUser));
    if (isUser !== null) {
      const loggedInUser = users.find((user) => user.id === isUser);
      setUserData(loggedInUser);
    }
  }, [users, isUser]);

  const updateUserChatInfo = (newChatInfo) => {
    const updatedUsers = users.map((user) =>
      user.id === isUser ? { ...user, chatInfo: newChatInfo } : user
    );
    setUsers(updatedUsers);
  };

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
        updateUserChatInfo,
        setShowUserNav,
        showUserNav,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
