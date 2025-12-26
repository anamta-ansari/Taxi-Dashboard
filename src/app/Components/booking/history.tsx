'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

interface Booking {
  id: string;
  date: string;
  time: string;
  taxiCompany: string;
  from: string;
  to: string;
  payment: string;
  amount: string;
  status: string;
}

export default function History() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [activeTab, setActiveTab] = useState<'all' | 'in-progress' | 'prebooking' | 'completed' | 'cancelled'>('in-progress');
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Load bookings from localStorage on component mount
  useEffect(() => {
    const savedBookings = localStorage.getItem('bookings');
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
  }, []);

  const filteredBookings = activeTab === 'all' 
    ? bookings 
    : bookings.filter(booking => booking.status === activeTab);

  return (
    <div className="bg-white dark:bg-[#161c24] rounded-xl shadow-sm p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">
          Booking History
        </h1>

        <Link
          href="/book-trip"
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg font-medium"
        >
          New Booking
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex flex-col-2 sm:flex gap-8 border-b mb-4 text-sm font-medium">
        <button 
          onClick={() => setActiveTab('all')}
          className={`pb-3 ${activeTab === 'all' ? 'text-gray-800 font-[20px] dark:text-gray-300 border-b-2 border-blue-500' : 'text-gray-400'}`}
        >
          All Trips
        </button>
        <button 
          onClick={() => setActiveTab('in-progress')}
          className={`pb-3 ${activeTab === 'in-progress' ? ' font-[20px] dark:text-gray-300 text-gray-600 border-b-2 border-blue-500' : 'text-gray-400'}`}
        >
          In Progress
        </button>
        <button 
          onClick={() => setActiveTab('prebooking')}
          className={`pb-3 hidden sm:block ${activeTab === 'prebooking' ? 'font-[20px] dark:text-gray-300 text-gray-800 border-b-2 border-orange-500' : 'text-gray-400'}`}
        >
          Prebookings
        </button>
        <button 
          onClick={() => setActiveTab('completed')}
          className={`pb-3 hidden sm:block ${activeTab === 'completed' ? 'font-[20px] dark:text-gray-300 text-gray-800 border-b-2 border-orange-500' : 'text-gray-400'}`}
        >
          Completed
        </button>
        <button 
          onClick={() => setActiveTab('cancelled')}
          className={`pb-3 hidden sm:block ${activeTab === 'cancelled' ? 'font-[20px] dark:text-gray-300 text-gray-800 border-b-2 border-orange-500' : 'text-gray-400'}`}
        >
          Cancelled
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className=" uppercase  text-gray-400 border-b">
              <th className="py-4 px-2 text-left text-[16px] dark:text-gray-300">Date</th>
              <th className="py-4 px-2 text-left text-[16px] dark:text-gray-300">Time</th>
              <th className="py-4 px-2 text-left text-[16px] dark:text-gray-300">Taxi Company</th>
              <th className="py-4 px-2 text-left text-[16px] dark:text-gray-300">From</th>
              <th className="py-4 px-2 text-left text-[16px] dark:text-gray-300">To</th>
              <th className="py-4 px-2 text-left text-[16px] dark:text-gray-300">Payment</th>
              <th className="py-4 px-2 text-right text-[16px] dark:text-gray-300">Amount</th>
            </tr>
          </thead>

          <tbody>
            {filteredBookings.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="py-10 text-center text-gray-500 border-b"
                >
                  No data available
                </td>
              </tr>
            ) : (
              filteredBookings.slice(0, itemsPerPage).map((booking) => (
                <tr key={booking.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-2 text-sm text-gray-800">{booking.date}</td>
                  <td className="py-4 px-2 text-sm text-gray-800">{booking.time}</td>
                  <td className="py-4 px-2 text-sm text-gray-800">{booking.taxiCompany}</td>
                  <td className="py-4 px-2 text-sm text-gray-600 max-w-[200px] truncate" title={booking.from}>
                    {booking.from}
                  </td>
                  <td className="py-4 px-2 text-sm text-gray-600 max-w-[200px] truncate" title={booking.to}>
                    {booking.to}
                  </td>
                  <td className="py-4 px-2 text-sm text-gray-800">{booking.payment}</td>
                  <td className="py-4 px-2 text-sm text-gray-800 text-right font-medium">{booking.amount}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

     
    </div>
  );
}