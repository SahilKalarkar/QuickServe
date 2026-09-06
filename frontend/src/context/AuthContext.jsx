/* eslint-disable react-refresh/only-export-components */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  loginUser,
  registerUser,
  getCurrentUser,
} from "../services/authService";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // LOGIN
  const login = async (credentials) => {
    const data = await loginUser(credentials);

    localStorage.setItem("quickserve_token", data.token);
    localStorage.setItem("quickserve_user", JSON.stringify(data.user));

    setUser(data.user);

    return data;
  };

  // REGISTER
  const register = async (userData) => {
    const data = await registerUser(userData);

    localStorage.setItem("quickserve_token", data.token);
    localStorage.setItem("quickserve_user", JSON.stringify(data.user));

    setUser(data.user);

    return data;
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("quickserve_token");
    localStorage.removeItem("quickserve_user");

    setUser(null);
  };

  // LOAD CURRENT USER
  const loadUser = useCallback(async () => {
    const token = localStorage.getItem("quickserve_token");

    // No token means user is not logged in
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const data = await getCurrentUser();

      setUser(data.user);

      localStorage.setItem("quickserve_user", JSON.stringify(data.user));
    } catch (error) {
      console.error("Authentication check failed:", error);

      // Invalid/expired token
      localStorage.removeItem("quickserve_token");
      localStorage.removeItem("quickserve_user");

      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  // Check authentication when application starts
  useEffect(() => {
    const timer = setTimeout(() => {
      loadUser();
    }, 0);

    return () => clearTimeout(timer);
  }, [loadUser]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: Boolean(user),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// CUSTOM AUTH HOOK
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};
