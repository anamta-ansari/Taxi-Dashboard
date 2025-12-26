"use client";

import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "@/components/themeprovider";
import { useEffect, useState } from "react";

export function ThemeToggleButton() {
  const { isDark, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button className="hidden lg:flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#161c24] dark:border-gray-600 border border-gray-300 rounded-full shadow-sm"></button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="hidden lg:flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#161c24] dark:border-gray-600 border border-gray-300  rounded-full shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
    >
      <FaSun className={`text-yellow-400 ${isDark ? "opacity-30" : "opacity-100"}`} />
      <FaMoon className={`text-gray-700 dark:text-white ${isDark ? "opacity-100" : "opacity-30"}`} />
    </button>
  );
}
