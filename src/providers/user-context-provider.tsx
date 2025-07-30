"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { jwtDecode } from "jwt-decode";
import { User } from "@/features/auth/types";

type UserContextType = {
  user: User | null;
  loading: boolean;
  setToken: (token: string) => void;
  refetchUser: () => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const setToken = (token: string) => {
    try {
      const decoded = jwtDecode<User>(token);
      localStorage.setItem("token", token);
      setUser(decoded);
    } catch (err) {
      console.error("Invalid token:", err);
      localStorage.removeItem("token");
      setUser(null);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const refetchUser = useCallback(() => {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    } else {
      setUser(null);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    refetchUser();
  }, [refetchUser]);

  return (
    <UserContext.Provider
      value={{ user, loading, setToken, refetchUser, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
