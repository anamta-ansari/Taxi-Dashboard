'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
// import { User } from '@/types/user';
import { Button } from '../Components/ui/Button';
import { CircleUser } from "lucide-react";

import Link from "next/link"


// =====================================================
// FINAL PAGE → ONLY ONE EXPORT
// =====================================================

export default function SOSALERTS() {
  const router = useRouter();

  const [users, setUsers] = useState([
    { id: '1', CreatedBy: 'Pickup Mo', Status: "Requested", Date: '2025-01-23 11:22:04 AM' },
    { id: '2', CreatedBy: 'Pickup Mo', Status: "Requested", Date: '2025-01-23 11:22:04 AM' },
    { id: '3', CreatedBy: 'Pickup Mo', Status: "Requested", Date: '2025-01-23 11:22:04 AM' },
    { id: '4', CreatedBy: 'Pickup Mo', Status: "Requested", Date: '2025-01-23 11:22:04 AM' },
    { id: '5', CreatedBy: 'Pickup Mo', Status: "Completed", Date: '2025-01-23 11:22:04 AM' }
  ]);



  const paymentStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-700";
      case "Pending":
        return "bg-yellow-500";
      case "Requested":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#161c24] p-8">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-6">
          <div className="mb-4 flex items-center justify-between w-full">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">SOS Alerts</h1>

          </div>



          <div className="flex gap-4 text-sm border-b dark:bg-[#161c24] ">
            <button className="pb-2 dark:text-gray-300 border-b-2 border-blue-600 text-blue-600 font-medium">
              All ({users.length})
            </button>
            <button className="pb-2 dark:text-gray-300  text-gray-600 hover:text-gray-700">
              Cab ({users.length})
            </button>
            <button className="pb-2 dark:text-gray-300 text-gray-600 hover:text-gray-700">
              Parcel (0)
            </button>
            <button className="pb-2 dark:text-gray-300 text-gray-600 hover:text-gray-700">
              Frieght (0)
            </button>
          </div>
        </div>

    
        <div className="bg-white dark:bg-[#161c24] rounded-lg shadow">
          <div className="flex items-center gap-4 px-1 py-3 border-b">
            <select className="border dark:bg-[#161c24] rounded px-1 py-1 text-sm">
              <option>15</option>
              <option>25</option>
              <option>50</option>
            </select>

            <select className=" border rounded px-1 py-1 text-sm">
              <option>Bulk actions</option>
            </select>

            <button className="px-2 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
              Apply
            </button>

            <div className="hidden ml-auto sm:flex items-center gap-2">
              <input
                type="search"
                placeholder="Search"
                className="border rounded px-3 py-1 text-sm"
              />
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                Search
              </button>
            </div>
          </div>

          {/* TABLE BODY */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-max">
              <thead className="bg-gray-50 dark:bg-[#161c24] border-b">
                <tr>
                  <th className="px-4 py-3 text-left">
                    <input type="checkbox" className="rounded" />
                  </th>

                  <th className="px-4 py-3 dark:text-gray-300 text-left text-sm font-semibold text-gray-700">Created By</th>

                  <th className="px-4 py-3 dark:text-gray-300 text-left text-sm font-semibold text-gray-700">Status</th>

                  <th className="px-4 py-3 dark:text-gray-300 text-left text-sm font-semibold text-gray-700">Date </th>
                </tr>
              </thead>

              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-b ">
                    <td className="px-4 py-3">
                      <input type="checkbox" className="rounded" />
                    </td>


                    {/* <td className="px-4 py-3 text-gray-700">{u.RideNo}</td> */}

                    <td className="px-4 py-3 dark:text-gray-300">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold">
                          <CircleUser className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                        </div>

                        <div>
                          <div className=" text-gray-900 dark:text-gray-300">{u.CreatedBy}</div>
                          <div>
                            <p className='text-[10px] text-gray-400'>asd@gmail</p>
                          </div>
                        </div>
                      </div>
                    </td>


                    <td className="px-4 py-3">
                      <div
                        className={`border rounded text-white px-2 py-1 w-max ${paymentStatusColor(u.Status)}`}
                      >
                        {u.Status}
                      </div>
                    </td>




                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300 not-even:">{u.Date}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          <div className="flex justify-between items-center px-4 py-3 border-t">
            <div className="text-sm text-gray-600">{users.length} Items</div>
          </div>
        </div>

      </div>
    </div>
  );
}