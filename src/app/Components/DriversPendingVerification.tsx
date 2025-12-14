"use client"
import { Search, Plus, X, ChevronDown, FileQuestion } from "lucide-react";
import { useState } from "react";

export default function PendingVerification() {
  const [sortOpen, setSortOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-4">
        <h1 className="text-xl font-semibold text-gray-900">Pending Verification</h1>
        <p className="text-xs text-gray-500">List of all drivers pending verification</p>
      </div>

      {/* TOP BAR */}
      <div className="flex flex-wrap items-center gap-3 mb-3">

        {/* Search Box */}
        <div className="flex-1 flex items-center gap-2 bg-white border rounded-lg px-3 py-1.5 mb-5
                  max-sm:w-full max-sm:px-2 max-sm:py-1">
          <Search className="w-4 h-4 text-gray-400 max-sm:w-3 max-sm:h-3" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 outline-none text-xs max-sm:text-[10px]"
          />
        </div>

        {/* Add Button */}
        <button
          className="flex items-center gap-1.5 text-blue-600 text-xs font-medium
               max-sm:w-full max-sm:justify-center max-sm:text-[10px]"
        >
          <Plus className="w-4 h-4 max-sm:w-3 max-sm:h-3" />
          Add
        </button>
      </div>

      {/* FILTER BAR */}
      <div className="flex flex-wrap items-center gap-2 mb-8 text-xs max-sm:text-[10px]">

        <span className="text-gray-600 max-sm:text-[10px]">Sort by</span>

        {/* Sort Dropdown */}
        <div className="relative max-sm:w-full">
          <button
            onClick={() => setSortOpen(!sortOpen)}
            className="flex items-center justify-between gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md
                 max-sm:w-full max-sm:px-2 max-sm:py-1"
          >
            Fleet Id Descending
            <ChevronDown className="w-3 h-3 max-sm:w-2.5 max-sm:h-2.5" />
          </button>

          {sortOpen && (
            <div className="absolute top-full left-0 mt-1 bg-white border rounded-md shadow-lg z-10 w-40 max-sm:w-36">
              <button onClick={() => setSortOpen(false)} className="block w-full text-left px-3 py-1.5 hover:bg-gray-50">Fleet Id Descending</button>
              <button onClick={() => setSortOpen(false)} className="block w-full text-left px-3 py-1.5 hover:bg-gray-50">Fleet Id Ascending</button>
            </div>
          )}
        </div>

        {/* Icons */}
        <button className="p-1 hover:bg-gray-100 rounded max-sm:p-[3px]">
          <X className="w-3 h-3 text-gray-500 max-sm:w-2.5 max-sm:h-2.5" />
        </button>

        <button className="p-1 hover:bg-gray-100 rounded max-sm:p-[3px]">
          <Plus className="w-3 h-3 text-gray-500 max-sm:w-2.5 max-sm:h-2.5" />
        </button>

        <div className="w-px h-5 bg-gray-300 max-sm:hidden"></div>

        {/* Status Dropdown */}
        <div className="relative max-sm:w-full">
          <button
            onClick={() => setStatusOpen(!statusOpen)}
            className="flex items-center justify-between gap-1.5 px-2.5 py-1 bg-white border rounded-md
                 max-sm:w-full max-sm:px-2 max-sm:py-1"
          >
            Status <span className="text-gray-500">not selected</span>
            <ChevronDown className="w-3 h-3 max-sm:w-2.5 max-sm:h-2.5" />
          </button>

          {statusOpen && (
            <div className="absolute top-full left-0 mt-1 bg-white border rounded-md shadow-lg z-10 w-40 max-sm:w-36">
              <button onClick={() => setStatusOpen(false)} className="block w-full text-left px-3 py-1.5 hover:bg-gray-50">All</button>
              <button onClick={() => setStatusOpen(false)} className="block w-full text-left px-3 py-1.5 hover:bg-gray-50">Pending</button>
              <button onClick={() => setStatusOpen(false)} className="block w-full text-left px-3 py-1.5 hover:bg-gray-50">Verified</button>
            </div>
          )}
        </div>

      </div>


      <div className="bg-white rounded-lg border w-full max-w-full overflow-hidden">

        {/* Scroll wrapper for small screens */}
        <div className="overflow-x-auto w-full max-w-full">

          <table className="w-full min-w-[600px] text-xs">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-4 py-2 text-left text-gray-600 font-normal">Name</th>
                <th className="px-4 py-2 text-left text-gray-600 font-normal">Mobile number</th>
                <th className="px-4 py-2 text-left text-gray-600 font-normal">Rating</th>
                <th className="px-4 py-2 text-left text-gray-600 font-normal">Status</th>
                <th className="px-4 py-2 text-left text-gray-600 font-normal">Wallet balance</th>
                <th className="px-4 py-2 text-left text-gray-600 font-normal">Total Orders</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colSpan={6} className="px-4 py-20">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="w-32 h-32 mb-4 mt-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <FileQuestion className="w-16 h-16 text-gray-400" />
                    </div>
                    <h3 className="text-base font-medium text-gray-900 mb-3">
                      No Pending Verifications
                    </h3>
                    <p className="text-xs text-gray-500 mb-8">
                      There are no drivers pending verification at the moment
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>

    </div>
  );
}
