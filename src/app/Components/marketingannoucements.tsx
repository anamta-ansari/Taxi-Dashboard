export default function Annoucements(){
    return(
        <>
        <div>
            <h1 className="text-[28px] font-semibold">Annoucements</h1>
        <p className="text-[14px] text-gray-500 mb-8">Send annoucements to user </p>

        <div className="">
  <table className="w-full border border-gray-300 text-left">
    <thead>
      <tr className="bg-gray-100">
        <th className="border px-4 py-3">Name</th>
        <th className="border px-4 py-3">Targeted App</th>
        <th className="border px-4 py-3">Date & Time</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-4 py-3">Hello</td>
        <td className="border px-4 py-3 ">Taxi Driver</td>
        <td className="border px-4 py-3">10 sep - 17 Sep</td>
      </tr>
      <tr>
        <td className="border px-4 py-3">Holiday Offer</td>
        <td className="border px-4 py-3">Shop</td>
        <td className="border px-4 py-3">20 Jul - 31 Dec</td>
      </tr>
      <tr>
        <td className="border px-4 py-3">Special Drink</td>
        <td className="border px-4 py-3">Shop</td>
        <td className="border px-4 py-3">20 Jul - 20 Jul</td>
      </tr>
      <tr>
        <td className="border px-4 py-3">Super Delicious</td>
        <td className="border px-4 py-3">Shop</td>
        <td className="border px-4 py-3">20 Jul - 20 Jul</td>
      </tr>
      
    </tbody>
  </table>
</div>

        </div>
        </>
    )
}