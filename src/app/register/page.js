"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const res = await authClient.signUp.email({
      name,
      email,
      password,
      callbackURL: "/login",
    });

    console.log(res);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Register</h1>

      <input
        type="text"
        placeholder="Name"
        className="border p-2 w-full mb-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full mb-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-3"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleRegister}
        className="bg-orange-500 text-white px-4 py-2 rounded w-full"
      >
        Register
      </button>
    </div>
  );
}