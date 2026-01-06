'use client';

import React, { useState } from 'react';
import { Plus, Save, ArrowLeft, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AddDriverDocument() {
  const router = useRouter();
  const [documentImage, setDocumentImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    driver: '',
    document: '',
    expiredAt: '',
    status: ''
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setDocumentImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = () => {
    console.log('Form Data:', formData);
    alert('Document saved successfully!');
  };

  const handleSaveAndExit = () => {
    console.log('Form Data:', formData);
    alert('Document saved successfully!');
    router.push('/driver-documents');
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-[#161c24] p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6 dark:text-gray-300">Add Driver Document</h1>

          <div className="bg-white dark:bg-[#161c24] dark:border-gray-500 border  rounded-lg shadow-sm p-8">
            <div className="space-y-6">
              {/* Document Image */}
              <div className="flex items-start gap-4">
                <label className="text-gray-700 font-medium w-48 dark:text-gray-300">
                  Document Image<span className="text-red-500">*</span>
                </label>
                <div className="flex-1">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="document-image"
                  />
                  <label
                    htmlFor="document-image"
                    className="flex items-center justify-center w-28 h-28 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors overflow-hidden"
                  >
                    {imagePreview ? (
                      <img 
                        src={imagePreview} 
                        alt="Preview" 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <Plus className="w-8 h-8 text-gray-400" />
                    )}
                  </label>
                </div>
              </div>

              {/* Driver */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <label className="text-gray-700 font-medium w-48 pt-2 dark:text-gray-300">
                  Driver<span className="text-red-500">*</span>
                </label>
                <div className="flex-1">
                  <div className="relative">
                    <select
                      value={formData.driver}
                      onChange={(e) => handleInputChange('driver', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-[#161c24] border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
                      required
                    >
                      <option value="">Select Driver</option>
                      <option value="driver1">Driver 1</option>
                      <option value="driver2">Driver 2</option>
                      <option value="driver3">Driver 3</option>
                    </select>
                    <ChevronDown className="w-5 h-5 text-gray-400 absolute right-4 top-4 pointer-events-none" />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    *To add new driver, simply click{' '}
                    <a href="#" className="text-blue-500 hover:underline font-medium">
                      here
                    </a>
                  </p>
                </div>
              </div>

              {/* Document */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <label className="text-gray-700 font-medium w-48 pt-2 dark:text-gray-300">
                  Document<span className="text-red-500">*</span>
                </label>
                <div className="flex-1">
                  <div className="relative">
                    <select
                      value={formData.document}
                      onChange={(e) => handleInputChange('document', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-[#161c24] border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
                      required
                    >
                      <option value="">Select Document</option>
                      <option value="license">Driver License</option>
                      <option value="puc">PUC</option>
                      <option value="insurance">Insurance</option>
                      <option value="registration">Registration</option>
                    </select>
                    <ChevronDown className="w-5 h-5 text-gray-400 absolute right-4 top-4 pointer-events-none" />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    *To add new document, simply click{' '}
                    <a href="#" className="text-blue-500 hover:underline font-medium">
                      here
                    </a>
                  </p>
                </div>
              </div>

              {/* Expired At */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <label className="text-gray-700 font-medium w-48 dark:text-gray-300">Expired At</label>
                <input
                  type="date"
                  value={formData.expiredAt}
                  onChange={(e) => handleInputChange('expiredAt', e.target.value)}
                  placeholder="Select Date.."
                  className="flex-1 px-4 py-3 bg-gray-50 border border-gray-300 dark:bg-[#161c24] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
                />
              </div>

              {/* Status */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <label className="text-gray-700 font-medium w-48 dark:text-gray-300">
                  Status<span className="text-red-500">*</span>
                </label>
                <div className="relative flex-1">
                  <select
                    value={formData.status}
                    onChange={(e) => handleInputChange('status', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-[#161c24] border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
                    required
                  >
                    <option value="">Select Document Status</option>
                    <option value="approved">Approved</option>
                    <option value="pending">Pending</option>
                    <option value="rejected">Rejected</option>
                  </select>
                  <ChevronDown className="w-5 h-5 text-gray-400 absolute right-4 top-4 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-blue-500 text-white rounded font-medium hover:bg-blue-600 transition-colors flex items-center "
                type="button"
              >
                Save
              </button>
              <button
                onClick={handleSaveAndExit}
                className="px-6 py-2 bg-blue-500 text-white rounded font-medium hover:bg-blue-600 transition-colors flex items-center "
                type="button"
              >
                Save and Exit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}