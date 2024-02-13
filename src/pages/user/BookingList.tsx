import DialogReview from "@/components/DialogReview";
import Layout from "@/components/Layout";
import SideBarUser from "@/components/SideBarUser";
import { getBookingCustomer } from "@/utils/apis/user/api";
import { ResBooking } from "@/utils/apis/user/type";
import { formattedAmount } from "@/utils/formattedAmount";
import { useEffect, useState } from "react";

const BookingList = () => {
  const [booking, setBooking] = useState<ResBooking[]>([]);
  console.log(booking);
  const handleButtonETiket = (url: string) => {
    window.open(url, "_blank");
  };

  const fetchBooking = async () => {
    try {
      const result = await getBookingCustomer();
      setBooking(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBooking();
  }, []);

  return (
    <Layout>
      <div className="bg-[#F4F7FE] w-full py-14 min-h-screen">
        <div className="container flex justify-between gap-10">
          <SideBarUser />
          <div className="bg-white w-3/4 rounded-lg shadow-lg px-10 pt-16 pb-32 space-y-8 min-h-screen">
            {booking &&
              booking.map((item, index) => (
                <div className="flex flex-col items-center space-y-8" key={index}>
                  <div className="border-2 border-slate-300 rounded-lg w-full px-8 py-2 pb-8 space-y-3">
                    <p className="font-bold border-b border-slate-300 pb-4">
                      Booking ID: {item.id.toUpperCase()}
                    </p>
                    <div className="flex justify-between items-center pb-3">
                      <div className="flex-col space-y-4">
                        <p>{item.tour.tour_name}</p>
                        <p className="text-lg font-bold">{formattedAmount(item.gross_amount)}</p>
                      </div>
                      <div className="flex gap-3">
                        {item.status === "settlement" && (
                          <>
                            <button
                              onClick={() => handleButtonETiket("/etiket")}
                              className="bg-slate-200 text-black font-semibold w-32 py-2 rounded-lg mt-3 border border-slate-300 shadow-inner shadow-white"
                            >
                              E-Ticket
                            </button>
                            <DialogReview />
                          </>
                        )}
                      </div>
                    </div>
                    <button
                      className={`${
                        item.status === "settlement" ? "bg-green-600" : "bg-blue-500"
                      } text-white font-semibold w-full py-2 rounded-lg mt-3 `}
                    >
                      {item.status === "settlement" ? "Paid" : "Continue to Payment"}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookingList;
