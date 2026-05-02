"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [showForm, setShowForm] = useState(false);

  const [user, setUser] = useState({
    name: "Demo User",
    email: "demo@email.com",
    photoUrl: "https://i.ibb.co/8dN7K8D/user.png",
  });

  // form temp state
  const [formData, setFormData] = useState(user);

  const handleUpdate = () => {
    setUser(formData);     // update main user
    setShowForm(false);    // close form
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">

      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 text-center">

        <h1 className="text-2xl font-bold mb-6">My Profile</h1>

        {/* Profile Image */}
        <img
          src={user.photoUrl}
          alt={user.name}
          className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-orange-400"
        />

        {/* Info */}
        <div className="mt-5 space-y-2">
          <p><span className="font-semibold">Name:</span> {user.name}</p>
          <p><span className="font-semibold">Email:</span> {user.email}</p>
        </div>

        {/* Update Button */}
        <button
          onClick={() => setShowForm(true)}
          className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg w-full transition"
        >
          Update Profile
        </button>

        {/* ================= FORM ================= */}
        {showForm && (
          <div className="mt-6 text-left border-t pt-4">

            <h2 className="text-lg font-semibold mb-3 text-center">
              Update Information
            </h2>

            {/* Name */}
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="border p-2 w-full mb-3 rounded"
              placeholder="Name"
            />

            {/* Email */}
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="border p-2 w-full mb-3 rounded"
              placeholder="Email"
            />

            {/* Photo URL */}
            <input
              type="text"
              value={formData.photoUrl}
              onChange={(e) =>
                setFormData({ ...formData, photoUrl: e.target.value })
              }
              className="border p-2 w-full mb-3 rounded"
              placeholder="Photo URL"
            />

            
            <div className="flex gap-2">
              <button
                onClick={handleUpdate}
                className="bg-green-500 text-white w-full py-2 rounded"
              >
                Save
              </button>

              <button
                onClick={() => setShowForm(false)}
                className="bg-gray-400 text-white w-full py-2 rounded"
              >
                Cancel
              </button>
            </div>

          </div>
        )}
      </div>

    </div>
  );
}