import VehicleForm from "@/app/Components/vehicles/VehicleForm"

export default function CreateVehiclePage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen dark:bg-[#161c24] dark:border-gray-600 border">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-300">Add Vehicle Type</h1>
        <p className="text-sm text-gray-500 dark:text-gray-300">Create a new vehicle type for your fleet</p>
      </div>

      <VehicleForm />

      {/* Footer */}
     
    </div>
  )
}