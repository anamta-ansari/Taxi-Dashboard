"use client";

import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

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
  Tag,
  ReceiptText,
  Send,
  CarFront,
  Bell,
  CalendarCheck,
  Users,
  Flame

} from "lucide-react";

import { FiChevronDown, FiSettings } from "react-icons/fi";

const items =  [
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
export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="lg:fixed bg-white dark:!bg-[#161c24]  lg:top-20 lg:left-0 lg:h-[calc(100vh-5rem)] lg:w-65 w-full  shadow-none lg:shadow ">
      <SidebarHeader />

      <SidebarContent className="[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full dark:[&::-webkit-scrollbar-thumb]:bg-[#161c24] dark:[&::-webkit-scrollbar-thumb]:border dark:[&::-webkit-scrollbar-thumb]:border-gray-500">
        <SidebarGroup>
          {/* <SidebarGroupLabel className="text-[18px] ml-3 mb-8 font-normal dark:text-white">
            Better Taxi
          </SidebarGroupLabel> */}

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {/* DROPDOWN MENU */}
                  {item.dropdown ? (
                    <details className="group mb-2">
                      <summary className="flex items-center justify-between gap-2 cursor-pointer py-2 px-2 rounded-md hover:text-blue-800">
                        <span className="flex items-center gap-2 text-[14px] text-gray-500 dark:text-white">
                          <item.icon className="w-4 h-4 dark:text-white" />
                          {item.title}
                        </span>
                        <FiChevronDown className="transition-transform group-open:rotate-180" />
                      </summary>

                      {/* CHILD LINKS */}
                      <div className="ml-6 mt-1">
                        <ul className="space-y-2">
                          {item.children.map((sub) => {
                            const active = pathname === sub.url;
                            return (
                              <li key={sub.title}>
                                <a
                                  href={sub.url}
                                  className={`block px-2 py-1 rounded-md text-[15px]
                                    ${active
                                      ? "bg-blue-600 !bg-blue-600 text-white !text-white font-medium dark:text-white" // Force blue background and white text to remain on hover for active items
                                      : "text-gray-500 hover:text-blue-700 dark:text-white"
                                    }
                                  `}
                                >
                                  {sub.title}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </details>
                  ) : (
                    /* NORMAL SIDEBAR ITEM (NO DROPDOWN) */
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className={`flex items-center gap-2 px-2 py-2 rounded-md transition-colors
                          ${pathname === item.url
                            ? "bg-blue-600 !bg-blue-600 text-white !text-white dark:text-white" // Force blue background and white text to remain on hover for active items
                            : "text-gray-500 hover:text-blue-700 dark:text-white"
                          }
                        `}
                      >
                        <item.icon
                          className={`w-4 h-4 dark:text-white ${pathname === item.url ? "text-white" : "text-gray-500"
                            }`}
                        />

                        <span
                          className={`text-[14px] dark:text-white ${pathname === item.url ? "text-white" : "text-gray-500"
                            }`}
                        >
                          {item.title}
                        </span>
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}
