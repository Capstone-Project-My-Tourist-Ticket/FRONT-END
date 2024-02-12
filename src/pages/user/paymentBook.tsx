import DialogVoucher from "@/components/DialogVoucher";
import Layout from "@/components/Layout";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const PaymentBook = () => {
  return (
    <Layout>
      <div className="bg-[#F4F7FE] w-full py-10">
        <div className="container flex flex-col space-y-4">
          <p className="font-bold text-lg">Payment Details</p>
          <p>
            Fill in this form correctly , We'll send the e-ticket to the email address as declairded
            on this page
          </p>
          <div className="flex justify-between gap-10">
            <div className="flex flex-col w-2/3 bg-white space-y-3">
              <div className="rounded-lg shadow-lg">
                <div className="flex flex-col space-y-8 p-8">
                  <RadioGroup defaultValue="Mr" className="flex gap-10">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Mr" id="Mr" />
                      <Label htmlFor="" className="font-semibold">
                        Mr
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Mrs" id="Mrs" />
                      <Label htmlFor="" className="font-semibold">
                        Mrs
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Ms" id="Ms" />
                      <Label htmlFor="" className="font-semibold">
                        Mrs
                      </Label>
                    </div>
                  </RadioGroup>
                  <div className="flex flex-col space-y-5 border-b pb-10">
                    <input
                      type="text"
                      placeholder="FullName"
                      className="border px-5 py-2 outline-none w-full rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="PhoneNumber"
                      className="border px-5 py-2 outline-none w-full rounded-md"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="border px-5 py-2 outline-none w-full rounded-md"
                    />
                  </div>
                  <div className="space-y-8">
                    <p className="font-bold text-lg">Payment Method</p>
                    <RadioGroup defaultValue="bca" className="space-y-8">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bca" id="bca" />
                        <Label htmlFor="" className="font-semibold">
                          <div className="flex gap-3 items-center">
                            <img
                              className="h-5 w-14"
                              src="https://res.cloudinary.com/dypeyso0m/image/upload/v1703677027/bca_u8s8de.png"
                            />
                            <p className="">BCA Virtual Account</p>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bni" id="bni" />
                        <Label htmlFor="" className="font-semibold">
                          <div className="flex gap-3 items-center">
                            <img
                              className="h-4 w-14"
                              src="https://res.cloudinary.com/dypeyso0m/image/upload/v1703677155/647bf1a6c87148864bbb4cd44130da36_bl9g38.png"
                            />
                            <p className="">BNI Virtual Account</p>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bri" id="bri" />
                        <Label htmlFor="" className="font-semibold">
                          <div className="flex gap-3 items-center">
                            <img
                              className="h-4 w-14"
                              src="https://res.cloudinary.com/dypeyso0m/image/upload/v1703677142/bri_tjmr7e.png"
                            />
                            <p className="">BRI Virtual Account</p>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
              <div className="rounded-lg shadow-lg">
                <div className="flex flex-col space-y-8 p-8">
                  <div className="flex justify-between">
                    <p>Price</p>
                    <p>Rp.1000</p>
                  </div>
                  <div className="flex justify-between border-b pb-5">
                    <p>Voucher</p>
                    <p>- Rp.2000</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-bold text-lg">Total Payment</p>
                    <p className="font-bold text-lg">Rp.2000</p>
                  </div>
                  <div className="flex justify-end">
                    <button className="bg-blue-500 text-white w-44 py-2 rounded-lg ">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white w-1/3 rounded-lg h-[350px] shadow-lg">
              <div className="flex flex-col space-y-4 p-5">
                <div className="flex gap-4 items-center border-b-2 pb-5">
                  <img
                    src={`https://source.unsplash.com/1200x800/?destination,sea`}
                    className="w-24 h-14"
                  />
                  <p className="font-bold">Ice Age Artic Adventur</p>
                </div>
                <div className="border-b-2 pb-5">
                  <p>Paket Ber 3 - Reguler Ice Age Artic</p>
                  <p>1 Pax</p>
                </div>
                <div className="border-b-2 pb-5">
                  <p className="font-sm text-slate-500">Selected date</p>
                  <p>Thu, 16 Feb 2024</p>
                </div>
                <div className="flex justify-center items-center">
                  <DialogVoucher />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentBook;
