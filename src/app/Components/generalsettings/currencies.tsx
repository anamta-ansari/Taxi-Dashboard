'use client';

import { useEffect, useState } from 'react';
import { Button } from '../ui/Button';
import { ChevronDown } from 'lucide-react';

interface Currency {
    id: string;
    title: string;
    symbol: string;
    exchangerate: string;
    status: boolean;
    createdAt: string;
}

// Initial dummy data
const initialData: Currency[] = [
    {
        id: '1',
        title: 'USD',
        symbol: '$',
        exchangerate: '1',
        status: true,
        createdAt: '2025-01-23 11:19:21 AM'
    },
    {
        id: '2',
        title: 'EUR',
        symbol: '€',
        exchangerate: '56',
        status: true,
        createdAt: '2025-01-23 11:20:00 AM'
    },
    {
        id: '3',
        title: 'GBP',
        symbol: '£',
        exchangerate: '100',
        status: false,
        createdAt: '2025-01-23 11:20:36 AM'
    }
];

export default function Currencies() {
    const [currencies, setCurrencies] = useState<Currency[]>(initialData);
    const [loading, setLoading] = useState(true);

    // Load data from localStorage
    const loadData = () => {
        const saved = localStorage.getItem('currencies');
        if (saved) {
            try {
                setCurrencies(JSON.parse(saved));
            } catch {
                setCurrencies(initialData);
            }
        } else {
            setCurrencies(initialData);
        }
        setLoading(false);
    };

    useEffect(() => {
        loadData();

        const handleStorageChange = () => loadData();

        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('localStorageUpdate', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('localStorageUpdate', handleStorageChange);
        };
    }, []);

    // Delete currency
    const handleDelete = (id: string) => {
        if (confirm('Are you sure you want to delete this currency?')) {
            const updated = currencies.filter(item => item.id !== id);
            localStorage.setItem('currencies', JSON.stringify(updated));
            setCurrencies(updated);
            window.dispatchEvent(new Event('localStorageUpdate'));
        }
    };

    // Toggle status
    const handleToggleStatus = (id: string) => {
        const updated = currencies.map(item =>
            item.id === id ? { ...item, status: !item.status } : item
        );
        localStorage.setItem('currencies', JSON.stringify(updated));
        setCurrencies(updated);
        window.dispatchEvent(new Event('localStorageUpdate'));
    };

    const activeCount = currencies.filter(item => item.status).length;
    const inactiveCount = currencies.filter(item => !item.status).length;

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
                        <h1 className="text-[28px] font-bold text-gray-800 dark:text-gray-300">Currencies</h1>
                        <Button className="flex items-center gap-1 font-normal">
                            <span>+</span> Add New
                        </Button>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-4 text-sm border-b">
                        <button className="dark:text-gray-300 pb-2 border-b-2 border-blue-600 text-blue-600 font-medium">
                            All ({currencies.length})
                        </button>
                        <button className=" dark:text-gray-300 pb-2 text-gray-600 hover:text-gray-800">
                            Active ({activeCount})
                        </button>
                        <button className="dark:text-gray-300 pb-2 text-gray-600 hover:text-gray-800">
                            Inactive ({inactiveCount})
                        </button>
                    </div>
                </div>

                {/* TABLE */}
                <div className="bg-white rounded-lg shadow dark:bg-[#161c24]">
                    <div className="flex flex-col sm:flex-row items-center gap-4 px-4 py-3 border-b">
                        <div className="flex items-center gap-3">
                            <select className="border dark:bg-[#161c24] dark:border-gray-500  rounded px-2 py-2 text-sm appearance-none bg-white">
                                <option>15</option>
                                <option>25</option>
                                <option>50</option>
                            </select>

                            <div className="relative">
                                <select className="border dark:bg-[#161c24] dark:border-gray-500 rounded px-2 py-2 text-sm appearance-none bg-white pr-8">
                                    <option>Bulk actions</option>
                                    <option>Activate</option>
                                    <option>Deactivate</option>
                                    <option>Delete</option>
                                </select>
                                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>

                            <button className="bg-blue-500 text-white px-3 py-2 rounded text-sm hover:bg-blue-600 transition-colors">
                                Apply
                            </button>
                        </div>

                        <div className="sm:ml-auto flex items-center gap-1">
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

                    <div className="overflow-x-auto ">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b dark:bg-[#161c24] dark:border-gray-500">
                                <tr>
                                    <th className="dark:text-gray-300 px-4 py-3"><input type="checkbox" /></th>
                                    <th className="dark:text-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">Title</th>
                                    <th className="dark:text-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">Symbol</th>
                                    <th className="dark:text-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">Exchange Rate</th>
                                    <th className="dark:text-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                                    <th className="dark:text-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">Created At</th>
                                </tr>
                            </thead>

                            <tbody>
                                {currencies.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                                            No currencies found. Click "Add New" to create one.
                                        </td>
                                    </tr>
                                ) : (
                                    currencies.map(item => (
                                        <tr key={item.id} className="border-b ">
                                            <td className="px-4 py-3"><input type="checkbox" /></td>

                                            <td className="px-4 py-3">
                                                <div className="text-gray-900 font-medium dark:text-gray-300">{item.title}</div>
                                                <div className="flex gap-2 text-sm mt-1">
                                                    <button className="text-blue-600 text-xs hover:underline">
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
                                            </td>

                                            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.symbol}</td>
                                            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.exchangerate}</td>

                                            <td className="px-4 py-3">
                                                <button
                                                    onClick={() => handleToggleStatus(item.id)}
                                                    className={`w-10 h-5 rounded-full flex items-center transition-all duration-200 ${
                                                        item.status ? 'bg-blue-500' : 'bg-gray-400'
                                                    }`}
                                                >
                                                    <span
                                                        className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200 ${
                                                            item.status ? 'translate-x-5' : 'translate-x-1'
                                                        }`}
                                                    />
                                                </button>
                                            </td>

                                            <td className="px-4 py-3 text-gray-700 text-sm dark:text-gray-300">
                                                {item.createdAt}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex justify-between items-center px-4 py-3 border-t">
                        <div className="text-sm text-gray-600">
                            {currencies.length} {currencies.length === 1 ? 'Item' : 'Items'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
