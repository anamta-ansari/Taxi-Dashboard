'use client';
import Link from "next/link"

export default function History() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
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
        <button className="text-gray-400 pb-3">All Trips</button>
        <button className="text-gray-800 border-b-2 border-orange-500 pb-3">
          In Progress
        </button>
        <button className="text-gray-800 pb-3 hidden sm:block">Prebookings</button>
        <button className="text-gray-800 pb-3 hidden sm:block">Completed</button>
        <button className="text-gray-800 pb-3 hidden sm:block">Cancelled</button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-xs uppercase tracking-wider text-gray-400 border-b">
              <th className="py-4 px-2 text-left font-medium">Date</th>
              <th className="py-4 px-2 text-left font-medium">Time</th>
              <th className="py-4 px-2 text-left font-medium">Taxi Company</th>
              <th className="py-4 px-2 text-left font-medium">From</th>
              <th className="py-4 px-2 text-left font-medium">To</th>
              <th className="py-4 px-2 text-left font-medium">Payment</th>
              <th className="py-4 px-2 text-right font-medium">Amount</th>
            </tr>
          </thead>

          <tbody>
            {/* Empty State Row */}
            <tr>
              <td
                colSpan={7}
                className="py-10 text-center text-gray-500 border-b"
              >
                No data available
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer / Pagination */}
      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          Items per page:
          <button className="font-medium text-gray-800">10</button>
          <button>20</button>
          <button>30</button>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded hover:bg-gray-100">‹</button>
          <button className="p-2 rounded hover:bg-gray-100">›</button>
        </div>
      </div>
    </div>
  );
}
