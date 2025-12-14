import VehicleForm from "@/app/Components/vehicles/VehicleForm"

export default function CreateVehiclePage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Add Vehicle Type</h1>
        <p className="text-sm text-gray-500">Create a new vehicle type for your fleet</p>
      </div>

      <VehicleForm />

      {/* Footer */}
      <div className="mt-8 pt-4 border-t text-center text-sm text-gray-500">
        Copyright 2025 © Taxido theme by PixelStrap
      </div>
    </div>
  )
}