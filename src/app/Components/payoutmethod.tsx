

export default function Payoutmethod() {


  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Payout Methods</h1>
        <p className="text-sm text-gray-500">Available payout methods for users.</p>
      </div>


      <div className="bg-white rounded-lg border overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 text-left text-sm text-gray-600 font-normal">Name</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <th className="px-6 py-4 text-left text-sm text-gray-600 font-normal border border-b">Bank transfer</th>
            </tr>
            <tr>
              <th className="px-6 py-4 text-left text-sm text-gray-600 font-normal">💰Stripe Connect</th>
            </tr>


          </tbody>
        </table>

      </div>
    </div>
  );
}