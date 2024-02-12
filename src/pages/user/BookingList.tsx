import DialogReview from "@/components/DialogReview";
import Layout from "@/components/Layout";
import SideBarUser from "@/components/SideBarUser";

const BookingList = () => {
  const handleButtonETiket = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <Layout>
      <div className="bg-[#F4F7FE] w-full py-14 min-h-screen">
        <div className="container flex justify-between gap-10">
          <SideBarUser />
          <div className="bg-white w-3/4 rounded-lg shadow-lg px-10 pt-16 pb-32 space-y-8">
            <div className="flex flex-col items-center space-y-8">
              <div className="border-2 border-slate-300 rounded-lg w-full px-8 py-2 pb-8 space-y-3">
                <p className="font-bold border-b border-slate-300 pb-4">Booking ID: 2778880</p>
                <div className="flex justify-between items-center pb-3">
                  <div className="flex-col space-y-4">
                    <p>Ice Age Artid Adventure</p>
                    <p className="text-lg font-bold">Rp.10.000</p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleButtonETiket("/etiket")}
                      className="bg-slate-200 text-black font-semibold w-32 py-2 rounded-lg mt-3 border border-slate-300 shadow-inner shadow-white"
                    >
                      E-Ticket
                    </button>
                    <DialogReview />
                  </div>
                </div>
                <button className="bg-green-600 text-white font-semibold w-full py-2 rounded-lg mt-3 ">
                  Paid
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-8">
              <div className="border-2 border-slate-300 rounded-lg w-full px-8 py-2 pb-8 space-y-3">
                <p className="font-bold border-b border-slate-300 pb-4">Booking ID: 2778880</p>
                <div className="flex justify-between items-center pb-3">
                  <div className="flex-col space-y-4">
                    <p>Ice Age Artid Adventure</p>
                    <p className="text-lg font-bold">Rp.10.000</p>
                  </div>
                  <div className="flex gap-3"></div>
                </div>
                <button className="bg-blue-500 text-white font-semibold w-full py-2 rounded-lg mt-3 ">
                  Continue to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookingList;
