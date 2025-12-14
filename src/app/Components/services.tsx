"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, CheckSquare, Square, MoreVertical } from "lucide-react"; // Icons from lucide-react

// --- Type Definitions ---
interface Service {
  id: number;
  title: string;
  type: string;
  status: boolean;
  createdAt: string;
  img: string;
}

type Tab = 'all' | 'active' | 'deactive';

// --- Placeholder Data ---
const initialServices: Service[] = [
  {
    id: 1,
    title: "Cab",
    type: "Cab",
    status: true,
    createdAt: "2025-04-24 03:50:10",
    img: "/assets/cab-service.png",
  },
  {
    id: 2,
    title: "Parcel",
    type: "Parcel",
    status: true,
    createdAt: "2025-04-24 03:50:10",
    img: "/assets/parcel-service.png",
  },
  {
    id: 3,
    title: "Freight",
    type: "Freight",
    status: true,
    createdAt: "2025-04-24 03:50:10",
    img: "/assets/freight-service.png",
  },
  {
    id: 4,
    title: "Ambulance",
    type: "Ambulance",
    status: true,
    createdAt: "2025-04-24 03:50:10",
    img: "/assets/ambulance-service.png",
  },
];


// --- Helper Components ---

// Reusable Status Toggle Switch
const StatusToggle: React.FC<{ initialStatus: boolean, serviceId: number }> = ({ initialStatus, serviceId }) => {
  const [isActive, setIsActive] = useState(initialStatus);

  const toggleStatus = () => {
    setIsActive(!isActive);
    // Implement API call to update status here
    console.log(`Service ${serviceId} status updated to: ${!isActive}`);
  };

  return (
    <button
      onClick={toggleStatus}
      className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none ${isActive ? 'bg-blue-500' : 'bg-gray-300'
        }`}
    >
      <span className="sr-only">Toggle Status</span>
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${isActive ? 'translate-x-5' : 'translate-x-0'
          }`}
      />
    </button>
  );
};

// --- Main Component ---

export default function Services() {
  const [services, setServices] = useState<Service[]>(initialServices);
  const [activeTab, setActiveTab] = useState<Tab>('all');
  const [selectedServices, setSelectedServices] = useState<number[]>([]);

  // Filtering Logic (simple for demonstration)
  const filteredServices = services.filter(service => {
    if (activeTab === 'all') return true;
    if (activeTab === 'active') return service.status;
    if (activeTab === 'deactive') return !service.status;
    return false;
  });

  // Calculate tab counts
  const counts = {
    all: services.length,
    active: services.filter(s => s.status).length,
    deactive: services.filter(s => !s.status).length,
  };

  // Bulk selection handler
  const toggleSelectAll = () => {
    if (selectedServices.length === filteredServices.length) {
      setSelectedServices([]);
    } else {
      setSelectedServices(filteredServices.map(s => s.id));
    }
  };

  const toggleServiceSelection = (id: number) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(serviceId => serviceId !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Services</h1>

      {/* Tabs and Search */}
      <div className="flex flex-col sm:flex-row py-2 items-start justify-between mb-4">
        {/* Tabs */}
        <div className="flex gap-4 text-sm pt-1">
          {['all', 'active', 'deactive'].map((tabKey) => (
            <button
              key={tabKey}
              onClick={() => setActiveTab(tabKey as Tab)}
              className={`capitalize pb-1 ${activeTab === tabKey
                  ? 'font-semibold text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-blue-600'
                }`}
            >
              {tabKey} ({counts[tabKey as Tab]})
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="flex  sm:w-auto border mt-2 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-colors">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-2 w-64 text-sm focus:outline-none"
          />
          <button className="bg-white text-gray-500 py-2 px-1 hover:text-blue-600  border-l">
            <Search className="w-4 h-4 " />
          </button>
        </div>
      </div>

      <hr className="mb-4 -mt-3 border-gray-200" />

      {/* Top Controls: Pagination, Bulk Actions, Apply, Item Count */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Pagination Select */}
          <select className="border rounded px-3 py-2 text-sm appearance-none bg-white">
            <option>15</option>
            <option>25</option>
            <option>50</option>
          </select>

          {/* Bulk Actions Select */}
          <div className="relative">
            <select className="border rounded px-3 py-2 text-sm appearance-none bg-white pr-8">
              <option>Bulk actions</option>
              <option>Activate</option>
              <option>Deactivate</option>
              <option>Delete</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>

          <button className="bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600 transition-colors">
            Apply
          </button>
        </div>

        {/* Item Count */}
        <div className="text-sm hidden sm:block text-gray-500">
          {filteredServices.length} Items
        </div>
      </div>

      {/* Table */}
      <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          {/* Table Header  */}
          <thead className="bg-gray-50">
            <tr><th className="px-3 py-3 w-10">
              <button onClick={toggleSelectAll} className="text-gray-500 hover:text-blue-600">
                {selectedServices.length === filteredServices.length && filteredServices.length > 0 ? (
                  <CheckSquare className="w-4 h-4" />
                ) : (
                  <Square className="w-4 h-4" />
                )}
              </button>
            </th>

              {/* Other Headers */}
              {['Title', 'Type', 'Status', 'Created At'].map(header => (
                <th
                  key={header}
                  className="px-4 py-3 text-left font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:text-blue-600"
                >
                  <div className="flex items-center gap-1">
                    {header}
                    <ChevronDown className="w-3 h-3 text-gray-400" /> {/* Sorting Icon */}
                  </div>
                </th>
              ))}

              <th className="px-4 py-3 w-12"></th></tr>
          </thead>

          {/* Table Body  */}
          <tbody className="bg-white divide-y divide-gray-100">
            {filteredServices.map((service) => (
              <tr
                key={service.id}
                className={`hover:bg-gray-50 ${selectedServices.includes(service.id) ? 'bg-emerald-50/50' : ''}`}
              >
                {/* Selection Checkbox */}
                <td className="px-3 py-3">
                  <input
                    type="checkbox"
                    checked={selectedServices.includes(service.id)}
                    onChange={() => toggleServiceSelection(service.id)}
                    className="rounded text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                </td>

                {/* Title and Image */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 flex-shrink-0 bg-gray-100 rounded-full overflow-hidden">
                      <Image
                        src={service.img}
                        alt={service.title}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{service.title}</p>
                      <Link
                        href={`/services/edit/${service.id}`}
                        className="text-blue-600 text-xs hover:text-blue-800 transition-colors"
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                </td>

                {/* Type */}
                <td className="px-4 py-3 text-gray-600">
                  {service.type}
                </td>

                {/* Status Toggle */}
                <td className="px-4 py-3">
                  <StatusToggle initialStatus={service.status} serviceId={service.id} />
                </td>

                {/* Created At */}
                <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                  {service.createdAt}
                </td>

                {/* Actions */}
                <td className="px-4 py-3 text-right">
                  <button className="text-gray-500 hover:text-blue-600">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
