import DialogReview from "@/components/DialogReview";
import Layout from "@/components/Layout";
import SideBarUser from "@/components/SideBarUser";
import { cancelBooking, getBookingCustomer } from "@/utils/apis/user/api";
import { ResBooking } from "@/utils/apis/user/type";
import { formattedAmount } from "@/utils/formattedAmount";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  const handleCancelOrder = async (id: string) => {
    const isConfirmed = window.confirm("Are you sure you want to cancel?");
    try {
      if (isConfirmed) {
        const result = await cancelBooking(id);
        fetchBooking();
        alert(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
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
                <div
                  className="flex flex-col items-center space-y-8"
                  key={index}
                >
                  <div className="border-2 border-slate-300 rounded-lg w-full px-8 py-2 pb-8 space-y-3">
                    <p className="font-bold border-b border-slate-300 pb-4">
                      Booking ID: {item.id.toUpperCase()}
                    </p>
                    <div className="flex justify-between items-center pb-3">
                      <div className="flex-col space-y-4">
                        <p>{item.tour.tour_name}</p>
                        <p className="text-lg font-bold">
                          {formattedAmount(item.gross_amount)}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        {item.status === "settlement" && (
                          <>
                            <button
                              onClick={() =>
                                handleButtonETiket(`/etiket/${item.id}`)
                              }
                              className="bg-slate-200 text-black font-semibold w-32 py-2 rounded-lg mt-3 border border-slate-300 shadow-inner shadow-white"
                            >
                              E-Ticket
                            </button>
                            <DialogReview booking_id={item.id} />
                          </>
                        )}
                        {item.status === "pending" && (
                          <button
                            onClick={() => handleCancelOrder(item.id)}
                            className="bg-red-500 text-white font-semibold w-32 py-2 rounded-lg mt-3 border border-red-300 shadow-inner shadow-white"
                          >
                            Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    <Link
                      to={
                        item.status === "pending" ? `/payresult/${item.id}` : ``
                      }
                    >
                      <button
                        disabled={item.status !== "pending"}
                        className={`${
                          item.status === "settlement"
                            ? "bg-green-600"
                            : item.status === "cancel"
                            ? "bg-red-200"
                            : item.status === "expire"
                            ? "bg-gray-300"
                            : "bg-blue-500"
                        } text-white font-semibold w-full py-2 rounded-lg mt-3`}
                      >
                        {item.status === "settlement"
                          ? "Paid"
                          : item.status === "cancel"
                          ? "Cancelled"
                          : item.status === "expire"
                          ? "Expired"
                          : "Continue to Payment"}
                      </button>
                    </Link>
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
