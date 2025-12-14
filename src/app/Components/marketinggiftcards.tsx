import Image from "next/image"
export default function Giftcards() {
    return (
        <>
            <div>
                <h1 className="text-[28px] font-semibold">Gift Cards</h1>
                <p className="text-[14px] text-gray-500 mb-8">Create Gift Card batches for marketing campaigns. </p>

                <div className="flex justify-center items-center mt-8">
                            <Image
                              src="/assets/4041.png"
                              width={300}
                              height={300}
                              alt="Car Icon"
                            />
                          </div>
            </div>
        </>
    )
}