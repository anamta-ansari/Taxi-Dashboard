"use client";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Menu, X, ChevronDown, CarFront, ReceiptText, Send, Tag, CalendarCheck, Bell, Users } from "lucide-react";
import UserDropdown from "./UserDropdown";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Rocket,
  CarTaxiFront,
  BookOpenText,
  User,
  CircleUser,
  ChartPie,
  CircleDollarSign,
  ChartColumn,
  Megaphone,
  Headphones,
  Building,
  Settings2,
  Car,
  Map,
  LandPlot,
  Flame

} from "lucide-react";

import {  FiSettings } from "react-icons/fi";
import { useTheme } from "@/components/themeprovider";

export default function Navbar({ onMenuClick }: { onMenuClick?: () => void }) {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
 
  // const toggleTheme = () => setIsDark(!isDark);

  const menuItems =  [
  { title: "Overview", url: "/", icon: LayoutDashboard },

  {
    title: "Cab",
    dropdown: true,
    icon: Car,
    children: [
      { title: "Services", url: "/cab/services" },
      { title: "Vehicles", url: "/cab/vehicles" },
    ],
  },
    {
    title: "Rides",
    dropdown: true,
    icon: Map,
    children: [
      { title: "All Rides", url: "/rides/all-rides" },
      { title: "All Rides Requests", url: "/rides/all-rides-requests" },
      { title: "Scheduled Rides", url: "/rides/scheduled-rides" },
      { title: "Accepted Rides", url: "/rides/accepted-rides" },
      { title: "Arrived Rides", url: "/rides/arrived-rides" },
      // { title: "Started Rides", url: "/riders" },
      { title: "Cancelled Rides", url: "/rides/cancelled-rides" },
      { title: "Completed Rides", url: "/rides/completed-rides" },
    ],
  },
  {
    title: "Dispatcher",
    dropdown: true,
    icon: User,
    children: [
      { title: "All Dispatcher", url: "/dispatcher/all-dispatchers" },
      { title: "Add Dispatcher", url: "/dispatcher/add-dispatcher" },
      { title: "Roles and Permissions", url: "/dispatcher/roles-permissions" },
    ],
  },
  {
    title: "Riders",
    dropdown: true,
    icon: Users,
    children: [
      { title: "All Riders", url: "/riders" },
      { title: "Add Riders", url: "/riders/add-riders" },
    ],
  },
  {
    title: "Drivers",
    dropdown: true,
    icon: CarFront,
    children: [
      { title: "Add Driver", url: "/driver/add-driver" },
      { title: "Drivers Documents", url: "/driver/drivers-documents" },
      { title: "Driver Wallet", url: "/driver/drivers-wallet" },
      { title: "Drivers List", url: "/driver/list" },
      // { title: "Pending Verification", url: "/driver/pending-verification" },
      { title: "Drivers Settings", url: "/driver/settings" },
    ],
  },
  //{ title: "Dispatcher", url: "/dispatcher", icon: Rocket },
  //{ title: "Fleets", url: "/fleets", icon: Building },
  { title: "Zones", url: "/zones", icon: LandPlot },
  { title: "Preference", url: "/preferences", icon: Settings2 },
  { title: "Heat Map", url: "/heatmap", icon: Flame },
  {
    title: "SOS",
    dropdown: true,
    icon: Megaphone,
    children: [
      { title: "SOS", url: "/sos" },
      { title: "Add SOS", url: "/sos/create" },
      { title: "SOS Alerts", url: "/sos-alerts" },
    ],
  },
  {title: "Coupons",icon: ReceiptText,url: "/Coupons"},

  { title: "Surge Price", url: "/surge-price", icon: Tag },
    {
    title: "Push Notification",
    dropdown: true,
    icon: Bell,
    children: [
      { title: "All Push Notification", url: "/push-notification" },
      { title: "Send Push Notification", url: "/push-notification/create" },
    ],
  },
  {
    title: "Book trip",
    dropdown: true,
    icon: CalendarCheck,
    children: [
      { title: "Booking", url: "/book-trip" },
      { title: "Booking History", url: "/book-trip/history" },
    ],
  },


  //{ title: "Orders", url: "/orders", icon: BookOpenText },
  // { title: "Customers", url: "/customers", icon: CircleUser },



  // {
  //   title: "Payout",
  //   dropdown: true,
  //   icon: CircleDollarSign,
  //   children: [
  //     { title: "Payout Methods", url: "/payout/payout-methods" },
  //     { title: "Driver Payout", url: "/payout/driver-payout" },
  //   ],
  // },

  {
    title: "Accounting",
    dropdown: true,
    icon: ChartColumn,
    children: [
      { title: "Admin", url: "/accounting/admin" },
      { title: "Customer", url: "/accounting/customer" },
      { title: "Driver", url: "/accounting/driver" },
    ],
  },

 // { title: "Support", url: "/support", icon: Headphones },

  // {
  //   title: "Management",
  //   dropdown: true,
  //   icon: Settings2,
  //   children: [
  //     { title: "Cancel Reasons", url: "/management/teams" },
  //     { title: "Pricing", url: "/management/roles" },
  //     { title: "Rating Points", url: "/management/reports" },
  //     { title: "Vehicles", url: "/management/reports" },
  //     { title: "Regions", url: "/management/reports" },
  //     { title: "Payment Gateways", url: "/management/reports" },
  //     { title: "SMS Provider", url: "/management/reports" },
  //     { title: "Staffs", url: "/management/reports" },
  //   ],
  // },

  {
    title: "General Settings", dropdown: true, children: [
      { title: "Languages", url: "/general-settings/languages" },
      { title: "Currencies", url: "/general-settings/currencies" },
      { title: "Taxes", url: "/general-settings/taxes" },
      { title: "Payment Methods", url: "/general-settings/payment-method" },
    ], icon: FiSettings
  },
];

  return (
    <>
 <nav className="fixed top-0 left-0 right-0 z-50 bg-white border border-b-1 dark:border-b-gray-600 dark:bg-[#161c24] dark:text-white">
  <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 h-18 sm:h-20 max-w-7xl mx-auto w-full">
    {/* Left Side */}
    <div className="flex items-center gap-3 min-w-0">
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
        className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors flex-shrink-0"
      >
        {mobileMenuOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" />
        ) : (
          <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" />
        )}
      </button>
      <h1 className="hidden lg:block text-2xl font-bold text-gray-800 whitespace-nowrap dark:text-white">Five Stars Galway Taxis</h1>
    </div>

    {/* Right Side */}
    <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
      <ThemeToggleButton />

      <UserDropdown />
    </div>
  </div>
</nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
            onClick={() => setMobileMenuOpen(false)} 
          />
          <div className="fixed top-16 sm:top-20 left-0 right-0 bottom-0 bg-white dark:bg-[#161c24] z-50 lg:hidden overflow-y-auto">
            <div className="p-4 dark:bg-[#161c24]">
              <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-300">Menu</h2>
              <div className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  if (item.dropdown) {
                    return (
                      <details key={item.title} className="group">
                        <summary className="flex items-center justify-between gap-2 cursor-pointer py-3 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                          <span className="flex items-center gap-3 text-base text-gray-800 dark:text-gray-300">
                            <Icon className="text-[16px] flex-shrink-0" />
                            {item.title}
                          </span>
                          <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180 flex-shrink-0" />
                        </summary>
                        <div className="ml-8 mt-2 space-y-1">
                          {item.children && item.children.map((sub) => (
                            <a 
                              key={sub.title} 
                              href={sub.url} 
                              onClick={() => setMobileMenuOpen(false)} 
                              className={pathname === sub.url 
                                ? "block py-2 px-3 rounded-md text-sm text-blue-600 font-semibold bg-blue-50 dark:bg-blue-900 dark:text-blue-300" 
                                : "block py-2 px-3 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors capitalize"
                              }
                            >
                              • {sub.title}
                            </a>
                          ))}
                        </div>
                      </details>
                    );
                  } else {
                    return (
                      <a 
                        key={item.title} 
                        href={item.url} 
                        onClick={() => setMobileMenuOpen(false)} 
                        className={pathname === item.url 
                          ? "flex items-center gap-3 py-3 px-3 rounded-md text-base bg-blue-600 text-white font-medium" 
                          : "flex items-center gap-3 py-3 px-3 rounded-md text-base text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        }
                      >
                        <Icon className="text-[16px] flex-shrink-0" />
                        {item.title}
                      </a>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
