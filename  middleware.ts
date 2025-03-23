// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/lib/firebase-admin"; // Import Firebase Admin Auth

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the user is accessing a protected route (e.g., /dashboard)
  if (pathname.startsWith("/dashboard")) {
    console.log("Accessing dashboard...");
    try {
      // Get the session token from cookies
      const sessionToken = request.cookies.get("firebase-token")?.value;

      if (!sessionToken) {
        console.log("No token found. Redirecting to /login.");
        // If no token is found, redirect to /login
        return NextResponse.redirect(new URL("/login", request.url));
        
      }

      // Verify the token using Firebase Admin SDK
      await auth.verifyIdToken(sessionToken); // Throws an error if invalid

    } catch (error) {
      // If token verification fails, redirect to /login
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}