"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200">
        <Image
          src="/assets/1.jpg"
          alt="Signup Illustration"
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
      <div className="w-full md:w-1/2 pt-10 pb-10 flex flex-col justify-center items-center bg-white px-8 md:px-16">
        <h2 className="text-2xl text-gray-700 font-semibold mb-2 text-center">
          Create Your Account
        </h2>

        <p className="text-gray-500 mb-6 text-center">
          Get started with Five Stars Galway Taxis in seconds
        </p>

        <form className="w-full max-w-md">
          <label className="text-sm font-medium text-gray-700">Full Name*</label>
          <input
            type="text"
            className="w-full mt-1 mb-4 px-4 py-3 bg-gray-100 rounded-lg outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder=""
          />

          <label className="text-sm font-medium text-gray-700">Email*</label>
          <input
            type="email"
            className="w-full mt-1 mb-4 px-4 py-3 bg-gray-100 rounded-lg outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=""
          />

          <label className="text-sm font-medium text-gray-700">Password*</label>
          <input
            type="password"
            className="w-full mt-1 mb-4 px-4 py-3 bg-gray-100 rounded-lg outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=""
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg mt-4"
          >
            Sign Up
          </button>

          {/* Continue with Google Button */}
          <button
            type="button"
            className="w-full py-3 mt-4 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-lg flex items-center justify-center gap-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="24px"
              height="24px"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            Continue with Google
          </button>

          <p className="text-gray-700 text-sm mt-6 text-center">
            Already have an account?{" "}
            <Link href="/login">
              <span className="text-blue-500 underline">Log in</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}