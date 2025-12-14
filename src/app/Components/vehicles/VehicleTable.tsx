"use client"
import { Edit2, Zap } from "lucide-react"

interface Vehicle {
  id: string
  name: string
  image: string
  service: string
  serviceCategories: string[]
  status: boolean
  createdAt: string
}

interface VehicleTableProps {
  vehicles: Vehicle[]
  onEdit: (id: string) => void
  onDelete: (id: string) => void
  onToggleStatus: (id: string) => void
}

export default function VehicleTable({ vehicles, onEdit, onDelete, onToggleStatus }: VehicleTableProps) {
  return (
    <div className="bg-white rounded-lg border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="w-12 px-6 py-3">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Name ↕
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Service
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Service Categories
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Status ↕
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Created At ↕
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {vehicles.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-5 py-10 text-center text-gray-500">
                  No vehicles found. Add your first vehicle type!
                </td>
              </tr>
            ) : (
              vehicles.map((vehicle) => (
                <tr key={vehicle.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-3">
                      <img src={vehicle.image} alt={vehicle.name} className="w-10 h-10 rounded object-cover" />
                      <div>
                        <div className="text-[14px] font-medium text-gray-900">{vehicle.name}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            onClick={() => onEdit(vehicle.id)}
                            className="text-[10px] text-gray-600 hover:text-teal-600"
                          >
                            Edit
                          </button>
                          <span className="text-gray-300">|</span>
                          <button
                            onClick={() => onDelete(vehicle.id)}
                            className="text-[10px] text-red-600 hover:text-red-700"
                          >
                            Move To Trash
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-[14px] text-gray-700">{vehicle.service}</td>
                  <td className="px-4 py-2 text-[14px] text-gray-700">
                    {vehicle.serviceCategories.join(", ")}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => onToggleStatus(vehicle.id)}
                      className={`w-10 h-6 flex items-center rounded-full transition 
      ${vehicle.status ? "bg-blue-500" : "bg-gray-300"}`}
                    >
                      <span
                        className={`w-4 h-4 bg-white rounded-full shadow transform transition 
        ${vehicle.status ? "translate-x-5" : "translate-x-1"}`}
                      ></span>
                    </button>
                  </td>

                  <td className="px-4 py-2 text-[12px] text-gray-700">{vehicle.createdAt}</td>
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded">
                        <Edit2 className="w-3 h-3 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded">
                        <Zap className="w-3 h-3 text-gray-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>


    </div>
  )
}