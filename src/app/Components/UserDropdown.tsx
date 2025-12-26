"use client";
import Link from "next/link";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import {User} from "lucide-react"

export default function UserDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 bg-gray-50 dark:text-white dark:bg-[#161c24] dark:border-gray-600 border px-2 py-2 rounded-lg  hover:bg-gray-100 transition"
      >
        <User className="text-[14px] text-gray-600 dark:text-white" />
        <div className="text-left leading-tight">
          <p className="text-sm font-semibold text-gray-800 dark:text-white">John Doe</p>
          <p className="text-xs text-gray-500 dark:text-white">Tester</p>
        </div>  
        <IoMdArrowDropdown
          className={`text-xl text-gray-600 transition-transform duration-200 dark:text-gray-400 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-25 bg-white  border-gray-200 rounded-lg shadow-lg">
          <ul className="py-1 dark:text-white dark:bg-gray-800">
            <li>
  <Link
    href="/edit-profile"   // <-- Your desired route
    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:text-white dark:bg-gray-800"
  >
    Edit Profile
  </Link>
</li>
            <li>
              <Link
              href="/login"
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:text-white dark:bg-gray-800"
                onClick={() => alert("Logout clicked")}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
