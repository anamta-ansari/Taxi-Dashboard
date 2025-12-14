
"use client";

import { useEffect, useState, useRef } from "react";

export default function HeatmapPage() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const heatmapRef = useRef<any>(null);

  const [showHeatmap, setShowHeatmap] = useState(true);
  const [useAltGradient, setUseAltGradient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Google Maps gradients
  const originalGradient = [
    "rgba(0, 0, 255, 0)",
    "blue",
    "lime",
    "orange",
    "red",
  ];

  const altGradient = [
    "rgba(128, 0, 128, 0)",
    "purple",
    "pink",
    "yellow",
    "green",
  ];

  const points = [
    { lat: 24.8607, lng: 67.0011, weight: 5 },
    { lat: 24.8700, lng: 67.0100, weight: 8 },
    { lat: 24.8500, lng: 67.0200, weight: 3 },
    { lat: 24.8800, lng: 67.0300, weight: 6 },
  ];

  // Load Google Maps script dynamically
  const loadGoogleScript = () => {
    return new Promise<void>((resolve) => {
      const existingScript = document.getElementById("google-maps-script");
      if (existingScript) {
        resolve();
        return;
      }

      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

      if (!apiKey) {
        console.error("❌ Google Maps API Key (NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) is missing");
        return;
      }

      const script = document.createElement("script");
      script.id = "google-maps-script";
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=visualization`;
      script.async = true;
      script.onload = () => resolve();

      document.body.appendChild(script);
    });
  };

  // Initialize map
  useEffect(() => {
    const initMap = async () => {
      await loadGoogleScript();

      const google = (window as any).google;
      if (!google) {
        console.error("❌ Google Maps failed to load.");
        return;
      }

      const map = new google.maps.Map(mapContainerRef.current, {
        center: { lat: 24.8607, lng: 67.0011 },
        zoom: 12,
      });

      mapRef.current = map;

      const heatmap = new google.maps.visualization.HeatmapLayer({
        data: points.map((p) => ({
          location: new google.maps.LatLng(p.lat, p.lng),
          weight: p.weight,
        })),
        radius: 30,
        opacity: 0.8,
        gradient: originalGradient,
      });

      heatmap.setMap(map);
      heatmapRef.current = heatmap;

      setIsLoading(false);
    };

    initMap();
  }, []);

  // Toggle heatmap visibility
  const handleToggleHeatmap = () => {
    if (!heatmapRef.current) return;

    heatmapRef.current.setMap(showHeatmap ? null : mapRef.current);
    setShowHeatmap(!showHeatmap);
  };

  // Change gradient
  const handleChangeGradient = () => {
    if (!heatmapRef.current) return;

    heatmapRef.current.set(
      "gradient",
      useAltGradient ? originalGradient : altGradient
    );
    setUseAltGradient(!useAltGradient);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-semibold mb-2">Heat Map</h1>
        <p className="text-gray-600 mb-4">
          This heatmap represents ride request data. Areas with higher ride
          requests appear heated (red/orange).
        </p>

        <div className="flex gap-3 mb-4">
          <button
            onClick={handleToggleHeatmap}
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {showHeatmap ? "Hide Heatmap" : "Show Heatmap"}
          </button>

          <button
            onClick={handleChangeGradient}
            disabled={isLoading}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition disabled:opacity-50"
          >
            Change Gradient
          </button>
        </div>

        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 rounded-lg z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading map...</p>
            </div>
          </div>
        )}

        <div
          ref={mapContainerRef}
          className="w-full h-[400px] rounded-lg border shadow-sm relative"
        />
      </div>
    </div>
  );
}
