'use client';

import React, { useState } from 'react';
import { Plus, Search, ChevronDown, Eye, CheckCircle, Settings, User } from 'lucide-react';
import Link from 'next/link';

interface Document {
  id: number;
  documentName: string;
  documentImage: string;
  driverName: string;
  driverEmail: string;
  driverAvatar: string;
  expiredAt: string;
  status: 'Approved' | 'Pending' | 'Rejected';
  createdAt: string;
}

export default function DriverDocuments() {
  const [documents] = useState<Document[]>([
    {
      id: 1,
      documentName: 'PUC',
      documentImage: '🪪',
      driverName: 'Test',
      driverEmail: 'vikesh142@gmail.com',
      driverAvatar: 'T',
      expiredAt: '2026-08-13',
      status: 'Approved',
      createdAt: '2026-01-06 05:43:16'
    },
    {
      id: 2,
      documentName: 'Driver License',
      documentImage: '🪪',
      driverName: 'Aaron Brown',
      driverEmail: 'aaron.driver@example.com',
      driverAvatar: '👨‍💼',
      expiredAt: 'N/A',
      status: 'Approved',
      createdAt: '2025-01-24 06:49:10'
    },
    {
      id: 3,
      documentName: 'Driver License',
      documentImage: '🪪',
      driverName: 'Robert King',
      driverEmail: 'robert.driver@example.com',
      driverAvatar: '👨',
      expiredAt: 'N/A',
      status: 'Pending',
      createdAt: '2025-01-24 06:46:32'
    },
    {
      id: 4,
      documentName: 'Driver License',
      documentImage: '🪪',
      driverName: 'Thomas Rodriguez',
      driverEmail: 'thomas.driver@example.com',
      driverAvatar: '👨‍💼',
      expiredAt: 'N/A',
      status: 'Approved',
      createdAt: '2025-01-24 06:44:28'
    },
    {
      id: 5,
      documentName: 'Driver License',
      documentImage: '🪪',
      driverName: 'Stephen Morris',
      driverEmail: 'stephen.driver@example.com',
      driverAvatar: '😎',
      expiredAt: 'N/A',
      status: 'Rejected',
      createdAt: '2025-01-24 06:43:45'
    }
  ]);

  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSelectAll = () => {
    if (selectedItems.length === documents.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(documents.map(d => d.id));
    }
  };

  const toggleSelectItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-700 text-white';
      case 'Pending':
        return 'bg-yellow-400 text-white';
      case 'Rejected':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-300 text-gray-800';
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-[#161c24] p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-300">Driver Documents</h1>
            <Link href="/driver/drivers-documents/create">
              <button className="px-4 py-2 border-2 border-blue-500 text-white bg-blue-500 rounded font-medium  transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add New
              </button>
            </Link>
          </div>

          {/* Filters */}
          <div className="bg-white dark:bg-[#161c24] dark:border-gray-500 border p-4 mb-4">
            {/* <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <button className="text-gray-900 font-medium">All (12)</button>
                <button className="text-gray-500 font-medium">Trash (0)</button>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder=""
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                  />
                </div>
                <button className="px-4 py-2 border-2 border-blue-500 text-white bg-blue-500 rounded font-medium hover:bg-teal-50 transition-colors">
                  Search
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded cursor-pointer bg-white">
                  <span className="text-gray-700">15</span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>
                <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded cursor-pointer bg-white">
                  <span className="text-gray-700">Bulk actions</span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>
                <button className="px-4 py-2 border-2 border-blue-500 text-white bg-blue-500 rounded font-medium hover:bg-teal-50 transition-colors">
                  Apply
                </button>
              </div>
              <div className="text-gray-600 font-medium">12 Items</div>
            </div> */}
            {/* --------------- */}
            {/* Filters */}
            <div className=" dark:bg-[#161c24] p-4 mb-4">
              {/* Tabs */}
              <div className="flex gap-4 text-sm border-b mb-6">
                <button className="dark:text-gray-300 pb-2 border-b-2 border-blue-600 text-blue-600 font-medium">
                  All
                </button>
                <button className="dark:text-gray-300 pb-2 text-gray-600 hover:text-gray-800">
                  trash
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
            {/* ================== */}

            {/* Table */}
            <div className="bg-white overflow-x-auto dark:bg-[#161c24] dark:border-gray-500 border">
              <table className="w-full ">
                <thead className="bg-gray-50 dark:bg-[#161c24] border-b border-gray-200 ">
                  <tr>
                    <th className="px-5 py-3 text-left w-12">
                      <input
                        type="checkbox"
                        checked={selectedItems.length === documents.length}
                        onChange={toggleSelectAll}
                        className="w-4 h-4 rounded border-gray-300 cursor-pointer"
                      />
                    </th>
                    <th className="dark:text-gray-300 px-5 py-3 text-left text-gray-700 font-semibold">
                      Document
                    </th>
                    <th className="dark:text-gray-300 px-5 py-3 text-left text-gray-700 font-semibold">
                      Driver
                    </th>
                    <th className="dark:text-gray-300 px-5 py-3 text-left text-gray-700 font-semibold">
                      Expired At
                    </th>
                    <th className="dark:text-gray-300 px-5 py-3 text-left text-gray-700 font-semibold">
                      Status
                    </th>
                    <th className="dark:text-gray-300 px-5 py-3 text-left text-gray-700 font-semibold">
                      Created At
                    </th>
                    {/* <th className="px-6 py-4 text-left text-gray-700 font-semibold">
                    Action
                  </th> */}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {documents.map((doc) => (
                    <tr key={doc.id} className="">
                      <td className="px-5 py-3">
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(doc.id)}
                          onChange={() => toggleSelectItem(doc.id)}
                          className="w-4 h-4 rounded border-gray-300 cursor-pointer"
                        />
                      </td>
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded flex items-center justify-center text-2xl">
                            {doc.documentImage}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 dark:text-gray-300">{doc.documentName}</div>
                            <div className="text-sm text-gray-500">
                              <button className="text-gray-500 text-[12px] hover:text-gray-700 dark:text-gray-300">Edit</button>
                              <span className="">|</span>
                              <button className="text-red-500 hover:text-red-700 text-[12px]">Move To Trash</button>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 border border-gray-400  text-lg font-semibold">
                            <User />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 dark:text-gray-300">{doc.driverName}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-300">{doc.driverEmail}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-3 text-gray-900 dark:text-gray-300">{doc.expiredAt}</td>
                      <td className="px-5 py-3">
                        <span className={`px-3 py-1 rounded text-sm font-medium ${getStatusColor(doc.status)}`}>
                          {doc.status}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-gray-900 dark:text-gray-300">{doc.createdAt}</td>
                      {/* <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors">
                          <Eye className="w-4 h-4 text-gray-700" />
                        </button>
                        <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors">
                          <CheckCircle className="w-4 h-4 text-gray-700" />
                        </button>
                        <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors">
                          <Settings className="w-4 h-4 text-gray-700" />
                        </button>
                      </div>
                    </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}