"use client"
import Image from "next/image";
import { ArrowRight, Car, ClipboardCheck, User, Map, Menu, SquareMenu, CircleUser, UserRoundCheck, UserRoundX, Users, X, Ban, StepBack, Route, Backpack, BaggageClaim } from "lucide-react";
import OrdersTable from "./Components/OrdersTable";
import ActivityList from "./Components/ActivityList";

export default function Home() {
  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US");//, options);
  const customers = [
    { rank: 1, name: "sabastian Coke", amount: "$1,204,250.88", isTop3: true },
    { rank: 2, name: "Customer 2", amount: "$160,630.94", isTop3: true },
    { rank: 3, name: "João savo", amount: "$98,851.95", isTop3: true },
    { rank: 4, name: "Tarek Mesalam", amount: "$30,237.51", isTop3: false },
    { rank: 5, name: "John Smith", amount: "$24,322.61", isTop3: false },
    { rank: 6, name: "BWS Group", amount: "$19,712.93", isTop3: false },
    { rank: 7, name: "Mateus Oliveira", amount: "$16,658.64", isTop3: false },
    { rank: 8, name: "Fatih TAMER", amount: "$15,098.45", isTop3: false },
  ];

  const drivers = [
    { rank: 1, name: "sabastian Coke", amount: "$1,204,250.88", isTop3: true },
    { rank: 2, name: "Customer 2", amount: "$160,630.94", isTop3: true },
    { rank: 3, name: "João savo", amount: "$98,851.95", isTop3: true },
    { rank: 4, name: "Tarek Mesalam", amount: "$30,237.51", isTop3: false },
    { rank: 5, name: "John Smith", amount: "$24,322.61", isTop3: false },
    { rank: 6, name: "BWS Group", amount: "$19,712.93", isTop3: false },
    { rank: 7, name: "Mateus Oliveira", amount: "$16,658.64", isTop3: false },
    { rank: 8, name: "Fatih TAMER", amount: "$15,098.45", isTop3: false },
  ];

  return (
    <main className="dark:bg-[#161c24]  pl-2 bg-gray-50">
      {/* <h1 className="text-[32px] font-bold -mt-5">Home</h1> */}
      {/* <p className="text-[16px] pt-2 mb-8"><span className="text-gray-500">Today is  </span> {formattedDate}</p> */}



      {/* ================================first row start here================================================ */}
      <div className="flex flex-col pt-5">
        <h1 className="text-[20px] font-bold pl-5">General</h1>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-2 ">
          {/* card 1 =================================================*/}
          <div className=" bg-white dark:bg-[#161c24] dark:border-gray-600 border h-35 rounded-2xl p-4 relative overflow-hidden shadow-md">
            <div
              className=""
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Content */}
            <div>
              <p className="text-indigo-600 bg-indigo-100 py-1 px-2 inline-block font-medium text-sm mb-2 rounded">
                Total Rides.
              </p>

              <h2 className="text-2xl font-bold text-gray-900">167</h2>
            </div>

            {/* Icon touching bottom */}
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-indigo-600  rounded-full flex items-center justify-center shadow-lg">
              {/* Ping border */}
              <div
                className="absolute inset-0 rounded-full border-20 border-indigo-300 animate-ping"
                style={{ animationDuration: "2s" }}
              ></div>

              <Car className="w-5 h-5 text-white relative z-10" />
            </div>
          </div>

          {/* card 2 ===================================================================*/}
          <div className=" bg-white h-35 dark:bg-[#161c24] dark:border-gray-600 border rounded-2xl p-4 relative overflow-hidden shadow-md">
            <div
              className=""
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Content */}
            <div>
              <p className="text-cyan-600 bg-cyan-100 py-1 px-2 inline-block font-medium text-sm mb-2 rounded">
                Total Services Zone
              </p>

              <h2 className="text-2xl font-bold text-gray-900">167</h2>
            </div>

            {/* Icon touching bottom */}
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg">
              {/* Ping border */}
              <div
                className="absolute inset-0 rounded-full border-20 border-cyan-300 animate-ping"
                style={{ animationDuration: "2s" }}
              ></div>

              <Map className="w-5 h-5 text-white relative z-10" />
            </div>
          </div>

          {/* card 3 =======================================================*/}
          <div className=" bg-white h-35 dark:bg-[#161c24] dark:border-gray-600 border rounded-2xl p-4 relative overflow-hidden shadow-md">
            <div
              className=""
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Content */}
            <div>
              <p className="text-amber-600 bg-amber-100 py-1 px-2 inline-block font-medium text-sm mb-2 rounded">
                Total Vehicles
              </p>

              <h2 className="text-2xl font-bold text-gray-900">167</h2>
            </div>

            {/* Icon touching bottom */}
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
              {/* Ping border */}
              <div
                className="absolute inset-0 rounded-full border-20 border-amber-300 animate-ping"
                style={{ animationDuration: "2s" }}
              ></div>

              <Menu className="w-5 h-5 text-white relative z-10" />
            </div>
          </div>

          {/* card 4 */}
          <div className=" bg-white h-35 dark:bg-[#161c24] dark:border-gray-600 border rounded-2xl p-4 relative overflow-hidden shadow-md">
            <div
              className=""
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Content */}
            <div>
              <p className="text-teal-600 bg-teal-100 py-1 px-2 inline-block font-medium text-sm mb-2 rounded">
                Total Payment Methods
              </p>

              <h2 className="text-2xl font-bold text-gray-900">167</h2>
            </div>

            {/* Icon touching bottom */}
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center shadow-lg">
              {/* Ping border */}
              <div
                className="absolute inset-0 rounded-full border-20 border-teal-300 animate-ping"
                style={{ animationDuration: "2s" }}
              ></div>


              <SquareMenu className="w-5 h-5 text-white relative z-10" />
            </div>
          </div>
        </div>
      </div>
      {/* ================================first row ends here================================================ */}

      {/* =====================================second row start here================================================ */}
      <div className="flex flex-col pt-5">
        <h1 className="text-[20px] font-bold pl-5">Drivers</h1>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-2 ">
          {/* card 1 */}
          <div className=" bg-white h-35 dark:bg-[#161c24] dark:border-gray-600 border rounded-2xl p-4 relative overflow-hidden shadow-md">
            <div
              className=""
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Content */}
            <div>
              <p className="text-indigo-600 bg-indigo-100 py-1 px-2 inline-block font-medium text-sm mb-2 rounded">
                Total Drivers
              </p>

              <h2 className="text-2xl font-bold text-gray-900">167</h2>
            </div>

            {/* Icon touching bottom */}
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-indigo-600  rounded-full flex items-center justify-center shadow-lg">
              {/* Ping border */}
              <div
                className="absolute inset-0 rounded-full border-20 border-indigo-300 animate-ping"
                style={{ animationDuration: "2s" }}
              ></div>

              <User className="w-5 h-5 text-white relative z-10" />
            </div>
          </div>

          {/* card 2 */}
          <div className=" bg-white h-35 dark:bg-[#161c24] dark:border-gray-600 border  rounded-2xl p-4 relative overflow-hidden shadow-md">
            <div
              className=""
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Content */}
            <div>
              <p className="text-cyan-600 bg-cyan-100 py-1 px-2 inline-block font-medium text-sm mb-2 rounded">
                Active Drivers
              </p>

              <h2 className="text-2xl font-bold text-gray-900">167</h2>
            </div>

            {/* Icon touching bottom */}
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg">
              {/* Ping border */}
              <div
                className="absolute inset-0 rounded-full border-20 border-cyan-300 animate-ping"
                style={{ animationDuration: "2s" }}
              ></div>

              <CircleUser className="w-5 h-5 text-white relative z-10" />
            </div>
          </div>

          {/* card 3 */}
          <div className=" bg-white h-35 dark:bg-[#161c24] dark:border-gray-600 border rounded-2xl p-4 relative overflow-hidden shadow-md">
            <div
              className=""
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Content */}
            <div>
              <p className="text-amber-600 bg-amber-100 py-1 px-2 inline-block font-medium text-sm mb-2 rounded">
                Verified Drivers
              </p>

              <h2 className="text-2xl font-bold text-gray-900">167</h2>
            </div>

            {/* Icon touching bottom */}
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
              {/* Ping border */}
              <div
                className="absolute inset-0 rounded-full border-20 border-amber-300 animate-ping"
                style={{ animationDuration: "2s" }}
              ></div>


              <UserRoundCheck className="w-5 h-5 text-white relative z-10" />
            </div>
          </div>

          {/* card 4 */}
          <div className=" bg-white h-35 dark:bg-[#161c24] dark:border-gray-600 border rounded-2xl p-4 relative overflow-hidden shadow-md">
            <div
              className=""
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Content */}
            <div>
              <p className="text-teal-600 bg-teal-100 py-1 px-2 inline-block font-medium text-sm mb-2 rounded">
                Deactive Drivers
              </p>

              <h2 className="text-2xl font-bold text-gray-900">167</h2>
            </div>

            {/* Icon touching bottom */}
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center shadow-lg">
              {/* Ping border */}
              <div
                className="absolute inset-0 rounded-full border-20 border-teal-300 animate-ping"
                style={{ animationDuration: "2s" }}
              ></div>


              <UserRoundX className="w-5 h-5 text-white relative z-10" />
            </div>
          </div>
        </div>
      </div>
      {/* ================================second row ends here================================================ */}

      {/* ======================================third row start here================================================ */}
      <div className="flex flex-col pt-5">
        <h1 className="text-[20px] font-bold pl-5">Customers</h1>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-2 ">
          {/* card 1 */}
          <div className=" bg-white h-35 dark:bg-[#161c24] dark:border-gray-600 border rounded-2xl p-4 relative overflow-hidden shadow-md">
            <div
              className=""
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Content */}
            <div>
              <p className="text-indigo-600 bg-indigo-100 py-1 px-2 inline-block font-medium text-sm mb-2 rounded">
                Total Customers
              </p>

              <h2 className="text-2xl font-bold text-gray-900">167</h2>
            </div>

            {/* Icon touching bottom */}
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-indigo-600  rounded-full flex items-center justify-center shadow-lg">
              {/* Ping border */}
              <div
                className="absolute inset-0 rounded-full border-20 border-indigo-300 animate-ping"
                style={{ animationDuration: "2s" }}
              ></div>

              <Users className="w-5 h-5 text-white relative z-10" />
            </div>
          </div>

          {/* card 2 */}
          <div className=" bg-white h-35  dark:bg-[#161c24] dark:border-gray-600 border rounded-2xl p-4 relative overflow-hidden shadow-md">
            <div
              className=""
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Content */}
            <div>
              <p className="text-cyan-600 bg-cyan-100 py-1 px-2 inline-block font-medium text-sm mb-2 rounded">
                Active Customers
              </p>

              <h2 className="text-2xl font-bold text-gray-900">167</h2>
            </div>

            {/* Icon touching bottom */}
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg">
              {/* Ping border */}
              <div
                className="absolute inset-0 rounded-full border-20 border-cyan-300 animate-ping"
                style={{ animationDuration: "2s" }}
              ></div>

              <UserRoundCheck className="w-5 h-5 text-white relative z-10" />
            </div>
          </div>

          {/* card 3 */}
          <div className=" bg-white h-35 dark:bg-[#161c24] dark:border-gray-600 border rounded-2xl p-4 relative overflow-hidden shadow-md">
            <div
              className=""
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Content */}
            <div>
              <p className="text-amber-600 bg-amber-100 py-1 px-2 inline-block font-medium text-sm mb-2 rounded">
                Deactive Customers
              </p>

              <h2 className="text-2xl font-bold text-gray-900">167</h2>
            </div>

            {/* Icon touching bottom */}
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
              {/* Ping border */}
              <div
                className="absolute inset-0 rounded-full border-20 border-amber-300 animate-ping"
                style={{ animationDuration: "2s" }}
              ></div>

              <UserRoundX className="w-5 h-5 text-white relative z-10" />
            </div>
          </div>

          {/* card 4 */}
          <div className=" bg-white h-35 dark:bg-[#161c24] dark:border-gray-600 border rounded-2xl p-4 relative overflow-hidden shadow-md">
            <div
              className=""
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Content */}
            <div>
              <p className="text-teal-600 bg-teal-100 py-1 px-2 inline-block font-medium text-sm mb-2 rounded">
                Unverified Drivers
              </p>

              <h2 className="text-2xl font-bold text-gray-900">167</h2>
            </div>

            {/* Icon touching bottom */}
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center shadow-lg">
              {/* Ping border */}
              <div
                className="absolute inset-0 rounded-full border-20 border-teal-300 animate-ping"
                style={{ animationDuration: "2s" }}
              ></div>


              <X className="w-5 h-5 text-white relative z-10" />
            </div>
          </div>
        </div>
      </div>
      {/* ================================third row ends here================================================ */}


      {/* ================================fourth row start here================================================ */}
      <div className="flex flex-col pt-5">
        <h1 className="text-[20px] font-bold pl-5">Booking Services Status</h1>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-2 ">
          {/* card 1 */}
          <div className=" bg-white h-35 dark:bg-[#161c24] dark:border-gray-600 border rounded-2xl p-4 relative overflow-hidden shadow-md">
            <div
              className=""
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Content */}
            <div>
              <p className="text-indigo-600 bg-indigo-100 py-1 px-2 inline-block font-medium text-sm mb-2 rounded">
                Total Completed rides
              </p>

              <h2 className="text-2xl font-bold text-gray-900">167</h2>
            </div>

            {/* Icon touching bottom */}
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-indigo-600  rounded-full flex items-center justify-center shadow-lg">
              {/* Ping border */}
              <div
                className="absolute inset-0 rounded-full border-20 border-indigo-300 animate-ping"
                style={{ animationDuration: "2s" }}
              ></div>


              <Route className="w-5 h-5 text-white relative z-10" />
            </div>
          </div>

          {/* card 2 */}
          <div className=" bg-white h-35  dark:bg-[#161c24] dark:border-gray-600 border rounded-2xl p-4 relative overflow-hidden shadow-md">
            <div
              className=""
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Content */}
            <div>
              <p className="text-cyan-600 bg-cyan-100 py-1 px-2 inline-block font-medium text-sm mb-2 rounded">
                Total Start Rides
              </p>

              <h2 className="text-2xl font-bold text-gray-900">167</h2>
            </div>

            {/* Icon touching bottom */}
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg">
              {/* Ping border */}
              <div
                className="absolute inset-0 rounded-full border-20 border-cyan-300 animate-ping"
                style={{ animationDuration: "2s" }}
              ></div>


              <Backpack className="w-5 h-5 text-white relative z-10" />
            </div>
          </div>

          {/* card 3 */}
          <div className=" bg-white h-35 dark:bg-[#161c24] dark:border-gray-600 border rounded-2xl p-4 relative overflow-hidden shadow-md">
            <div
              className=""
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Content */}
            <div>
              <p className="text-amber-600 bg-amber-100 py-1 px-2 inline-block font-medium text-sm mb-2 rounded">
                Total End Rides.
              </p>

              <h2 className="text-2xl font-bold text-gray-900">167</h2>
            </div>

            {/* Icon touching bottom */}
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
              {/* Ping border */}
              <div
                className="absolute inset-0 rounded-full border-20 border-amber-300 animate-ping"
                style={{ animationDuration: "2s" }}
              ></div>


              <BaggageClaim className="w-5 h-5 text-white relative z-10" />
            </div>
          </div>

          {/* card 4 */}
          <div className=" bg-white h-35  dark:bg-[#161c24] dark:border-gray-600 border rounded-2xl p-4 relative overflow-hidden shadow-md">
            <div
              className=""
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Content */}
            <div>
              <p className="text-teal-600 bg-teal-100 py-1 px-2 inline-block font-medium text-sm mb-2 rounded">
                Total Cancel Rides.
              </p>

              <h2 className="text-2xl font-bold text-gray-900">167</h2>
            </div>

            {/* Icon touching bottom */}
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center shadow-lg">
              {/* Ping border */}
              <div
                className="absolute inset-0 rounded-full border-20 border-teal-300 animate-ping"
                style={{ animationDuration: "2s" }}
              ></div>


              <Ban className="w-5 h-5 text-white relative z-10" />
            </div>
          </div>
        </div>
      </div>
      {/* ================================fourth row ends here================================================ */}


      


      {/* active orders starts here */}
      <div className=" dark:bg-[#161c24] dark:border-gray-600 border mt-5 ">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 py-3 px-3">
          <div>
            <p className="text-sm sm:text-base font-medium text-gray-800 dark:text-white">
              Active Orders
              <span className="bg-blue-600  text-white px-2 sm:px-3 py-1 ml-2 rounded text-xs sm:text-sm font-semibold">
                46028
              </span>
            </p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <button className="text-blue-600 bg-white dark:bg-[#161c24] dark:border-gray-600 border border-gray-400 hover:bg-blue-50 rounded text-sm sm:text-base py-2 sm:py-3 px-3 sm:px-4 transition-colors whitespace-nowrap">
              Dispatch A Trip
            </button>
            <button className="bg-white dark:bg-[#161c24] dark:border-gray-600 border border-gray-400 hover:bg-gray-50 rounded text-sm sm:text-base py-2 sm:py-3 px-3 sm:px-4 transition-colors whitespace-nowrap">
              View All
            </button>
          </div>
        </div>

        {/* Table Container with Horizontal Scroll */}
        <div className="bg-white dark:bg-[#161c24] dark:border-gray-600  rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <OrdersTable />
            </div>
          </div>
        </div>
      </div>
      {/* active orders ends here */}

      {/* pending section starts here */}
      <div className="flex flex-col md:flex-row gap-4 sm:gap-5 pt-12 sm:pt-16 md:pt-20">
        {/* Pending Drivers Card */}
        {/* <div className="bg-white w-full md:w-1/2 rounded-2xl shadow-sm min-h-[350px] sm:min-h-[400px] overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 sm:px-5 pt-4 sm:pt-5">
            <p className="text-sm sm:text-base font-semibold text-gray-800">
              Pending Drivers
              <span className="bg-blue-600 text-white px-2 py-1 ml-2 rounded text-xs sm:text-sm font-semibold inline-block whitespace-nowrap">
                0 Unverified
              </span>
            </p>
            <button className="self-start sm:self-auto border border-gray-400 hover:bg-gray-50 rounded text-sm sm:text-base py-2 px-3 transition-colors whitespace-nowrap">
              View All
            </button>
          </div>
          <div className="flex justify-center items-center mt-6 sm:mt-8 px-4">
            <Image
              src="/assets/4041.png"
              width={300}
              height={300}
              alt="No pending drivers"
              className="w-full max-w-[250px] sm:max-w-[300px] h-auto"
            />
          </div>
        </div> */}

        {/* Pending Support Requests Card */}
        <div className="bg-white w-full dark:bg-[#161c24] dark:border-gray-600 border dark:text-gray-300 rounded-2xl shadow-sm min-h-[350px] sm:min-h-[400px] overflow-hidden flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 sm:px-5 pt-4 sm:pt-5 pb-3 sm:pb-4 border-b border-gray-100">
            <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-300">
              Pending Support Requests
              <span className="bg-blue-600 text-white px-2 py-1 ml-2 rounded text-xs sm:text-sm font-semibold inline-block whitespace-nowrap">
                378 Unresolved
              </span>
            </p>
            <button className="self-start sm:self-auto border border-gray-400 hover:bg-gray-50 rounded text-sm sm:text-base py-2 px-3 transition-colors whitespace-nowrap">
              View All
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 sm:px-5 py-3 sm:py-4">
            <ActivityList />
          </div>
        </div>
      </div>
      {/* pending section ends here */}


      {/* last section starts from here */}
      <div className="flex flex-col md:flex-row gap-4 sm:gap-5 mt-12 sm:mt-16 md:mt-20">
        {/* spending customer section */}
        <div className="bg-white dark:bg-[#161c24] dark:border-gray-600  rounded-2xl shadow-sm border p-4 sm:p-5 w-full md:w-1/2 overflow-hidden">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-300">Top spending customers</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 dark:text-gray-300">Top 10 highest spending customers</p>
          </div>

          {/* Top 3 */}
          <div className="flex justify-center items-end gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
            {/* 2nd Place */}
            <div className="flex flex-col items-center">
              <span className="text-xs sm:text-sm text-gray-500 mb-2">2nd</span>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </div>
              <div className="text-xs sm:text-sm text-center max-w-[80px] truncate">{customers[1].name}</div>
              <div className="text-xs sm:text-sm font-semibold mt-1">{customers[1].amount}</div>
            </div>

            {/* 1st Place */}
            <div className="flex flex-col items-center -mt-4">
              <span className="text-xs sm:text-sm text-yellow-600 mb-2 font-semibold">1st</span>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-600 rounded-full flex items-center justify-center mb-2 ring-4 ring-yellow-400/30">
                <User className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-xs sm:text-sm text-center max-w-[80px] truncate font-medium">{customers[0].name}</div>
              <div className="text-xs sm:text-sm font-semibold mt-1">{customers[0].amount}</div>
            </div>

            {/* 3rd Place */}
            <div className="flex flex-col items-center">
              <span className="text-xs sm:text-sm text-gray-500 mb-2">3rd</span>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </div>
              <div className="text-xs sm:text-sm text-center max-w-[80px] truncate">{customers[2].name}</div>
              <div className="text-xs sm:text-sm font-semibold mt-1">{customers[2].amount}</div>
            </div>
          </div>

          {/* Rest - 5 rows visible */}
          <div className="overflow-y-auto max-h-[280px] sm:max-h-[320px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {customers.slice(3).map((c) => (
              <div key={c.rank} className="flex items-center gap-3 sm:gap-4 py-2.5 sm:py-3 border-b last:border-b-0  transition-colors">
                <span className="text-gray-500 text-xs sm:text-sm w-5 sm:w-6 flex-shrink-0">{c.rank}</span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" />
                </div>
                <span className="text-xs sm:text-sm flex-1 truncate">{c.name}</span>
                <span className="text-xs sm:text-sm font-semibold flex-shrink-0">{c.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* spending drivers section */}
        <div className="bg-white dark:bg-[#161c24] dark:border-gray-600 border rounded-2xl shadow-sm border p-4 sm:p-5 w-full md:w-1/2 overflow-hidden">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-300">Top earning drivers</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 dark:text-gray-300">Top 10 highest earning drivers</p>
          </div>

          {/* Top 3 */}
          <div className="flex justify-center items-end gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
            {/* 2nd Place */}
            <div className="flex flex-col items-center">
              <span className="text-xs sm:text-sm text-gray-500 mb-2">2nd</span>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </div>
              <div className="text-xs sm:text-sm text-center max-w-[80px] truncate">{drivers[1].name}</div>
            </div>

            {/* 1st Place */}
            <div className="flex flex-col items-center -mt-4">
              <span className="text-xs sm:text-sm text-yellow-600 mb-2 font-semibold">1st</span>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-600 rounded-full flex items-center justify-center mb-2 ring-4 ring-yellow-400/30">
                <User className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-xs sm:text-sm text-center max-w-[80px] truncate font-medium">{drivers[0].name}</div>
            </div>

            {/* 3rd Place */}
            <div className="flex flex-col items-center">
              <span className="text-xs sm:text-sm text-gray-500 mb-2">3rd</span>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </div>
              <div className="text-xs sm:text-sm text-center max-w-[80px] truncate">{drivers[2].name}</div>
            </div>
          </div>

          {/* Rest - 5 rows visible */}
          <div className="overflow-y-auto max-h-[280px] sm:max-h-[320px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {drivers.slice(3).map((d) => (
              <div key={d.rank} className="flex items-center gap-3 sm:gap-4 py-2.5 sm:py-3 border-b last:border-b-0  transition-colors">
                <span className="text-gray-500 text-xs sm:text-sm w-5 sm:w-6 flex-shrink-0">{d.rank}</span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" />
                </div>
                <span className="text-xs sm:text-sm flex-1 truncate">{d.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* last section ends here */}



    </main>
  );
}
