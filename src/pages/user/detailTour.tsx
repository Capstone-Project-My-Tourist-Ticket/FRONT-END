import Layout from "@/components/Layout";
import { MapPin, MinusCircle, PlusCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ReviewsComp from "@/components/Review";

const DetailTour = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col">
        <img
          src={`https://source.unsplash.com/1200x800/?destination,sea`}
          className="w-full h-[500px]"
        />
        <div className="bg-white p-5 rounded-tl-[80px] rounded-tr-[80px] -translate-y-10"></div>
        <div className="container flex flex-col space-y-4">
          <p className="text-2xl font-semibold">Ice Age Artic Adventure</p>
          <div className="flex gap-2 items-center">
            <MapPin size={15} />
            <p className="text-slate-500">
              Jl. Konoha , RW 10 RT 03, Kelurahan West Blue, Kecamatan East Blue, Lampung Selatan,
              Lampung , Indonesia{" "}
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget velit
            pulvinar convallis. Quisque volutpat metus eu justo congue, in pellentesque nisl
            consequat. Integer eu lectus auctor, varius erat vel, vestibulum nisi. Duis vestibulum
            efficitur bibendum. Vivamus convallis, elit non malesuada vulputate, lacus arcu
            ullamcorper dui, non tristique arcu libero nec neque. Nunc tincidunt tincidunt sem non
            euismod. Nam eu augue non elit tristique tincidunt. Aenean tristique ipsum vel tellus
            consectetur, at varius lacus facilisis. Integer euismod sapien non tortor scelerisque,
            vel luctus risus volutpat.
          </p>
        </div>
        <div className="flex flex-col space-y-8 container">
          <p className="text-2xl font-semibold mt-8">Packages</p>
          <div className="flex justify-between">
            <div className="flex flex-col space-y-3 w-2/4 mb-4">
              <Accordion
                type="single"
                collapsible
                className="w-full bg-white shadow-lg p-5 rounded-lg"
              >
                <AccordionItem value="item-1" className="border-b-0">
                  <AccordionTrigger className="text-xl">Package 1</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-5">
                      <p className=" font-semibold">Includes :</p>
                      <div className="flex flex-col space-y-2 border-b-2 pb-5">
                        <div>- Naik Gajah 1 Puteran</div>
                        <div>- Duel sama Macan sekali</div>
                      </div>
                      <p className=" font-semibold">Visit Event Date</p>
                      <div className="flex gap-4">
                        {Array.from({ length: 7 }, (_, index) => (
                          <div className="flex flex-col border py-2 px-5 rounded-lg items-center">
                            <p>Thu</p>
                            <p>{index} feb</p>
                          </div>
                        ))}
                      </div>
                      <p className=" font-semibold">Ticket Quantity</p>
                      <div className="flex items-center justify-between text-lg font-semibold border p-3 rounded-lg">
                        <p>Package 1</p>
                        <div className="flex items-center gap-10">
                          <p className="text-red-500">Rp.1000</p>
                          <div className="flex items-center justify-center gap-1">
                            <div className="w-8 h-8 rounded-full  text-blue-500 cursor-pointer flex justify-center items-center">
                              <MinusCircle />
                            </div>
                            <div className="w-8 h-8 flex justify-center items-center">1</div>
                            <div className="w-8 h-8 rounded-full text-blue-500 cursor-pointer flex justify-center items-center">
                              <PlusCircle />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p>Total</p>
                          <p className="text-lg font-semibold">Rp.1000</p>
                        </div>
                        <button className="bg-blue-500 text-white px-10 py-2 rounded-lg">
                          Book
                        </button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion
                type="single"
                collapsible
                className="w-full bg-white shadow-lg p-5 rounded-lg"
              >
                <AccordionItem value="item-1" className="border-b-0">
                  <AccordionTrigger className="text-xl">Package 1</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-5">
                      <p className=" font-semibold">Includes :</p>
                      <div className="flex flex-col space-y-2 border-b-2 pb-5">
                        <div>- Naik Gajah 1 Puteran</div>
                        <div>- Duel sama Macan sekali</div>
                      </div>
                      <p className=" font-semibold">Visit Event Date</p>
                      <div className="flex gap-4">
                        {Array.from({ length: 7 }, (_, index) => (
                          <div className="flex flex-col border py-2 px-5 rounded-lg items-center">
                            <p>Thu</p>
                            <p>{index} feb</p>
                          </div>
                        ))}
                      </div>
                      <p className=" font-semibold">Ticket Quantity</p>
                      <div className="flex items-center justify-between text-lg font-semibold border p-3 rounded-lg">
                        <p>Package 1</p>
                        <div className="flex items-center gap-10">
                          <p className="text-red-500">Rp.1000</p>
                          <div className="flex items-center justify-center gap-1">
                            <div className="w-8 h-8 rounded-full  text-blue-500 cursor-pointer flex justify-center items-center">
                              <MinusCircle />
                            </div>
                            <div className="w-8 h-8 flex justify-center items-center">1</div>
                            <div className="w-8 h-8 rounded-full text-blue-500 cursor-pointer flex justify-center items-center">
                              <PlusCircle />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p>Total</p>
                          <p className="text-lg font-semibold">Rp.1000</p>
                        </div>
                        <button className="bg-blue-500 text-white px-10 py-2 rounded-lg">
                          Book
                        </button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="w-1/4">
              <div className="w-full bg-white shadow-lg p-5 rounded-lg">
                <p className="font-semibold">Package 1</p>
              </div>
            </div>
          </div>
          <div className="w-full border-t-2 space-y-4 border-b-2">
            <p className="text-xl font-semibold mt-4">Reviews</p>
            <p className="text-2xl font-semibold">
              4.5 <span className="text-slate-500 text-sm">/5.0 From 4504 Reviews</span>
            </p>
            <ReviewsComp />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailTour;
