import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextData {
  isLoggedIn: boolean;
  hasOnboarded: boolean;
  isLoading: boolean;
  completeOnboarding: () => Promise<void>;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({
  isLoggedIn: false,
  hasOnboarded: false,
  isLoading: true,
  completeOnboarding: async () => { },
  login: async () => { },
  logout: async () => { },
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasOnboarded, setHasOnboarded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // store in AsyncStorage
  const HAS_ONBOARDED_KEY = "hasOnboarded";
  const IS_LOGGED_IN_KEY = 'isLoggedIn';

  useEffect(() => {
    async function loadAuthState() {
      try {
        const onboardValue = await AsyncStorage.getItem(HAS_ONBOARDED_KEY);
        const loggedInValue = await AsyncStorage.getItem(IS_LOGGED_IN_KEY);

        setHasOnboarded(onboardValue === 'true');
        setIsLoggedIn(loggedInValue === 'true');
      } catch (error) {
        console.error("Error loading auth state: ", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadAuthState();
  }, []);

  async function completeOnboarding() {
    setHasOnboarded(true);
    await AsyncStorage.setItem(HAS_ONBOARDED_KEY, "true");
  }

  // fake login function (repalxe with real logic)
  async function login() {
    setIsLoggedIn(true);
    await AsyncStorage.setItem(IS_LOGGED_IN_KEY, "true");
  }

  async function logout() {
    setIsLoggedIn(false);
    await AsyncStorage.setItem(IS_LOGGED_IN_KEY, "false");
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        hasOnboarded,
        isLoading,
        completeOnboarding,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)