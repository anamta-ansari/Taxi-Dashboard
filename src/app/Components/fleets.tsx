"use client"
import { Search, Plus, X, ChevronDown, Star, ChevronRight, User } from "lucide-react";
import { useState } from "react";
import Image from "next/image"

export default function Fleets() {
  const [sortOpen, setSortOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);

  const drivers = [
    { name: "bnmvnvnvbn 456456", lastActive: "Last Active Never", phone: "+432543534543xxxx", rating: 0.0, status: "Waiting Documents", statusColor: "bg-yellow-50 text-yellow-700", wallet: "", orders: "0 Orders", online: false },
    { name: "ali wong", lastActive: "Last Active Never", phone: "+7373xxxx", rating: 0.0, status: "Blocked", statusColor: "bg-red-50 text-red-700", wallet: "", orders: "0 Orders", online: true },
    { name: "rabii rabii", lastActive: "", phone: "+66793xxxx", rating: 0.0, status: "Online", statusColor: "bg-green-50 text-green-700", wallet: "", orders: "0 Orders", online: true },
    { name: "hussain shah", lastActive: "Last Active 2 months ago", phone: "+923154xxxx", rating: 5.0, status: "Offline", statusColor: "bg-gray-100 text-gray-700", wallet: "$40.00 USD", orders: "1 Orders", online: false },
    { name: "Mahmoud Alian", lastActive: "", phone: "+962795xxxx", rating: 0.0, status: "Offline", statusColor: "bg-gray-100 text-gray-700", wallet: "", orders: "0 Orders", online: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Fleets</h1>
        <p className="text-sm text-gray-500">All Registered fleets</p>
      </div>

     <div className="flex flex-col sm:flex-row  gap-4 mb-4">
        <div className="flex-1 flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
          <Search className="w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search..." className="flex-1 outline-none text-sm" />
        </div>
        <button className="flex items-center gap-2 text-blue-600 text-sm font-medium">
          <Plus className="w-5 h-5" />
          Add
        </button>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 mb-4 gap-3">

        <div className="flex items-center gap-3 flex-wrap">
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
                <button onClick={() => setSortOpen(false)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">
                  Fleet Id Descending
                </button>
                <button onClick={() => setSortOpen(false)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">
                  Fleet Id Ascending
                </button>
              </div>
            )}
          </div>


        </div>

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
              <button onClick={() => setStatusOpen(false)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">
                All
              </button>
              <button onClick={() => setStatusOpen(false)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">
                Online
              </button>
              <button onClick={() => setStatusOpen(false)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">
                Offline
              </button>
            </div>
          )}
        </div>

      </div>

      <div className="flex justify-center items-center mt-8">
        <Image
          src="/assets/4041.png"
          width={300}
          height={300}
          alt="Car Icon"
        />
      </div>

     
    </div>
  );
}
