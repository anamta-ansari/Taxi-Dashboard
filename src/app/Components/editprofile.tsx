"use client";

import { useState } from "react";
import { X, Shield, KeyRound, Upload, Save } from "lucide-react";

export default function EditProfile() {
  const [activeTab, setActiveTab] = useState<"general" | "password">("general");
  const [avatar, setAvatar] = useState<string | null>(null);

  // Image upload handler
  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatar(url);
    }
  };

  return (
    <div className="bg-white dark:bg-[#161c24] p-8 rounded-2xl shadow-sm border w-full">
      <h1 className="text-2xl font-semibold mb-6">Edit Profile</h1>

      {/* Tabs */}
      <div className="flex items-center gap-8 border-b pb-3 mb-6">
        <button
          onClick={() => setActiveTab("general")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
            activeTab === "general"
              ? "bg-blue-100 text-blue-700 border border-blue-300"
              : "text-gray-600"
          }`}
        >
          <Shield className="w-5 h-5" /> General
        </button>

        <button
          onClick={() => setActiveTab("password")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
            activeTab === "password"
              ? "bg-blue-100 text-blue-700 border border-blue-300"
              : "text-gray-600"
          }`}
        >
          <KeyRound className="w-5 h-5" /> Change Password
        </button>
      </div>

      {activeTab === "general" && (
        <div className="space-y-6">
          {/* Avatar upload */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Image</label>

            <div className="mt-3 flex items-center gap-4">
              {/* Upload Box */}
              <label className="w-24 h-24 rounded-xl border flex items-center justify-center cursor-pointer hover:bg-gray-50">
                <Upload className="w-6 h-6 text-gray-500" />
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>

              {/* Preview */}
              {avatar && (
                <div className="relative">
                  <img
                    src={avatar}
                    className="w-24 h-24 rounded-xl object-cover border"
                  />
                  <button
                    onClick={() => setAvatar(null)}
                    className="absolute top-1 right-1 bg-white p-1 rounded-full shadow "
                  >
                    <X className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              )}
            </div>

            <p className="text-xs text-gray-500 mt-2">
              *Upload image size 100x100px recommended
            </p>
          </div>

          {/* Full Name */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Full Name*
            </label>
            <input
              type="text"
            //   defaultValue="Administrator"
              className="mt-1 w-full border rounded-lg px-4 py-2 text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email*</label>
            <input
              type="email"
            //   defaultValue="admin@example.com"
              className="mt-1 w-full border rounded-lg px-4 py-2 text-sm"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone*</label>
            <div className="mt-1 flex">
              <select className="border rounded-l-lg px-3 text-sm">
                <option>+1</option>
                <option>+92</option>
                <option>+971</option>
              </select>
              <input
                type="text"
                // defaultValue="2025550110"
                className="border rounded-r-lg px-4 py-2 text-sm w-full"
              />
            </div>
          </div>

          {/* SAVE BUTTON */}
          <div className="flex justify-end">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded hover:bg-green-700">
              <Save className="w-4 h-4" />
              Save
            </button>
          </div>
        </div>
      )}

      {/* CHANGE PASSWORD TAB */}
      {activeTab === "password" && (
        <div className="space-y-6">
          {/* Current Password */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Current Password
            </label>
            <input
              type="password"
              className="mt-1 w-full border rounded-lg px-4 py-2 text-sm"
              placeholder="Enter current password"
            />
          </div>

          {/* New Password */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              New Password
            </label>
            <input
              type="password"
              className="mt-1 w-full border rounded-lg px-4 py-2 text-sm"
              placeholder="Enter new password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Confirm Password
            </label>
            <input
              type="password"
              className="mt-1 w-full border rounded-lg px-4 py-2 text-sm"
              placeholder="Confirm new password"
            />
          </div>

          {/* SAVE BUTTON */}
          <div className="flex justify-end">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
              <Save className="w-4 h-4" />
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
