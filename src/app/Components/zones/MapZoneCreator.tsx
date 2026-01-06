"use client"
import { useState, useCallback, useRef } from "react"
import { GoogleMap, LoadScript, Marker, Polygon, Polyline, Autocomplete } from "@react-google-maps/api"
import { useRouter } from "next/navigation"
import { Search, Trash2, RotateCcw } from "lucide-react"

const libraries: ("places" | "drawing" | "geometry")[] = ["places", "drawing", "geometry"]

const mapContainerStyle = {
  width: "100%",
  height: "600px"
}

const defaultCenter = {
  lat: 24.8607,
  lng: 67.0011 // Karachi
}

interface Point {
  lat: number
  lng: number
}

export default function MapZoneCreator() {
  const router = useRouter()
  const [points, setPoints] = useState<Point[]>([])
  const [mapCenter, setMapCenter] = useState(defaultCenter)
  const [zoom, setZoom] = useState(12)
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null)
  
  const [formData, setFormData] = useState({
    name: "",
    currency: "USD",
    distanceType: "Km",
    status: true,
  })

  const handleMapClick = useCallback((e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const newPoint = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      }
      setPoints(prev => [...prev, newPoint])
    }
  }, [])

  const handleMarkerClick = useCallback((index: number) => {
    if (points.length >= 3 && index === 0 && !isPolygonClosed()) {
      // Close polygon by adding first point at end
      setPoints(prev => [...prev, prev[0]])
    }
  }, [points])

  const isPolygonClosed = () => {
    if (points.length < 3) return false
    const first = points[0]
    const last = points[points.length - 1]
    return first.lat === last.lat && first.lng === last.lng
  }

  const clearAll = () => {
    setPoints([])
  }

  const undoLast = () => {
    setPoints(prev => prev.slice(0, -1))
  }

  const removePoint = (index: number) => {
    setPoints(prev => prev.filter((_, i) => i !== index))
  }

  const handlePlaceSelect = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace()
      if (place.geometry?.location) {
        setMapCenter({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        })
        setZoom(14)
      }
    }
  }

  const handleSave = () => {
    if (!formData.name) {
      alert("Please enter a zone name")
      return
    }

    if (points.length < 3 || !isPolygonClosed()) {
      alert("Please complete the zone by connecting at least 3 points")
      return
    }

    const existingZones = JSON.parse(localStorage.getItem("zones") || "[]")
    const now = new Date()

    const newZone = {
      id: Date.now().toString(),
      ...formData,
      coordinates: points,
      createdAt: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')} ${now.getHours() >= 12 ? 'PM' : 'AM'}`,
    }

    existingZones.push(newZone)
    localStorage.setItem("zones", JSON.stringify(existingZones))

    router.push("/zones")
  }

  return (
    <div className="grid grid-cols-1 dark:bg-[#161c24] lg:grid-cols-[350px_1fr] gap-6">
      {/* Form Panel */}
      <div className="bg-white dark:bg-[#161c24]  rounded-lg border p-6 h-fit">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6 text-sm text-blue-900">
          <strong>How to create a zone:</strong>
          <ul className="ml-5 mt-2 space-y-1">
            <li>Search for a location</li>
            <li>Click on map to add points</li>
            <li>Connect at least 3 points</li>
            <li>Click first point to close zone</li>
          </ul>
        </div>

        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
          libraries={libraries}
        >
          <div className="mb-4">
            <label className="dark:text-gray-300 block text-sm font-medium text-gray-700 mb-2">
              Search Location
            </label>
            <Autocomplete
              onLoad={(auto) => (autocompleteRef.current = auto)}
              onPlaceChanged={handlePlaceSelect}
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for a place..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </Autocomplete>
          </div>
        </LoadScript>

        <div className="space-y-4">
          <div>
            <label className="dark:text-gray-300 block text-sm font-medium text-gray-700 mb-2">
              Zone Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter zone name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="dark:text-gray-300 block text-sm font-medium text-gray-700 mb-2">
              Currency *
            </label>
            <select
              value={formData.currency}
              onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
              className="w-full px-4 py-2 border dark:bg-[#161c24] border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="PKR">PKR</option>
              <option value="INR">INR</option>
            </select>
          </div>

          <div>
            <label className="block dark:text-gray-300 text-sm font-medium text-gray-700 mb-2">
              Distance Type *
            </label>
            <select
              value={formData.distanceType}
              onChange={(e) => setFormData({ ...formData, distanceType: e.target.value })}
              className="w-full px-4 py-2 dark:bg-[#161c24] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="Km">Km</option>
              <option value="Miles">Miles</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.checked })}
              className="w-4 h-4 text-blue-600 rounded"
            />
            <label className="text-sm text-gray-700">Active</label>
          </div>

          <div>
            <label className="block dark:text-gray-300 text-sm font-medium text-gray-700 mb-2">
              Points Added: {points.length}
            </label>
            <div className="max-h-40 dark:bg-[#161c24] dark:text-gray-300 overflow-y-auto bg-gray-50 dark:bg-[#161c24] rounded-lg p-2 space-y-1">
              {points.map((p, i) => (
                <div key={i} className="flex justify-between items-center text-xs bg-white dark:bg-[#161c24] dark:text-gray-300  dark:border-gray-500 border px-2 py-1 rounded">
                  <span>{i + 1}. ({p.lat.toFixed(5)}, {p.lng.toFixed(5)})</span>
                  <button
                    onClick={() => removePoint(i)}
                    className="text-red-600 hover:text-red-700 font-bold"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t">
            <button
              onClick={handleSave}
              disabled={points.length < 3 || !isPolygonClosed()}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Create Zone
            </button>
            <button
              onClick={() => router.back()}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Map Panel */}
      <div className="bg-white dark:bg-[#161c24] rounded-lg border dark:border-gray-500 overflow-hidden relative">
        <div className="absolute top-4 right-4 z-10 bg-white rounded-lg shadow-lg p-2 space-y-2">
          <button
            onClick={clearAll}
            className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 rounded w-full"
          >
            <Trash2 className="w-4 h-4" />
            Clear All
          </button>
          <button
            onClick={undoLast}
            className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 rounded w-full"
          >
            <RotateCcw className="w-4 h-4" />
            Undo Last
          </button>
        </div>

        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
          libraries={libraries}
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={mapCenter}
            zoom={zoom}
            onClick={handleMapClick}
            options={{
              streetViewControl: false,
              mapTypeControl: true,
              fullscreenControl: true,
            }}
          >
            {/* Markers */}
            {points.map((point, index) => (
              <Marker
                key={index}
                position={point}
                label={String(index + 1)}
                onClick={() => handleMarkerClick(index)}
                draggable
                onDragEnd={(e) => {
                  if (e.latLng) {
                    const newPoints = [...points]
                    newPoints[index] = {
                      lat: e.latLng.lat(),
                      lng: e.latLng.lng()
                    }
                    setPoints(newPoints)
                  }
                }}
              />
            ))}

            {/* Lines connecting points */}
            {points.length >= 2 && !isPolygonClosed() && (
              <Polyline
                path={points}
                options={{
                  strokeColor: "#14b8a6",
                  strokeWeight: 2,
                }}
              />
            )}

            {/* Filled polygon when closed */}
            {points.length >= 3 && isPolygonClosed() && (
              <Polygon
                paths={points}
                options={{
                  strokeColor: "#14b8a6",
                  strokeWeight: 2,
                  fillColor: "#14b8a6",
                  fillOpacity: 0.3,
                }}
              />
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  )
}
