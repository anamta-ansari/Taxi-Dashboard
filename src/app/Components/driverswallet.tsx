'use client';

import React, { useState } from 'react';
import { ChevronDown, Wallet, PlusSquare, Search, Edit } from 'lucide-react';

export default function DriversWallet() {
  const [selectedDriver, setSelectedDriver] = useState('');
  const [walletBalance] = useState(0.00);
  const [creditDebitAmount, setCreditDebitAmount] = useState('');
  const [noteToUser, setNoteToUser] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-[#161c24] p-6">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Select Driver Card */}
            <div className="bg-white rounded-lg dark:bg-[#161c24] dark:border-gray-500 border shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 dark:text-gray-300">Select Driver</h2>
              
              <div className="relative mb-4">
                <select
                  value={selectedDriver}
                  onChange={(e) => setSelectedDriver(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border dark:bg-[#161c24] dark:border-gray-500  border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
                >
                  <option value="">Select Driver</option>
                  <option value="driver1">Driver 1</option>
                  <option value="driver2">Driver 2</option>
                  <option value="driver3">Driver 3</option>
                </select>
                <ChevronDown className="w-5 h-5 text-gray-400 absolute right-4 top-4 pointer-events-none" />
              </div>

              <p className="text-sm text-gray-500">
                *To add new driver, simply click{' '}
                <a href="#" className="text-blue-500 hover:underline font-medium">
                  here
                </a>
              </p>
            </div>

            {/* Wallet Balance Card */}
            <div className="bg-white dark:bg-[#161c24] dark:border-gray-500 border rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 dark:text-gray-300">Wallet Balance</h2>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Wallet className="w-6 h-6 text-blue-500" />
                  </div>
                  <span className="text-3xl font-bold text-gray-900 dark:text-gray-300">${walletBalance.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex flex-col  gap-3">
                <div className="relative flex-1 ">
                   <input
                  type="text"
                  placeholder="Credit/debit amount"
                  value={creditDebitAmount}
                  onChange={(e) => setCreditDebitAmount(e.target.value)}
                  className="w-full px-4 py-2 border my-1 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                  <input
                    type="text"
                    placeholder="Enter note to user"
                    value={noteToUser}
                    onChange={(e) => setNoteToUser(e.target.value)}
                    className="w-full px-4 py-2 border my-1 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  
                </div>
                
                <div className='flex gap-3'>
                  <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-medium transition-colors flex items-center gap-2">
                  Credit
                  <PlusSquare className="w-4 h-4" />
                </button>
                
                <button className="px-6 py-2 bg-red-400 hover:bg-red-500 text-white rounded font-medium transition-colors flex items-center gap-2">
                  Debit
                  <PlusSquare className="w-4 h-4" />
                </button>
                </div>
              </div>
            </div>
          </div>

          {/* Transactions Section */}
          <div className="bg-white dark:bg-[#161c24] dark:border-gray-500 border rounded-lg shadow-sm p-6">
            <div className="flex flex-col sm:flex-row gap-5 items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-300">Transactions</h2>
              
              <div className="flex  items-center gap-2">
                <div className="relative">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder=""
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-3 pr-2 sm:pl-10 sm:pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-26 sm:w-64"
                  />
                </div>
                <button className="px-2 sm:px-4 py-2 border-2 border-blue-500 text-white bg-blue-500 rounded font-medium hover:bg-blue-50 transition-colors">
                  Search
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-[#161c24]  border-b border-gray-200">
                  <tr>
                    <th className="dark:text-gray-300 px-6 py-4 text-left text-gray-700 font-semibold">
                      Amount 
                    </th>
                    <th className="dark:text-gray-300 px-6 py-4 text-left text-gray-700 font-semibold">
                      Type 
                    </th>
                    <th className="dark:text-gray-300 px-6 py-4 text-left text-gray-700 font-semibold">
                      Remark 
                    </th>
                    <th className="dark:text-gray-300 px-6 py-4 text-left text-gray-700 font-semibold">
                      Created At 
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={4} className="px-6 py-16 text-center">
                      <div className="text-gray-500 text-lg font-medium">
                        No Data Found
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
}