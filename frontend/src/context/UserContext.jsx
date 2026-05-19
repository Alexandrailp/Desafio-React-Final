import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);

  const [email, setEmail] = useState("pizza@mamamia.com");

  const login = (userEmail) => {
    setToken(true);
    setEmail(userEmail);
  };

  const register = (userEmail) => {
    setToken(true);
    setEmail(userEmail);
  };

  const logout = () => {
    setToken(false);
    setEmail("");
  };

  return (
    <UserContext.Provider
      value={{
        token,
        email,
        login,
        register,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;