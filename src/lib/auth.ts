// lib/auth.ts

import Cookies from "js-cookie";
import { auth } from "@/lib/firebase"; // Import auth from Firebase initialization
import { onAuthStateChanged } from "firebase/auth";

/**
 * Handles Firebase authentication state changes.
 * - Saves the Firebase ID token in a cookie when the user logs in.
 * - Removes the cookie when the user logs out.
 */
export const handleAuthStateChange = () => {
  // Listen for auth state changes
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, save the ID token in a cookie
      user.getIdToken().then((idToken) => {
        Cookies.set("firebase-token", idToken, { expires: 7 }); // Expires in 7 days
      });
    } else {
      // User is signed out, remove the cookie
      Cookies.remove("firebase-token");
    }
  });
};