"use client"
import { Search, Plus, X, ChevronDown, Star, ChevronRight, User } from "lucide-react";
import { useState } from "react";
import { Loader } from "lucide-react";
export default function Accountingcustomer() {
    const [sortOpen, setSortOpen] = useState(false);
    const [statusOpen, setStatusOpen] = useState(false);

    return (
        <>
            <div className="p-5 dark:bg-[#161c24]">
                <h1 className="text-2xl font-semibold text-gray-900 mb-2 dark:text-gray-300">Customer Wallet</h1>
                <p className="text-sm text-gray-500 dark:text-gray-300">List of all customer wallets</p>

                <div className="flex flex-col sm:flex-row gap-2 my-5">
                    <div className="bg-white dark:bg-[#161c24] dark:border-gray-500 rounded-lg border flex flex-col items-centre shadow w-full sm:w-1/2 py-5">
                        <p className="text-sm text-gray-500  pl-5 mb-2 dark:text-gray-300">Total user wallet</p>
                        <p className="text-sm text-gray-500  pl-5 dark:text-gray-300">3367</p>
                    </div>
                    <div className="bg-white dark:bg-[#161c24] dark:border-gray-500 rounded-lg border flex flex-col items-centre shadow w-full sm:w-1/2 py-5">
                        <p className="text-sm text-gray-500  pl-5 mb-2 dark:text-gray-300">Total wallet balances</p>
                        <p className="text-sm text-gray-500  pl-5 dark:text-gray-300">3110320.0</p>
                    </div>
                </div>

                <div className="flex flex-wrap md:flex-nowrap items-center gap-3 mb-4">

                    {/* Row 1 */}
                    <span className="text-sm text-gray-600 dark:text-gray-300">Sort by</span>

                    <div className="relative">
                        <button
                            onClick={() => setSortOpen(!sortOpen)}
                            className="flex items-center gap-2 px-3 py-1.5 dark:bg-[#161c24] dark:border-gray-500 border bg-blue-50 text-blue-700 rounded-md text-sm"
                        >
                            Select
                            <ChevronDown className="w-4 h-4" />
                        </button>

                        {sortOpen && (
                            <div className="absolute top-full left-0 mt-1 bg-white dark:bg-[#161c24] dark:border-gray-500 border rounded-md shadow-lg z-10 w-48">
                                <button onClick={() => setSortOpen(false)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Wallet Balance(high to low)</button>
                                <button onClick={() => setSortOpen(false)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Wallet Balance(low to high)</button>
                            </div>
                        )}
                    </div>

                    <button className="p-1.5 hover:bg-gray-100 rounded-md">
                        <X className="w-4 h-4 text-gray-500" />
                    </button>

                    <button className="p-1.5 hover:bg-gray-100 rounded-md">
                        <Plus className="w-4 h-4 text-gray-500" />
                    </button>

                    <div className="hidden md:block w-px h-6 bg-gray-300"></div>

                    <div className="relative w-full md:w-auto mt-2 md:mt-0">
                        <button
                            onClick={() => setStatusOpen(!statusOpen)}
                            className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-[#161c24] dark:border-gray-500 border border-gray-300 rounded-md text-sm w-[80%] md:w-auto"
                        >
                            Currency <span className="text-gray-500">USD</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>

                        {statusOpen && (
                            <div className="absolute top-full left-0 mt-1 bg-white dark:bg-[#161c24] dark:border-gray-500 border rounded-md shadow-lg z-10 w-48">
                                <button onClick={() => setStatusOpen(false)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">USD</button>
                                <button onClick={() => setStatusOpen(false)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Unselect all</button>
                            </div>
                        )}
                    </div>

                </div>


                <div className="max-h-44 overflow-y-auto">
                    <table className="w-full border border-gray-300 text-left ">
                        <thead>
                            <tr className="bg-gray-100 dark:bg-[#161c24] dark:border-gray-500">
                                <td className="border-b px-4 py-3">Id</td>
                                <td className="border-b px-4 py-3">Driver</td>
                                <td className="border-b px-4 py-3">Wallet Balance</td>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td className="border-b px-4 py-3 text-[14px]">#1</td>
                                <td className="border-b px-4 py-3 text-[14px]">
                                    <div className="flex items-center gap-2 text-[14px]">
                                        <User size={16} />
                                        James allen
                                    </div>
                                </td>
                                <td className="border-b px-4 py-3 text-[14px]">$852 USD</td>
                            </tr>
                            <tr>
                                <td className="border-b px-4 py-3 text-[14px]">#1</td>
                                <td className="border-b px-4 py-3 text-[14px]">
                                    <div className="flex items-center gap-2 text-[14px]">
                                        <User size={16} />
                                        James allen
                                    </div>
                                </td>
                                <td className="border-b px-4 py-3 text-[14px]">$852 USD</td>
                            </tr>
                            <tr>
                                <td className="border-b px-4 py-3 text-[14px]">#1</td>
                                <td className="border-b px-4 py-3 text-[14px]">
                                    <div className="flex items-center gap-2 text-[14px]">
                                        <User size={16} />
                                        James allen
                                    </div>
                                </td>
                                <td className="border-b px-4 py-3 text-[14px]">$852 USD</td>
                            </tr>
                            <tr>
                                <td className="border-b px-4 py-3 text-[14px]">#1</td>
                                <td className="border-b px-4 py-3 text-[14px]">
                                    <div className="flex items-center gap-2 text-[14px]">
                                        <User size={16} />
                                        James allen
                                    </div>
                                </td>
                                <td className="border-b px-4 py-3 text-[14px]">$852 USD</td>
                            </tr>
                            <tr>
                                <td className="border-b px-4 py-3 text-[14px]">#1</td>
                                <td className="border-b px-4 py-3 text-[14px]">
                                    <div className="flex items-center gap-2 text-[14px]">
                                        <User size={16} />
                                        James allen
                                    </div>
                                </td>
                                <td className="border-b px-4 py-3 text-[14px]">$852 USD</td>
                            </tr>
                            <tr>
                                <td className="border-b px-4 py-3 text-[14px]">#1</td>
                                <td className="border-b px-4 py-3 text-[14px]">
                                    <div className="flex items-center gap-2 text-[14px]">
                                        <User size={16} />
                                        James allen
                                    </div>
                                </td>
                                <td className="border-b px-4 py-3 text-[14px]">$852 USD</td>
                            </tr>


                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}
