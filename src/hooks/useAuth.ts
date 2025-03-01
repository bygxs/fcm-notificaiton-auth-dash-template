// hooks/useAuth.ts
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth"; // Import User type

const auth = getAuth(); // Initialize Firebase Auth

interface AuthContextType {
  user: User | null; // Use Firebase's User type
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const useAuth = (): AuthContextType => {
  const [user, setUser] = useState<User | null>(null); // Use Firebase's User type

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // TypeScript now recognizes currentUser as User | null
    });

    return () => unsubscribe();
  }, []);

  return { user, setUser };
};