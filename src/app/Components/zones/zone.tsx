"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Search, ChevronDown } from "lucide-react"

interface Zone {
  id: string
  name: string
  currency: string
  distanceType: string
  status: boolean
  createdAt: string
}

export default function Zones() {
  const [zones, setZones] = useState<Zone[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState<"all" | "active" | "deactive">("all")
  const [selectedZones, setSelectedZones] = useState<string[]>([])
  const [itemsPerPage, setItemsPerPage] = useState(15)
  const router = useRouter()

  // Load zones from localStorage
  useEffect(() => {
    const savedZones = localStorage.getItem("zones")
    if (savedZones) {
      setZones(JSON.parse(savedZones))
    }
  }, [])

  // Count zones by status
  const allCount = zones.length
  const activeCount = zones.filter(z => z.status).length
  const deactiveCount = zones.filter(z => !z.status).length

  // Filter zones
  const filteredZones = zones.filter((zone) => {
    const matchesSearch = zone.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter =
      activeFilter === "all" ? true :
        activeFilter === "active" ? zone.status :
          !zone.status
    return matchesSearch && matchesFilter
  })

  // Toggle zone selection
  const toggleZone = (id: string) => {
    if (selectedZones.includes(id)) {
      setSelectedZones(selectedZones.filter(zid => zid !== id))
    } else {
      setSelectedZones([...selectedZones, id])
    }
  }

  // Toggle all zones
  const toggleAll = () => {
    if (selectedZones.length === filteredZones.length) {
      setSelectedZones([])
    } else {
      setSelectedZones(filteredZones.map(z => z.id))
    }
  }

  // Delete zone
  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete permanently?")) {
      const updatedZones = zones.filter(z => z.id !== id)
      setZones(updatedZones)
      localStorage.setItem("zones", JSON.stringify(updatedZones))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Zones</h1>
          <button
            onClick={() => router.push("/zones/create")}
            className="flex items-center gap-2 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded hover:bg-blue-50 font-medium"
          >
            <span className="text-lg">+</span>
            Add Zone
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveFilter("all")}
              className={`text-sm ${activeFilter === "all"
                  ? "text-gray-900 font-medium border-b-2 border-gray-900 pb-1"
                  : "text-gray-500"
                }`}
            >
              All ({allCount})
            </button>
            <button
              onClick={() => setActiveFilter("active")}
              className={`text-sm ${activeFilter === "active"
                  ? "text-gray-900 font-medium border-b-2 border-gray-900 pb-1"
                  : "text-gray-500"
                }`}
            >
              Active ({activeCount})
            </button>
            <button
              onClick={() => setActiveFilter("deactive")}
              className={`text-sm ${activeFilter === "deactive"
                  ? "text-gray-900 font-medium border-b-2 border-gray-900 pb-1"
                  : "text-gray-500"
                }`}
            >
              Deactive ({deactiveCount})
            </button>
          </div>
          <div className="flex items-center gap-2 pt-3">
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
      </div>

      {/* Actions Bar */}
      <div className="bg-white px-6 py-3 border-b flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-3">

        <div className="flex flex-col sm:flex-row sm:gap-3 gap-3 w-full">
          <div className="relative w-full sm:w-auto">
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="appearance-none pl-3 pr-8 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500 w-full"
            >
              <option value={15}>15</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>

          <div className="relative w-full sm:w-auto">
            <select className="appearance-none pl-3 pr-8 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500 w-full">
              <option>Bulk actions</option>
              <option>Delete selected</option>
              <option>Activate selected</option>
              <option>Deactivate selected</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="w-full sm:w-auto mt-2 sm:mt-0">
          <button className="px-4 py-1.5 border-2 border-blue-600 text-blue-600 rounded text-sm font-medium hover:bg-blue-50 w-full sm:w-auto">
            Apply
          </button>
        </div>

        {/* Items count */}
        <div className="hidden sm:block ml-auto text-sm text-gray-600">
          {filteredZones.length} Items
        </div>

      </div>


      {/* Table */}
      <div className="bg-white mx-6 my-4 rounded-lg border overflow-hidden">

        <div className="overflow-x-auto w-full">
          <table className="min-w-max w-full border-collapse text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="w-12 px-6 py-3">
                  <input
                    type="checkbox"
                    checked={selectedZones.length === filteredZones.length && filteredZones.length > 0}
                    onChange={toggleAll}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                  <div className="flex items-center gap-1">
                    Name
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                  <div className="flex items-center gap-1">
                    Currency
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                  <div className="flex items-center gap-1">
                    Distance Type
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                  <div className="flex items-center gap-1">
                    Status
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                  <div className="flex items-center gap-1">
                    Created At
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredZones.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    No zones found. Create your first zone!
                  </td>
                </tr>
              ) : (
                filteredZones.map((zone) => (
                  <tr key={zone.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedZones.includes(zone.id)}
                        onChange={() => toggleZone(zone.id)}
                        className="w-4 h-4 rounded border-gray-300"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{zone.name}</div>
                      <div className="flex items-center gap-3 mt-1">
                        <button
                          onClick={() => router.push(`/zones/${zone.id}/edit`)}
                          className="text-sm text-gray-600 hover:text-blue-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(zone.id)}
                          className="text-sm text-red-600 hover:text-red-700"
                        >
                          Delete Permanently
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {zone.currency}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {zone.distanceType}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => {
                          const updatedZones = zones.map(z =>
                            z.id === zone.id ? { ...z, status: !z.status } : z
                          )
                          setZones(updatedZones)
                          localStorage.setItem("zones", JSON.stringify(updatedZones))
                        }}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${zone.status ? "bg-blue-600" : "bg-gray-300"
                          }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${zone.status ? "translate-x-6" : "translate-x-1"
                            }`}
                        />
                      </button>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {zone.createdAt}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>



    </div>
  )
}
