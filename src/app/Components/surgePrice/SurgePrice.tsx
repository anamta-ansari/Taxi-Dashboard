'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/Button';
import { ChevronDown } from 'lucide-react';

interface SurgePrice {
    id: string;
    day: string;
    startDate: string;
    endDate: string;
    status: boolean;
    createdAt: string;
}

// Initial dummy data
const initialData: SurgePrice[] = [
    {
        id: '1',
        day: 'Monday',
        startDate: '2025-01-20',
        endDate: '2025-01-21',
        status: true,
        createdAt: '2025-01-23 11:19:21 AM'
    },
    {
        id: '2',
        day: 'Tuesday',
        startDate: '2025-01-21',
        endDate: '2025-01-22',
        status: true,
        createdAt: '2025-01-23 11:20:00 AM'
    },
    {
        id: '3',
        day: 'Wednesday',
        startDate: '2025-01-22',
        endDate: '2025-01-23',
        status: false,
        createdAt: '2025-01-23 11:20:36 AM'
    },
    {
        id: '4',
        day: 'Thursday',
        startDate: '2025-01-23',
        endDate: '2025-01-24',
        status: true,
        createdAt: '2025-01-23 11:21:29 AM'
    },
    {
        id: '5',
        day: 'Friday',
        startDate: '2025-01-24',
        endDate: '2025-01-25',
        status: true,
        createdAt: '2025-01-23 11:22:04 AM'
    },
];

export default function SurgePrice() {
    const router = useRouter();
    const [surgePrices, setSurgePrices] = useState<SurgePrice[]>(initialData);
    const [loading, setLoading] = useState(true);

    // Load data from localStorage
    const loadData = () => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('surgePrices');
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    setSurgePrices(parsed);
                } catch (error) {
                    console.log('Error parsing data, using dummy data');
                    setSurgePrices(initialData);
                }
            } else {
                setSurgePrices(initialData);
            }
        }
        setLoading(false);
    };

    // Initial load
    useEffect(() => {
        loadData();

        // Listen for storage changes
        const handleStorageChange = () => {
            loadData();
        };

        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('localStorageUpdate', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('localStorageUpdate', handleStorageChange);
        };
    }, []);

    // Delete item (Move to trash)
    const handleDelete = (id: string) => {
        if (confirm('Are you sure you want to delete this item?')) {
            const updated = surgePrices.filter(item => item.id !== id);
            localStorage.setItem('surgePrices', JSON.stringify(updated));
            setSurgePrices(updated);
            window.dispatchEvent(new Event('localStorageUpdate'));
        }
    };

    // Toggle status - flexible for each item
    const handleToggleStatus = (id: string) => {
        const updated = surgePrices.map(item =>
            item.id === id ? { ...item, status: !item.status } : item
        );
        localStorage.setItem('surgePrices', JSON.stringify(updated));
        setSurgePrices(updated);
        window.dispatchEvent(new Event('localStorageUpdate'));
    };

    // Navigate to edit page
    const handleEdit = (id: string) => {
        router.push(`/surge-price/edit/${id}`);
    };

    // Count active items
    const activeCount = surgePrices.filter(item => item.status).length;
    const inactiveCount = surgePrices.filter(item => !item.status).length;

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
                <div className="text-gray-600">Loading...</div>
            </div>
        );
    }

    return (
        <div className="dark:bg-[#161c24] min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                {/* HEADER */}
                <div className="mb-6">
                    <div className="mb-4 flex justify-between items-center">
                        <h1 className="text-[28px] font-bold text-gray-800 dark:text-gray-300">Surge Prices</h1>
                        <Button

                            onClick={() => router.push('/surge-price/create')}
                            className="flex items-center gap-1 font-normal"
                        >
                            <span>+</span> Add New
                        </Button>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-4 text-sm border-b">
                        <button className="dark:text-gray-300 pb-2 border-b-2 border-blue-600 text-blue-600 font-medium">
                            All ({surgePrices.length})
                        </button>
                        <button className="dark:text-gray-300 pb-2 text-gray-600 hover:text-gray-800">
                            Active ({activeCount})
                        </button>
                        <button className="dark:text-gray-300 pb-2 text-gray-600 hover:text-gray-800">
                            Inactive ({inactiveCount})
                        </button>
                    </div>
                </div>

                {/* TABLE */}
                <div className="bg-white dark:bg-[#161c24] dark:border-gray-500 border rounded-lg shadow">
                    {/* Table Controls */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 px-4 py-3 border-b">
                        <div className="flex items-center gap-3">
                            {/* Pagination Select */}
                            <select className="border dark:bg-[#161c24] dark:border-gray-500 rounded px-3 py-2 text-sm appearance-none bg-white">
                                <option>15</option>
                                <option>25</option>
                                <option>50</option>
                            </select>

                            {/* Bulk Actions Select */}
                            <div className="relative">
                                <select className="border dark:bg-[#161c24] dark:border-gray-500 rounded px-3 py-2 text-sm appearance-none bg-white pr-8">
                                    <option>Bulk actions</option>
                                    <option>Activate</option>
                                    <option>Deactivate</option>
                                    <option>Delete</option>
                                </select>
                                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>

                            <button className="bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600 transition-colors">
                                Apply
                            </button>
                        </div>
                        

                        <div className="flex items-center gap-1">
                            <input
                                type="search"
                                placeholder="Search"
                                className="border rounded px-2 py-2 text-sm"
                            />
                            <button className="px-1 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* TABLE BODY */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b dark:bg-[#161c24] dark:border-gray-500">
                                <tr>
                                    <th className="px-4 py-3 text-left">
                                        <input type="checkbox" className="rounded" />
                                    </th>
                                    <th className="dark:text-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">Day</th>
                                    <th className="dark:text-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">Start Date</th>
                                    <th className="dark:text-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">End Date</th>
                                    <th className="dark:text-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                                    <th className="dark:text-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">Created At</th>
                                </tr>
                            </thead>

                            <tbody>
                                {surgePrices.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                                            No surge prices found. Click "Add New" to create one.
                                        </td>
                                    </tr>
                                ) : (
                                    surgePrices.map((item) => (
                                        <tr key={item.id} className="border-b ">
                                            <td className="px-4 py-3">
                                                <input type="checkbox" className="rounded" />
                                            </td>

                                            <td className="px-4 py-3">
                                                <div className="flex items-center gap-3">
                                                    <div>
                                                        <div className="text-gray-900 font-medium dark:text-gray-300">{item.day}</div>
                                                        <div className="flex gap-2 text-sm mt-1">
                                                            <button
                                                                onClick={() => handleEdit(item.id)}
                                                                className="text-blue-600 text-xs hover:underline"
                                                            >
                                                                Edit
                                                            </button>
                                                            <span className="text-gray-400">|</span>
                                                            <button
                                                                onClick={() => handleDelete(item.id)}
                                                                className="text-red-600 text-xs hover:underline"
                                                            >
                                                                Move To Trash
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.startDate}</td>
                                            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.endDate}</td>

                                            {/* Status Toggle - Flexible (can toggle on/off independently) */}
                                            <td className="px-4 py-3">
                                                <button
                                                    onClick={() => handleToggleStatus(item.id)}
                                                    className={`w-10 h-5 rounded-full flex items-center transition-all duration-200 ${item.status ? 'bg-blue-500' : 'bg-gray-400'
                                                        }`}
                                                >
                                                    <span
                                                        className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200 ${item.status ? 'translate-x-5' : 'translate-x-1'
                                                            }`}
                                                    ></span>
                                                </button>
                                            </td>

                                            <td className="px-4 py-3 text-gray-700 text-sm dark:text-gray-300">{item.createdAt}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center px-4 py-3 border-t">
                        <div className="text-sm text-gray-600">
                            {surgePrices.length} {surgePrices.length === 1 ? 'Item' : 'Items'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}