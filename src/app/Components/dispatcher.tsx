import { User, Clock, Plus, ChevronRight } from "lucide-react";

export default function Dispatcher() {
  const customers = [
    { name: "john doe", phone: "+165055512xxxx", lastActivity: "6 days ago" },
    { name: "a b", phone: "+355672249xxxx", lastActivity: "about a month ago" },
    { name: "As Sx", phone: "+34653800xxxx", lastActivity: "23 days ago" },
    { name: "", phone: "", lastActivity: "12 days ago" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">Dispatcher</h1>

      {/* Stepper */}
      <div className="mb-6 max-w-5xl 
                grid grid-cols-2 md:flex 
                md:items-center md:justify-between 
                gap-4">

        {/* Step 1 */}
        <div className="flex items-center gap-2 flex-1">
          <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-semibold">
            1
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Customer</h3>
            <p className="text-xs text-gray-500">Select the customer to order a ride</p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-12 h-px bg-gray-300 mx-2"></div>

        {/* Step 2 */}
        <div className="flex items-center gap-2 flex-1">
          <div className="w-7 h-7 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs font-semibold">
            2
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600">Location</h3>
            <p className="text-xs text-gray-400">Select the pickup and drop-off locations</p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-12 h-px bg-gray-300 mx-2"></div>

        {/* Step 3 */}
        <div className="flex items-center gap-2 flex-1">
          <div className="w-7 h-7 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs font-semibold">
            3
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600">Service</h3>
            <p className="text-xs text-gray-400">Select the taxi service type</p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-12 h-px bg-gray-300 mx-2"></div>

        {/* Step 4 */}
        <div className="flex items-center gap-2 flex-1">
          <div className="w-7 h-7 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs font-semibold">
            4
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600">Searching...</h3>
            <p className="text-xs text-gray-400">Finding an available driver</p>
          </div>
        </div>

      </div>


      {/* Customer List Card */}
      <div className="bg-white rounded-lg shadow-sm border w-full">
        {/* Scroll Wrapper for Small Screens */}
        <div className="overflow-x-auto max-w-full">
          <div className="min-w-[500px]">
            {/* Add Button */}
            <div className="flex justify-end p-3 border-b">
              <button className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm font-medium">
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-2 px-6 py-2.5 border-b bg-gray-50">
              <div className="text-xs font-medium text-gray-700">Name</div>
              <div className="text-xs font-medium text-gray-700">Last activity at</div>
            </div>

            {/* Customer Rows */}
            <div>
              {customers.map((customer, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 px-6 py-3 border-b last:border-b-0 hover:bg-gray-50 cursor-pointer"
                >
                  {/* Name Column */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="w-4 h-4 text-gray-500" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{customer.name || ""}</div>
                      <div className="text-xs text-gray-500">{customer.phone || ""}</div>
                    </div>
                  </div>

                  {/* Last Activity Column */}
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-xs text-gray-600">{customer.lastActivity}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Next Button */}
            <div className="flex justify-end p-3 border-t">
              <button className="flex items-center gap-1.5 px-5 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
