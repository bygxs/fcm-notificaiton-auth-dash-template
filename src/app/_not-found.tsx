import Link from "next/link";

// app/_not-found.tsx
export default function NotFoundPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-6">opps ! the page you are looking for does not exist.</p>
        <Link href="/" className="text-blue-500 hover:underline">
          Go back to the home page while i tinker around to make it 
        </Link>
      </div>
    );
  }