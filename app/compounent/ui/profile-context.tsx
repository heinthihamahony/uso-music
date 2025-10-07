"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface ProfileContextType {
  profilePicture: string | null;
  setProfilePicture: (picture: string | null) => void;
  username: string;
  setUsername: (username: string) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [username, setUsername] = useState<string>("");

  // Load saved data from localStorage on mount
  useEffect(() => {
    const savedPicture = localStorage.getItem("profilePicture");
    const savedUsername = localStorage.getItem("username");

    if (savedPicture) {
      setProfilePicture(savedPicture);
    }
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  // Save profile picture to localStorage when it changes
  useEffect(() => {
    if (profilePicture) {
      localStorage.setItem("profilePicture", profilePicture);
    } else {
      localStorage.removeItem("profilePicture");
    }
  }, [profilePicture]);

  // Save username to localStorage when it changes
  useEffect(() => {
    if (username) {
      localStorage.setItem("username", username);
    } else {
      localStorage.removeItem("username");
    }
  }, [username]);

  return (
    <ProfileContext.Provider
      value={{
        profilePicture,
        setProfilePicture,
        username,
        setUsername,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
}
