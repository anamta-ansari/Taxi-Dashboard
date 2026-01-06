'use client';

import { useState } from 'react';
import Image from 'next/image';
import llll from "../../../../public/assets/stripe.png"

interface PaymentMethod {
  id: string;
  name: string;
  logo: string; // now path to image
  badge: string;
  processingFee: string;
  credentials: {
    label: string;
    value: string;
  }[];
  isActive: boolean;
}

export default function Payment() {
  const [paymentMethods] = useState<PaymentMethod[]>([
    {
      id: 'paypal',
      name: 'PayPal',
      logo: '/assets/paypal.png',
      badge: 'PayPal',
      processingFee: '2.9% + $0.30',
      credentials: [
        { label: 'Client ID', value: 'N/A' },
        { label: 'Secret Key', value: 'N/A' },
      ],
      isActive: true,
    },
    {
      id: 'stripe',
      name: 'Stripe',
      logo: '/assets/stripe.png',
      badge: 'Stripe',
      processingFee: '2.9% + $0.30',
      credentials: [
        { label: 'Publishable Key', value: 'N/A' },
        { label: 'Secret Key', value: 'N/A' },
      ],
      isActive: true,
    },
    {
      id: 'googlepay',
      name: 'Google Pay',
      logo: '/assets/gpay.png',
      badge: 'Google Pay',
      processingFee: '2.9% + $0.30',
      credentials: [
        { label: 'Merchant ID', value: 'N/A' },
        { label: 'Gateway Merchant ID', value: 'N/A' },
      ],
      isActive: true,
    },
    {
      id: 'applepay',
      name: 'Apple Pay',
      logo: '/assets/apple2.png',
      badge: 'Apple Pay',
      processingFee: '2.9% + $0.30',
      credentials: [
        { label: 'Merchant ID', value: 'N/A' },
        { label: 'Payment Processing Certificate', value: 'N/A' },
      ],
      isActive: true,
    },
  ]);

  return (
    <div className="bg-white dark:bg-[#161c24] rounded-xl shadow-sm p-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-8 dark:text-gray-300">Payment Methods</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 relative flex items-center justify-center dark:bg-[#161c24]">
                  <Image
                    src={method.logo}
                    alt={`${method.name} logo`}
                    fill
                    className="object-contain"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg dark:text-gray-300">{method.name}</h3>
                  <span className="inline-block mt-1 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded">
                    {method.badge}
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <div />
              </div>
            </div>

            {/* Processing Fee */}
            <div className="mb-4 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                <span className="text-sm dark:text-gray-300">
                  Processing Fee : <span className="font-medium">{method.processingFee}</span>
                </span>
              </div>
            </div>

            {/* Credentials */}
            <div className="space-y-3">
              {method.credentials.map((credential, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <svg
                    className="w-4 h-4 text-gray-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    {credential.label} :{' '}
                    <span
                      className={`${credential.value === 'N/A' ? 'text-gray-900' : 'text-gray-700'
                        } font-medium`}
                    >
                      {credential.value}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
