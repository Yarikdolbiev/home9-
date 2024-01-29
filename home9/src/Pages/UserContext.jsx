// src/context/UserContext.js
import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");

  const loginUser = (name) => {
    setUsername(name);
    console.log("Logged in as:", name);
  };

  return (
    <UserContext.Provider value={{ username, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
