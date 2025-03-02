// hooks/useAuth.ts
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../lib/firebase";



interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const useAuth = (): AuthContextType => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: User | null) => {
      setUser(currentUser); // Explicitly type currentUser as User | null
    });

    return () => unsubscribe(); // Clean up the listener on unmount
  }, []); // Empty dependency array ensures this runs once on mount

  return { user, setUser }; // Return the user state and setter
};