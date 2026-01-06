'use client';

import React, { useState } from 'react';
import { Plus, Shield, MapPin, Car, DollarSign, Info, Eye, EyeOff, ChevronDown, Save } from 'lucide-react';

type TabType = 'general' | 'address' | 'vehicle' | 'payout' | 'additional';

interface FormData {
  // General
  profileImage: File | null;
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  newPassword: string;
  confirmPassword: string;
  notifyDriver: boolean;
  
  // Address
  address: string;
  streetAddress: string;
  areaLocality: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
  
  // Vehicle
  fleetManager: string;
  service: string;
  serviceCategories: string;
  vehicle: string;
  model: string;
  plateNumber: string;
  seat: string;
  color: string;
  
  // Payout
  bankAccountNo: string;
  bankName: string;
  holderName: string;
  swift: string;
  routingNumber: string;
  paypalEmail: string;
  defaultPayout: string;
  
  // Additional
  location: string;
  isOnline: 'active' | 'deactive';
  isVerified: 'active' | 'deactive';
  isOnRide: 'active' | 'deactive';
  status: 'active' | 'deactive';
}

const TABS = [
  { id: 'general' as TabType, label: 'General', icon: Shield },
  { id: 'address' as TabType, label: 'Address', icon: MapPin },
  { id: 'vehicle' as TabType, label: 'Vehicle', icon: Car },
  { id: 'payout' as TabType, label: 'Payout Details', icon: DollarSign },
  { id: 'additional' as TabType, label: 'Additional Info', icon: Info },
];

export default function AddDriver() {
  const [activeTab, setActiveTab] = useState<TabType>('general');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<FormData>({
    profileImage: null,
    fullName: '',
    email: '',
    countryCode: '+1',
    phone: '',
    newPassword: '',
    confirmPassword: '',
    notifyDriver: false,
    address: '',
    streetAddress: '',
    areaLocality: '',
    country: '',
    state: '',
    city: '',
    postalCode: '',
    fleetManager: '',
    service: '',
    serviceCategories: '',
    vehicle: '',
    model: '',
    plateNumber: '',
    seat: '',
    color: 'White',
    bankAccountNo: '',
    bankName: '',
    holderName: '',
    swift: '',
    routingNumber: '',
    paypalEmail: '',
    defaultPayout: '',
    location: '',
    isOnline: 'active',
    isVerified: 'active',
    isOnRide: 'active',
    status: 'active'
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, profileImage: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    const currentIndex = TABS.findIndex(tab => tab.id === activeTab);
    if (currentIndex < TABS.length - 1) {
      setActiveTab(TABS[currentIndex + 1].id);
    }
  };

  const handlePrevious = () => {
    const currentIndex = TABS.findIndex(tab => tab.id === activeTab);
    if (currentIndex > 0) {
      setActiveTab(TABS[currentIndex - 1].id);
    }
  };

  const handleSave = () => {
    console.log('Form Data:', formData);
    alert('Driver saved successfully!');
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-[#161c24] p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6 dark:text-gray-300">Add Driver</h1>

          {/* Tabs */}
          <div className="bg-white dark:bg-[#161c24] overflow-x-auto mb-6">
            <div className="flex  border-gray-200 dark:border-gray-500 border">
              {TABS.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50 dark:bg-gray-400'
                        : 'text-gray-500 '
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form Content */}
          <div className="bg-white dark:bg-[#161c24] dark:border-gray-500 border p-8">
            {/* General Tab */}
            {activeTab === 'general' && (
              <div className="space-y-6">
                {/* Profile Image */}
                <div className="flex items-start gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">
                    Profile Image<span className="text-red-500">*</span>
                  </label>
                  <div className="flex-1">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="profile-image"
                    />
                    <label
                      htmlFor="profile-image"
                      className="flex items-center justify-center w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors overflow-hidden"
                    >
                      {imagePreview ? (
                        <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                      ) : (
                        <Plus className="w-8 h-8 text-gray-400" />
                      )}
                    </label>
                    <p className="text-sm text-gray-500 mt-2">SVG images are not allowed.</p>
                  </div>
                </div>

                {/* Full Name */}
                <div className="flex  flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded"
                    required
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">
                    Phone<span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-1 gap-2">
                    <input
                      type="tel"
                      placeholder="Enter Phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                </div>

                {/* New Password */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">
                    New Password<span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex-1">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter Password"
                      value={formData.newPassword}
                      onChange={(e) => handleInputChange('newPassword', e.target.value)}
                      className="w-full px-4 py-2 pr-10 border border-gray-300 rounded"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4 text-gray-400" />
                      ) : (
                        <Eye className="w-4 h-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">
                    Confirm Password<span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex-1">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Enter Confirm Password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      className="w-full px-4 py-2 pr-10 border border-gray-300 rounded"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-3"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-4 h-4 text-gray-400" />
                      ) : (
                        <Eye className="w-4 h-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Notify Driver */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">Notify Driver</label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.notifyDriver}
                      onChange={(e) => handleInputChange('notifyDriver', e.target.checked)}
                      className="w-4 h-4 rounded border-gray-300"
                    />
                    <span className="text-gray-500">Send the new Driver an email about their account.</span>
                  </label>
                </div>
              </div>
            )}

            {/* Address Tab */}
            {activeTab === 'address' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">
                    Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">Street Address</label>
                  <input
                    type="text"
                    placeholder="Enter Street Address"
                    value={formData.streetAddress}
                    onChange={(e) => handleInputChange('streetAddress', e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">Area/Locality</label>
                  <input
                    type="text"
                    placeholder="Enter Area or Locality"
                    value={formData.areaLocality}
                    onChange={(e) => handleInputChange('areaLocality', e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">
                    Country<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Country"
                    value={formData.areaLocality}
                    onChange={(e) => handleInputChange('areaLocality', e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">
                    State<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter State"
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">
                    City<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter City"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">
                    Postal Code<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Postal Code"
                    value={formData.postalCode}
                    onChange={(e) => handleInputChange('postalCode', e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded"
                    required
                  />
                </div>
              </div>
            )}

            {/* Vehicle Tab */}
            {activeTab === 'vehicle' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">Fleet Manager</label>
                  <div className="relative flex-1">
                    <select
                      value={formData.fleetManager}
                      onChange={(e) => handleInputChange('fleetManager', e.target.value)}
                      className="w-full px-4 py-2 pr-8 dark:bg-[#161c24] border border-gray-300 rounded appearance-none"
                    >
                      <option value="">Select Fleet Manager</option>
                      <option value="manager1">Manager 1</option>
                      <option value="manager2">Manager 2</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">
                    Service<span className="text-red-500">*</span>
                  </label>
                  <div className="relative w-full sm:flex-1">
                    <select
                      value={formData.service}
                      onChange={(e) => handleInputChange('service', e.target.value)}
                      className="w-full px-4 py-2 pr-8 dark:bg-[#161c24] border border-gray-300 rounded appearance-none"
                      required
                    >
                      <option value="">Select Service</option>
                      <option value="taxi">Taxi</option>
                      <option value="delivery">Delivery</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">
                    Service Categories<span className="text-red-500">*</span>
                  </label>
                  <div className="relative w-full sm:flex-1">
                    <select
                      value={formData.serviceCategories}
                      onChange={(e) => handleInputChange('serviceCategories', e.target.value)}
                      className="w-full px-4 py-2 pr-8 dark:bg-[#161c24] border border-gray-300 rounded appearance-none"
                      required
                    >
                      <option value="">Select Service Categories</option>
                      <option value="economy">Economy</option>
                      <option value="premium">Premium</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">
                    Vehicle<span className="text-red-500">*</span>
                  </label>
                  <div className="relative w-full sm:flex-1">
                    <select
                      value={formData.vehicle}
                      onChange={(e) => handleInputChange('vehicle', e.target.value)}
                      className="w-full px-4 py-2 pr-8 dark:bg-[#161c24] border border-gray-300 rounded appearance-none "
                      required
                    >
                      <option value="">Select Vehicle Type</option>
                      <option value="sedan">Sedan</option>
                      <option value="suv">SUV</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">
                    Model<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Vehicle Model"
                    value={formData.model}
                    onChange={(e) => handleInputChange('model', e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded "
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">
                    Plate Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Vehicle Plate Number"
                    value={formData.plateNumber}
                    onChange={(e) => handleInputChange('plateNumber', e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300 ">
                    Seat<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Vehicle Seat"
                    value={formData.seat}
                    onChange={(e) => handleInputChange('seat', e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">
                    Color<span className="text-red-500">*</span>
                  </label>
                  <div className="relative w-full sm:flex-1">
                    <select
                      value={formData.color}
                      onChange={(e) => handleInputChange('color', e.target.value)}
                      className="w-full px-4 py-2 pr-8 dark:bg-[#161c24] border border-gray-300 rounded appearance-none "
                      required
                    >
                      <option value="White">White</option>
                      <option value="Black">Black</option>
                      <option value="Silver">Silver</option>
                      <option value="Red">Red</option>
                      <option value="Blue">Blue</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>
              </div>
            )}

            {/* Payout Details Tab */}
            {activeTab === 'payout' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">
                    Bank Account No.<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Bank Account No"
                    value={formData.bankAccountNo}
                    onChange={(e) => handleInputChange('bankAccountNo', e.target.value)}
                    className="flex-1 px-4 py-2 border dark:bg-[#161c24] border-gray-300 rounded"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">
                    Bank Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Bank Name"
                    value={formData.bankName}
                    onChange={(e) => handleInputChange('bankName', e.target.value)}
                    className="flex-1 px-4 py-2 dark:bg-[#161c24] border border-gray-300 rounded-lg "
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">
                    Holder Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Holder Name"
                    value={formData.holderName}
                    onChange={(e) => handleInputChange('holderName', e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">
                    Swift<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Swift Code"
                    value={formData.swift}
                    onChange={(e) => handleInputChange('swift', e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">
                    Routing Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter routing number"
                    value={formData.routingNumber}
                    onChange={(e) => handleInputChange('routingNumber', e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300 ">
                    PayPal Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter paypal email"
                    value={formData.paypalEmail}
                    onChange={(e) => handleInputChange('paypalEmail', e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">
                    Default<span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex-1">
                    <select
                      value={formData.defaultPayout}
                      onChange={(e) => handleInputChange('defaultPayout', e.target.value)}
                      className="w-full px-4 py-2 pr-8 dark:bg-[#161c24] border border-gray-300 rounded appearance-none "
                      required
                    >
                      <option value="">Select default payout</option>
                      <option value="bank">Bank Transfer</option>
                      <option value="paypal">PayPal</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>
              </div>
            )}

            {/* Additional Info Tab */}
            {activeTab === 'additional' && (
              <div className="space-y-6">
                {/* Location with Google Map */}
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <label className="text-gray-700 font-medium w-48 pt-2 dark:text-gray-300">Location</label>
                  <div className="flex-1">
                    <div className="w-full h-64 border border-gray-300 rounded-lg overflow-hidden mb-2">
                      <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{ border: 0 }}
                        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}&q=Nairobi,Kenya&zoom=11`}
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>

                {/* Is Online */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">Is Online</label>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => handleInputChange('isOnline', 'active')}
                      className={`px-6 py-2 rounded font-medium transition-colors ${
                        formData.isOnline === 'active'
                          ? 'bg-white border border-gray-300 text-gray-900'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      Active
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInputChange('isOnline', 'deactive')}
                      className={`px-6 py-2 rounded font-medium transition-colors ${
                        formData.isOnline === 'deactive'
                          ? 'bg-white border border-blue-500 text-blue-600'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      Deactive
                    </button>
                  </div>
                </div>

                {/* Is Verified */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">Is Verified</label>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => handleInputChange('isVerified', 'active')}
                      className={`px-6 py-2 rounded font-medium transition-colors ${
                        formData.isVerified === 'active'
                          ? 'bg-white border border-gray-300 text-gray-900'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      Active
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInputChange('isVerified', 'deactive')}
                      className={`px-6 py-2 rounded font-medium transition-colors ${
                        formData.isVerified === 'deactive'
                          ? 'bg-white border border-blue-500 text-blue-600'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      Deactive
                    </button>
                  </div>
                </div>

                {/* Is On Ride */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">Is On Ride</label>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => handleInputChange('isOnRide', 'active')}
                      className={`px-6 py-2 rounded font-medium transition-colors ${
                        formData.isOnRide === 'active'
                          ? 'bg-white border border-gray-300 text-gray-900'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      Active
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInputChange('isOnRide', 'deactive')}
                      className={`px-6 py-2 rounded font-medium transition-colors ${
                        formData.isOnRide === 'deactive'
                          ? 'bg-white border border-blue-500 text-blue-600'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      Deactive
                    </button>
                  </div>
                </div>

                {/* Status */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <label className="text-gray-700 font-medium w-48 dark:text-gray-300">Status</label>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => handleInputChange('status', 'active')}
                      className={`px-6 py-2 rounded font-medium transition-colors ${
                        formData.status === 'active'
                          ? 'bg-white border border-gray-300 text-gray-900'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      Active
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInputChange('status', 'deactive')}
                      className={`px-6 py-2 rounded font-medium transition-colors ${
                        formData.status === 'deactive'
                          ? 'bg-white border border-blue-500 text-blue-600'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      Deactive
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
              {activeTab !== 'general' && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="px-6 py-2 bg-white dark:bg-[#161c24] border border-blue-500 text-blue-600 rounded font-medium hover:bg-blue-50 transition-colors"
                >
                  Previous
                </button>
              )}
              {activeTab !== 'additional' ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2 bg-blue-500 text-white rounded font-medium hover:bg-blue-600 transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSave}
                  className="px-6 py-2 bg-blue-500 text-white rounded font-medium hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}