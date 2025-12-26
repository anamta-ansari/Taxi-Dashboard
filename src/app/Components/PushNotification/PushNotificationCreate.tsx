'use client';

import { useState } from 'react';

export default function PushNotificationCreate() {
  const [sendTo, setSendTo] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [url, setUrl] = useState('');
  const [schedule, setSchedule] = useState(false);
  const [scheduleDateTime, setScheduleDateTime] = useState('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSend = () => {
    console.log({
      sendTo,
      image,
      title,
      message,
      url,
      schedule,
      scheduleDateTime,
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8 dark:bg-[#161c24] ">
      <div className="max-w-4xl mx-auto dark:border-gray-500 border   rounded-xl shadow-sm p-8">
        <h1 className='text-[28px] font-bold py-2 dark:text-gray-300'>Send Push Notification</h1>
        <div className="space-y-6">
          {/* Send To */}
          <div className="grid grid-cols-[150px,1fr] gap-4 items-center">
            <label className="text-sm text-gray-700 dark:text-gray-300">
              Send To <span className="text-red-500">*</span>
            </label>
            <select
              value={sendTo}
              onChange={(e) => setSendTo(e.target.value)}
              className="w-full px-4 py-3 bg-white border dark:bg-[#161c24]  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
            >
              <option value="">Select Notification Send To</option>
              <option value="all">All Users</option>
              <option value="riders">All Riders</option>
              <option value="drivers">All Drivers</option>
              <option value="specific">Specific User</option>
            </select>
          </div>

          {/* Image */}
          <div className="grid grid-cols-[150px,1fr] gap-4 items-start">
            <label className="text-sm text-gray-700 pt-2 dark:text-gray-300">Image</label>
            <div>
              <label className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-400 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Upload"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <span className="text-4xl text-gray-400">+</span>
                )}
              </label>
              <p className="text-xs text-gray-500 mt-2">
                *Upload image size 100x100px recommended
              </p>
            </div>
          </div>

          {/* Title */}
          <div className="grid grid-cols-[150px,1fr] gap-4 items-center">
            <label className="text-sm text-gray-700 dark:text-gray-300">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 dark:bg-[#161c24]  py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div className="grid grid-cols-[150px,1fr] gap-4 items-start">
            <label className="text-sm text-gray-700 pt-2 dark:text-gray-300">Message</label>
            <textarea
              placeholder="Enter Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full px-4 dark:bg-[#161c24]  py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* URL */}
          <div className="grid grid-cols-[150px,1fr] gap-4 items-center">
            <label className="text-sm text-gray-700 dark:text-gray-300">URL</label>
            <input
              type="text"
              placeholder="Enter URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-4 dark:bg-[#161c24] py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Schedule */}
          <div className="grid grid-cols-[150px,1fr] gap-4 items-center">
            <label className="text-sm text-gray-700 dark:text-gray-300">Schedule</label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={schedule}
                onChange={(e) => setSchedule(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
            </label>
          </div>

          {/* Schedule At */}
          <div className="grid grid-cols-[150px,1fr] gap-4 items-center">
            <label className="text-sm text-gray-700 dark:text-gray-300">ScheduleAt</label>
            <input
              type="date"
              placeholder="Select Start date and time"
              value={scheduleDateTime}
              onChange={(e) => setScheduleDateTime(e.target.value)}
              disabled={!schedule}
              className="w-full px-4 py-3 dark:bg-[#161c24]  bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-400"
            />
            <input
              type="time"
              placeholder="Select Start date and time"
              value={scheduleDateTime}
              onChange={(e) => setScheduleDateTime(e.target.value)}
              disabled={!schedule}
              className="w-full px-4 py-3 dark:bg-[#161c24]  bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-400"
            />
          </div>
        </div>

        {/* Send Button */}
        <div className="flex justify-end mt-8">
          <button
            onClick={handleSend}
            className="px-2 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
          >
            Send Push Notification
          </button>
        </div>
      </div>
    </div>
  );
}