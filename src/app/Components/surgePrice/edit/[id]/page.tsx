"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

interface FormData {
  startDate: string;
  endDate: string;
  day: string;
  status: boolean;
}

export default function EditSurgePrice() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const [form, setForm] = useState<FormData>({
    startDate: "",
    endDate: "",
    day: "",
    status: true,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(true);

  const daysList = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // Load existing data
  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem("surgePrices") || "[]");
    const itemToEdit = existingData.find((item: any) => item.id === id);

    if (itemToEdit) {
      setForm({
        startDate: itemToEdit.startDate,
        endDate: itemToEdit.endDate,
        day: itemToEdit.day,
        status: itemToEdit.status,
      });
    } else {
      alert("Item not found!");
      router.push("/surge-price");
    }

    setLoading(false);
  }, [id, router]);

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!form.startDate) {
      newErrors.startDate = "Start date is required";
    }

    if (!form.endDate) {
      newErrors.endDate = "End date is required";
    }

    if (!form.day) {
      newErrors.day = "Day selection is required";
    }

    if (form.startDate && form.endDate && form.startDate > form.endDate) {
      newErrors.endDate = "End date must be after start date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Update the item
  const handleUpdate = () => {
    if (!validateForm()) {
      alert("Please fill in all required fields correctly");
      return;
    }

    const existingData = JSON.parse(localStorage.getItem("surgePrices") || "[]");

    const updatedData = existingData.map((item: any) => {
      if (item.id === id) {
        return {
          ...item,
          day: form.day,
          startDate: form.startDate,
          endDate: form.endDate,
          status: form.status,
        };
      }
      return item;
    });

    localStorage.setItem("surgePrices", JSON.stringify(updatedData));
    window.dispatchEvent(new Event("localStorageUpdate"));

    alert("Surge price updated successfully!");
  };

  // Update and redirect
  const handleUpdateAndExit = () => {
    if (!validateForm()) {
      alert("Please fill in all required fields correctly");
      return;
    }

    const existingData = JSON.parse(localStorage.getItem("surgePrices") || "[]");

    const updatedData = existingData.map((item: any) => {
      if (item.id === id) {
        return {
          ...item,
          day: form.day,
          startDate: form.startDate,
          endDate: form.endDate,
          status: form.status,
        };
      }
      return item;
    });

    localStorage.setItem("surgePrices", JSON.stringify(updatedData));
    window.dispatchEvent(new Event("localStorageUpdate"));

    router.push("/surge-price");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-semibold mb-6">Edit Surge Price</h1>

          {/* Start Date */}
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              Start Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              required
              value={form.startDate}
              onChange={(e) => {
                setForm({ ...form, startDate: e.target.value });
                setErrors({ ...errors, startDate: "" });
              }}
              className={`border rounded p-2 w-full ${
                errors.startDate ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.startDate && (
              <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>
            )}
          </div>

          {/* End Date */}
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              End Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              required
              value={form.endDate}
              onChange={(e) => {
                setForm({ ...form, endDate: e.target.value });
                setErrors({ ...errors, endDate: "" });
              }}
              className={`border rounded p-2 w-full ${
                errors.endDate ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.endDate && (
              <p className="text-red-500 text-sm mt-1">{errors.endDate}</p>
            )}
          </div>

          {/* Days Dropdown */}
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              Select Day <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={form.day}
              onChange={(e) => {
                setForm({ ...form, day: e.target.value });
                setErrors({ ...errors, day: "" });
              }}
              className={`border rounded p-2 w-full ${
                errors.day ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select a day</option>
              {daysList.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
            {errors.day && (
              <p className="text-red-500 text-sm mt-1">{errors.day}</p>
            )}
          </div>

          {/* Status Toggle */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-700">Status</label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setForm({ ...form, status: !form.status })}
                className={`w-12 h-6 rounded-full flex items-center transition ${
                  form.status ? "bg-blue-500" : "bg-gray-400"
                }`}
              >
                <span
                  className={`w-5 h-5 bg-white rounded-full shadow transform transition ${
                    form.status ? "translate-x-6" : "translate-x-1"
                  }`}
                ></span>
              </button>
              <span className="text-sm text-gray-600">
                {form.status ? "Active" : "Inactive"}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleUpdate}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Update
            </button>

            <button
              onClick={handleUpdateAndExit}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Update & Exit
            </button>

            <button
              onClick={() => router.push("/surge-price")}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}