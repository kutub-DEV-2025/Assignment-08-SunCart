"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  
  const handleLogin = async () => {
    setError("");

    try {
      await authClient.signIn.email({
        email,
        password,
        callbackURL: redirectTo,
      });
    } catch (err) {
      setError("Invalid email or password ❌");
    }
  };

  
  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      setError("Google login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 border rounded shadow">

      
      <h1 className="text-2xl font-bold mb-5 text-center">
        Login
      </h1>

      
      {error && (
        <p className="bg-red-100 text-red-600 p-2 mb-3 rounded">
          {error}
        </p>
      )}

     
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full mb-3"
        onChange={(e) => setEmail(e.target.value)}
      />

     
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-3"
        onChange={(e) => setPassword(e.target.value)}
      />

      
      <button
        onClick={handleLogin}
        className="bg-orange-500 text-white w-full py-2 rounded mb-3"
      >
        Login
      </button>

      
      <button
        onClick={handleGoogleLogin}
        className="bg-blue-500 text-white w-full py-2 rounded mb-4"
      >
        Continue with Google
      </button>

      
      <p className="text-center text-sm">
        Don’t have an account?{" "}
        <Link href="/register" className="text-orange-500">
          Register
        </Link>
      </p>
    </div>
  );
}