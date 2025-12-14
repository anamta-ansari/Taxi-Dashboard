"use client"
import { useState } from "react"
import { Plus, X } from "lucide-react"

interface ImageUploadProps {
  label: string
  value: string
  onChange: (value: string) => void
  required?: boolean
}

export default function ImageUpload({ label, value, onChange, required = false }: ImageUploadProps) {
  const [preview, setPreview] = useState(value)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64 = reader.result as string
        setPreview(base64)
        onChange(base64)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemove = () => {
    setPreview("")
    onChange("")
  }

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {!preview ? (
          <label className="flex flex-col items-center justify-center w-28 h-28 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition">
            <Plus className="w-6 h-6 text-gray-400" />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        ) : (
          <div className="relative w-28 h-28 border-2 border-gray-300 rounded-lg overflow-hidden">
            <img src={preview} alt={label} className="w-full h-full object-cover" />
            <button
              onClick={handleRemove}
              className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}