'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Plus, Save, ArrowLeft } from 'lucide-react';

interface SOSItem {
  id: number;
  name: string;
  image: string;
  status: boolean;
  createdAt: string;
}

function CreateSOSContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get('id');

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    status: true
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  // Load existing SOS if editing
  useEffect(() => {
    if (editId) {
      const storedSOS = localStorage.getItem('sos');
      if (storedSOS) {
        const sosList: SOSItem[] = JSON.parse(storedSOS);
        const sosItem = sosList.find(s => s.id === parseInt(editId));
        if (sosItem) {
          setFormData({
            name: sosItem.name,
            image: sosItem.image,
            status: sosItem.status
          });
          setImagePreview(sosItem.image);
          setIsEditing(true);
        }
      }
    }
  }, [editId]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (exitAfter: boolean = false) => {
    if (!formData.name.trim()) {
      alert('Please enter a name');
      return;
    }

    const storedSOS = localStorage.getItem('sos');
    let sosList: SOSItem[] = storedSOS ? JSON.parse(storedSOS) : [];

    if (isEditing && editId) {
      // Update existing SOS
      sosList = sosList.map(s =>
        s.id === parseInt(editId)
          ? {
              ...s,
              name: formData.name,
              image: imagePreview || s.image,
              status: formData.status
            }
          : s
      );
    } else {
      // Create new SOS
      const newSOS: SOSItem = {
        id: sosList.length > 0 ? Math.max(...sosList.map(s => s.id)) + 1 : 1,
        name: formData.name,
        image: imagePreview || '📋',
        status: formData.status,
        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
      };
      sosList.push(newSOS);
    }

    // Save to localStorage
    localStorage.setItem('sos', JSON.stringify(sosList));

    if (exitAfter) {
      router.push('/sos');
    } else {
      alert(isEditing ? 'SOS updated successfully!' : 'SOS saved successfully!');
      if (!isEditing) {
        setFormData({ name: '', image: '', status: true });
        setImagePreview(null);
        setImageFile(null);
      }
    }
  };

  const handleSaveAndExit = () => handleSave(true);

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white dark:bg-[#161c24] rounded-lg shadow-sm p-6">
          <h1 className="dark:text-gray-300 text-2xl font-semibold text-gray-800 mb-8">
           Add SOS
          </h1>

          <div className="space-y-6">
            {/* Image Upload */}
            <div className="flex items-start gap-4">
              <label className="text-gray-700 dark:text-gray-300  font-medium w-32 pt-2">
                Image<span className="text-red-500">*</span>
              </label>
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="flex items-center justify-center w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors overflow-hidden"
                  >
                    {imagePreview ? (
                      typeof imagePreview === 'string' && imagePreview.startsWith('data:')
                        ? <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-lg" />
                        : <div className="text-4xl">{imagePreview}</div>
                    ) : (
                      <Plus className="w-8 h-8 text-gray-400" />
                    )}
                  </label>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  *Upload image size 8268x4000px recommended
                </p>
              </div>
            </div>

            {/* Name Input */}
            <div className="flex items-center gap-0 sm:gap-4">
              <label className="text-gray-700 dark:text-gray-300  font-medium w-32">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="flex-1 px-0 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Status Toggle */}
            <div className="flex items-center gap-4">
              <label className="text-gray-700 font-medium w-32 dark:text-gray-300 ">Status</label>
              <button
                onClick={() => setFormData({ ...formData, status: !formData.status })}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${formData.status ? 'bg-blue-500' : 'bg-gray-300'}`}
                type="button"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${formData.status ? 'translate-x-6' : 'translate-x-1'}`}
                />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 mt-8">
            <button
              onClick={() => handleSave(false)}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition-colors flex items-center gap-2"
              type="button"
            >
              <Save className="w-4 h-4" />
              Save
            </button>
            <button
              onClick={handleSaveAndExit}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition-colors flex items-center gap-2"
              type="button"
            >
              <ArrowLeft className="w-4 h-4" />
              Save and Exit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CreateSOS() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CreateSOSContent />
    </Suspense>
  );
}
