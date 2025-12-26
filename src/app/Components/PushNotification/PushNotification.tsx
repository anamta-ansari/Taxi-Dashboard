'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/Button';
import { ChevronDown } from 'lucide-react';

interface PushNotification {
    id: string;
    title: string;
    sendPushNotification: string;
    scheduled: string;
    scheduledAt: string;
    createdAt: string;
}

// Initial data - empty for now, add your data here in future
const initialData: PushNotification[] = [];

export default function PushNotification() {
    const router = useRouter();
    const [notifications, setNotifications] = useState<PushNotification[]>(initialData);
    const [loading, setLoading] = useState(true);

    // Load data from localStorage
    const loadData = () => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('pushNotifications');
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    setNotifications(parsed);
                } catch (error) {
                    console.log('Error parsing data, using initial data');
                    setNotifications(initialData);
                }
            } else {
                setNotifications(initialData);
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

    // Delete notification
    const handleDelete = (id: string) => {
        if (confirm('Are you sure you want to delete this notification?')) {
            const updated = notifications.filter(item => item.id !== id);
            localStorage.setItem('pushNotifications', JSON.stringify(updated));
            setNotifications(updated);
            window.dispatchEvent(new Event('localStorageUpdate'));
        }
    };

    // Navigate to edit page
    const handleEdit = (id: string) => {
        router.push(`/push-notification/edit/${id}`);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
                <div className="text-gray-600">Loading...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8 dark:bg-[#161c24]">
            <div className="max-w-7xl mx-auto">
                {/* HEADER */}
                <div className="mb-6">
                    <div className="mb-4 flex justify-between items-center">
                        <h1 className="text-[28px] font-bold text-gray-800 dark:text-gray-300">Push Notifications</h1>
                        <Button
                            onClick={() => router.push('/push-notification/create')}
                            className="flex items-center gap-1 font-normal"
                        >
                            <span>+</span> Add New
                        </Button>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-4 text-sm border-b">
                        <button className="pb-2 border-b-2 border-blue-600 text-blue-600 font-medium">
                            All ({notifications.length})
                        </button>
                    </div>
                </div>

                {/* TABLE */}
                <div className="bg-white dark:bg-[#161c24] rounded-lg shadow">
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
                        

                        <div className="sm:ml-auto flex items-center gap-1">
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
                                    <th className="dark:text-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">Title</th>
                                    <th className="dark:text-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">Send Push Notification</th>
                                    <th className="dark:text-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">Scheduled</th>
                                    <th className="dark:text-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">Scheduled At</th>
                                    <th className="dark:text-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">Created At</th>
                                </tr>
                            </thead>

                            <tbody>
                                {notifications.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                                            No notifications found. Click "Add New" to create one.
                                        </td>
                                    </tr>
                                ) : (
                                    notifications.map((item) => (
                                        <tr key={item.id} className="border-b hover:bg-gray-50">
                                            <td className="px-4 py-3">
                                                <input type="checkbox" className="rounded" />
                                            </td>

                                            <td className="px-4 py-3">
                                                <div className="flex items-center gap-3">
                                                    <div>
                                                        <div className="text-gray-900 font-medium">{item.title}</div>
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

                                            <td className="px-4 py-3 text-gray-700">{item.sendPushNotification}</td>
                                            <td className="px-4 py-3 text-gray-700">{item.scheduled}</td>
                                            <td className="px-4 py-3 text-gray-700">{item.scheduledAt}</td>
                                            <td className="px-4 py-3 text-gray-700 text-sm">{item.createdAt}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center px-4 py-3 border-t">
                        <div className="text-sm text-gray-600">
                            {notifications.length} {notifications.length === 1 ? 'Item' : 'Items'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}