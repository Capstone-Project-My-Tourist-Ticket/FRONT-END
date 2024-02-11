import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PaymentResult = () => {
  return (
    <Layout>
      <div className="bg-[#F4F7FE] w-full py-20">
        <div className="container flex justify-between gap-10">
          <div className="bg-white w-2/3 rounded-lg shadow-lg p-3">
            <div className="flex flex-col space-y-8 p-8">
              <p className="text-lg font-bold">Payment Instructions</p>
              <div className="flex flex-col space-y-4">
                <p className="font-semibold">Transfer to :</p>
                <div className="flex gap-3 items-center">
                  <img
                    className="h-5 w-14"
                    src="https://res.cloudinary.com/dypeyso0m/image/upload/v1703677027/bca_u8s8de.png"
                  />
                  <p className="font-semibold">BCA Virtual Account</p>
                </div>
                <input disabled className="w-full bg-[#F4F7FE] rounded-md py-1"></input>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="font-semibold">Total Payment</p>
                <input disabled className="w-full bg-[#F4F7FE] rounded-md py-1"></input>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="font-semibold">How to Pay</p>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full shadow-lg px-3 rounded-lg border"
                >
                  <AccordionItem value="item-1" className="">
                    <AccordionTrigger className="font-semibold">Transfer via ATM</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-decimal pl-5">
                        <li className="text-slate-500">
                          Input kartu <span className="font-semibold text-slate-600 ">ATM</span> dan
                          <span className="font-semibold text-slate-600 "> PIN</span> Anda
                        </li>
                        <li className="text-slate-500">
                          Pilih Menu
                          <span className="font-semibold text-slate-600 "> Transaksi Lainnya</span>
                        </li>
                        <li className="text-slate-500">
                          Pilih <span className="font-semibold text-slate-600 ">Transfer</span>
                        </li>
                        <li className="text-slate-500">
                          Pilih
                          <span className="font-semibold text-slate-600 ">
                            {" "}
                            Ke Rekening BCA Virtual Account
                          </span>
                        </li>
                        <li className="text-slate-500">
                          Input{" "}
                          <span className="font-semibold text-slate-600 ">
                            Nomor Virtual Account
                          </span>
                          , yaitu
                          <span className="font-semibold text-slate-600 "> 870000999</span>
                        </li>
                        <li className="text-slate-500">
                          Pilih<span className="font-semibold text-slate-600 "> Benar</span>
                        </li>
                        <li className="text-slate-500">
                          Pilih <span className="font-semibold text-slate-600 "> Ya</span>
                        </li>
                        <li className="text-slate-500">Ambil Bukti Bayar Anda</li>
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
                          <span className="font-semibold text-slate-600 "> Internet Banking</span>
                        </li>
                        <li className="text-slate-500">
                          Pilih
                          <span className="font-semibold text-slate-600 "> Transfer Dana</span>
                        </li>
                        <li className="text-slate-500">
                          Pilih{" "}
                          <span className="font-semibold text-slate-600 ">
                            Transfer ke BCA Virtual Account
                          </span>
                        </li>
                        <li className="text-slate-500">
                          Input
                          <span className="font-semibold text-slate-600 ">
                            {" "}
                            Nomor Virtual Account
                          </span>
                          , yaitu
                          <span className="font-semibold text-slate-600 "> 870000999</span>
                        </li>
                        <li className="text-slate-500">
                          Klik<span className="font-semibold text-slate-600 "> Lanjutkan</span>
                        </li>
                        <li className="text-slate-500">
                          Klik <span className="font-semibold text-slate-600 "> Kirim</span>
                        </li>
                        <li className="text-slate-500">Bukti bayar ditampilkan</li>
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
                          <span className="font-semibold text-slate-600 "> Mobile Banking</span>
                        </li>
                        <li className="text-slate-500">
                          Pilih
                          <span className="font-semibold text-slate-600 "> m-Transfer</span>
                        </li>
                        <li className="text-slate-500">
                          Pilih{" "}
                          <span className="font-semibold text-slate-600 ">BCA Virtual Account</span>
                        </li>
                        <li className="text-slate-500">
                          Input
                          <span className="font-semibold text-slate-600 ">
                            {" "}
                            Nomor Virtual Account
                          </span>
                          , yaitu
                          <span className="font-semibold text-slate-600 "> 870000999</span>
                        </li>
                        <li className="text-slate-500">
                          Klik<span className="font-semibold text-slate-600 "> Send</span>
                        </li>
                        <li className="text-slate-500">
                          Informasi
                          <span className="font-semibold text-slate-600 "> Virtual Account </span>
                          akan di tampilkan
                        </li>
                        <li className="text-slate-500">
                          Klik <span className="font-semibold text-slate-600 ">OK</span>
                        </li>
                        <li className="text-slate-500">
                          input <span className="font-semibold text-slate-600 ">PIN </span>Mobile
                          Banking
                        </li>
                        <li className="text-slate-500">Bukti bayar ditampilkan</li>
                        <li className="text-slate-500">Selesai</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="bg-white w-1/4 rounded-lg h-56 shadow-lg">
            <div className="flex flex-col space-y-4 p-5">
              <p className="font-bold">Booking Id: 12300000</p>
              <div className="flex flex-col">
                <p className="font-semibold">Ice Age Artice Adventure</p>
                <p className="font-semibold text-sm text-slate-500">Thu, 14 Feb 2023</p>
              </div>
              <p>Paket Ber3 - Reguler Ice Age</p>
              <p>1 Pax</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentResult;
