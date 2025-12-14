"use client"
import { Search, Plus, X, ChevronDown, Star, ChevronRight, User } from "lucide-react";
import { useState } from "react";

export default function Customers() {
  const [sortOpen, setSortOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);



  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Customers</h1>
        <p className="text-sm text-gray-500">Manage your customer base</p>
        <div className="flex gap-5 py-5">
          <h1 className="text-[18px] font-semibold text-black underline decoration-blue-700">Customers</h1>
          <h1 className="text-[18px] font-semibold text-gray-900">Insights</h1>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row py-2 items-center gap-4 mb-4">
        <div className="flex-1 flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
          <Search className="w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search..." className="flex-1 outline-none text-sm" />
        </div>
        <button className="flex items-center gap-2 text-blue-600 text-sm font-medium">
          <Plus className="w-5 h-5" />
          Add
        </button>
      </div>

      <div className="flex flex-col sm:flex-col md:flex-row md:items-center gap-3 mb-4">

        {/* Row 1 */}
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <span className="text-sm text-gray-600">Sort by</span>

          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md text-sm"
            >
              Id Descending
              <ChevronDown className="w-4 h-4" />
            </button>

            {sortOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white border rounded-md shadow-lg z-10 w-48">
                <button onClick={() => setSortOpen(false)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Fleet Id Descending</button>
                <button onClick={() => setSortOpen(false)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Fleet Id Ascending</button>
              </div>
            )}
          </div>

          <button className="p-1.5 hover:bg-gray-100 rounded-md">
            <X className="w-4 h-4 text-gray-500" />
          </button>

          <button className="p-1.5 hover:bg-gray-100 rounded-md">
            <Plus className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {/* Divider visible only on md and above */}
        <div className="hidden md:block w-px h-6 bg-gray-300"></div>

        {/* Row 2 (Status) */}
        <div className="relative">
          <button
            onClick={() => setStatusOpen(!statusOpen)}
            className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm"
          >
            Status <span className="text-gray-500">not selected</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {statusOpen && (
            <div className="absolute top-full left-0 mt-1 bg-white border rounded-md shadow-lg z-10 w-48">
              <button onClick={() => setStatusOpen(false)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">All</button>
              <button onClick={() => setStatusOpen(false)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Online</button>
              <button onClick={() => setStatusOpen(false)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Offline</button>
            </div>
          )}
        </div>

      </div>


      <div className="w-full overflow-x-auto">
        <div className="min-w-[700px]">
          <table className="w-full border border-gray-300 text-left">
            <thead>
              <tr className="bg-gray-100">
                <td className="border-b px-4 py-3">Name</td>
                <td className="border-b px-4 py-3">Last Activity at</td>
                <td className="border-b px-4 py-3">Mobile Number</td>
                <td className="border-b px-4 py-3">Wallet Balance</td>
                <td className="border-b px-4 py-3">Total Orders</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border-b px-4 py-3">Selda Sen</td>
                <td className="border-b px-4 py-3">
                  <span className="text-gray-600 border rounded bg-gray-200">
                    2 Hours ago
                  </span>
                </td>
                <td className="border-b px-4 py-3">+90679731265</td>
                <td className="border-b px-4 py-3"></td>
                <td className="border-b px-4 py-3">3 Orders</td>
              </tr>

              <tr>
                <td className="border-b px-4 py-3">dhiis 57</td>
                <td className="border-b px-4 py-3">
                  <span className="text-gray-600 border rounded bg-gray-200">
                    7 Hours ago
                  </span>
                </td>
                <td className="border-b px-4 py-3">+90679731265</td>
                <td className="border-b px-4 py-3"></td>
                <td className="border-b px-4 py-3">2 Orders</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>



    </div>
  );
}
