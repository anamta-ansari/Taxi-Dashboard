import { User, CheckCircle, Loader } from "lucide-react";

export default function OrdersTable() {
  const orders = [
    { id: "#46903", customer: "m v", phone: "+3 (826) 763-8902", date: "15 Nov 2025", time: "19:42", status: "Finished", driver: "m v", driverPhone: "+3 (826) 763-8902", hasImage: false },
    { id: "#46902", customer: "k i", phone: "+923242541859", date: "15 Nov 2025", time: "18:58", status: "Requested", driver: "Searching...", driverPhone: null, hasImage: false },
    { id: "#46901", customer: "k i", phone: "+923242541859", date: "15 Nov 2025", time: "18:56", status: "Requested", driver: "Searching...", driverPhone: null, hasImage: false },
    { id: "#46900", customer: "m m", phone: "+3 (826) 763-8999", date: "15 Nov 2025", time: "17:49", status: "Requested", driver: "Searching...", driverPhone: null, hasImage: false },
    { id: "#46899", customer: "j d", phone: "+1 (555) 123-4567", date: "15 Nov 2025", time: "16:30", status: "Finished", driver: "a b", driverPhone: "+1 (555) 987-6543", hasImage: false },
    { id: "#46898", customer: "s k", phone: "+923001234567", date: "15 Nov 2025", time: "15:20", status: "Requested", driver: "Searching...", driverPhone: null, hasImage: false },
    { id: "#46897", customer: "t r", phone: "+44 7700 900123", date: "15 Nov 2025", time: "14:15", status: "Finished", driver: "p q", driverPhone: "+44 7700 900456", hasImage: false },
    { id: "#46896", customer: "n h", phone: "+61 412 345 678", date: "15 Nov 2025", time: "13:05", status: "Requested", driver: "Searching...", driverPhone: null, hasImage: false },
    { id: "#46895", customer: "l m", phone: "+49 151 12345678", date: "15 Nov 2025", time: "12:00", status: "Finished", driver: "x y", driverPhone: "+49 151 87654321", hasImage: false },
    { id: "#46894", customer: "o p", phone: "+33 6 12 34 56 78", date: "15 Nov 2025", time: "11:30", status: "Requested", driver: "Searching...", driverPhone: null, hasImage: false },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
      {/* Table Header */}
      <div className="grid grid-cols-5 gap-4 px-6 py-4 bg-gray-50 border-b font-medium text-gray-700 text-sm">
        <div>ID</div>
        <div>Customer</div>
        <div>Scheduled for</div>
        <div>Status</div>
        <div>Driver</div>
      </div>

      {/* Scrollable Table Body - Shows 4 rows at a time */}
      <div className="overflow-y-auto max-h-[320px]">
        {orders.map((order, idx) => (
          <div
            key={idx}
            className="grid grid-cols-5 gap-4 px-6 py-4 border-b last:border-b-0 hover:bg-gray-50 transition"
          >
            {/* ID */}
            <div className="text-gray-600 text-sm">{order.id}</div>

            {/* Customer */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-gray-500" />
              </div>
              <div>
                <div className="text-sm font-medium">{order.customer}</div>
                <div className="text-xs text-gray-500">{order.phone}</div>
              </div>
            </div>

            {/* Scheduled for */}
            <div className="text-sm text-gray-600">
              <div>{order.date}</div>
              <div className="text-xs text-gray-500">{order.time}</div>
            </div>

            {/* Status */}
            <div>
              {order.status === "Finished" ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                  <CheckCircle className="w-4 h-4" />
                  Finished
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm">
                  <Loader className="w-4 h-4" />
                  Requested
                </span>
              )}
            </div>

            {/* Driver */}
            <div className="flex items-center gap-3">
              {order.hasImage ? (
                <img
                  src="https://via.placeholder.com/32"
                  alt="driver"
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-500" />
                </div>
              )}
              <div>
                <div className="text-sm font-medium">{order.driver}</div>
                {order.driverPhone && (
                  <div className="text-xs text-gray-500">{order.driverPhone}</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
