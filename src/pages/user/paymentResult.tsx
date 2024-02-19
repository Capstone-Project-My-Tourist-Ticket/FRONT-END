import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/components/ui/use-toast";
import { getDetailBooking } from "@/utils/apis/user/api";
import { getBookingDetail } from "@/utils/apis/user/type";
import { formattedAmount } from "@/utils/formattedAmount";
import { Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PaymentResult = () => {
  const { toast } = useToast();
  const { booking_id } = useParams();
  const [bookingDetail, setBookingDetail] = useState<getBookingDetail>();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (booking_id) {
      fetchDetailBooking();
    }
  }, [booking_id]);

  const fetchDetailBooking = async () => {
    try {
      const result = await getDetailBooking(booking_id as string);
      setBookingDetail(result.data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(bookingDetail);
  const foto = [
    "https://res.cloudinary.com/dypeyso0m/image/upload/v1703677027/bca_u8s8de.png",
    "https://res.cloudinary.com/dypeyso0m/image/upload/v1703677142/bri_tjmr7e.png",
    "https://res.cloudinary.com/dypeyso0m/image/upload/v1703677155/647bf1a6c87148864bbb4cd44130da36_bl9g38.png",
  ];

  return (
    <Layout>
      <div className="bg-[#F4F7FE] w-full py-20">
        <div className="container flex justify-between gap-10">
          <div className="bg-white w-2/3 rounded-lg shadow-lg p-3">
            {bookingDetail && (
              <div className="flex flex-col space-y-8 p-8">
                <p className="text-lg font-bold">Payment Instructions</p>
                <div className="flex flex-col space-y-4">
                  <p className="font-semibold">Transfer to :</p>
                  <div className="flex gap-3 items-center">
                    <img
                      className="h-5 w-14"
                      src={
                        bookingDetail.bank === "bca"
                          ? foto[0]
                          : bookingDetail.bank === "bri"
                          ? foto[1]
                          : foto[2]
                      }
                    />
                    <p className="font-semibold">
                      {bookingDetail.bank.toUpperCase()} Virtual Account
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      disabled
                      className="w-full bg-[#F4F7FE] rounded-md py-1 px-3 font-bold"
                      value={bookingDetail.va_number}
                    />
                    <Copy
                      onClick={() => {
                        navigator.clipboard.writeText(bookingDetail.va_number);
                        toast({ description: "Copied to clipboard!" });
                      }}
                      className="text-gray-500"
                      size={20}
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <p className="font-semibold">Total Payment</p>
                  <input
                    disabled
                    className="w-full bg-[#F4F7FE] rounded-md py-1 px-3 font-bold"
                    value={formattedAmount(bookingDetail.gross_amount)}
                  />
                </div>
                <div className="flex flex-col space-y-4">
                  <p className="font-semibold">How to Pay</p>
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full shadow-lg px-3 rounded-lg border"
                  >
                    <AccordionItem value="item-1" className="">
                      <AccordionTrigger className="font-semibold">
                        Transfer via ATM
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-decimal pl-5">
                          <li className="text-slate-500">
                            Input kartu{" "}
                            <span className="font-semibold text-slate-600 ">
                              ATM
                            </span>{" "}
                            dan
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              PIN
                            </span>{" "}
                            Anda
                          </li>
                          <li className="text-slate-500">
                            Pilih Menu
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              Transaksi Lainnya
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Pilih{" "}
                            <span className="font-semibold text-slate-600 ">
                              Transfer
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Pilih
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              Ke Rekening {bookingDetail.bank.toUpperCase()}{" "}
                              Virtual Account
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Input{" "}
                            <span className="font-semibold text-slate-600 ">
                              Nomor Virtual Account
                            </span>
                            , yaitu
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              {bookingDetail.va_number}
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Pilih
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              Benar
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Pilih{" "}
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              Ya
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Ambil Bukti Bayar Anda
                          </li>
                          <li className="text-slate-500">Selesai</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="font-semibold">
                        Transfer via Internet Banking
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-decimal pl-5">
                          <li className="text-slate-500">
                            Login
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              Internet Banking
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Pilih
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              Transfer Dana
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Pilih{" "}
                            <span className="font-semibold text-slate-600 ">
                              Transfer ke {bookingDetail.bank.toUpperCase()}{" "}
                              Virtual Account
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Input
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              Nomor Virtual Account
                            </span>
                            , yaitu
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              {bookingDetail.va_number}
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Klik
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              Lanjutkan
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Klik{" "}
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              Kirim
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Bukti bayar ditampilkan
                          </li>
                          <li className="text-slate-500">Selesai</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="font-semibold">
                        Transfer via Mobile Banking
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-decimal pl-5">
                          <li className="text-slate-500">
                            Login
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              Mobile Banking
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Pilih
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              m-Transfer
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Pilih{" "}
                            <span className="font-semibold text-slate-600 ">
                              {bookingDetail.bank.toUpperCase()} Virtual Account
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Input
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              Nomor Virtual Account
                            </span>
                            , yaitu
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              {bookingDetail.va_number}
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Klik
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              Send
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Informasi
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              Virtual Account{" "}
                            </span>
                            akan di tampilkan
                          </li>
                          <li className="text-slate-500">
                            Klik{" "}
                            <span className="font-semibold text-slate-600 ">
                              OK
                            </span>
                          </li>
                          <li className="text-slate-500">
                            input{" "}
                            <span className="font-semibold text-slate-600 ">
                              PIN{" "}
                            </span>
                            Mobile Banking
                          </li>
                          <li className="text-slate-500">
                            Bukti bayar ditampilkan
                          </li>
                          <li className="text-slate-500">Selesai</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <div className="flex justify-end">
                    <Link to={"/bookinglist"}>
                      <button className="bg-blue-500 text-white w-44 py-2 rounded-lg mt-3 ">
                        Booking List
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="bg-white w-1/4 rounded-lg h-[420px] shadow-lg">
            <div className="flex flex-col space-y-3 p-5">
              <img src={bookingDetail?.tour.image} className="h-44" />
              <p className="font-bold">
                Booking Id: {bookingDetail?.booking_id.toUpperCase()}
              </p>
              <div className="flex flex-col">
                <p className="font-semibold">{bookingDetail?.tour.tour_name}</p>
                <p className="font-semibold text-sm text-slate-500">
                  {bookingDetail?.booking_date}
                </p>
              </div>
              <p className="font-semibold">
                {bookingDetail?.package.package_name}
              </p>
              <p className="font-semibold">{bookingDetail?.quantity} Pax</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentResult;
