import MapZoneCreator from "./MapZoneCreator"

export default function CreateZonePage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Create New Zone</h1>
        <p className="text-sm text-gray-500">Draw a zone by connecting points on the map</p>
      </div>

      <MapZoneCreator />
    </div>
  )
}