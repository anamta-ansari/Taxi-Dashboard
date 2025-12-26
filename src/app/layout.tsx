"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./Components/app-sidebar";
import { X } from "lucide-react";
import { ThemeProvider } from "@/components/themeprovider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Hide sidebar and navbar on both /login and /signup
  const hideSidebar = pathname === "/login" || pathname === "/signup";

  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        <ThemeProvider>
          {/* -------- NAVBAR (HIDE ON LOGIN AND SIGNUP) -------- */}
          {!hideSidebar && (
            <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
          )}

          <SidebarProvider>
            <div className={`flex min-h-screen w-full overflow-x-hidden box-border ${!hideSidebar ? "pt-16 sm:pt-20" : ""}`}>
              
              {/* -------- SIDEBAR (HIDE ON LOGIN AND SIGNUP) -------- */}
              {!hideSidebar && (
                <aside className="hidden lg:block flex-shrink-0 w-64 bg-white">
                  <AppSidebar />
                </aside>
              )}

              {/* -------- MAIN PAGE -------- */}
              <main className="flex-1 min-w-0 px-2 overflow-x-hidden">
                <div className="">
                  {children}
                </div>
              </main>
            </div>

            {/* -------- MOBILE SIDEBAR (HIDE ON LOGIN AND SIGNUP) -------- */}
            {!hideSidebar && sidebarOpen && (
              <>
                {/* Overlay */}
                <div
                  className="fixed inset-0 top-16 sm:top-20  z-40 lg:hidden"
                  onClick={() => setSidebarOpen(false)}
                />
                
                {/* Sidebar Panel */}
                <div className="fixed top-16 sm:top-20 left-0 bottom-0 w-72 max-w-[85vw] min-w-0 bg-white z-50 lg:hidden overflow-y-auto shadow-2xl border-r">
                  <div className="flex justify-between items-center p-4 border-b bg-white sticky top-0 z-10">
                    <h2 className="text-lg font-bold truncate">Menu</h2>
                    <button
                      onClick={() => setSidebarOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="p-4 overflow-x-hidden">
                    <AppSidebar />
                  </div>
                </div>
              </>
            )}
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}