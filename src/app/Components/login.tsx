"use client";

import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* LEFT SIDE */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-gray-50 border-r">
        <Image
          src="/assets/1.jpg"  // <<< Replace with your image
          alt="Login Illustration"
          width={350}
          height={350}
        />

        <h1 className="text-3xl font-semibold mt-6">
          Manage Everything in One Place
        </h1>

        <p className="text-gray-500 text-center mt-2 w-2/3">
          Control your taxi, shop, and all on-demand operations from a unified
          dashboard.
        </p>

        {/* small loading bar */}
        <div className="flex items-center gap-1 mt-6">
          <div className="w-20 h-1 bg-blue-600 rounded"></div>
          <div className="w-10 h-1 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white px-16">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
        </div>

        <h2 className="text-2xl font-semibold mb-2">
          Welcome to BetterSuite Live Demo!
        </h2>

        <p className="text-gray-500 mb-6">
          Please provide your login credentials
        </p>

        {/* FORM */}
        <form className="w-full max-w-md">
          <label className="text-sm font-medium">User Name*</label>
          <input
            type="text"
            className="w-full mt-1 mb-4 px-4 py-3 bg-gray-100 rounded-lg outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="text-sm font-medium">Password*</label>
          <input
            type="password"
            className="w-full mt-1 mb-4 px-4 py-3 bg-gray-100 rounded-lg outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* info note */}
          <div className="bg-blue-50 text-blue-700 text-sm px-4 py-3 rounded mb-4">
            ℹ️ For demo mode, use admin/admin as credentials
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg mt-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
