import DialogVoucher from "@/components/DialogVoucher";
import Layout from "@/components/Layout";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { createBooking, getListVoucher } from "@/utils/apis/user/api";
import { GetVoucher, IBookingType, bookingSchema } from "@/utils/apis/user/type";
import { formattedAmount } from "@/utils/formattedAmount";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

interface Voucher {
  id: number;
  discount: number;
}

const PaymentBook = () => {
  const { state } = useLocation();
  const currentDate = new Date(state.dates);
  const dateString = currentDate.toDateString();
  const navigate = useNavigate();

  const [voucher, setVoucher] = useState<GetVoucher[]>([]);
  const [selectedVoucher, setSelectedVoucher] = useState<Voucher>();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<IBookingType>({
    resolver: zodResolver(bookingSchema),
  });

  const fetchVoucher = async () => {
    try {
      const result = await getListVoucher();
      setVoucher(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleBooking = async (body: IBookingType) => {
    const payload = {
      ...body,
      tour_id: state.data.id,
      package_id: state.selectedPackage.id,
      voucher_id: selectedVoucher?.id || 0,
      quantity: Number(state.count),
      booking_date: dateString,
    };
    console.log(payload, "payload");
    try {
      const result = await createBooking(payload);

      toast({
        description: result.message,
      });
      navigate(`/payresult/${result.data.booking_id}`);
    } catch (error) {
      toast({
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  };

  const totalPayment = () => {
    const baseTotal = state.selectedPackage.price * state.count;
    const discountedTotal = baseTotal - selectedVoucher!.discount;
    return Math.max(discountedTotal, 0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchVoucher();
  }, []);

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
            <form
              onSubmit={handleSubmit(handleBooking)}
              className="flex flex-col w-2/3 bg-white space-y-3"
            >
              <div className="rounded-lg shadow-lg">
                <div className="flex flex-col space-y-8 p-8">
                  <RadioGroup defaultValue="Mr" className="flex gap-10">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Mr" id="Mr" {...register("greeting")} />
                      <Label htmlFor="Mr" className="font-semibold">
                        Mr
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Mrs" id="Mrs" {...register("greeting")} />
                      <Label htmlFor="Mrs" className="font-semibold">
                        Mrs
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Ms" id="Ms" {...register("greeting")} />
                      <Label htmlFor="Ms" className="font-semibold">
                        Mrs
                      </Label>
                    </div>
                  </RadioGroup>
                  <p className="text-sm text-red-500 ">
                    {errors.greeting && errors.greeting.message}
                  </p>
                  <div className="flex flex-col space-y-5 border-b pb-10">
                    <input
                      type="text"
                      placeholder="FullName"
                      className="border px-5 py-2 outline-none w-full rounded-md"
                      {...register("full_name")}
                    />

                    <input
                      type="text"
                      placeholder="PhoneNumber"
                      className="border px-5 py-2 outline-none w-full rounded-md"
                      {...register("phone_number")}
                    />
                    <p className="text-sm text-red-500 ">
                      {errors.phone_number && errors.phone_number.message}
                    </p>
                    <input
                      type="email"
                      placeholder="Email"
                      className="border px-5 py-2 outline-none w-full rounded-md"
                      {...register("email")}
                    />
                    <p className="text-sm text-red-500 ">{errors.email && errors.email.message}</p>
                  </div>
                  <div className="space-y-8">
                    <p className="font-bold text-lg">Payment Method</p>
                    <RadioGroup defaultValue="bca" className="space-y-8">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bca" id="bca" {...register("bank")} />
                        <Label htmlFor="bca" className="font-semibold">
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
                        <RadioGroupItem value="bni" id="bni" {...register("bank")} />
                        <Label htmlFor="bni" className="font-semibold">
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
                        <RadioGroupItem value="bri" id="bri" {...register("bank")} />
                        <Label htmlFor="bri" className="font-semibold">
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
                    <p className="text-sm text-red-500 ">{errors.bank && errors.bank.message}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg shadow-lg">
                <div className="flex flex-col space-y-8 p-8">
                  <div className="flex justify-between">
                    <p>Price</p>
                    <p className="font-semibold">{formattedAmount(state.selectedPackage.price)}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p className="font-semibold">
                      {formattedAmount(state.selectedPackage.price * state.count)}
                    </p>
                  </div>
                  <div className="flex justify-between border-b pb-5 ">
                    <p className="font-semibold" hidden={selectedVoucher ? false : true}>
                      Voucher
                    </p>
                    <p className="font-semibold" hidden={selectedVoucher ? false : true}>
                      -{formattedAmount(selectedVoucher?.discount!)}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-bold text-lg">Total Payment</p>
                    <p className="font-bold text-lg text-red-500">
                      {selectedVoucher?.discount
                        ? formattedAmount(totalPayment())
                        : formattedAmount(state.selectedPackage.price * state.count)}
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <button className="bg-blue-500 text-white w-44 py-2 rounded-lg">
                      {isSubmitting ? (
                        <p className="flex items-center gap-x-3 text-sm">
                          <Loader2 className={"animate-spin text-xl text-center ml-6"} /> Please
                          wait
                        </p>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="bg-white w-1/3 rounded-lg h-[350px] shadow-lg">
              <div className="flex flex-col space-y-4 p-5">
                <div className="flex gap-4 items-center border-b-2 pb-5">
                  <img src={state.data.image} className="w-24 h-14" />
                  <p className="font-bold">{state.data.tour_name}</p>
                </div>
                <div className="border-b-2 pb-5">
                  <p>{state.selectedPackage.package_name}</p>
                  <p>{state.count} Pax</p>
                </div>
                <div className="border-b-2 pb-5">
                  <p className="font-sm text-slate-500">Selected date</p>
                  <p>{dateString}</p>
                </div>
                <div className="flex justify-center items-center">
                  <DialogVoucher onSelectVoucher={setSelectedVoucher} data={voucher} />
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
