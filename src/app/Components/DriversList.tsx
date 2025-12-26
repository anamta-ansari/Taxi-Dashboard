"use client"
import { Search, Plus, X, ChevronDown, Star, ChevronRight, User } from "lucide-react";
import { useState } from "react";

export default function DriversList() {
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
    <div className=" bg-gray-50 dark:bg-[#161c24] px-5">
      <div className="mb-6 py-5">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-300">Drivers</h1>
        <p className="text-sm text-gray-500 dark:text-gray-300">List of all the drivers registered</p>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-4">

        {/* Search Box */}
        {/* <div className="flex-1 flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2
                  max-sm:w-full max-sm:px-3 max-sm:py-2">
          <Search className="w-5 h-5 text-gray-400 max-sm:w-4 max-sm:h-4" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 outline-none text-sm max-sm:text-xs"
          />
        </div> */}

        {/* Add Button */}
        {/* <button
          className="flex items-center gap-2 text-blue-600 text-sm font-medium">
          <Plus className="w-5 h-5 max-sm:w-4 max-sm:h-4" />
          Add
        </button>
      </div> */}

      {/* Second Row */}
      {/* <div className="flex flex-wrap items-center gap-3 mb-4 max-sm:gap-2">

        <span className="text-sm text-gray-600 max-sm:text-xs">Sort by</span> */}

        {/* Sort Dropdown */}
        {/* <div className="relative max-sm:w-full">
          <button
            onClick={() => setSortOpen(!sortOpen)}
            className="flex items-center justify-between gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md text-sm w-full max-sm:text-xs max-sm:px-2 max-sm:py-1"
          >
            Fleet Id Descending
            <ChevronDown className="w-4 h-4 max-sm:w-3 max-sm:h-3" />
          </button>

          {sortOpen && (
            <div className="absolute top-full left-0 mt-1 bg-white border rounded-md shadow-lg z-10 w-48 max-sm:w-40">
              <button onClick={() => setSortOpen(false)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 max-sm:text-xs">Fleet Id Descending</button>
              <button onClick={() => setSortOpen(false)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 max-sm:text-xs">Fleet Id Ascending</button>
            </div>
          )}
        </div>

        <button className="p-1.5 hover:bg-gray-100 rounded-md max-sm:p-1">
          <X className="w-4 h-4 text-gray-500 max-sm:w-3 max-sm:h-3" />
        </button>

        <button className="p-1.5 hover:bg-gray-100 rounded-md max-sm:p-1">
          <Plus className="w-4 h-4 text-gray-500 max-sm:w-3 max-sm:h-3" />
        </button>

        <div className="w-px h-6 bg-gray-300 max-sm:hidden"></div> */}

        {/* Status Dropdown */}
        {/* <div className="relative max-sm:w-full">
          <button
            onClick={() => setStatusOpen(!statusOpen)}
            className="flex items-center justify-between gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm w-full max-sm:text-xs max-sm:px-2 max-sm:py-1"
          >
            Status <span className="text-gray-500">not selected</span>
            <ChevronDown className="w-4 h-4 max-sm:w-3 max-sm:h-3" />
          </button>

          {statusOpen && (
            <div className="absolute top-full left-0 mt-1 bg-white border rounded-md shadow-lg z-10 w-48 max-sm:w-40">
              <button onClick={() => setStatusOpen(false)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 max-sm:text-xs">All</button>
              <button onClick={() => setStatusOpen(false)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 max-sm:text-xs">Online</button>
              <button onClick={() => setStatusOpen(false)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 max-sm:text-xs">Offline</button>
            </div>
          )}
        </div>
      </div> */}

       
</div>

      {/* TABLE WRAPPER - Prevents page overflow */}
      <div className="bg-white dark:bg-[#161c24] rounded-lg border w-full  overflow-hidden">

        {/* Scrollable horizontal container */}
        <div className="w-full max-w-full overflow-x-auto">
          <table className="min-w-max table-auto w-full">
            <thead className="bg-gray-50 dark:bg-[#161c24] border-b">
              <tr>
                <th className="dark:text-gray-300 px-3 py-3 text-left text-sm text-gray-600 font-normal">Name</th>
                <th className="dark:text-gray-300 px-3 py-3 text-left text-sm text-gray-600 font-normal">Mobile number</th>
                <th className="dark:text-gray-300 px-3 py-3 text-left text-sm text-gray-600 font-normal">Rating</th>
                <th className="dark:text-gray-300 px-3 py-3 text-left text-sm text-gray-600 font-normal">Status</th>
                <th className="dark:text-gray-300 px-3 py-3 text-left text-sm text-gray-600 font-normal">Wallet balance</th>
                <th className="dark:text-gray-300 px-3 py-3 text-left text-sm text-gray-600 font-normal">Total Orders</th>
              </tr>
            </thead>

            <tbody>
              {drivers.map((driver, index) => (
                <tr key={index} className="border-b last:border-b-0 ">
                  <td className="px-3 py-4">
                    <div className="flex items-center gap-3 min-w-[180px]">
                      <div className="relative flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                          <User className="w-5 h-5 text-white" strokeWidth={2.5} />
                        </div>
                        {driver.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>

                      <div className="min-w-0">
                        <div className="text-sm text-gray-900 font-medium dark:text-gray-300">{driver.name}</div>
                        {driver.lastActive && (
                          <div className="text-xs text-gray-400">{driver.lastActive}</div>
                        )}
                        {driver.online && !driver.lastActive && (
                          <div className="text-xs text-green-600 font-medium">Online</div>
                        )}
                      </div>
                    </div>
                  </td>

                  <td className="px-3 py-4 text-sm text-blue-600 min-w-[140px]">{driver.phone}</td>

                  <td className="px-3 py-4 min-w-[120px]">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{driver.rating}/5</span>
                    </div>
                  </td>

                  <td className="px-3 py-4 min-w-[130px]">
                    <button className={`flex items-center gap-1 px-3 py-1 rounded-md text-sm ${driver.statusColor}`}>
                      {driver.status}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                  </td>

                  <td className="px-3 py-4 dark:text-gray-300 text-sm text-gray-700 min-w-[140px]">
                    {driver.wallet}
                  </td>

                  <td className="px-3 py-4 dark:text-gray-300 text-sm text-gray-700 min-w-[120px]">
                    {driver.orders}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {/* <div className="flex justify-end p-4 border-t">
          <button className="flex items-center gap-2 px-5 py-2 bg-white border rounded-md hover:bg-gray-50 text-sm">
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div> */}
      </div>

    </div>
  );
}
