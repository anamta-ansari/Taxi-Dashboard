'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/Button';

interface CouponFormData {
    title: string;
    code: string;
    type: string;
    amount: string;
    status: boolean;
}

export default function CreateCoupon() {
    const router = useRouter();
    const [formData, setFormData] = useState<CouponFormData>({
        title: '',
        code: '',
        type: 'Percentage',
        amount: '',
        status: true
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleToggleStatus = () => {
        setFormData(prev => ({
            ...prev,
            status: !prev.status
        }));
    };

    const validateForm = () => {
        if (!formData.title.trim()) {
            alert('Please enter a title');
            return false;
        }
        if (!formData.code.trim()) {
            alert('Please enter a coupon code');
            return false;
        }
        if (!formData.amount.trim()) {
            alert('Please enter an amount');
            return false;
        }
        return true;
    };

    const saveCoupon = (redirect: boolean = false) => {
        if (!validateForm()) return;

        // Get existing coupons from localStorage
        const saved = localStorage.getItem('coupons');
        let coupons = [];
        
        if (saved) {
            try {
                coupons = JSON.parse(saved);
            } catch (error) {
                console.log('Error parsing coupons');
                coupons = [];
            }
        }

        // Create new coupon object
        const newCoupon = {
            id: Date.now().toString(),
            title: formData.title,
            code: formData.code,
            type: formData.type,
            amount: formData.type === 'Percentage' ? `${formData.amount}%` : `$${formData.amount}`,
            status: formData.status,
            createdAt: new Date().toLocaleString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            })
        };

        // Add new coupon to array
        coupons.push(newCoupon);

        // Save back to localStorage
        localStorage.setItem('coupons', JSON.stringify(coupons));

        // Dispatch event to update other components
        window.dispatchEvent(new Event('localStorageUpdate'));

        if (redirect) {
            router.push('/Coupons');
        } else {
            // Reset form for next entry
            setFormData({
                title: '',
                code: '',
                type: 'Percentage',
                amount: '',
                status: true
            });
            alert('Coupon saved successfully!');
        }
    };

    const handleSave = () => {
        saveCoupon(false);
    };

    const handleSaveAndExit = () => {
        saveCoupon(true);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8 dark:bg-[#161c24] ">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-[28px] font-bold text-gray-800 mb-2 dark:text-gray-300">Add New Coupon</h1>
                    <button
                        onClick={() => router.push('/coupons')}
                        className="text-blue-600 hover:underline text-sm"
                    >
                        ← Back to Coupons
                    </button>
                </div>

                {/* Form Card */}
                <div className="bg-white dark:bg-[#161c24] dark:border-gray-500 border rounded-lg shadow p-6">
                    <div className="space-y-6">
                        {/* Title Field */}
                        <div>
                            <label className="dark:text-gray-300 block text-sm font-semibold text-gray-700 mb-2">
                                Title <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                placeholder="Enter coupon title"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Code Field */}
                        <div>
                            <label className="dark:text-gray-300 block text-sm font-semibold text-gray-700 mb-2">
                                Code <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="code"
                                value={formData.code}
                                onChange={handleInputChange}
                                placeholder="Enter coupon code"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Type Field */}
                        <div>
                            <label className="dark:text-gray-300 block text-sm font-semibold text-gray-700 mb-2">
                                Type <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleInputChange}
                                className="dark:bg-[#161c24] w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                            >
                                <option value="Percentage">Percentage</option>
                                <option value="Fixed Amount">Fixed Amount</option>
                            </select>
                        </div>

                        {/* Amount Field */}
                        <div>
                            <label className="dark:text-gray-300 block text-sm font-semibold text-gray-700 mb-2">
                                Amount <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                name="amount"
                                value={formData.amount}
                                onChange={handleInputChange}
                                placeholder={formData.type === 'Percentage' ? 'Enter percentage (e.g., 10)' : 'Enter amount (e.g., 50)'}
                                step="0.01"
                                min="0"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                {formData.type === 'Percentage' 
                                    ? 'Enter the discount percentage (without % symbol)' 
                                    : 'Enter the fixed discount amount (without $ symbol)'}
                            </p>
                        </div>

                        {/* Status Toggle */}
                        <div>
                            <label className="dark:text-gray-300 block text-sm font-semibold text-gray-700 mb-2">
                                Status
                            </label>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={handleToggleStatus}
                                    className={`w-12 h-6 rounded-full flex items-center transition-all duration-200 ${
                                        formData.status ? 'bg-blue-500' : 'bg-gray-400'
                                    }`}
                                >
                                    <span
                                        className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ${
                                            formData.status ? 'translate-x-6' : 'translate-x-1'
                                        }`}
                                    ></span>
                                </button>
                                <span className="text-sm text-gray-700">
                                    {formData.status ? 'Active' : 'Inactive'}
                                </span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                            <Button
                                onClick={handleSave}
                                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
                            >
                                Save
                            </Button>
                            <Button
                                onClick={handleSaveAndExit}
                                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
                            >
                                Save & Exit
                            </Button>
                            <button
                                onClick={() => router.push('/Coupons')}
                                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}