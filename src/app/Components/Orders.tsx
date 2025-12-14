"use client"
import { ArrowRight, ChevronDown, User } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Orders() {
  const [activeTab, setActiveTab] = useState("pending");
  const [selectedFleet, setSelectedFleet] = useState("not selected");

  const orders = [
    { id: "#46923", customer: "James Ndukwa...", phone: "+263772729896", driver: "Searching...", date: "17 Nov 2025 11:16", price: "$48.32 USD", hasAvatar: false },
    { id: "#46920", customer: "demo accounty", phone: "+265992501020", driver: "Searching...", date: "17 Nov 2025 02:23", price: "$42.65 USD", hasAvatar: false },
    { id: "#46918", customer: "k i", phone: "+923242541859", driver: "Searching...", date: "17 Nov 2025 01:19", price: "$105.67 USD", hasAvatar: false },
    { id: "#46917", customer: "k i", phone: "+923242541859", driver: "Searching...", date: "17 Nov 2025 01:17", price: "$30.37 USD", hasAvatar: false },
    { id: "#46915", customer: "Carlos Franco", phone: "+5521979306923", driver: "Searching...", date: "17 Nov 2025 00:31", price: "$131.25 USD", hasAvatar: true },
    { id: "#46914", customer: "John Doe", phone: "+1234567890", driver: "Searching...", date: "16 Nov 2025 23:45", price: "$67.50 USD", hasAvatar: false },
    { id: "#46913", customer: "Jane Smith", phone: "+9876543210", driver: "Searching...", date: "16 Nov 2025 22:30", price: "$89.99 USD", hasAvatar: false },
    { id: "#46912", customer: "Mike Johnson", phone: "+1122334455", driver: "Searching...", date: "16 Nov 2025 21:15", price: "$54.20 USD", hasAvatar: false },
    { id: "#46911", customer: "Sarah Wilson", phone: "+5544332211", driver: "Searching...", date: "16 Nov 2025 20:00", price: "$125.80 USD", hasAvatar: false },
    { id: "#46910", customer: "Tom Brown", phone: "+9988776655", driver: "Searching...", date: "16 Nov 2025 19:30", price: "$73.45 USD", hasAvatar: false },
  ];

  const visibleOrders = orders.slice(0, 7);

  return (
    <>

      <div>
        <h1 className="text-[28px] font-semibold">Order Tracker</h1>
        <p className="text-[14px] text-gray-500 mb-8">Live order tracker for active orders</p>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="flex justify-between mx-3">
              <h1 className="text-[18px] font-semibold">Order Details</h1>
              <h2 className="text-blue-600">Veiw Details</h2>
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
          <div className="w-full  md:w-1/2  ">
            <div className="overflow-hidden w-full h-[400px]">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.671438003524!2d67.028511!3d24.810674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d4f0a8b79b3%3A0xaf163d7514514a1e!2sKarachi!5e0!3m2!1sen!2s!4v1710000000000"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 p-6">
        {/* Tabs and Archive Button */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 items-center justify-between mb-6">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveTab("active")}
              className={`text-base font-semibold pb-2 ${activeTab === "active" ? "text-gray-900" : "text-gray-500"
                }`}
            >
              Active Orders
            </button>
            <button
              onClick={() => setActiveTab("pending")}
              className={`text-base pb-2 ${activeTab === "pending" ? "text-blue-600 border-b-2 border-blue-600 font-medium" : "text-gray-500"
                }`}
            >
              Pending
            </button>
            <button
              onClick={() => setActiveTab("ontrip")}
              className={`text-base pb-2 ${activeTab === "ontrip" ? "text-blue-600 border-b-2 border-blue-600 font-medium" : "text-gray-500"
                }`}
            >
              On Trip
            </button>
            <button
              onClick={() => setActiveTab("scheduled")}
              className={`text-base pb-2 ${activeTab === "scheduled" ? "text-blue-600 border-b-2 border-blue-600 font-medium" : "text-gray-500"
                }`}
            >
              Scheduled
            </button>
          </div>
          <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-sm">
            Go to Archive
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Fleet Filter */}
        <div className="mb-6">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm">
            Fleets <span className="text-gray-500">{selectedFleet}</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg border w-full">
          <div className="overflow-x-auto max-w-full">
            <div className="min-w-[650px]">
              <table className="w-full text-sm">
                <thead className="border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-gray-600 font-normal">ID</th>
                    <th className="px-6 py-3 text-left text-gray-600 font-normal">Customer</th>
                    <th className="px-6 py-3 text-left text-gray-600 font-normal">Driver</th>
                    <th className="px-6 py-3 text-left text-gray-600 font-normal">Date & Time</th>
                    <th className="px-6 py-3 text-left text-gray-600 font-normal">Price</th>
                  </tr>
                </thead>

                <tbody>
                  {visibleOrders.map((order, index) => (
                    <tr key={index} className="border-b last:border-b-0 hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                          <span className="text-gray-600">{order.id}</span>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {order.hasAvatar ? (
                            <img
                              src="https://via.placeholder.com/40"
                              alt=""
                              className="w-9 h-9 rounded-full"
                            />
                          ) : (
                            <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center">
                              <User className="w-5 h-5 text-gray-600" />
                            </div>
                          )}

                          <div>
                            <div className="text-gray-900">{order.customer}</div>
                            <div className="text-xs text-gray-500">{order.phone}</div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center">
                            <User className="w-5 h-5 text-gray-600" />
                          </div>
                          <span className="text-gray-600">{order.driver}</span>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-gray-600">{order.date}</td>

                      <td className="px-6 py-4 text-gray-900">{order.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
