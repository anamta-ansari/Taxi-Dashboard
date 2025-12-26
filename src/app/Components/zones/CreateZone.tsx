import MapZoneCreator from "./MapZoneCreator"

export default function CreateZonePage() {
  return (
    <div className="dark:bg-[#161c24] p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="dark:text-gray-300 text-2xl font-semibold text-gray-900">Create New Zone</h1>
        <p className="dark:text-gray-300 text-sm text-gray-500">Draw a zone by connecting points on the map</p>
      </div>

      <MapZoneCreator />
    </div>
  )
}