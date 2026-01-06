'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Role } from '@/types/user';

const initialRoles: Role[] = [
  {
    id: '1',
    name: 'Dispatcher',
    status: 'active',
    createdAt: '2025-10-15 03:11:41 PM'
  }
];

export default function UserRoles() {
  const router = useRouter();
  const [roles, setRoles] = useState<Role[]>(initialRoles);

  useEffect(() => {
    // Initialize localStorage with initial roles if empty
    const storedRoles = localStorage.getItem('roles');
    if (!storedRoles) {
      localStorage.setItem('roles', JSON.stringify(initialRoles));
    } else {
      setRoles(JSON.parse(storedRoles));
    }
  }, []);

  // Reload roles when the page becomes visible (after navigation back)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        const storedRoles = localStorage.getItem('roles');
        if (storedRoles) {
          setRoles(JSON.parse(storedRoles));
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const handleStatusToggle = (id: string) => {
    const updatedRoles = roles.map(role =>
      role.id === id
        ? { ...role, status: (role.status === 'active' ? 'inactive' : 'active') as 'active' | 'inactive' }
        : role
    );
    setRoles(updatedRoles);
    localStorage.setItem('roles', JSON.stringify(updatedRoles));
  };

  const handleDelete = (id: string) => {
    const updatedRoles = roles.filter(role => role.id !== id);
    setRoles(updatedRoles);
    localStorage.setItem('roles', JSON.stringify(updatedRoles));
  };

  return (
    <div className="min-h-screen dark:bg-[#161c24] bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* RolesHeader Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">Roles</h1>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => router.push('/dispatcher/roles-permissions/create')}
            >
              <span>+</span>
              Add New
            </button>
          </div>

          <div className="flex gap-4 text-sm border-b">
            <button className="pb-2 dark:text-gray-300 border-b-2 border-blue-600 text-blue-600 font-medium">
              All ({roles.length})
            </button>
          </div>
        </div>

        {/* RolesTable Section */}
        <div className="bg-white dark:bg-[#161c24] rounded-lg shadow">
          <div className="flex items-center gap-4 px-1 py-3 border-b">
            <select className="border dark:bg-[#161c24]  rounded px-1 py-1 text-sm">
              <option>15</option>
              <option>25</option>
              <option>50</option>
            </select>

            <select className=" border rounded px-1 py-1 text-sm">
              <option>Bulk actions</option>
            </select>

            <button className="px-2 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
              Apply
            </button>

            <div className="hidden ml-auto sm:flex items-center gap-2">
              <input
                type="search"
                placeholder="Search"
                className="border rounded px-3 py-1 text-sm"
              />
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                Search
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-[#161c24] border-b">
                <tr>
                  <th className="px-4 py-3 text-left">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="px-4 dark:text-gray-300 py-3 text-left text-sm font-semibold text-gray-700">
                    Name ▼
                  </th>
                  <th className="px-4 dark:text-gray-300 py-3 text-left text-sm font-semibold text-gray-700">
                    Status ▼
                  </th>
                  <th className="px-4 dark:text-gray-300 py-3 text-left text-sm font-semibold text-gray-700">
                    Created At ▼
                  </th>
                </tr>
              </thead>
              <tbody>
                {roles.map((role) => (
                  <tr key={role.id} className="border-b  ">
                    <td className="px-4 py-3">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-medium text-gray-900 dark:text-gray-300">{role.name}</div>
                      <div className="flex gap-2 text-sm">
                        <button className="text-blue-600 hover:underline">Edit</button>
                        <span className="text-gray-400">|</span>
                        <button
                          onClick={() => handleDelete(role.id)}
                          className="text-red-600 hover:underline"
                        >
                          Delete Permanently
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleStatusToggle(role.id)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                          role.status === 'active' ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            role.status === 'active' ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{role.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center px-4 py-3 border-t">
            <div className="text-sm text-gray-600">
              {roles.length} Items
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}