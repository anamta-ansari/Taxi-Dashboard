"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col md:flex-row min-h-screen  bg-gray-100 w-auto">
  {/* LEFT SIDE */}
  <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200">
    <Image
      src="/assets/1.jpg"
      alt="Login Illustration"
      width={350}
      height={350}
    />

    <h1 className="text-3xl font-semibold mt-6 text-center md:text-left text-gray-700">
      Manage Everything in One Place
    </h1>

    <p className="text-gray-500 text-center md:text-left mt-2 w-2/3">
      Control your taxi, shop, and all on-demand operations from a unified
      dashboard.
    </p>

    <div className="flex items-center gap-1 mt-6">
      <div className="w-20 h-1 bg-blue-600 rounded"></div>
      <div className="w-10 h-1 bg-gray-300 rounded"></div>
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="w-full md:w-1/2 flex pt-5 flex-col justify-center items-center bg-white px-8 md:px-16">
    <h2 className="text-2xl text-gray-700 font-semibold mb-2 text-center">
      Welcome to Five Stars Galway Taxis
    </h2>

    <p className="text-gray-500 mb-6 text-center">
      Please provide your login credentials
    </p>

    <form className="w-full max-w-md">
      <label className="text-sm font-medium text-gray-700">User Name*</label>
      <input
        type="text"
        className="w-full mt-1 mb-4 px-4 py-3 bg-gray-100 rounded-lg outline-none"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label className="text-sm font-medium text-gray-700">Password*</label>
      <input
        type="password"
        className="w-full mt-1 mb-4 px-4 py-3 bg-gray-100 rounded-lg outline-none"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* <div className="bg-blue-50 text-blue-700 text-sm px-4 py-3 rounded mb-4">
        ℹ️ For demo mode, use admin/admin as credentials
      </div> */}

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg mt-2"
      >
        Login
      </button>
       <p className=" text-blue-700 text-sm mt-5 rounded mb-4">
        Don't have an account? <Link href="/signup"><span className="text-blue-500 underline">Sign up</span></Link>
      </p>
    </form>
  </div>
</div>

  );
}