'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Search, ChevronDown } from 'lucide-react';

interface SOSItem {
  id: number;
  name: string;
  image: string;
  status: boolean;
  createdAt: string;
}

export default function SOS() {
  const router = useRouter();
  const [sosList, setSOSList] = useState<SOSItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [filterTab, setFilterTab] = useState<'all' | 'active' | 'deactive' | 'trash'>('all');

  // Load SOS data from localStorage on mount
  useEffect(() => {
    const storedSOS = localStorage.getItem('sos');
    if (storedSOS) {
      setSOSList(JSON.parse(storedSOS));
    } else {
      // Initial data if localStorage is empty
      const initialData: SOSItem[] = [
        { id: 1, name: 'Fire Emergency', image: '🔥', status: true, createdAt: '2025-11-19 12:28:03' },
        { id: 2, name: 'Medical Emergency', image: '🚑', status: true, createdAt: '2025-11-19 12:28:35' },
        { id: 3, name: 'Vehicle Accident', image: '🚗💥', status: true, createdAt: '2025-11-19 12:28:48' },
        { id: 4, name: 'Police Assistance', image: '🚓', status: true, createdAt: '2025-11-19 12:29:04' }
      ];
      setSOSList(initialData);
      localStorage.setItem('sos', JSON.stringify(initialData));
    }
  }, []);

  const activeCount = sosList.filter(s => s.status).length;
  const deactiveCount = sosList.filter(s => !s.status).length;
  const trashCount = 0;

  const filteredSOS = sosList
    .filter(s => {
      if (filterTab === 'active') return s.status;
      if (filterTab === 'deactive') return !s.status;
      return true;
    })
    .filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const toggleSelectAll = () => {
    if (selectedItems.length === filteredSOS.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredSOS.map(s => s.id));
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
    router.push(`/sos/create?id=${id}`);
  };

  const handleMoveToTrash = (id: number) => {
    const updatedList = sosList.filter(s => s.id !== id);
    setSOSList(updatedList);
    localStorage.setItem('sos', JSON.stringify(updatedList));
  };

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="min-h-screen dark:bg-[#161c24] bg-white border rounded shadow">
      <div className="max-w-7xl mx-auto p-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">SOS</h1>
          <button
            onClick={() => router.push('/sos/create')}
            className="px-4 py-2 bg-blue-500  border-2 border-blue-500 text-white rounded-lg font-medium  transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add SOS
          </button>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 dark:bg-[#161c24] p-4 mb-4">
          {/* Tabs */}
          <div className="flex gap-4 text-sm border-b mb-6">
            <button className="dark:text-gray-300 pb-2 border-b-2 border-blue-600 text-blue-600 font-medium">
              All
            </button>
            <button className="dark:text-gray-300 pb-2 text-gray-600 hover:text-gray-800">
              Active
            </button>
            <button className="dark:text-gray-300 pb-2 text-gray-600 hover:text-gray-800">
              Inactive
            </button>
          </div>

          {/* Table Controls */}
          <div className="flex flex-col sm:flex-row items-center gap-4 px-4 py-3 border-b">
            <div className="flex items-center gap-3">
              {/* Pagination Select */}
              <select className="border dark:bg-[#161c24] dark:border-gray-500 rounded px-2 py-2 text-sm appearance-none bg-white">
                <option>15</option>
                <option>25</option>
                <option>50</option>
              </select>

              {/* Bulk Actions Select */}
              <div className="relative">
                <select className="border dark:bg-[#161c24] dark:border-gray-500 rounded px-2 py-2 text-sm appearance-none bg-white pr-8">
                  <option>Bulk actions</option>
                  <option>Activate</option>
                  <option>Deactivate</option>
                  <option>Delete</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              <button className="bg-blue-500 text-white px-3 py-2 rounded text-sm hover:bg-blue-600 transition-colors">
                Apply
              </button>
            </div>

            <div className=" sm:ml-auto flex items-center gap-1">
              <input
                type="search"
                placeholder="Search"
                className="border rounded px-2 py-2 text-sm"
              />
              <button className="px-2 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-[#161c24] rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-[#161c24] border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left">
                  <input
                    type="checkbox"
                    checked={selectedItems.length === filteredSOS.length && filteredSOS.length > 0}
                    onChange={toggleSelectAll}
                    className="w-4 h-4 rounded border-gray-300 cursor-pointer"
                  />
                </th>
                <th className="dark:text-gray-300 px-6 py-4 text-left font-semibold text-gray-700">Name</th>
                <th className="dark:text-gray-300 px-6 py-4 text-left font-semibold text-gray-700">Status</th>
                <th className="dark:text-gray-300 px-6 py-4 text-left font-semibold text-gray-700">Created At</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {filteredSOS.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                    No SOS found
                  </td>
                </tr>
              ) : (
                filteredSOS.map((sos) => (
                  <tr key={sos.id} className="">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(sos.id)}
                        onChange={() => toggleSelectItem(sos.id)}
                        className="w-4 h-4 rounded border-gray-300 cursor-pointer"
                      />
                    </td>

                    {/* Name + Image */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-2xl overflow-hidden">
                          {sos.image?.startsWith('data:') ? (
                            <img src={sos.image} alt={sos.name} className="w-full h-full object-cover rounded-lg" />
                          ) : (
                            <span>{sos.image}</span>
                          )}
                        </div>
                        <div>
                          <div className="font-medium text-gray-800 dark:text-gray-300">{sos.name}</div>
                          <div className="text-sm text-gray-500">
                            <button onClick={() => handleEdit(sos.id)} className="text-blue-500 hover:underline">Edit</button>
                            <span className="mx-1">|</span>
                            <button onClick={() => handleMoveToTrash(sos.id)} className="text-red-500 hover:underline">Move To Trash</button>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Status toggle */}
                    <td className="px-6 py-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={sos.status}
                          onChange={() => {
                            const updatedList = sosList.map(s =>
                              s.id === sos.id ? { ...s, status: !s.status } : s
                            );
                            setSOSList(updatedList);
                            localStorage.setItem('sos', JSON.stringify(updatedList));
                          }}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-300 peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer-checked:bg-blue-500 transition-all"></div>
                        <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-all peer-checked:translate-x-5" />
                      </label>
                    </td>

                    {/* Created At */}
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{sos.createdAt}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
