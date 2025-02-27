// src/app/hooks/useAuth.ts
import { useState, useEffect } from "react";
import { auth } from "../lib/firebase"; // Adjust path if necessary
import { onAuthStateChanged, User } from "firebase/auth";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return { user };
};