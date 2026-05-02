"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const { data: session } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/";
        },
      },
    });
  };

  return (
    <nav className="bg-orange-500 text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          SunCart
        </Link>

        {/* Links */}
        <div className="flex items-center gap-5">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/profile">My Profile</Link>

          {session ? (
            <>
              {/* User Avatar */}
              <img
                src={session.user.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
                alt="user"
                className="w-9 h-9 rounded-full border"
              />

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="bg-white text-orange-500 px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Login / Register */}
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}