'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export const AddUserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    password: '',
    confirmPassword: '',
    sendNotification: false,
    status: true
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSave = (redirect: boolean = false) => {
    // Create new user object
    const newUser = {
      id: Date.now().toString(),
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      role: formData.role,
      status: formData.status ? 'active' : 'inactive',
      createdAt: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      })
    };

    // Get existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Add new user
    existingUsers.push(newUser);
    
    // Save back to localStorage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    if (redirect) {
      router.push('/users/all-users');
    } else {
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        role: '',
        password: '',
        confirmPassword: '',
        sendNotification: false,
        status: true
      });
      
      // Show success message
      alert('User saved successfully!');
    }
  };

  return (
    <div className="bg-white dark:bg-[#161c24] dark:border-gray-500 border rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-6">Add Dispatcher</h2>

      <div className="space-y-4 max-w-3xl">
        <div>
          <Input
            label="Full Name"
            name="fullName"
            placeholder="Enter Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone<span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2">
            <select className="border border-gray-300 rounded px-3 py-2">
              <option>+ 1</option>
              <option>+ 92</option>
              <option>+ 44</option>
            </select>
            <Input
              name="phone"
              placeholder="Enter Phone"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Role<span className="text-red-500">*</span>
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-3 py-2 dark:bg-[#161c24] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="dispatcher">Dispatcher</option>
          </select>
          <p className="text-sm text-gray-600 mt-1">
            *To add new role, simply click{' '}
            <button
              onClick={() => router.push('/users/roles-permissions')}
              className="text-blue-600 hover:underline"
            >
              here
            </button>
          </p>
        </div>

        <div>
          <Input
            label="New Password"
            name="password"
            type="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Enter Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="sendNotification"
            checked={formData.sendNotification}
            onChange={handleChange}
            className="rounded"
          />
          <label className="text-sm text-gray-700">
            Send the new user an email about their account.
          </label>
        </div>

        <div className="flex items-center gap-3">
          <label className="text-sm font-medium text-gray-700">Status</label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="status"
              checked={formData.status}
              onChange={handleChange}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex flex-col sm:flex-row  justify-end gap-3 pt-4">
          <Button
            variant="success"
            onClick={() => handleSave(false)}
            className="flex items-center gap-2"
          > Save
          </Button>
          <Button
            variant="success"
            onClick={() => handleSave(true)}
            className="flex items-center gap-2"
          > Save and Exit
          </Button>
        </div>
      </div>
    </div>
  );
};