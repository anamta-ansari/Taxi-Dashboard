"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Save, ArrowLeft, ChevronDown } from "lucide-react"
import ImageUpload from "./ImageUpload"

const serviceCategories = [
  "Ride",
  "Intercity",
  "Package",
  "Schedule",
  "Rental"
]

export default function VehicleForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    mapIcon: "",
    description: "",
    service: "Cab",
    serviceCategories: [] as string[],
    maxSeats: "",
    status: true,
    zones: [] as string[],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData({ ...formData, [name]: checked })
  }

  const toggleServiceCategory = (category: string) => {
    const categories = formData.serviceCategories.includes(category)
      ? formData.serviceCategories.filter(c => c !== category)
      : [...formData.serviceCategories, category]
    setFormData({ ...formData, serviceCategories: categories })
  }

  const handleSave = (exit: boolean) => {
    if (!formData.name || !formData.image || !formData.mapIcon || !formData.maxSeats) {
      alert("Please fill all required fields!")
      return
    }

    setLoading(true)

    const existingVehicles = JSON.parse(localStorage.getItem("vehicles") || "[]")
    const now = new Date()

    const newVehicle = {
      id: Date.now().toString(),
      ...formData,
      maxSeats: parseInt(formData.maxSeats) || 0,
      createdAt: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(
        now.getDate()
      ).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(
        now.getMinutes()
      ).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")} ${now.getHours() >= 12 ? "PM" : "AM"}`,
    }

    existingVehicles.push(newVehicle)
    localStorage.setItem("vehicles", JSON.stringify(existingVehicles))

    setTimeout(() => {
      if (exit) {
        router.push("/cab/vehicles")
      } else {
        setFormData({
          name: "",
          image: "",
          mapIcon: "",
          description: "",
          service: "Cab",
          serviceCategories: [],
          maxSeats: "",
          status: true,
          zones: [],
        })
        setLoading(false)
        alert("Vehicle saved! You can add another one.")
      }
    }, 500)
  }

  return (
    <div className="grid dark:bg-[#161c24] dark:border-gray-600 border grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Form Section */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white dark:bg-[#161c24] dark:border-gray-600 rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-6">Add Vehicle Type (en)</h2>

          <div className="space-y-6">
            <ImageUpload
              label="Image"
              value={formData.image}
              onChange={(value) => setFormData({ ...formData, image: value })}
              required
            />

            <ImageUpload
              label="Vehicle Map Icon"
              value={formData.mapIcon}
              onChange={(value) => setFormData({ ...formData, mapIcon: value })}
              required
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Name (en)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter Vehicle Description (en)"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Maximum Seat <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="maxSeats"
                value={formData.maxSeats}
                onChange={handleChange}
                placeholder="Enter Maximum Seat"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="space-y-6 dark:bg-[#161c24]">
        {/* Publish Section */}
        <div className="bg-white dark:bg-[#161c24] dark:border-gray-600 border rounded-lg p-6">
          <div className="space-y-3">
            <button
              onClick={() => handleSave(false)}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              Save
            </button>
            <button
              onClick={() => handleSave(true)}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              <ArrowLeft className="w-4 h-4" />
              Save and Exit
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white dark:bg-[#161c24] dark:border-gray-600 border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Additional Info</h3>

          <div className="space-y-4">
            {/* Zones Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Zones <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Select Zones</option>
              </select>
            </div>

            {/* Service Categories Dropdown */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Categories
              </label>
              <div
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg cursor-pointer bg-white dark:bg-[#161c24] dark:border-gray-600 flex items-center justify-between"
              >
                <span className="text-gray-500 text-sm">
                  {formData.serviceCategories.length > 0
                    ? formData.serviceCategories.join(", ")
                    : "Select Service Categories"}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                />
              </div>

              {showDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white dark:bg-[#161c24] dark:border-gray-600 border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {serviceCategories.map((category) => (
                    <div
                      key={category}
                      onClick={() => toggleServiceCategory(category)}
                      className={`px-4 py-2.5 cursor-pointer hover:bg-gray-50 flex items-center gap-3 ${
                        formData.serviceCategories.includes(category) ? "bg-blue-50" : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.serviceCategories.includes(category)}
                        onChange={() => {}}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <span
                        className={`text-sm ${
                          formData.serviceCategories.includes(category)
                            ? "text-blue-600 font-medium"
                            : "text-gray-700"
                        }`}
                      >
                        {category}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Status Toggle — UNCHANGED */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="status"
                  checked={formData.status}
                  onChange={handleCheckbox}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-700">
                  {formData.status ? "Active" : "Inactive"}
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
