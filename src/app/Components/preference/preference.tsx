'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Search, ChevronDown } from 'lucide-react';

interface Preference {
  id: number;
  name: string;
  image: string;
  status: boolean;
  createdAt: string;
}

export default function Preference() {
  const router = useRouter();
  const [preferences, setPreferences] = useState<Preference[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [filterTab, setFilterTab] = useState<'all' | 'active' | 'deactive' | 'trash'>('all');

  // Load preferences from localStorage on mount
  useEffect(() => {
    const storedPreferences = localStorage.getItem('preferences');
    if (storedPreferences) {
      setPreferences(JSON.parse(storedPreferences));
    } else {
      const initialData: Preference[] = [
        { id: 1, name: 'Pet Allowed', image: '🐕', status: true, createdAt: '2025-11-19 12:28:03' },
        { id: 2, name: 'Extra Luggage Space', image: '🧳', status: true, createdAt: '2025-11-19 12:28:35' },
        { id: 3, name: 'Child Seat', image: '👶', status: true, createdAt: '2025-11-19 12:28:48' },
        { id: 4, name: 'Smoke-Free', image: '🚭', status: true, createdAt: '2025-11-19 12:29:04' }
      ];
      setPreferences(initialData);
      localStorage.setItem('preferences', JSON.stringify(initialData));
    }
  }, []);

  const activeCount = preferences.filter(p => p.status).length;
  const deactiveCount = preferences.filter(p => !p.status).length;
  const trashCount = 0;

  const filteredPreferences = preferences
    .filter(pref => {
      if (filterTab === 'active') return pref.status;
      if (filterTab === 'deactive') return !pref.status;
      return true;
    })
    .filter(pref => pref.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const toggleSelectAll = () => {
    if (selectedItems.length === filteredPreferences.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredPreferences.map(p => p.id));
    }
  };

  const toggleSelectItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleEdit = (id: number) => {
    router.push(`/preference/create?id=${id}`);
  };

  const handleMoveToTrash = (id: number) => {
    const updatedPreferences = preferences.filter(p => p.id !== id);
    setPreferences(updatedPreferences);
    localStorage.setItem('preferences', JSON.stringify(updatedPreferences));
  };

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <>
      <div className="min-h-screen bg-white border rounded shadow">
        <div className="max-w-7xl mx-auto p-6">

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">Preferences</h1>
            <button
              onClick={() => router.push('/preferences/create')}
              className="px-4 py-2 bg-white border-2 border-blue-500 text-blue-500 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add New
            </button>
          </div>

          {/* Filters */}
          <div className="bg-gray-50  p-4 mb-4">
            <div className="flex items-center gap-4 mb-4">
              <button onClick={() => setFilterTab('all')} className={`font-medium ${filterTab === 'all' ? 'text-gray-700' : 'text-gray-500'}`}>
                All ({preferences.length})
              </button>
              <button onClick={() => setFilterTab('active')} className={`font-medium ${filterTab === 'active' ? 'text-gray-700' : 'text-gray-500'}`}>
                Active ({activeCount})
              </button>
              <button onClick={() => setFilterTab('deactive')} className={`font-medium ${filterTab === 'deactive' ? 'text-gray-700' : 'text-gray-500'}`}>
                Deactive ({deactiveCount})
              </button>
              <button onClick={() => setFilterTab('trash')} className={`font-medium ${filterTab === 'trash' ? 'text-gray-700' : 'text-gray-500'}`}>
                Trash ({trashCount})
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg cursor-pointer">
                  <span className="text-gray-700">15</span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>
                <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg cursor-pointer">
                  <span className="text-gray-700">Bulk actions</span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>
                <button className="px-4 py-2 border-2 borde-blue-500 text-blue-500 rounded-lg hover:bg-blue-50">
                  Apply
                </button>
              </div>

              <div className="flex  items-center gap-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    className="pl-4 pr-7 py-2 border border-gray-300 rounded focus:ring-blue-500"
                  />
                  <Search className="w-4 h-4 text-gray-400 absolute right-3 top-3" />
                </div>
                <button onClick={handleSearch} className="px-3 py-2 border-2 border-blue-500 text-blue-500 rounded hover:bg-blue-50">
                  Search
                </button>
              </div>

              {/* <div className="text-gray-600 font-medium">{filteredPreferences.length} Items</div> */}
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <input
                      type="checkbox"
                      checked={selectedItems.length === filteredPreferences.length && filteredPreferences.length > 0}
                      onChange={toggleSelectAll}
                      className="w-4 h-4 rounded border-gray-300 cursor-pointer"
                    />
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Name </th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Status </th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Created At </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {filteredPreferences.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                      No preferences found
                    </td>
                  </tr>
                ) : (
                  filteredPreferences.map((pref) => (
                    <tr key={pref.id} className="hover:bg-gray-50">

                      {/* CHECKBOX */}
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(pref.id)}
                          onChange={() => toggleSelectItem(pref.id)}
                          className="w-4 h-4 rounded border-gray-300 cursor-pointer"
                        />
                      </td>

                      {/* NAME */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                            {pref.image}
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">{pref.name}</div>
                            <div className="text-sm text-gray-500">
                              <button onClick={() => handleEdit(pref.id)} className="text-blue-500 hover:underline">Edit</button>
                              <span className="mx-1">|</span>
                              <button onClick={() => handleMoveToTrash(pref.id)} className="text-red-500 hover:underline">Move To Trash</button>
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* ✅ NEW STATUS TOGGLE */}
                      <td className="px-6 py-4">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={pref.status}
                            onChange={() => {
                              const updated = preferences.map(p =>
                                p.id === pref.id ? { ...p, status: !p.status } : p
                              );
                              setPreferences(updated);
                              localStorage.setItem('preferences', JSON.stringify(updated));
                            }}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-300 peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer-checked:bg-blue-500 transition-all"></div>

                          <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-all peer-checked:translate-x-5" />
                        </label>
                      </td>

                      {/* CREATED DATE */}
                      <td className="px-6 py-4 text-gray-600">{pref.createdAt}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>


        </div>
      </div>
    </>
  );
}
