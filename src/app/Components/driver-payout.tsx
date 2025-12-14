import { User, CheckCircle, Loader } from "lucide-react";
import Image from "next/image";
export default function Driverpayout() {
    const today = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = today.toLocaleDateString("en-US");

    const orders = [
        { id: "Session # 8", price: "Total:$0.00USD", phone: "+3 (826) 763-8902", date: "15 Nov 2025", time: "19:42", status: "Finished", driver: "m v", driverPhone: "+3 (826) 763-8902", hasImage: false },
        { id: "Session # 8", price: "Total:$0.00USD", phone: "+923242541859", date: "15 Nov 2025", time: "18:58", status: "Requested", driver: "Searching...", driverPhone: null, hasImage: false },
        { id: "Session # 8", price: "Total:$0.00USD", phone: "+923242541859", date: "15 Nov 2025", time: "18:56", status: "Requested", driver: "Searching...", driverPhone: null, hasImage: false },
        { id: "Session # 8", price: "Total:$0.00USD", phone: "+3 (826) 763-8999", date: "15 Nov 2025", time: "17:49", status: "Requested", driver: "Searching...", driverPhone: null, hasImage: false },
        { id: "Session # 8", price: "Total:$0.00USD", phone: "+1 (555) 123-4567", date: "15 Nov 2025", time: "16:30", status: "Finished", driver: "a b", driverPhone: "+1 (555) 987-6543", hasImage: false },
        { id: "Session # 8", price: "Total:$0.00USD", phone: "+923001234567", date: "15 Nov 2025", time: "15:20", status: "Requested", driver: "Searching...", driverPhone: null, hasImage: false },
        { id: "Session # 8", price: "Total:$0.00USD", phone: "+44 7700 900123", date: "15 Nov 2025", time: "14:15", status: "Finished", driver: "p q", driverPhone: "+44 7700 900456", hasImage: false },
        { id: "Session # 8", price: "Total:$0.00USD", phone: "+61 412 345 678", date: "15 Nov 2025", time: "13:05", status: "Requested", driver: "Searching...", driverPhone: null, hasImage: false },
        { id: "Session # 8", price: "Total:$0.00USD", phone: "+49 151 12345678", date: "15 Nov 2025", time: "12:00", status: "Finished", driver: "x y", driverPhone: "+49 151 87654321", hasImage: false },
        { id: "Session # 8", price: "Total:$0.00USD", phone: "+33 6 12 34 56 78", date: "15 Nov 2025", time: "11:30", status: "Requested", driver: "Searching...", driverPhone: null, hasImage: false },
    ];
    return (
        <>
            <div>
                <h1 className="text-2xl font-semibold text-gray-900">Driver Payouts</h1>
                <p className="text-[16px] mt-5 mb-8"><span className="text-gray-500"></span> {formattedDate}</p>

                {/* new payout section */}
                <div className="flex flex-col sm:flex-row gap-2">
                    <div className="bg-white rounded-lg border flex flex-col items-centre shadow w-full sm:w-1/2 ">
                        <h1 className="text-2xl font-semibold text-gray-900 pt-5 mb-2 pl-8">New Payout Sessions</h1>
                        <p className="text-sm text-gray-500 mb-20 pl-8">Create payout sessions by selecting users or criteria</p>
                        <button className="bg-white rounded-lg border px-20 py-3 items-centre ml-4 mr-4">⬇️ Create</button>
                    </div>
                    <div className="bg-white rounded-lg border flex flex-col items-centre shadow w-full sm:w-1/2 ">
                        <p className="text-sm text-gray-500 mb-20 px-8 pt-5 flex justify-between">
                            <span>1/17 session#1 <span className="bg-yellow-200 text-yellow-700">pending</span>
                            </span> ↘️↗️</p>
                        <h1 className="text-2xl font-semibold text-gray-900 pt-5 mb-2 ml-4 mr-4">$0.00 <span className="text-sm text-gray-500">USD</span></h1>
                        <button className="bg-blue-600 rounded-lg border text-white px-20 py-3 items-centre ml-4 mr-4">Process Payout</button>
                    </div>
                </div>

                {/* Financial records*/}
                <div className="bg-white rounded-2xl shadow-sm border overflow-hidden mt-5">
                    <h1 className="text-2xl font-semibold text-gray-900 my-5 ml-5">Payouts Sessions</h1>
                    {/* btn div */}
                    <div className="flex ml-5 mb-5 flex-col sm:flex-row gap-y-2 items-center">
                        <button className="bg-white rounded-lg border px-5 py-3 items-centre ml-1 mr-1">Sort by select ⬇️ x +</button>
                        <button className="bg-white rounded-lg border px-5 py-3 items-centre ml-1 mr-1">Status not selected ⬇️</button>
                    </div>
                    {/* Table Header */}
                    <div className="grid grid-cols-5 gap-4 px-6 py-4 bg-gray-50 border-b font-medium text-gray-700 text-sm">
                        <div>List</div>
                    </div>

                    {/* Scrollable Table Body - Shows 4 rows at a time */}
                    <div className="overflow-y-auto max-h-[320px] w-full">

                        {/* Horizontal Scroll Wrapper for small screens */}
                        <div className="overflow-x-auto w-full">

                            <div className="min-w-[450px]">
                                {orders.map((order, idx) => (
                                    <div
                                        key={idx}
                                        className="grid grid-cols-3 gap-4 px-6 py-4 border-b last:border-b-0 hover:bg-gray-50 transition"
                                    >
                                        {/* ID */}
                                        <div className="text-gray-600 text-sm whitespace-nowrap">
                                            {order.id} <span className="bg-yellow-100 text-yellow-700">pending</span>
                                        </div>

                                        <div className="text-gray-600 text-sm whitespace-nowrap">
                                            {order.price}
                                        </div>

                                        <div className="text-gray-600 text-sm whitespace-nowrap">
                                            {order.date}
                                        </div>

                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>

                </div>


                {/* payout session */}
                <div className="bg-white rounded-2xl shadow-sm border overflow-hidden mt-5">
                    <h1 className="text-2xl font-semibold text-gray-900 my-5 ml-5">Financial Records</h1>
                    {/* btn div */}
                    <div className="flex flex-col sm:flex-row ml-5 mb-5 gap-y-2 items-center ">
                        <button className="bg-white rounded-lg border px-5 py-3 items-centre ml-1 mr-1">Sort by select ⬇️ x +</button>
                        <button className="bg-white rounded-lg border px-5 py-3 items-centre ml-1 mr-1">Status not selected ⬇️</button>
                    </div>
                    {/* Table Container */}
                    <div className="w-full overflow-x-auto">
                        {/* Table Header */}
                        <div className="min-w-[600px] grid grid-cols-5 gap-4 px-6 py-4 bg-gray-50 border-b font-medium text-gray-700 text-sm">
                            <div>Type</div>
                            <div>Date & Time</div>
                            <div>Amount</div>
                            <div>Status</div>
                            <div>Reference Number</div>
                        </div>

                        {/* Scrollable Table Body - Shows 4 rows at a time */}
                        <div className="overflow-y-auto max-h-[320px] min-w-[600px]">
                            <div className="flex justify-center items-center mt-8">
                                <Image
                                    src="/assets/4041.png"
                                    width={300}
                                    height={300}
                                    alt="Car Icon"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
