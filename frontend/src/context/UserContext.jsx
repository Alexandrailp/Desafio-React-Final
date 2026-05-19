import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  // 1. Al iniciar, leemos si ya hay un token o email guardado en el navegador
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [email, setEmail] = useState(localStorage.getItem("email") || null);

  const login = async (userEmail, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          password: password,
        }),
      });
      const data = await response.json();
      
      if (data?.token) {
        setToken(data.token);
        setEmail(data.email);
        
        // 2. Guardamos los datos en el navegador
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);
      } else {
        alert(data.error || "Error al iniciar sesión");
      }
    } catch (error) {
      console.error("Error conectando con el servidor:", error);
    }
  };

  const register = async (userEmail, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          password: password,
        }),
      });
      const data = await response.json();
      
      if (data?.token) {
        setToken(data.token);
        setEmail(data.email);
        
        // 2. Guardamos los datos en el navegador
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);
      } else {
        alert(data.error || "Error al registrarse");
      }
    } catch (error) {
      console.error("Error conectando con el servidor:", error);
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
    
    // 3. Limpiamos el navegador al cerrar sesión
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const getProfile = async () => {
    if (!token) return; 
    
    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error obteniendo perfil:", error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        token,
        email,
        login,
        register,
        logout,
        getProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;