// components/SignOutButton.tsx
"use client"; // Mark this as a client component

import { useRouter } from "next/navigation";
import { auth } from "../../lib/firebase"; // Adjust path if necessary
import { useAuth } from "../../hooks/useAuth"; // Import the custom hook

const SignOutButton = () => {
  const router = useRouter(); // Initialize the router
  const { setUser } = useAuth(); // Use the auth hook to clear user state

  const handleSignOut = async () => {
    try {
      await auth.signOut(); // Sign out the user
      setUser(null); // Clear the user state in the auth context
      router.push("/auth"); // Redirect to the login page
    } catch (error) {
      console.error("Error signing out:", error);
      alert("An error occurred while signing out. Please try again.");
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
