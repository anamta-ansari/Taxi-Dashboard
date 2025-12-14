export default function Coupons() {
  return (
    <>
      <div>
        <h1 className="text-[28px] font-semibold">Coupons</h1>
        <p className="text-[14px] text-gray-500 mb-8">List of all campaigns</p>

        <div className="w-full overflow-hidden">


          <div className="overflow-x-auto w-full">

            <table className="w-full min-w-[500px] border-gray-300 text-left">
              <thead>
                <tr className="bg-gray-100">
                  <td className="border-b px-4 py-2 whitespace-nowrap">Name</td>
                  <td className="border-b px-4 py-2 whitespace-nowrap">Status</td>
                  <td className="border-b px-4 py-2 whitespace-nowrap">Batch Size</td>
                  <td className="border-b px-4 py-2 whitespace-nowrap">App Size</td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border-b px-4 py-2 whitespace-nowrap">Christmas Campaign</td>
                  <td className="border-b px-4 py-2 whitespace-nowrap">
                    <span className="text-red-600 bg-red-200 px-1 py-0.5 rounded">❌Expired</span>
                  </td>
                  <td className="border-b px-4 py-2 whitespace-nowrap">10 codes</td>
                  <td className="border-b px-4 py-2 whitespace-nowrap">Taxi</td>
                </tr>

                <tr>
                  <td className="border-b px-4 py-2 whitespace-nowrap">Promotion Oct 2025</td>
                  <td className="border-b px-4 py-2 whitespace-nowrap">
                    <span className="text-green-600 bg-green-200 px-1 py-0.5 rounded">✅Available</span>
                  </td>
                  <td className="border-b px-4 py-2 whitespace-nowrap">100 codes</td>
                  <td className="border-b px-4 py-2 whitespace-nowrap">Taxi</td>
                </tr>
              </tbody>
            </table>

          </div>

        </div>


      </div>
    </>
  )
}


