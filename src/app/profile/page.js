"use client";

import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const user = {
    name: "Demo User",
    email: "demo@email.com",
    photo: "https://i.ibb.co/8dN7K8D/user.png",
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>

      <img
        src={user.photo}
        alt={user.name}
        className="w-24 h-24 rounded-full mb-4"
      />

      <p className="mb-2">
        <span className="font-semibold">Name:</span> {user.name}
      </p>

      <p className="mb-4">
        <span className="font-semibold">Email:</span> {user.email}
      </p>

      <button
        onClick={() => router.push("/update-profile")}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Update Information
      </button>
    </div>
  );
}