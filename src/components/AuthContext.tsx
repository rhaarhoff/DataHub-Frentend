import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Define the context types
interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string, rememberMe: boolean) => Promise<void>;
  logout: () => void;
  token: string | null;
  userId: number | null;
  email: string | null;
  name: string | null;
  tenantId: number | null;
}

// Create the context with the defined type
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token') ?? sessionStorage.getItem('token'));
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!token);
  const [userId, setUserId] = useState<number | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [tenantId, setTenantId] = useState<number | null>(null);

  const navigate = useNavigate();

  // Login function with rememberMe
  const login = async (email: string, password: string, rememberMe: boolean) => {
    console.log("Login initiated with email:", email, "and rememberMe:", rememberMe);
  
    try {
      // Use Vite's import.meta.env to access environment variables
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      console.log("API Base URL:", baseUrl);
  
      const response = await axios.post(`${baseUrl}/auth/login`, { email, password });
      console.log("Login API response:", response);
  
      const { access_token, userId, name, tenantId, email: userEmail } = response.data; // Extract additional data
      console.log("Access Token received:", access_token);
  
      // Store the token and update authentication status
      setToken(access_token);
      setIsAuthenticated(true);

      // Store additional user data
      setUserId(userId);
      setName(name);
      setTenantId(tenantId);
      setEmail(userEmail);
  
      // Store token in localStorage or sessionStorage based on rememberMe
      if (rememberMe) {
        console.log("Storing token in localStorage");
        localStorage.setItem('token', access_token);
      } else {
        console.log("Storing token in sessionStorage");
        sessionStorage.setItem('token', access_token);
      }
  
      // Navigate to dashboard after login
      navigate('/dashboard');
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        console.error('Login failed:', error.response.data);
        throw new Error(error.response.data.message || 'Login failed');
      } else if (error instanceof Error) {
        console.error('Login failed:', error.message);
        throw new Error('Network error, please try again later');
      } else {
        console.error('An unknown error occurred');
        throw new Error('An unexpected error occurred');
      }
    }
  };

  // Logout function
  const logout = () => {
    console.log("Logging out...");
    // Clear the token and mark the user as not authenticated
    setToken(null);
    setIsAuthenticated(false);
    setUserId(null);
    setName(null);
    setTenantId(null);
    setEmail(null);
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    navigate('/login');
  };

  // Ensure token is set on app load
  useEffect(() => {
    if (token) {
      console.log("Token found on app load:", token);
      setIsAuthenticated(true);
      // Optionally, you can fetch user details again here based on the token
    }
  }, [token]);

  // Memoize the context value
  const authContextValue = React.useMemo(
    () => ({
      isAuthenticated,
      login,
      logout,
      token,
      userId,
      email,
      name,
      tenantId,
    }),
    [isAuthenticated, token, userId, email, name, tenantId]
  );

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

// Use the typed AuthContext
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
