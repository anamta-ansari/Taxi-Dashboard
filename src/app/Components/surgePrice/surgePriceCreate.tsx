"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  startDate: string;
  endDate: string;
  day: string;
  status: boolean;
}

export default function CreateSurgePrice() {
  const router = useRouter();

  const [form, setForm] = useState<FormData>({
    startDate: "",
    endDate: "",
    day: "",
    status: true,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const daysList = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

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

    // Validate that end date is after start date
    if (form.startDate && form.endDate && form.startDate > form.endDate) {
      newErrors.endDate = "End date must be after start date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Save to localStorage
  const handleSave = () => {
    if (!validateForm()) {
      alert("Please fill in all required fields correctly");
      return;
    }

    const existingData = JSON.parse(localStorage.getItem("surgePrices") || "[]");

    const newEntry = {
      id: Date.now().toString(),
      day: form.day,
      startDate: form.startDate,
      endDate: form.endDate,
      status: form.status,
      createdAt: new Date().toLocaleString(),
    };

    const updatedData = [...existingData, newEntry];
    localStorage.setItem("surgePrices", JSON.stringify(updatedData));

    // Trigger custom event to update the table
    window.dispatchEvent(new Event("localStorageUpdate"));

    alert("Surge price saved successfully!");

    // Reset form
    setForm({
      startDate: "",
      endDate: "",
      day: "",
      status: true,
    });
    setErrors({});
  };

  // Save and redirect
  const handleSaveAndExit = () => {
    if (!validateForm()) {
      alert("Please fill in all required fields correctly");
      return;
    }

    const existingData = JSON.parse(localStorage.getItem("surgePrices") || "[]");

    const newEntry = {
      id: Date.now().toString(),
      day: form.day,
      startDate: form.startDate,
      endDate: form.endDate,
      status: form.status,
      createdAt: new Date().toLocaleString(),
    };

    const updatedData = [...existingData, newEntry];
    localStorage.setItem("surgePrices", JSON.stringify(updatedData));

    // Trigger custom event
    window.dispatchEvent(new Event("localStorageUpdate"));

    router.push("/surge-price");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 dark:bg-[#161c24]">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6 dark:bg-[#161c24] dark:border-gray-500 border ">
          <h1 className="text-2xl font-semibold mb-6 dark:text-gray-300">Add Surge Price</h1>

          {/* Start Date */}
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
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
            <label className="dark:text-gray-300 block mb-2 font-medium text-gray-700">
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
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
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
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Status</label>
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
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
            >
              Save
            </button>

            <button
              onClick={handleSaveAndExit}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
            >
              Save & Exit
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