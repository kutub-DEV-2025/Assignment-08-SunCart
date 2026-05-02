"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState(""); 
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async () => {
    setError("");
    setSuccess("");

    try {
      await authClient.signUp.email({
        name,
        email,
        password,
        photoUrl, 
        callbackURL: "/login",
      });

      setSuccess("Registration successful ✔ Redirecting...");
    } catch (err) {
      setError("Registration failed. Try again");
    }
  };

  const handleGoogle = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      setError("Google authentication failed");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 border rounded shadow">

     
      <h1 className="text-2xl font-bold mb-5 text-center">
        Register
      </h1>

      
      {error && (
        <p className="bg-red-100 text-red-600 p-2 mb-3 rounded">
          {error}
        </p>
      )}

      {success && (
        <p className="bg-green-100 text-green-600 p-2 mb-3 rounded">
          {success}
        </p>
      )}

     
      <input
        type="text"
        placeholder="Name"
        className="border p-2 w-full mb-3"
        onChange={(e) => setName(e.target.value)}
      />

      
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full mb-3"
        onChange={(e) => setEmail(e.target.value)}
      />

     
      <input
        type="text"
        placeholder="Photo URL"
        className="border p-2 w-full mb-3"
        onChange={(e) => setPhotoUrl(e.target.value)}
      />

      
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-3"
        onChange={(e) => setPassword(e.target.value)}
      />

     
      {photoUrl && (
        <img
          src={photoUrl}
          alt="preview"
          className="w-20 h-20 rounded-full object-cover mb-3 mx-auto"
        />
      )}

     
      <button
        onClick={handleRegister}
        className="bg-orange-500 text-white w-full py-2 rounded mb-3"
      >
        Register
      </button>

      
      <button
        onClick={handleGoogle}
        className="bg-blue-500 text-white w-full py-2 rounded mb-4"
      >
        Continue with Google
      </button>

     
      <p className="text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-orange-500">
          Login
        </Link>
      </p>
    </div>
  );
}