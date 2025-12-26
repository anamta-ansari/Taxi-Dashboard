"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Plus, Search, ChevronDown } from "lucide-react"
import VehicleTable from "@/app/Components/vehicles/VehicleTable"

// Dummy data
const dummyVehicles = [
  {
    id: "1",
    name: "Bike",
    image: "https://img.icons8.com/color/96/motorcycle.png",
    mapIcon: "https://img.icons8.com/color/48/motorcycle.png",
    service: "Cab",
    serviceCategories: ["Ride", "Intercity", "Package", "Schedule", "Rental"],
    maxSeats: 2,
    status: true,
    description: "Two-wheeler bike for quick rides",
    allZones: true,
    zones: [],
    createdAt: "2025-01-22 08:43:08 PM",
  },
  {
    id: "2",
    name: "Mercedes",
    image: "https://img.icons8.com/color/96/mercedes-benz.png",
    mapIcon: "https://img.icons8.com/color/96/mercedes-benz.png",
    service: "Cab",
    serviceCategories: ["Ride", "Schedule"],
    maxSeats: 3,
    status: true,
    description: "Three-wheeler auto rickshaw",
    allZones: false,
    zones: ["Zone 1"],
    createdAt: "2025-01-22 08:43:08 PM",
  },
  {
    id: "3",
    name: "Car",
    image: "https://img.icons8.com/color/96/car.png",
    mapIcon: "https://img.icons8.com/color/48/car.png",
    service: "Cab",
    serviceCategories: ["Ride", "Intercity", "Package", "Schedule", "Rental"],
    maxSeats: 4,
    status: true,
    description: "Standard 4-seater car",
    allZones: true,
    zones: [],
    createdAt: "2025-01-22 08:43:08 PM",
  },
  {
    id: "4",
    name: "Prime Car",
    image: "https://img.icons8.com/color/96/sedan.png",
    mapIcon: "https://img.icons8.com/color/48/sedan.png",
    service: "Cab",
    serviceCategories: ["Ride", "Intercity", "Package", "Schedule", "Rental"],
    maxSeats: 4,
    status: true,
    description: "Premium sedan car",
    allZones: true,
    zones: [],
    createdAt: "2025-01-22 08:43:08 PM",
  },
]

export default function VehiclesPage() {
  const [vehicles, setVehicles] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState<"all" | "active" | "deactive" | "trash">("all")
  const router = useRouter()

  useEffect(() => {
    // Load dummy data first
    let allVehicles = [...dummyVehicles]
    
    // Then add user-created vehicles from localStorage
    const savedVehicles = localStorage.getItem("vehicles")
    if (savedVehicles) {
      const userVehicles = JSON.parse(savedVehicles)
      allVehicles = [...allVehicles, ...userVehicles]
    }
    
    setVehicles(allVehicles)
  }, [])

  const allCount = vehicles.length
  const activeCount = vehicles.filter((v: any) => v.status).length
  const deactiveCount = vehicles.filter((v: any) => !v.status).length

  const filteredVehicles = vehicles.filter((vehicle: any) => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter =
      activeFilter === "all" ? true :
      activeFilter === "active" ? vehicle.status :
      activeFilter === "deactive" ? !vehicle.status :
      false
    return matchesSearch && matchesFilter
  })

  const handleDelete = (id: string) => {
    if (confirm("Move this vehicle to trash?")) {
      // Don't allow deleting dummy data
      if (["1", "2", "3", "4"].includes(id)) {
        alert("Cannot delete default vehicles!")
        return
      }
      
      const updatedVehicles = vehicles.filter((v: any) => v.id !== id)
      setVehicles(updatedVehicles)
      
      // Only save user-created vehicles
      const userVehicles = updatedVehicles.filter(v => !["1", "2", "3", "4"].includes(v.id))
      localStorage.setItem("vehicles", JSON.stringify(userVehicles))
    }
  }

  const handleEdit = (id: string) => {
    router.push(`/cab/vehicles/${id}/edit`)
  }

  const handleToggleStatus = (id: string) => {
    const updatedVehicles = vehicles.map((v: any) =>
      v.id === id ? { ...v, status: !v.status } : v
    )
    setVehicles(updatedVehicles)
    
    // Only save user-created vehicles
    const userVehicles = updatedVehicles.filter(v => !["1", "2", "3", "4"].includes(v.id))
    localStorage.setItem("vehicles", JSON.stringify(userVehicles))
  }

  return (
    <div className="p-6 bg-gray-50  dark:bg-[#161c24] dark:border-gray-600 border min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-300">Vehicle Types</h1>
        <button
          onClick={() => router.push("/cab/vehicles/create")}
          className="flex items-center gap-2 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded hover:bg-blue-50 font-medium"
        >
          <Plus className="w-5 h-5" />
          Add New
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-[#161c24] dark:border-gray-600 border border-b px-6 py-4 rounded-t-lg flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center gap-6">
          <button
            onClick={() => setActiveFilter("all")}
            className={`text-sm ${
              activeFilter === "all"
                ? "text-gray-900 font-medium"
                : "text-gray-500"
            }`}
          >
            All ({allCount})
          </button>
          <button
            onClick={() => setActiveFilter("active")}
            className={`text-sm ${
              activeFilter === "active"
                ? "text-gray-900 font-medium"
                : "text-gray-500"
            }`}
          >
            Active ({activeCount})
          </button>
          <button
            onClick={() => setActiveFilter("deactive")}
            className={`text-sm ${
              activeFilter === "deactive"
                ? "text-gray-900 font-medium"
                : "text-gray-500"
            }`}
          >
            Deactive ({deactiveCount})
          </button>
          <button
            onClick={() => setActiveFilter("trash")}
            className={`text-sm ${
              activeFilter === "trash"
                ? "text-gray-900 font-medium"
                : "text-gray-500"
            }`}
          >
            Trash (0)
          </button>
        </div>
        <div className="flex items-center gap-2 pt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="bg-white dark:bg-[#161c24] dark:border-gray-600 border px-6 py-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-8 items-center gap-3 border-b">
        <select className="px-3 py-1.5 border dark:bg-[#161c24] border-gray-300 rounded text-sm">
          <option>15</option>
          <option>25</option>
          <option>50</option>
        </select>

        <select className="px-3 py-1.5 border dark:bg-[#161c24] border-gray-300 rounded text-sm">
          <option>Bulk actions</option>
          <option>Delete selected</option>
        </select>

        <button className="px-4 py-1.5 border-2 border-blue-600 text-blue-600 rounded text-sm font-medium hover:bg-blue-50">
          Apply
        </button>

        <div className="ml-auto text-sm text-gray-600">
          {filteredVehicles.length} Items
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-[#161c24] dark:border-gray-600 border rounded-b-lg">
        <VehicleTable
          vehicles={filteredVehicles}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onToggleStatus={handleToggleStatus}
        />
      </div>
    </div>
  )
}