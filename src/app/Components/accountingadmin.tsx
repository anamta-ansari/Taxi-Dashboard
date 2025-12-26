"use client"
import { Search, Plus, X, ChevronDown, Star, ChevronRight, User } from "lucide-react";
import { ArrowUpRight, ArrowDownLeft, Wallet } from "lucide-react";
import { useState } from "react";
import Image from "next/image"

export default function Accountingadmin() {
  const [sortOpen, setSortOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  return (
    <>
      <div className="p-5 dark:bg-[#161c24]">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2 dark:text-gray-300">Admin Wallet</h1>
        <p className="text-sm text-gray-500 dark:text-gray-300">Statistics for Nov</p>


        <div className="flex flex-col sm:flex-row gap-2 my-5">
          <div className="bg-white dark:bg-[#161c24] dark:border-gray-500 rounded-lg border flex flex-col items-centre shadow w-full sm:w-1/2 py-5 px-2">
            {/* Top row: text + number */}
            <div className="flex justify-between gap-2">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Total Balance</span>
              <span className=" text-black dark:text-gray-300">29587.00</span>
            </div>

            {/* Bottom row: image + badge */}
            <div className="flex justify-between gap-2 mt-2">
              <img
                src="/assets/circle.png"
                alt="icon"
                className="w-[200px] h-[200px] "
              />
              <span className="bg-[#b2ebf2] text-gray-700 px-3 h-[30px] flex items-center text-sm">
                USD 29587
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full sm:w-1/2">
            {/* Revenue Card */}
            <div className="flex justify-between items-center p-5 rounded-2xl bg-white dark:bg-[#161c24] dark:border-gray-500  shadow-sm border">
              {/* Left */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <ArrowUpRight className="text-green-600" size={18} />
                </div>
                <span className="text-gray-600 font-medium dark:text-gray-300">Revenue</span>
              </div>

              {/* Right */}
              <div className="text-right">
                <p className="text-xl font-semibold text-gray-900 dark:text-gray-300">$29,672.60 USD</p>
                <p className="text-sm text-red-500">%0 $0.00 Today</p>
              </div>
            </div>

            {/* Expense Card */}
            <div className="flex justify-between items-center p-5 rounded-2xl bg-white dark:bg-[#161c24] dark:border-gray-500  shadow-sm border">
              {/* Left */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <ArrowDownLeft className="text-red-600" size={18} />
                </div>
                <span className="text-gray-600 font-medium dark:text-gray-300">Expense</span>
              </div>

              {/* Right */}
              <div className="text-right">
                <p className="text-xl font-semibold text-gray-900 dark:text-gray-300">$89.00 USD</p>
                <p className="text-sm text-green-600">%11.1 $10.00 Today</p>
              </div>
            </div>

            {/* Wallet Balance Card */}
            <div className="flex justify-between items-center p-5 rounded-2xl bg-white dark:bg-[#161c24] dark:border-gray-500  shadow-sm border">
              {/* Left */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Wallet className="text-yellow-500" size={18} />
                </div>
                <span className="text-gray-600 font-medium dark:text-gray-300">User wallet balances</span>
              </div>

              {/* Right */}
              <div className="text-right">
                <p className="text-xl font-semibold text-gray-900 dark:text-gray-300">$31.00 USD</p>
                <p className="text-sm text-red-500">%0 $0.00 Today</p>
              </div>
            </div>

          </div>
        </div>

        {/* --------------------------first section ends here---------------------- */}


        <div className="flex flex-col sm:flex-row gap-2 my-5">
          <div className="bg-white dark:bg-[#161c24] dark:border-gray-500 rounded-lg border flex flex-col items-centre shadow w-full sm:w-1/2 py-5">
            <p className="text-sm text-black  pl-5 mb-2 dark:text-gray-300">Balance Analysis</p>
            <p className="text-sm text-gray-500 mb-40  pl-5 dark:text-gray-300">Balance Analysis for the selected period</p>
          </div>
          <div className="bg-white dark:bg-[#161c24] dark:border-gray-500 rounded-lg border flex flex-col items-centre shadow w-full sm:w-1/2 py-5">
            <p className="text-sm text-black  pl-5 mb-2 dark:text-gray-300">Expense Breakdown</p>
            <p className="text-sm text-gray-500  pl-5 mb-40 dark:text-gray-300">Breakdown of expenses</p>
          </div>
        </div>

        {/* ---------------------second section ends here---------------------------- */}

        <div className="bg-white dark:bg-[#161c24] dark:border-gray-500 rounded-lg border flex flex-col items-centre shadow w-full py-5 mb-5">
          <p className="text-sm text-black  pl-5 mb-2 dark:text-gray-300">Revenue and profit</p>
          <p className="text-sm text-gray-500 mb-40  pl-5 dark:text-gray-300">Revenue and profit for the selected period</p>
        </div>

        {/* ----------------third section ends here----------------------------------- */}


        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div className="flex justify-between">
            <p className="text-[18px] text-gray-800 dark:text-gray-300">Financial Records</p>

            <button className="bg-blue-700 text-white rounded py-2 px-4 sm:hidden">
              Export
            </button>
          </div>
          <div className="hidden sm:flex gap-2">
            <button className="bg-blue-700 text-white rounded py-2 px-4">Export</button>
            <button className="border text-black dark:bg-[#161c24] dark:text-gray-300 dark:border-gray-500 rounded py-2 px-4">Print</button>
            <button className="border text-blue-700  dark:bg-[#161c24] dark:text-gray-300 dark:border-gray-500 rounded py-2 px-4">Insert</button>
          </div>
          <div className="flex gap-2 mt-2 sm:hidden">
            <button className="border text-black dark:bg-[#161c24] dark:text-gray-300 dark:border-gray-500 rounded py-2 px-4">Print</button>
            <button className="border text-blue-700 dark:bg-[#161c24] dark:text-gray-300 dark:border-gray-500 rounded py-2 px-4">Insert</button>
          </div>
        </div>

        {/* ------------------fourth section ends here------------------------------------ */}


        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 mb-4">
          <div className="flex items-center gap-3 w-full py-3 sm:w-auto">
            <span className="text-sm text-gray-600 dark:text-gray-300">Sort by</span>

            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-[#161c24] dark:border-gray-500 border text-blue-700 rounded-md text-sm"
              >
                Select
                <ChevronDown className="w-4 h-4" />
              </button>

              {sortOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white dark:bg-[#161c24] dark:border-gray-500 border rounded-md shadow-lg z-10 w-48">
                  <button onClick={() => setSortOpen(false)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Id Ascending</button>
                  <button onClick={() => setSortOpen(false)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Id descending</button>
                  <button onClick={() => setSortOpen(false)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Transaction type A to Z</button>
                  <button onClick={() => setSortOpen(false)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Transaction type Z to A</button>
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


          <div className="hidden sm:block w-px h-6 bg-gray-300"></div>

          <div className="relative w-full sm:w-auto mt-2 sm:mt-0">
            <button
              onClick={() => setStatusOpen(!statusOpen)}
              className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-[#161c24] dark:border-gray-500 border border-gray-300 rounded-md text-sm w-[80%] sm:w-auto"
            >
              Transaction Type <span className="text-gray-500">Not Selected</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {statusOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white dark:bg-[#161c24] dark:border-gray-500 border rounded-md shadow-lg z-10 w-48">
                <button onClick={() => setStatusOpen(false)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Debit</button>
                <button onClick={() => setStatusOpen(false)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Credit</button>
                <button onClick={() => setStatusOpen(false)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Unselect all</button>
              </div>
            )}
          </div>

        </div>

        {/* -------------fifth section ends here------------------------------------------ */}

        <div className="max-h-64 overflow-y-auto overflow-x-auto w-full">
          <table className="min-w-max sm:w-full border border-gray-300 text-left">
            <thead>
              <tr className="bg-gray-100 dark:bg-[#161c24] dark:border-gray-500">
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap">Date & Time</td>
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap">Transaction Type</td>
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap">Amount</td>
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap">Reference Number</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap">2 Nov 2021 13:37</td>
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap">↗ Credit - Comission</td>
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap"><span className="text-green-400">+ 0.00 </span>USD</td>
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap">-</td>
              </tr>

              <tr>
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap">2 Nov 2021 13:37</td>
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap">↗ Credit - Comission</td>
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap"><span className="text-green-400">+ 0.00 </span>USD</td>
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap">-</td>
              </tr>

              <tr>
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap">2 Nov 2021 13:37</td>
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap">↗ Credit - Comission</td>
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap"><span className="text-green-400">+ 0.00 </span>USD</td>
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap">-</td>
              </tr>

              <tr>
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap">2 Nov 2021 13:37</td>
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap">↗ Credit - Comission</td>
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap"><span className="text-green-400">+ 0.00 </span>USD</td>
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap">-</td>
              </tr>

              <tr>
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap">2 Nov 2021 13:37</td>
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap">↗ Credit - Comission</td>
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap"><span className="text-green-400">+ 0.00 </span>USD</td>
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap">-</td>
              </tr>

              <tr>
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap">2 Nov 2021 13:37</td>
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap">↗ Credit - Comission</td>
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap"><span className="text-green-400">+ 0.00 </span>USD</td>
                <td className="border-b px-4 py-3 text-[14px] whitespace-nowrap">-</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </>
  )
}
