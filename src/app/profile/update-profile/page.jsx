"use client";

export default function UpdateProfilePage() {
  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;

    console.log(image, name);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Update Profile</h1>

      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Update Information
        </button>
      </form>
    </div>
  );
}