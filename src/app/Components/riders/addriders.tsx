'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function AddRider() {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [sendNotification, setSendNotification] = useState(false);
  const [status, setStatus] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && !file.type.includes('svg')) {
      setProfileImage(file);
    }
  };

  const handleSave = () => {
    console.log({
      profileImage,
      fullName,
      email,
      phone: `${countryCode}${phone}`,
      password,
      sendNotification,
      status,
    });
  };

  const handleSaveAndExit = () => {
    handleSave();
    // Navigate or close
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-8 max-w-4xl mx-auto dark:bg-[#161c24]">
      <h1 className="text-2xl font-semibold text-gray-800 mb-8 dark:text-gray-300">Add Rider</h1>

      <div className="space-y-6">
        {/* Profile Image */}
        <div>
          <label className="dark:text-gray-300 block text-sm font-medium text-gray-700 mb-2">
            Profile Image <span className="text-red-500">*</span>
          </label>
          <div className="flex items-start gap-4">
            <label className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-400 transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              {profileImage ? (
                <img
                  src={URL.createObjectURL(profileImage)}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <span className="text-3xl text-gray-400">+</span>
              )}
            </label>
            <p className="text-xs text-gray-500 mt-2">SVG images are not allowed.</p>
          </div>
        </div>

        {/* Full Name */}
        <div>
          <label className="dark:text-gray-300 block text-sm font-medium text-gray-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Email */}
        <div>
          <label className="dark:text-gray-300 block text-sm font-medium text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="dark:text-gray-300 block text-sm font-medium text-gray-700 mb-2">
            Phone <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="w-24 px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="+1">+ 1</option>
              <option value="+44">+ 44</option>
              <option value="+92">+ 92</option>
              <option value="+91">+ 91</option>
            </select>
            <input
              type="tel"
              placeholder="Enter Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* New Password */}
        <div>
          <label className="dark:text-gray-300 block text-sm font-medium text-gray-700 mb-2">
            New Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="dark:text-gray-300 block text-sm font-medium text-gray-700 mb-2">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Enter Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2.5 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Send Notification */}
        <div>
          <label className="dark:text-gray-300 block text-sm font-medium text-gray-700 mb-3">
            Send Rider Notification
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={sendNotification}
              onChange={(e) => setSendNotification(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Send the new rider an email about their account.
            </span>
          </label>
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Status</label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={status}
              onChange={(e) => setStatus(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-8">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
        >
         
          Save
        </button>
        <button
          onClick={handleSaveAndExit}
          className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
         
          Save and Exit
        </button>
      </div>
    </div>
  );
}