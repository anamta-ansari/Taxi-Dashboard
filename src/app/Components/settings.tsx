"use client"
import React, { useState } from 'react';
import { User, Palette, Building2, Car, Bell, Map, Wrench, Key, Award } from 'lucide-react';

export default function Settings() {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: '',
    mobile: '+1',
    username: 'admin'
  });

  const [activeTab, setActiveTab] = useState('general');

  const menuItems = [
    { id: 'general', icon: User, label: 'General Settings' },
    { id: 'appearance', icon: Palette, label: 'Appearance' },
    { id: 'branding', icon: Building2, label: 'Branding Details' },
    { id: 'dispatch', icon: Car, label: 'Dispatch Settings' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
    { id: 'map', icon: Map, label: 'Map Settings' },
    { id: 'system', icon: Wrench, label: 'System Settings' },
    { id: 'password', icon: Key, label: 'Password' },
    { id: 'license', icon: Award, label: 'Software License' }
  ];

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">Configure your account settings and preferences</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full sm:w-65 shrink-0">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-5 py-4 text-left transition-colors ${
                      activeTab === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full sm:flex-1">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-semibold text-gray-900">General Details</h2>
                <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Save changes
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile number
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <div className="row-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profile Picture
                  </label>
                  <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center">
                    <div className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center mb-4">
                      <User size={40} className="text-white" />
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Upload profile picture</p>
                    <div className="flex gap-4">
                      <button className="text-red-600 text-sm font-medium hover:underline">
                        Delete
                      </button>
                      <button className="text-blue-600 text-sm font-medium hover:underline">
                        Change
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    User Name
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
